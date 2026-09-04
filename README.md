# TORC — Compare route + Operational Order toggle

Changed only:
- `app/page.tsx`
- `app/home.module.css` (included unchanged from latest homepage patch)
- `app/artifacts/page.tsx`
- `app/artifacts/artifacts-overhaul.module.css`

Changes:
- Homepage red “Compare Artifacts” button now goes directly to the existing `/compare` page.
- On Artifacts, clicking an Operational Order tile selects it and keeps it visibly light/highlighted.
- Clicking that same selected Operational Order tile again clears the filter.
- Clearing it also restores Explore/randomized ordering and reshuffles the corpus.
- The selected tile uses the same light-brown/ochre material as the hover state.
- `aria-pressed` is added so the selected state is explicit/accessibility-friendly.
