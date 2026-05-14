# Light Theme Fix for Business Sections

## Overview
Fix strategy/estimate/generator/timeline/packages sections not responding to light theme. Hard-coded dark bgs/text → theme-aware with varying off-white/yellowish whites in light mode.

## Steps
- [✅] 1. Review & create this TODO
- [✅] 2. Edit BudgetEstimator.tsx
- [✅] 3. Edit PackageMatrix.tsx  
- [✅] 4. Edit ProposalGenerator.tsx
- [✅] 5. Edit TimelineEstimator.tsx
- [✅] 6. Test: cd gloria-portfolio && npm run dev (toggle light theme, verify readability)
- [✅] Complete! All 7 components fixed: BudgetEstimator, PackageMatrix, ProposalGenerator, TimelineEstimator, ServiceAdvisor, LeadQualifier, InquiryInsights.

## Changes
- Light: gradient off-white → amber-white → white
- Dark: slate-black gradient continuity
- Cards: glassmorphism white/amber light, black glass dark

