const jwt = require('jsonwebtoken')
const db = require('./db')

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'

async function verifyToken(token) {
  if (!token) throw new Error('No token')
  let payload
  try {
    payload = jwt.verify(token, JWT_SECRET)
  } catch (err) {
    throw new Error('Invalid token')
  }
  return payload
}

async function getUserFromToken(token) {
  const payload = await verifyToken(token)
  const res = await db.query('SELECT id, email, created_at FROM users WHERE id=$1', [payload.id])
  if (!res.rows.length) throw new Error('User not found')
  return res.rows[0]
}

function parseCookieHeader(cookieHeader) {
  if (!cookieHeader) return null
  const pairs = cookieHeader.split(';').map(p => p.trim())
  const obj = {}
  for (const p of pairs) {
    const [k, ...rest] = p.split('=')
    obj[k] = rest.join('=')
  }
  return obj
}

async function getTokenFromEvent(event) {
  // look for Authorization header first
  const authHeader = event.headers && (event.headers.authorization || event.headers.Authorization)
  if (authHeader && authHeader.startsWith('Bearer ')) return authHeader.split(' ')[1]
  const cookieHeader = event.headers && (event.headers.cookie || event.headers.Cookie)
  if (!cookieHeader) return null
  const cookies = parseCookieHeader(cookieHeader)
  const name = process.env.SESSION_COOKIE_NAME || 'session'
  return cookies ? cookies[name] : null
}

module.exports = { verifyToken, getUserFromToken }
