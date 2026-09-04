# TORC Artifacts — active order + line refinement

Changed only:
- `app/artifacts/page.tsx`
- `app/artifacts/artifacts-overhaul.module.css`

Changes:
- Restores/preserves the Operational Order click-toggle behavior:
  - hover = light brown;
  - selected = stays light brown;
  - clicking the selected order again clears it and returns to All / Explore randomized.
- Uses `#d9c7a6` for the light selected/hover material rather than the site background.
- Strengthens the thin charcoal structural lines through the Operational Order strip, artifact table, table header, and pagination so they read like the outer precision frame.
- Keeps the active page number gold with a crisp black border.
- Narrows the charcoal Compare Artifacts block by about 2mm on each side (roughly 4mm total), centered.
- Keeps the previously restored top/bottom frame details intact.
