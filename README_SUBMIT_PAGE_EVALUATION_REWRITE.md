# Submit Your Artifact / Evaluate Your Work — product architecture rewrite

This version rewrites the `/evaluate-your-work` page around the product logic developed from the €195 Evaluation calibration work.

## Core product logic

- Evaluation = SEE the work clearly.
- Development = INTERVENE in the work.
- Development Cycle = VERIFY that the revision actually changed the artifact.

## Main changes

- Reframed the €195 Evaluation around governing architecture, strongest structural achievements, the central Development Gap, and the highest-leverage development question.
- Moved TORC classification and scoring into a supporting/diagnostic role rather than making them the main value proposition.
- Added higher-order potential only as a conditional, artifact-grounded deliverable.
- Made the Evaluation/Development firewall explicit: complete diagnosis at €195; detailed repair map and intervention design at €595.
- Reframed the €595 package around Current Architecture, Latent Architecture, residual explanation, 3–5 interventions and propagation analysis.
- Reframed the €995 package around independent before/after verification.
- Updated the hero, process strip, product cards, expanded card copy, development principle, upgrade band and submission form language to match the same product architecture.
- Preserved the existing small-card → expanded-detail interaction.

## Changed files

- `app/evaluate-your-work/page.tsx`
- `app/evaluate-your-work/PricingCards.tsx`
- `app/evaluate-your-work/SubmissionForm.tsx`
- `app/evaluate-your-work/submit.module.css`
- Mirrored the pricing/CSS changes in the legacy root `evaluate-your-work/` copy present in the archive.

## Build note

A local Next.js build could not be completed in the sandbox because the archive did not include `node_modules`, and dependency installation timed out. The changes are limited to copy, JSX data/rendering already used by the page, and a small CSS addition.
