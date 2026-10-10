exports.handler = async function (event) {
  // Clear cookie
  const cookieName = process.env.SESSION_COOKIE_NAME || 'session'
  const cookie = `${cookieName}=deleted; HttpOnly; Path=/; Max-Age=0; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  return { statusCode: 200, headers: { 'Set-Cookie': cookie }, body: 'Logged out' }
}
