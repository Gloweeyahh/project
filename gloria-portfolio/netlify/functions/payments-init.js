// Netlify Function: POST /api/payments/init
// Expected request body (from CheckoutPage): { email, amount, plan }
// Response shape required by frontend:
//   { authorization_url: string, reference: string }

import crypto from 'crypto';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

export default async function handler(event) {
  try {
    if (!PAYSTACK_SECRET_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'PAYSTACK_SECRET_KEY not set' }),
      };
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method not allowed' };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const { email, amount, plan } = body;

    if (!email || !amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'email and amount required' }),
      };
    }

    // Paystack expects amount in kobo/cent-like smallest unit.
    const paystackAmount = Math.round(Number(amount) * 100);

    const metadata = {
      plan: plan || undefined,
    };

    const requestBody = {
      email,
      amount: paystackAmount,
      callback_url: `${FRONTEND_URL}/payment-callback`,
      metadata,
    };

    const r = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await r.json();

    if (!data || data.status !== true) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: data || 'Paystack error' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        authorization_url: data.data.authorization_url,
        reference: data.data.reference,
      }),
    };
  } catch (err) {
    console.error('payments-init error', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'server error' }),
    };
  }
}

