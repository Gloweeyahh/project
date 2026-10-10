import path from 'path'
import { pathToFileURL } from 'url'

async function run() {
  try {
    const fnPath = path.join(process.cwd(), 'netlify', 'functions', 'payments-init.js')
    const fileUrl = pathToFileURL(fnPath).href
    const mod = await import(fileUrl)
    const handler = mod.default

    const event = {
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'tester@example.com', amount: 15000, plan: 'advanced' }),
      headers: {},
      path: '/.netlify/functions/payments-init'
    }

    const res = await handler(event)
    console.log('FUNCTION RESPONSE:')
    console.log(JSON.stringify(res, null, 2))
  } catch (err) {
    console.error('ERROR INVOKING FUNCTION:')
    console.error(err)
  }
}

run()
