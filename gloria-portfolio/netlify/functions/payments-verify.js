// Netlify Function: GET /api/payments/verify/:reference
// Frontend expects JSON: { ok: true/false, reference, email, plan? } when status === 'success'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export default async function handler(event) {
  try {
    if (!PAYSTACK_SECRET_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: 'PAYSTACK_SECRET_KEY not set' }) };
    }

    if (event.httpMethod !== 'GET') {
      return { statusCode: 405, body: 'Method not allowed' };
    }

    // Netlify will pass the dynamic segment in pathParameters when using serverless-routing.
    // Fallback to parsing from path.
    const reference = event.pathParameters?.reference || event.path?.split('/').pop();

    if (!reference) {
      return { statusCode: 400, body: JSON.stringify({ error: 'reference required' }) };
    }

    const r = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
    });

    const data = await r.json();

    if (!data || data.status !== true) {
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false, data }) };
    }

    if (data.data?.status === 'success') {
      const customerEmail = data.data?.customer?.email;
      const plan = data.data?.metadata?.plan;

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ok: true,
          reference,
          email: customerEmail,
          plan,
        }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, data: data.data }),
    };
  } catch (err) {
    console.error('payments-verify error', err);
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'server error' }) };
  }
}

