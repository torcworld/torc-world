# Analysis — all existing gold to darker gold

Changed only the Analysis gold palette in:
- app/artifact/components/artifact-analysis.module.css
- app/artifact/artifact-frame.module.css

Included unchanged:
- app/artifact/components/ArtifactAnalysis.tsx

Exact rule:
- existing yellow/gold #c7aa76 -> darker gold #b7955d
- light ochre #d9c7a6 remains unchanged

This now includes the outer/side rails and frame gold as well as the gold inside the Analysis content, title/accent areas, and bottom CTA styling wherever they use the established gold token.
No layout or content changes.
