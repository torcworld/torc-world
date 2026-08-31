# TORC Batch 105 — Generic analysis dimensions build fix

Apply after Batch104.

This is a minimal TypeScript build repair.

## Change
- `app/artifact/components/ArtifactAnalysis.tsx`
  - Makes `dimensions` optional in `Props`.
  - Renders the cognitive-architecture section only when dimensions are supplied.

Why: the generic fallback route in `app/artifact/[slug]/page.tsx` intentionally has no artifact-specific dimension analysis, while `ArtifactAnalysis` previously required the prop. This caused the build error at line 130.

No navigation, Artifacts layout, corpus values, analysis copy, or guide-line styling is changed.
