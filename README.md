TORC Artifacts — four removals + return-state preservation

Removed from the public artifact corpus:
- The Remains of the Day
- Glengarry Glen Ross
- The Magic Mountain
- The Unbearable Lightness of Being

Also changes only the Artifacts archive interaction:
- opening an artifact analysis and then using Back restores the previous archive state;
- search query, medium filter, Operational Order filter, sort mode, randomized Explore seed, and page number are preserved for the browser session;
- changing a filter/search/sort/shuffle still intentionally starts at page 1.

No styling, analysis prose, scores, dimensions, or unrelated artifact data are changed.

Files changed:
- lib/artifacts.ts
- app/artifacts/page.tsx
