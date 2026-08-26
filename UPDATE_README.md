# TORC — Artifacts Pagination + Inline Compare + Header Alignment

UPDATE/OVERLAY PATCH — not a complete repository.

Changes:
- Pagination remains 30 artifacts per page.
- Clicking Previous, Next, or a page number now scrolls smoothly back to the top of the page.
- Replaces the bottom Compare promo/link with the actual two-artifact selector UI and swap control.
- Once both artifacts are chosen, a Compare selected artifacts button opens the existing full comparison page with both artifacts preselected.
- Repositions the evaluation CTA into the centered/right desktop header area beneath the primary navigation zone.
- Mobile keeps the evaluation CTA stacked beneath the Artifacts heading with generous spacing.
- Sort headers remain dark and clickable, without underlines.
- No global CSS is changed.

Files:
- app/artifacts/page.tsx
- app/artifacts/artifacts-v4.module.css
