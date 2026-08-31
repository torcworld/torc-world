# TORC mobile card reveal + Order heading refinement

This patch makes only the two requested refinements:

1. On phone, selecting a Submit price card scrolls to the explanation panel with ~20px breathing room above it, so the whole top edge is visibly detached from the viewport while the previous price card stays out of view.
2. On phone, the Operational/Cognitive Order header on Artifacts is moved about another centimetre to the left. Numeric result columns are untouched.

Files included:
- app/evaluate-your-work/PricingCards.tsx
- app/evaluate-your-work/submit.module.css
- app/artifacts/artifacts-v4.module.css
