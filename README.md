# TORC Submit — package-aware focus questions patch

Small reversible patch. Apply over the current site version.

Changed only:
- `app/evaluate-your-work/SubmissionForm.tsx`

What changed:
- The optional “What do you most want TORC to answer?” list now changes with the selected package.
- €195 Evaluation / Diagnose shows diagnostic questions only.
- €595 Development adds intervention and revision-strategy questions.
- €995 Development Cycle includes the Development questions plus revision-cycle / re-evaluation questions.
- Reworded the Operational Order focus from a redundant request for the standard score to: “Explain in depth why the artifact reaches its Operational Order.”
- Changing package clears a previously selected focus question so an out-of-scope question cannot remain selected.
- No CSS, pricing, layout, API route, or payment wording changed.
