# TORC navigation + Compare reposition update

Overlay patch; not a complete repository.

Changes:
- Primary navigation is now: Artifacts · Theory · Evaluate an Artifact · Organizations · About.
- Compare is removed from the primary navigation.
- Compare remains available as a secondary feature on the Artifacts page.
- The comparison page itself is not removed or rewritten in this patch.
- Evaluate an Artifact copy is tightened and made more reader-facing, while preserving the existing service structure and contact action.
- Fixes “A Operational Order” to “An Operational Order.”

Files:
- app/layout.tsx
- app/artifacts/page.tsx
- app/evaluate-your-work/page.tsx
- app/globals.css (CSS addition only; append this block to the existing global stylesheet rather than replacing the whole stylesheet)
