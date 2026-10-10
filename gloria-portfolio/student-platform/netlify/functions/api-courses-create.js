const auth = require('./lib/auth')
const db = require('./lib/db')
const crypto = require('crypto')

exports.handler = async function (event) {
  try {
    // require auth
    const authHeader = event.headers && (event.headers.authorization || event.headers.Authorization)
    if (!authHeader) return { statusCode: 401, body: 'Missing Authorization header' }
    const parts = authHeader.split(' ')
    if (parts.length !== 2 || parts[0] !== 'Bearer') return { statusCode: 401, body: 'Invalid Authorization header' }
    const token = parts[1]
    const user = await auth.getUserFromToken(token)

    const { title, description } = JSON.parse(event.body)
    if (!title) return { statusCode: 400, body: 'Missing title' }
    const id = crypto.randomBytes(8).toString('hex')
    await db.query('INSERT INTO courses(id,title,description) VALUES($1,$2,$3)', [id, title, description || null])
    return { statusCode: 200, body: JSON.stringify({ id }) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
