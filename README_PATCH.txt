TORC — WAR AND PEACE CLEAN-SLATE V2

Purpose
- Re-launches the public corpus with War and Peace as artifact #1.
- Publishes War and Peace as G | 915 with observed CMS range 900–922.
- Replaces the old artifact detail content with the compressed full TORC analysis.
- Removes all old public artifact records from lib/artifacts.ts.
- Removes legacy M from Artifacts sorting.

IMPORTANT FIX FROM V1
V1 changed the archive card but an older, more-specific War and Peace detail route could still win in an existing repository. V2 includes BOTH:
- app/artifact/[slug]/page.tsx
- app/artifact/war-and-peace/page.tsx
The explicit static route overrides any old War and Peace page left in the repo.

Copy this ZIP over repository root, preserving folders and replacing existing files.

Files
- lib/artifacts.ts
- app/artifacts/page.tsx
- app/artifact/[slug]/page.tsx
- app/artifact/[slug]/war-peace.module.css
- app/artifact/war-and-peace/page.tsx
- app/artifact/war-and-peace/war-peace.module.css

This patch does not touch submission, payment, theory, book, organization, or backend logic.
