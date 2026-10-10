// Placeholder: verify Paystack webhook signature and process transaction
exports.handler = async function (event) {
  // TODO: validate Paystack signature using PAYSTACK_SECRET
  console.log('Received webhook', event.body)
  return { statusCode: 200, body: 'OK' }
}
