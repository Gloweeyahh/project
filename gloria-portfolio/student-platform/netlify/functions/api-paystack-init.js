// Placeholder: initialize Paystack transaction
const fetch = require('node-fetch')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405 }
  try {
    const { amount, email } = JSON.parse(event.body)
    if (!amount || !email) return { statusCode: 400, body: 'Missing' }

    // In production, call Paystack initialize endpoint with SECRET_KEY
    return { statusCode: 501, body: 'Not implemented: integrate Paystack init here' }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
