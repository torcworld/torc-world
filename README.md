TORC — Submit detail outline + Artifacts pagination target

Changes only:
1. /app/evaluate-your-work/submit.module.css
   - Adds the same thin oxblood outline treatment to the selected package detail panel.
   - Keeps the gold background and dark readable text unchanged.

2. /app/artifacts/page.tsx
   - Pagination no longer scrolls to the top of the entire page.
   - Previous / page number / Next now scroll smoothly to the top of the gold artifact corpus/list surface, below the search/filter area.

No navigation, artifact data, analysis pages, global CSS, or other routes changed.
