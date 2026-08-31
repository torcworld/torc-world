TORC Submit Consultancy Rewrite — build compatibility revision

Base: Archief(7).zip

Includes only:
- app/evaluate-your-work/page.tsx
- app/evaluate-your-work/PricingCards.tsx
- app/evaluate-your-work/SubmissionForm.tsx
- app/evaluate-your-work/submit.module.css
- app/artifact/components/ArtifactAnalysis.tsx

Build compatibility fix:
`range` in ArtifactAnalysis Props is optional (`range?: string`).
The component does not render or use `range`, and many existing static artifact pages in Archief(7) do not pass it. Making it optional restores compatibility without changing any artifact copy or layout.

No navigation, artifact-page copy, corpus data, global CSS, or other routes are changed.
