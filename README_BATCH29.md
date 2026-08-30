# TORC Batch 29 — Corpus completeness audit

Audited all 55 active artifacts after Batch 28.

## Result
- 2 intentional custom full pages: War and Peace, The Great Gatsby.
- 29 active direct current-layout routes (including the three normalized legacy slugs).
- 18 active artifacts served by the current shared `ArtifactAnalysis` route with artifact-specific `featuredAnalyses` content.
- 6 active artifacts still fall through to the generic corpus placeholder and need full artifact-specific analysis:
  - Glengarry Glen Ross
  - There Will Be Blood
  - 1984
  - The Talented Mr. Ripley
  - The Art of Self-Defense
  - Discrimination and Disparities

Thus 49/55 active artifacts have artifact-specific analysis surfaces; 6/55 remain substantive content gaps.

## Safety fix found during audit
Batch 28's three normalized route wrappers referenced `ArtifactAnalysis` without importing it. This patch adds the missing import to:
- `app/artifact/notes-from-underground/page.tsx`
- `app/artifact/the-magic-mountain/page.tsx`
- `app/artifact/thus-spoke-zarathustra/page.tsx`

No determinations, CMS values, or analysis copy were changed in this safety fix.

## Follow-up
The next content batch should replace the six generic placeholders above with artifact-specific analyses. The Great Gatsby custom page should also be checked separately for dimension-data consistency against the central corpus record before any broad visual refactor.
