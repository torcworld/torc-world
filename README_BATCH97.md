# TORC Batch 97 — Artifacts guide reach + navigation size restore

Apply after Batch 96.

Changes:
- `app/artifacts/artifacts-v4.module.css`
  - extends the two upper oxblood hero-edge guides by another 10px so they visibly meet/overlap the pale horizontal rule;
  - gives both the upper and downward guides an intermediate hairline weight: slightly heavier than Batch 96, still finer than the earlier thick version.
- `app/nav.module.css`
  - explicitly restores the established full desktop navigation button dimensions (42px minimum height, 11px × 17px padding, normal spacing) so the top navigation cannot collapse into the tiny state seen after the previous deployment.

No corpus data, page markup, analysis content, routing, Theory layout, or mobile Artifacts table changes.
