# TORC Batch 32 — Safe Dynamic Route Restore

This patch replaces the Batch 31 dynamic dispatcher with the last known working dynamic route architecture, while retaining the full artifact-specific `featuredAnalyses` dataset.

Why: Batch 31 replaced the entire `[slug]/page.tsx` with a simplified dispatcher. That was unnecessary and introduced deployment risk. Batch 32 restores the proven route structure (including the existing War and Peace / 2001 safeguards and `GenericArtifact` path) and only relies on `featuredAnalyses` for artifact-specific content.

Files:
- `app/artifact/[slug]/page.tsx`
- `app/artifact/[slug]/featuredAnalyses.ts`

Apply this after Batch 30/31. It supersedes Batch 31's `page.tsx`.
