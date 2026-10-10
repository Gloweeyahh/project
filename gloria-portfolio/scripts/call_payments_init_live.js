// Simple node script to POST to the live payments-init function and print response
// Uses built-in global fetch (Node 18+)

async function run() {
  try {
    const url = 'https://gloria-work.netlify.app/.netlify/functions/payments-init'
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'tester+node@example.com', amount: 15000, plan: 'advanced' }),
    })
    console.log('STATUS', res.status, res.statusText)
    const text = await res.text()
    console.log('BODY:', text)
  } catch (err) {
    console.error('REQUEST ERROR:', err)
  }
}

run()
