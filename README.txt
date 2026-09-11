TORC CORRECTED PATCH — BATCH 2 + MOBILE MODE/CMS

Use this ZIP instead of the two previous failing Batch 2/mobile patches.

BUILD FIX
- The Old Man and the Sea now has the required status:'evaluated' field.
- The earlier omission could cause the TypeScript/Vercel build to fail.

PUBLIC CORPUS
- In Search of Lost Time is the single Proust record.
  Its previous public result is replaced by M3 / 876 CMS.
- The Old Man and the Sea is added — M1 / 594 CMS.
- 1984 is removed from the public corpus.
- The Social Network is removed from the public corpus.
- Fundamental Verses on the Middle Way is removed from the public corpus.
- Correct public corpus total after this update: 61 artifacts.

ANALYSIS PAGES
- Includes the canonical Batch 2 analysis pages for Hemingway and Proust.
- Includes hard-404 reserve layouts for removed public artifacts and the alternate
  Mūlamadhyamakakārikā route.

MOBILE ARTIFACT ARCHIVE
- Restores Operational Mode and CMS in compact mobile artifact rows.
- Does NOT overwrite app/artifacts/page.tsx, so newer archive UI logic is preserved.
