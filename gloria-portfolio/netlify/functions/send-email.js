import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Allow": "POST" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body." }),
    };
  }

  const { to, subject, html } = body;
  const from = process.env.RESEND_FROM_EMAIL;
  const notify = process.env.RESEND_NOTIFY_EMAIL;

  if (!subject || !html) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing subject or html." }),
    };
  }

  if (!process.env.RESEND_API_KEY || !from || !notify) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email service not configured." }),
    };
  }

  try {
    const result = await resend.emails.send({
      from,
      to: to || notify,
      subject,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id: result.id ?? null }),
    };
  } catch (error) {
    console.error("Resend send-email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email." }),
    };
  }
};
