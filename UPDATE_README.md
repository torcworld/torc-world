# TORC — Artifacts Pagination + Compare Footer

UPDATE/OVERLAY PATCH — not a complete repository.

Changes:
- Caps the archive view at 30 artifacts per page.
- Pagination is applied after search, filtering, and sorting, so those controls still operate across the complete database.
- Adds Previous / numbered pages / Next below each 30-result page.
- Moves Compare out of the page header and places it directly below pagination as a secondary archive option.
- Removes underlining from sortable table headings while retaining dark/bold clickable styling.
- Keeps the evaluation CTA beneath the main Artifacts heading.
- Uses a newly named local CSS module (`artifacts-v3.module.css`) to avoid stale styling.
- No global CSS, artifact data, or comparison functionality is modified.

Files:
- app/artifacts/page.tsx
- app/artifacts/artifacts-v3.module.css
