# TORC Batch 75 — Mobile TOC Functional Fix + Black Artifact Row Rules

Apply after Batch 74.

Theory book — phone:
- Ships `BookNavigator.tsx` itself instead of trying to solve the problem with CSS alone.
- The Contents button now exposes an explicit `data-open` / `aria-expanded` state.
- The mobile panel is forced visible from that explicit state and opens above the button, at the right edge.
- Closing the panel leaves the Contents button available.

Artifacts — desktop:
- Sort / Medium / Operational Order selected values return to black.
- Artifact row separators become very thin black lines.
- Hovering/focusing an artifact creates a fine black rectangular outline around that row, making the current artifact unmistakable without a heavy effect.

No book text, artifact data, scores, sort behavior, routes, pagination, or analysis content are changed.
