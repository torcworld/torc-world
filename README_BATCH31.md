# TORC Batch 31 — Dynamic Route Repair

This patch repairs the actual runtime path used by corpus artifacts that do not have their own static `app/artifact/<slug>/page.tsx` route.

## Root cause
Batch 30 shipped the expanded `featuredAnalyses.ts`, but if the deployed `[slug]/page.tsx` was still an older version, those analyses were never read at runtime. That produces exactly the observed symptom: static-route artifacts such as No Country for Old Men look correct, while dynamic-route artifacts such as The Metamorphosis and The Godfather still show the generic placeholder.

## Files
- `app/artifact/[slug]/page.tsx`
- `app/artifact/[slug]/featuredAnalyses.ts`

The route now explicitly loads `featuredAnalyses[a.slug]` and renders `ArtifactAnalysis` with the artifact-specific analysis, six dimensions, boundary, and exceptional section.

Static artifact routes continue to take precedence in Next.js and are not changed by this patch.
