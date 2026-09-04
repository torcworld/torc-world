# TORC Compare — populated default

Changed only:
- `app/compare/page.tsx`

Change:
- Direct `/compare` no longer opens as the nearly-empty picker state.
- It now opens the already-built full comparative analysis using:
  - The White Ribbon
  - The Lobster
- Existing query links such as `/compare?a=...&b=...` still override those defaults, so comparisons launched from the Artifacts page continue to work normally.
- The homepage can keep linking simply to `/compare`; it will now land on the full Compare experience the user described.
