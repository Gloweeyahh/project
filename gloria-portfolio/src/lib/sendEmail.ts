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
