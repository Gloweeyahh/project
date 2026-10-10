const https = require('https')
const data = JSON.stringify({ subject: 'Automated test email', html: '<p>This is a test from the deploy verification script.</p>' })

const options = new URL('https://gloria-work.netlify.app/.netlify/functions/send-email')
const req = https.request(options, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } }, res => {
  console.log('status', res.statusCode)
  res.setEncoding('utf8')
  res.on('data', chunk => console.log(chunk))
})
req.on('error', e => { console.error('request error', e) })
req.write(data)
req.end()
