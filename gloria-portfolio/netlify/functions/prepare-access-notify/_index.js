import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const parseBody = (event) => {
  try {
    return JSON.parse(event.body || '{}')
  } catch (err) {
    return {}
  }
}

const parseAccessCodes = () => {
  const envList = (process.env.ACCESS_CODES || '').split(',').map((s) => s.trim()).filter(Boolean)
  const map = {}
  envList.forEach((entry) => {
    const idx = entry.indexOf(':')
    if (idx === -1) return
    const key = entry.slice(0, idx).trim()
    const val = entry.slice(idx + 1).trim()
    if (key && val) map[key] = val
  })
  return map
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    }
  }

  const { email, name, courseId, amount, plan, oneOnOne } = parseBody(event)

  if (!email || !courseId) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Missing email or courseId' }) }
  }

  const accessCode = (() => {
    const global = process.env.ACCESS_CODE || ''
    const map = parseAccessCodes()
    if (map[courseId]) return map[courseId]
    if (global) return global
    // fallback to gloriagold for local dev
    if (!global && Object.keys(map).length === 0) return 'gloriagold'
    return null
  })()

  const reference = `REF-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`

  const subject = `New purchase intent: ${plan || courseId} — ${email}`
  const notifyTo = process.env.RESEND_NOTIFY_EMAIL
  const from = process.env.RESEND_FROM_EMAIL

  if (!process.env.RESEND_API_KEY || !notifyTo || !from) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Email not configured' }) }
  }

  const html = `
    <p>New purchase intent received.</p>
    <ul>
      <li><strong>Reference:</strong> ${reference}</li>
      <li><strong>Customer email:</strong> ${email}</li>
      <li><strong>Customer name:</strong> ${name || '—'}</li>
      <li><strong>Course:</strong> ${plan || courseId}</li>
      <li><strong>Amount:</strong> ${amount || '—'}</li>
      <li><strong>One-on-one:</strong> ${oneOnOne ? 'Yes' : 'No'}</li>
    </ul>
    <p>Access code for this course: <strong>${accessCode || 'NOT FOUND'}</strong></p>
    <p>Please confirm payment in WhatsApp chat and forward the access code to the customer when payment is verified.</p>
  `

  try {
    await resend.emails.send({ from, to: notifyTo, subject, html })
    return { statusCode: 200, body: JSON.stringify({ ok: true, reference }) }
  } catch (err) {
    console.error('prepare-access-notify error', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Failed to send notification' }) }
  }
}
