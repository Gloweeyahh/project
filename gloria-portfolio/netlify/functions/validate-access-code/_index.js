const parseBody = async (event) => {
  try {
    if (event.body) return JSON.parse(event.body)
    return {}
  } catch (err) {
    return {}
  }
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    }
  }

  const { code, courseId } = await parseBody(event)
  if (!code || typeof code !== 'string') {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: 'Missing code' }),
    }
  }

  // Allow a single global code via ACCESS_CODE, or multiple via ACCESS_CODES (comma separated)
  const envGlobal = process.env.ACCESS_CODE || ''
  const envList = (process.env.ACCESS_CODES || '').split(',').map((s) => s.trim()).filter(Boolean)

  const normalized = code.trim()

  // Parse ACCESS_CODES into map: "courseId:code,other:code2"
  const map = {}
  envList.forEach((entry) => {
    const idx = entry.indexOf(':')
    if (idx === -1) return
    const key = entry.slice(0, idx).trim()
    const val = entry.slice(idx + 1).trim()
    if (key && val) map[key] = val
  })

  let valid = false

  // If courseId provided, require exact match against mapped code for that course
  if (courseId) {
    if (map[courseId] && normalized === map[courseId]) valid = true
  } else {
    // No course specified: accept global match or any mapped code
    valid = (envGlobal && normalized === envGlobal) || Object.values(map).includes(normalized)
  }

  // For convenience during local dev, accept legacy 'gloriagold' if no env is set.
  const fallback = !envGlobal && Object.keys(map).length === 0 && normalized.toLowerCase() === 'gloriagold'

  if (valid || fallback) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, unlocked: true }),
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ ok: false, unlocked: false, error: 'Invalid access code' }),
  }
}
