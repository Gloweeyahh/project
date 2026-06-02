require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors());

// keep raw body for webhook signature verification
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf } }));

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:5173';

if (!PAYSTACK_SECRET) {
  console.warn('PAYSTACK_SECRET_KEY not set — payment endpoints will fail until configured. See .env.example');
}

// Initialize transaction
app.post('/api/payments/init', async (req, res) => {
  try {
    const { email, amount, metadata } = req.body;
    if (!email || !amount) return res.status(400).json({ error: 'email and amount required' });

    const body = { email, amount: Math.round(amount * 100), callback_url: `${FRONTEND}/payment-callback`, metadata };

    const r = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await r.json();
    if (!data.status) return res.status(500).json({ error: data });
    res.json({ authorization_url: data.data.authorization_url, reference: data.data.reference });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// Verify transaction by reference
app.get('/api/payments/verify/:reference', async (req, res) => {
  try {
    const ref = req.params.reference;
    const r = await fetch(`https://api.paystack.co/transaction/verify/${ref}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
    });
    const data = await r.json();
    if (!data.status) return res.status(400).json({ ok: false, data });
    if (data.data.status === 'success') {
      // mark purchase complete — for demo we'll return ok and customer email
      return res.json({ ok: true, reference: ref, email: data.data.customer.email });
    }
    res.json({ ok: false, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// Webhook receiver
app.post('/api/payments/webhook', (req, res) => {
  try {
    const signature = req.get('x-paystack-signature') || '';
    const hmac = crypto.createHmac('sha512', PAYSTACK_SECRET).update(req.rawBody).digest('hex');
    if (hmac !== signature) return res.status(400).send('Invalid signature');

    const event = req.body;
    // handle events, e.g., transaction.success
    if (event.event === 'charge.success' || event.event === 'transaction.success') {
      const reference = event.data.reference;
      const email = event.data.customer?.email;
      console.log('Verified webhook payment:', reference, email);
      // TODO: persist purchase and grant access
    }

    res.json({ received: true });
  } catch (err) {
    console.error('webhook error', err);
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Payments server listening on', PORT));
