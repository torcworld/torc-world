# TORC Batch 35 — Artifact Development Protocol + Submit page

This patch formalizes the new TORC development method and updates the public Submit Your Artifact page to explain it.

## Internal protocol
- `internal/TORC_Artifact_Development_Protocol_v0.1_CANDIDATE.md`
- Separates Evaluation, Development, and Re-evaluation.
- Defines Current Architecture, Latent Architecture, Development Gap, Residual Sufficiency, Minimum Structural Intervention, Propagation, Preservation Constraint, Operational Realization, and Order Escalation.
- Defines a 13-stage operating procedure and package-specific SOPs for €195 / €495 / €895.
- Adds anti-gaming checks, dimension-level development use, client-language rules, calibration logging, and Camera Obscura as the first calibration case.

## Website
Changes only:
- `app/evaluate-your-work/page.tsx`
- `app/evaluate-your-work/PricingCards.tsx`
- `app/evaluate-your-work/submit.module.css`

The public language now explains TORC Development as structural diagnosis: identify the strongest architecture already present, locate where it is under-realized, and prioritize minimal high-leverage interventions. The Development Cycle is explicitly diagnose → develop → revise → blind re-evaluate.

## Deployment
Apply after the current deployed patch chain. This patch does not touch Compare, artifact routes, corpus data, navigation, Theory, Organizations, API submission handling, or Batch 32/33 fixes.


## Privacy / deployment

This website patch intentionally contains no internal TORC development protocol, calibration notes, or proprietary development machinery.
