TORC Artifact Batch 2 — corrected patch

Apply this on top of Batch 1 / the current repository.

IMPORTANT FIX:
- This patch does NOT replace app/artifact/[slug]/page.tsx.
- Each new artifact uses its own static App Router route, so the existing dynamic War and Peace fallback remains untouched.
- 2001: A Space Odyssey is included as its own static route to prevent it from rendering War and Peace copy.

Adds/updates:
- 2001: A Space Odyssey
- Pulp Fiction
- Gospel of John
- Romans
- Mūlamadhyamakakārikā
- Dependent Arising — Kaccānagotta Sutta
- lib/artifacts.ts
