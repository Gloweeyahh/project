# GitHub Repository Prep TODO (gloria-portfolio)

## Phase 0 — Confirm repository structure
- [ ] Set GitHub repo root to `gloria-portfolio/` (recommended). 
- [ ] If current GitHub repo root already points elsewhere, delete/replace contents so only the Vite app remains.

## Phase 1 — Clean repo content before push (must-do)
- [ ] Delete any committed junk from the portfolio repo:
  - [ ] `node_modules/`
  - [ ] `dist/` (if present)
  - [ ] local caches
- [ ] Create/ensure `.gitignore` exists in repo root (and contains at least):
  - [ ] `node_modules/`
  - [ ] `dist/`
  - [ ] `.env*`
  - [ ] `preview/` (or similar)
- [ ] Ensure there is **one** `package.json` used for builds: `gloria-portfolio/package.json`.

## Phase 2 — Missing/placeholder data audit (must-do)
- [ ] Replace WhatsApp placeholder numbers:
  - [ ] `gloria-portfolio/src/components/FloatingWhatsApp.tsx`
  - [ ] `gloria-portfolio/src/pages/Contact.tsx`
- [ ] Replace placeholder email:
  - [ ] `gloria-portfolio/src/pages/Contact.tsx` (`mailto:gloria@example.com`)
- [ ] Search for any remaining `XXXXXXXX` placeholders and replace with real data.
- [ ] Search for any remaining `example.com` placeholder emails.

## Phase 3 — Build & route verification (must-do)
- [ ] Run: `cd gloria-portfolio && npm install`
- [ ] Run: `cd gloria-portfolio && npm run dev`
- [ ] Verify routes load without runtime errors:
  - [ ] `/` 
  - [ ] `/work`
  - [ ] `/services`
  - [ ] `/process`
  - [ ] `/contact`
  - [ ] `/work/fintech`, `/work/ecommerce`, `/work/saas`
  - [ ] `/case-study/:slug`
  - [ ] all additional pages in `src/App.tsx`
- [ ] Run: `cd gloria-portfolio && npm run build`

## Phase 4 — App metadata / deployment prep (must-do)
- [ ] Update `gloria-portfolio/index.html` if it contains third-party scripts requiring configuration.
  - [ ] Confirm Paystack usage: does it require a public key (env/config)?
- [ ] Add `README.md` at repo root with install + dev + build commands.
- [ ] If deploying to GitHub Pages later, set Vite `base` and add correct `homepage` instructions.

## Phase 5 — Replace current portfolio repo content
- [ ] Delete current contents in the GitHub portfolio repo.
- [ ] Replace with the new content (use `gloria-portfolio/` as the app root).
- [ ] Re-add clean files + rerun build.

## Done criteria
- [ ] `npm run build` succeeds from `gloria-portfolio/`
- [ ] No placeholder phone/email links remain
- [ ] Repo contains correct `.gitignore` and excludes `node_modules`


