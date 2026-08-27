# TORC Organizations luxury pass + navigation correction

This patch does three things:

1. Fixes the failed Organizations luxury patch by removing the accidentally reintroduced global `:root{}` selector from the CSS module.
2. Keeps all of the richer warm/oxblood Organizations styling and hover behavior.
3. Refines the main navigation:
   - standard links: Artifacts · Theory · Compare · About
   - warm creator CTA: Submit Your Artifact
   - deep oxblood institutional CTA at the far right: Organizations

Files:
- app/for-organizations/organizations.module.css
- app/layout.tsx
- app/nav.module.css

No API, SMTP, submission backend, artifact data, Theory content, About content, or payment code is changed.
