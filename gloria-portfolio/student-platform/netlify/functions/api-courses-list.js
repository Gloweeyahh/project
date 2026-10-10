const auth = require('./lib/auth')
const db = require('./lib/db')

exports.handler = async function (event) {
  try {
    // allow public listing; optional: require auth
    const res = await db.query('SELECT id, title, description, created_at FROM courses ORDER BY created_at DESC')
    return { statusCode: 200, body: JSON.stringify(res.rows) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
