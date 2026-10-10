const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('./lib/db')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405 }
  try {
    const { email, password } = JSON.parse(event.body)
    if (!email || !password) return { statusCode: 400, body: 'Missing' }

    const res = await db.query('SELECT id, email, password_hash FROM users WHERE email=$1', [email])
    if (!res.rows.length) return { statusCode: 401, body: 'Invalid credentials' }

    const user = res.rows[0]
    const ok = await bcrypt.compare(password, user.password_hash)
    if (!ok) return { statusCode: 401, body: 'Invalid credentials' }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '7d' })
    const cookieName = process.env.SESSION_COOKIE_NAME || 'session'
    const maxAge = 7 * 24 * 60 * 60
    const cookie = `${cookieName}=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    return { statusCode: 200, headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' }, body: JSON.stringify({ id: user.id, email: user.email }) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
