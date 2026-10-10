Postgres setup & migrations
---------------------------

1) Local (Docker)

Start a local Postgres using Docker Compose:

```bash
cd student-platform
docker compose up -d
```

This exposes Postgres on `localhost:5432` with the credentials from `docker-compose.yml` (user `student`, password `studentpass`, DB `student_platform`).

2) Run migration

Set `DATABASE_URL` if you are not using the Docker defaults, then run:

```bash
npm install
npm run migrate
```

The migration script reads `db/schema.sql` and executes statements against the configured database.

3) Netlify environment variables

Once you have a managed Postgres (or the connection string), set these env vars in Netlify (via UI or CLI):

- `DATABASE_URL` — the Postgres connection string
- `JWT_SECRET` — a strong secret for signing JWTs
- `RESEND_NOTIFY_EMAIL` — owner email for signup notifications
- `PORTFOLIO_SEND_EMAIL_URL` — (optional) URL to existing send-email function

Using the Netlify CLI to set env vars:

```bash
# install netlify CLI and login first
netlify env:set DATABASE_URL "postgres://user:pass@host:5432/dbname"
netlify env:set JWT_SECRET "your-long-random-secret"
netlify env:set RESEND_NOTIFY_EMAIL "you@example.com"
netlify env:set PORTFOLIO_SEND_EMAIL_URL "https://gloria-work.netlify.app/.netlify/functions/send-email"
```

4) Notes & next steps

- Replace `PORTFOLIO_SEND_EMAIL_URL` relay with direct Resend API call from functions if desired (requires `RESEND_API_KEY` env).
- In production, use a managed Postgres (Heroku, Supabase, Neon, Railway) and secure `JWT_SECRET` in Netlify.
- Consider automated migrations as part of CI/CD.
