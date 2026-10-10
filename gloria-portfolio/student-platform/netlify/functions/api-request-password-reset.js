const crypto = require('crypto')
const db = require('./lib/db')
const fetch = require('node-fetch')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405 }
  try {
    const { email } = JSON.parse(event.body)
    if (!email) return { statusCode: 400, body: 'Missing email' }

    const res = await db.query('SELECT id FROM users WHERE email=$1', [email])
    if (!res.rows.length) return { statusCode: 200, body: 'OK' } // do not reveal user existence

    const token = crypto.randomBytes(20).toString('hex')
    const expires = new Date(Date.now() + 1000 * 60 * 60).toISOString() // 1 hour
    await db.query('UPDATE users SET reset_token=$1, reset_expires=$2 WHERE email=$3', [token, expires, email])

    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5174'}/reset-password?token=${token}`

    // send email using Resend if available, otherwise relay
    try {
      if (process.env.RESEND_API_KEY) {
        await fetch('https://api.resend.com/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || process.env.RESEND_NOTIFY_EMAIL,
            to: [email],
            subject: 'Password reset',
            text: `Reset your password: ${resetUrl}`,
          }),
        })
      } else {
        await fetch(process.env.PORTFOLIO_SEND_EMAIL_URL || 'http://localhost:8888/.netlify/functions/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: email, subject: 'Password reset', text: `Reset: ${resetUrl}` }),
        })
      }
    } catch (err) {
      console.warn('Failed to send reset email', String(err))
    }

    return { statusCode: 200, body: 'OK' }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
