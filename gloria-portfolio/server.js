import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL;
const notifyEmail = process.env.RESEND_NOTIFY_EMAIL;

if (!resendApiKey || !fromEmail || !notifyEmail) {
  console.warn(
    "Warning: RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_NOTIFY_EMAIL is missing. Email sending will fail until these are set."
  );
}

const resend = new Resend(resendApiKey);

app.post("/api/send-email", async (req, res) => {
  const { to, subject, html } = req.body;

  if (!subject || !html) {
    return res.status(400).json({ error: "Subject and html are required." });
  }

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: to || notifyEmail,
      subject,
      html,
    });

    res.json({ ok: true, id: result.id ?? null });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Resend email server listening on http://127.0.0.1:${port}`);
});
