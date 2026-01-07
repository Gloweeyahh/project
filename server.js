const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root route (fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Health check (optional but useful)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /send - Contact form endpoint
app.post('/send', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',     // You can change this to your verified domain later
      to: process.env.EMAIL_USER,        // Your personal email that receives messages
      subject: `New message from ${email}`,
      text: message,
      reply_to: email                    // Allows you to reply directly to the sender
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server - Required for Render and other hosting platforms
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});