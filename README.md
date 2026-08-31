TORC Submit Consultancy Rewrite — Build Compatibility v2

Base: Archief(7)

Contains only:
- app/evaluate-your-work/page.tsx
- app/evaluate-your-work/PricingCards.tsx
- app/evaluate-your-work/SubmissionForm.tsx
- app/evaluate-your-work/submit.module.css
- app/artifact/components/ArtifactAnalysis.tsx

Compatibility fixes in ArtifactAnalysis.tsx:
1. range is optional because many existing analysis pages omit it and the component does not render it.
2. title accepts ReactNode because the existing Mulamadhyamakakarika page intentionally uses a JSX title with a line break.

No navigation, corpus data, artifact analysis copy, global CSS, or artifact pages are changed.
