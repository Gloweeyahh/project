export type SendEmailPayload = {
  subject: string
  html: string
  to?: string
}

export async function sendEmail(payload: SendEmailPayload) {
  const apiBase = import.meta.env.VITE_API_BASE || ""
  const response = await fetch(`${apiBase}/api/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || "Failed to send email")
  }

  return response.json()
}

export type SendFormPayload = {
  subject: string
  fields: Record<string, string | number | boolean | undefined>
  to?: string
}

export function buildHtmlFromFields(fields: Record<string, any>) {
  const entries = Object.entries(fields)
  if (entries.length === 0) return "<p>(no form fields submitted)</p>"

  return entries
    .map(([k, v]) => `<p><strong>${k}:</strong> ${String(v ?? "")}</p>`)
    .join("\n")
}

export async function sendFormEmail(payload: SendFormPayload) {
  const html = `<h1>${payload.subject}</h1>` + buildHtmlFromFields(payload.fields)
  try {
    return await sendEmail({ subject: payload.subject, html, to: payload.to })
  } catch (err) {
    console.error('sendFormEmail failed', err)
  }
}
