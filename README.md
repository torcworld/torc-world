# TORC Theory + Artifact Analysis dual-field refinement

This patch changes only three CSS modules.

- Theory / Book (desktop): extends the existing left and right oxblood fields outward until they meet the thin outer frame rails. The space above the book remains light/open.
- Artifact Analysis (desktop): centers the analysis column and introduces equal oxblood fields on both sides. The analysis/header column begins at the same vertical level as the side fields. Mobile analysis remains unchanged.
- Artifacts: makes the existing side frame rails one final small step finer than the previous version, while still retaining more presence than the original hairline.

Files:
- app/theory/book/book.module.css
- app/artifact/artifact-frame.module.css
- app/artifacts/artifacts-v4.module.css
