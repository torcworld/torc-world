TORC — WAR AND PEACE CLEAN-SLATE PATCH

Purpose
- Removes all old public artifact records from lib/artifacts.ts.
- Re-launches the public corpus with War and Peace as the first artifact.
- Publishes War and Peace as G | 915 with observed CMS range 900–922.
- Replaces the generic artifact detail output with a deeper, readable public TORC analysis.
- Removes legacy M from the Artifacts sorting order.

Files to copy into repository root
- lib/artifacts.ts
- app/artifacts/page.tsx
- app/artifact/[slug]/page.tsx
- app/artifact/[slug]/war-peace.module.css

This patch does not touch submission, payment, theory, book, organization, or backend logic.
