# TORC Navigation / Compare Repair

REPAIR OVERLAY — not a complete repository.

This fixes the prior TORC_NAV_COMPARE_REPOSITION patch.

Cause of the visual break:
The previous patch accidentally replaced `app/globals.css` with only the small new Compare CSS block. Because `globals.css` controls the entire site, that stripped the site's real design and made the website look like a fallback/backup version.

This repair:
- Restores the COMPLETE original TORC global stylesheet.
- Appends the small Compare utility styling safely at the end.
- Keeps the intended primary navigation:
  Artifacts · Theory · Evaluate an Artifact · Organizations · About
- Keeps Compare removed from primary navigation.
- Keeps Compare as a secondary feature on the Artifacts page.
- Keeps the improved Evaluate an Artifact copy.

Files:
- app/globals.css — full stylesheet restored + Compare rules appended
- app/layout.tsx
- app/artifacts/page.tsx
- app/evaluate-your-work/page.tsx

Use this repair OVER the currently broken deployment.
