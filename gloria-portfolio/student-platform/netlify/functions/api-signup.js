const fetch = require('node-fetch')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('./lib/db')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405 }
  try {
    const { email, password } = JSON.parse(event.body)
    if (!email || !password) return { statusCode: 400, body: 'Missing fields' }

    // Check existing
    const res = await db.query('SELECT id FROM users WHERE email=$1', [email])
    if (res.rows.length) return { statusCode: 400, body: 'Email already exists' }

    const id = crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(8).toString('hex')
    const password_hash = await bcrypt.hash(password, 10)

    await db.query('INSERT INTO users(id,email,password_hash) VALUES($1,$2,$3)', [id, email, password_hash])

    // Send signup notification: prefer calling Resend directly if key available, otherwise relay to portfolio send-email
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
            to: [process.env.RESEND_NOTIFY_EMAIL],
            subject: 'New student signup',
            text: `New signup: ${email} (id: ${id})`,
          }),
        })
      } else {
        await fetch(process.env.PORTFOLIO_SEND_EMAIL_URL || 'http://localhost:8888/.netlify/functions/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: process.env.RESEND_NOTIFY_EMAIL,
            subject: 'New student signup',
            text: `New signup: ${email} (id: ${id})`,
          }),
        })
      }
    } catch (err) {
      console.warn('Failed to send signup notification', String(err))
    }

    const token = jwt.sign({ id, email }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '7d' })

    // Set httpOnly cookie for session
    const cookieName = process.env.SESSION_COOKIE_NAME || 'session'
    const maxAge = 7 * 24 * 60 * 60 // 7 days
    const cookie = `${cookieName}=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`

    return {
      statusCode: 200,
      headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, email }),
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
