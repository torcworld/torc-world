# TORC — Submit CTA direct-to-pricing patch

Changed only five CTA source files:

- `app/TorcNav.tsx`
- `app/page.tsx`
- `app/artifact/[slug]/page.tsx`
- `app/artifact/components/ArtifactAnalysis.tsx`
- `app/artifact/the-great-gatsby/page.tsx`

What changed:
- Every existing site CTA/link labeled “Submit Your Artifact” / “Submit your artifact” now points to:
  `/evaluate-your-work#pricing`
- The Submit page itself is unchanged.
- The pricing section already has `id="pricing"`, so these CTAs land directly on the €195 / €595 / €995 choice cards.
- Direct navigation to `/evaluate-your-work` still opens the page at the top for visitors who want the full explanation.
- The actual submission-form button (“Submit artifact for review”) is unchanged.
