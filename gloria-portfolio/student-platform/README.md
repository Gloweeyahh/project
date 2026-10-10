Student Platform — Setup & Deployment
=====================================

Overview
--------
This repo contains a Vite + React frontend and Netlify Functions backend for a student SaaS platform. Features:
- Postgres-backed auth (signup/login) with JWT
- Password reset flow
- Courses API + simple dashboard
- File upload via signed S3 URLs

Local setup
-----------
1. Copy `.env.example` to `.env` and set values.
2. Start local Postgres (optional):

```bash
cd student-platform
docker compose up -d
```

3. Install and migrate:

```bash
npm install
npm run migrate
```

4. Start local dev server (Netlify dev recommended):

```bash
npm install -g netlify-cli
netlify dev
# or
npm run dev
```

Production deploy
-----------------
1. Provision a managed Postgres and set `DATABASE_URL` in Netlify.
2. Add required Netlify env vars (Settings → Build & deploy → Environment):
- `DATABASE_URL`, `JWT_SECRET`, `RESEND_API_KEY` (optional), `RESEND_FROM_EMAIL`, `RESEND_NOTIFY_EMAIL`, `PORTFOLIO_SEND_EMAIL_URL`, `FRONTEND_URL`, `AWS_S3_BUCKET`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `PAYSTACK_SECRET`.
3. Configure GitHub Actions secrets: `DATABASE_URL`, `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.
4. Push to `main` branch — CI will run migrations, build, and deploy.

Security notes
--------------
- Do not commit secrets.
- Use a strong `JWT_SECRET` and rotate periodically.
- Consider switching from localStorage-stored JWTs to httpOnly secure cookies.

What's left / recommended next
-----------------------------
- Implement Paystack init + secure webhook verification (placeholder files created).
- Add more robust logging and monitoring (integrate Sentry or Logflare).
- Replace portfolio relay with direct Resend usage and environment-managed keys.
- Add unit and integration tests and CI test step.
