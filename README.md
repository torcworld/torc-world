# TORC Submit — Diagnose + payment acceptance micro-patch

Changed only the Submit Your Artifact flow:

- `app/evaluate-your-work/PricingCards.tsx`
  - Replaces the €195 Evaluation phase label `SEE` with `DIAGNOSE`.
- `app/evaluate-your-work/page.tsx`
  - Replaces `No payment at submission` with `No payment until your artifact is accepted`.
- `app/evaluate-your-work/SubmissionForm.tsx`
  - Updates the matching form note to `No payment is taken until your artifact is accepted. Scope and turnaround are confirmed first.`

No CSS, layout, pricing, package contents, or other pages were changed.
