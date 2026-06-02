Paystack backend (Express)

1. Copy `.env.example` to `.env` in the `server/` folder (or root) and set your keys.

2. Install and run:

```bash
cd server
npm install
npm start
```

3. Use `ngrok http 3000` to expose webhooks for Paystack during local development and set the webhook URL in your Paystack dashboard to `https://<ngrok-id>.ngrok.io/api/payments/webhook`.

4. The server exposes:
- `POST /api/payments/init` — initialize a Paystack transaction (body: `{ email, amount }`). Returns `authorization_url` and `reference`.
- `GET /api/payments/verify/:reference` — verify transaction status.
- `POST /api/payments/webhook` — Paystack webhook receiver (verifies signature).

Security: keep `PAYSTACK_SECRET_KEY` private.
