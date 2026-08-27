# TORC — Submit Your Artifact first draft

Overlay patch. Apply this on top of the current TORC.world repository; it does not replace the rest of the site.

## What changes
- Rebuilds `/evaluate-your-work` as the new **Submit Your Artifact** service page.
- Positions TORC as a development instrument, not conventional coverage.
- Adds Operational Ceiling, Cognitive Magnitude Development, and False-Depth Audit language.
- Adds founding packages:
  - TORC Evaluation — €149
  - TORC Development — €349 founding rate (standard €495)
  - TORC Deep Analysis — from €695
- Adds the “Higher isn’t always better” safeguard.
- Adds a real upload form: name, email, title, type, package, file, notes, permission.
- Submission is explicitly a scope request; no payment is taken automatically.

## Submission delivery
The included API route sends the submitted form and file to TORC by email using Resend's email API. Configure these deployment environment variables:

- `RESEND_API_KEY` — your Resend API key
- `TORC_SUBMISSIONS_EMAIL` — the inbox that should receive submissions
- `TORC_SUBMISSIONS_FROM` — optional verified sender, e.g. `TORC Submissions <submissions@torc.world>`

The form accepts PDF, DOC, DOCX, TXT and MD up to 8 MB. Until the environment variables are configured, it fails safely and tells the visitor that online submission delivery is not connected rather than pretending the file was received.

Important: the sender domain/address used with Resend must be configured/verified there before production delivery.

## Files
- `app/evaluate-your-work/page.tsx`
- `app/evaluate-your-work/SubmissionForm.tsx`
- `app/evaluate-your-work/submit.module.css`
- `app/api/artifact-submission/route.ts`
