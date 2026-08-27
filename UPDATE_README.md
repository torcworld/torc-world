# TORC Submission Form 4 MB Fix

This is a one-file overlay patch.

It replaces only:
- app/evaluate-your-work/SubmissionForm.tsx

Changes:
- visible upload limit now says 4 MB instead of 8 MB
- client-side validation prevents files above 4 MB
- adds the hidden anti-bot honeypot field expected by the backend
- keeps the existing /api/artifact-submission endpoint
