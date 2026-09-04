# TORC Analysis — restore black precision lines + darker gold

Built from the known-good Analysis frame patch that already had the requested black/charcoal precision rules.

Changed:
- `app/artifact/artifact-frame.module.css`
- `app/artifact/components/artifact-analysis.module.css`
- `app/artifact/components/ArtifactAnalysis.tsx` included unchanged from the six-dimension refinement base.

Result:
- Red inner rail lines remain removed.
- Inner rail lines are black/charcoal.
- Thin black/charcoal outer perimeter lines around the gold rails are restored/preserved.
- Existing true gold `#c7aa76` becomes darker gold `#b7955d` across the Analysis frame and Analysis content.
- Light ochre `#d9c7a6` is NOT changed.
- No layout/content redesign.
