# TORC Compare Teaching Prototype

UPDATE/OVERLAY PATCH — not a complete repository.

Built against the current GitHub repository snapshot supplied as `torc-world-main 6.zip`.

Prototype changes to `/compare`:
- Keeps the existing two-artifact picker and URL-based selection.
- Makes the first result about Operational Order, then CMS.
- Adds a concise explanation of what the specific Operational Order boundary means.
- Uses each artifact's stored `summary` and `why` fields to connect the generic boundary to artifact-specific evidence.
- Adds an explicit `Order is not magnitude` explanation.
- Moves `Open the full evaluations` above the dimensional table.
- Keeps dimension-by-dimension scores below as supporting detail.
- Adds an information control to RL / AD / CD / ID / IC / GR with plain-language definitions; it works by click/tap and also exposes a native hover tooltip.
- Adds contextual language for small/moderate/substantial CMS differences.
- Does not modify `lib/artifacts.ts`, artifact evaluations, or any artifact page.
- Uses a Compare-local CSS module; global styles are untouched.
