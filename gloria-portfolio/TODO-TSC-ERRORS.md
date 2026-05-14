# TODO: TypeScript errors (from `tsc --noEmit`) and how to fix

## Source of truth
Latest `tsc --noEmit` output (current):

1) TS6133 unused imports/variables
- src/App.tsx: AIAssistant, RecruiterMode, SmartNav declared but never read
- src/components/Hero.tsx: ref declared but never read
- src/components/SceneTwo.tsx: i declared but never read
- src/components/ThemeToggle.tsx: ThemeContext, useContext declared but never read
- src/context/ThemeContext.tsx: useState, useEffect declared but never read
- src/work/fintech-onboarding/App.tsx: useReveal declared but never read
- src/work/fintech-onboarding/components/TrustHero.tsx: useEffect, gsap declared but never read

2) TS2345 Work.tsx forEach callback param type mismatch
- src/pages/Work.tsx

3) TS2339 HeroScene content typing mismatch
- src/scenes/HeroScene.tsx: Property 'hero' does not exist on type returned by imported content

4) TS2339/never inference in TrustSignals
- src/work/fintech-onboarding/components/TrustSignals.tsx: signalsRef.current?.querySelectorAll(...) => Property 'querySelectorAll' does not exist on type 'never'

---

## Fix plan (prioritized)
### A) Fix module-level never/typing blockers first
6) ✅ DONE (previous): ThemeProvider export/import mismatch + relative path fixes in fintech-onboarding.


- Change `const signalsRef = useRef(null)` to `useRef<HTMLDivElement | null>(null)` (or `HTMLDivElement | null`).
- Then ensure `elements` is an actual `NodeListOf<Element>` and pass to gsap.

8) FIX: `Work.tsx` cards.forEach typing
- Change `const cards = document.querySelectorAll(".work-card");` to `const cards = Array.from(document.querySelectorAll<HTMLElement>(".work-card"));`
- Then `cards.forEach((card) => ...)` where `card` is typed as HTMLElement.

9) FIX: `HeroScene.tsx` content typing
- Ensure the imported `content` type matches the JSX usage (`content.hero.*`).
- Either update `src/data/content.ts` / its exported type, or narrow the usage to existing keys.

### B) Fix remaining TS6133 unused imports/vars (remove or use)
10) For each file in TS6133 list:
- Remove unused imports/vars.
- If a ref is needed, attach it to an element.
- If i is unused, remove the parameter.

---

## Status markers
- 6–10: Pending, because latest tsc output shows new concrete errors and we need to apply edits + rerun tsc until `Found 0 errors`.

