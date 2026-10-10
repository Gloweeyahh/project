const bcrypt = require('bcryptjs')
const db = require('./lib/db')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405 }
  try {
    const { token, password } = JSON.parse(event.body)
    if (!token || !password) return { statusCode: 400, body: 'Missing' }

    const res = await db.query('SELECT id, reset_expires FROM users WHERE reset_token=$1', [token])
    if (!res.rows.length) return { statusCode: 400, body: 'Invalid token' }
    const row = res.rows[0]
    if (row.reset_expires && new Date(row.reset_expires) < new Date()) return { statusCode: 400, body: 'Token expired' }

    const hash = await bcrypt.hash(password, 10)
    await db.query('UPDATE users SET password_hash=$1, reset_token=NULL, reset_expires=NULL WHERE id=$2', [hash, row.id])
    return { statusCode: 200, body: 'OK' }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
