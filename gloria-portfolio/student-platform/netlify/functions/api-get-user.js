const auth = require('./lib/auth')

exports.handler = async function (event) {
  try {
    const token = await auth.getTokenFromEvent(event)
    if (!token) return { statusCode: 401, body: 'No session' }
    const user = await auth.getUserFromToken(token)
    return { statusCode: 200, body: JSON.stringify(user) }
  } catch (err) {
    return { statusCode: 401, body: String(err.message || err) }
  }
}
