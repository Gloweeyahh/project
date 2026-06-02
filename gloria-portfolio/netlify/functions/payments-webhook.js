// Netlify Function: POST /api/payments/webhook
// Paystack webhook should send header x-paystack-signature.
// We need the raw body to verify signature.
// Netlify Function events provide the body; we treat it as raw string if available.

import crypto from 'crypto';

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

function getRawBody(event) {
  // Netlify may provide isBase64Encoded + body
  if (typeof event.body !== 'string') {
    return '';
  }
  return event.body;
}

export default async function handler(event) {
  try {
    if (!PAYSTACK_SECRET) {
      return { statusCode: 500, body: 'PAYSTACK_SECRET_KEY not set' };
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method not allowed' };
    }

    const signature = event.headers?.['x-paystack-signature'] || event.headers?.['X-Paystack-Signature'] || '';
    const rawBody = getRawBody(event);

    const hmac = crypto.createHmac('sha512', PAYSTACK_SECRET).update(rawBody).digest('hex');
    if (hmac !== signature) {
      return { statusCode: 400, body: 'Invalid signature' };
    }

    const payload = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    // Handle events, e.g., charge.success
    if (payload?.event === 'charge.success' || payload?.event === 'transaction.success') {
      const reference = payload?.data?.reference;
      const email = payload?.data?.customer?.email;
      console.log('Verified webhook payment:', reference, email);

      // TODO: persist purchase and grant access
    }

    return { statusCode: 200, body: JSON.stringify({ received: true }) , headers: { 'Content-Type': 'application/json' } };
  } catch (err) {
    console.error('webhook error', err);
    return { statusCode: 500, body: 'error' };
  }
}

