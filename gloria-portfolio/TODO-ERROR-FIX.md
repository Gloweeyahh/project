# TODO: TypeScript error fixes (gloria-portfolio)

## Goal
Reduce `npx tsc --noEmit` failures from the current ~30 errors to 0.

## Step 1 — Fix hard compile blockers (priority)
1. **`useMagnetic` hook signature mismatch**
   - File: `src/hooks/useMagnetic.ts`
   - Fix: accept `ref` properly and return `{ ref, onMouseMove, onMouseLeave }`.
2. **`src/components/ui/Button.tsx` usage of `useMagnetic`**
   - Update to pass a ref or refactor to internal ref forwarding.
3. **Fintech onboarding module path issues**
   - Files: `src/work/fintech-onboarding/components/*` and `src/work/fintech-onboarding/main.tsx`
   - Fix relative imports to `../../lib/gsap` and `../../hooks/useReveal` (or create re-export stubs).
4. **ThemeContext export mismatch**
   - Files: `src/context/ThemeContext.tsx` and `src/work/fintech-onboarding/main.tsx` (and/or `src/main.tsx`)
   - Fix: export `ThemeProvider` or update import.
5. **HeroScene content shape mismatch**
   - File: `src/scenes/HeroScene.tsx`
   - Fix: align `content` type with `content.hero` usage.
6. **DOM typing mismatch in Work page**
   - File: `src/pages/Work.tsx`
   - Fix: type `cards` as `NodeListOf<HTMLElement>` via generic query.

## Step 2 — Fix strict unused warnings (TS6133)
Fix unused imports/vars by:
- removing unused imports
- using `_` prefix for unused params
- deleting unused refs/variables

## Step 3 — Re-run checks
- `npx tsc --noEmit` after each batch.
- Stop once errors reach 0.

