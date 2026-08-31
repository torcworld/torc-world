TORC — Submit auto-reveal + mobile Artifacts Order alignment

Changes:
1. app/evaluate-your-work/PricingCards.tsx
   - Clicking/tapping any package card now automatically scrolls the selected package detail panel into view.
   - The same behavior applies to the card's Explore button and keyboard activation.
   - Selection remains unchanged otherwise.

2. app/artifacts/artifacts-v4.module.css
   - On phone widths, moves only the compact Operational Order heading farther left so it no longer crowds the CMS heading.
   - <=760px: -20px; <=430px: -18px.
   - Numeric columns remain untouched.

Apply on top of the currently working site / previous Submit + Artifacts pagination patch.
