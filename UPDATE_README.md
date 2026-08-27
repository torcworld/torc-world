# TORC — Live Artifact Submission Backend (Namecheap Private Email)

UPDATE/OVERLAY PATCH — not a complete repository.

This connects the existing Submit Your Artifact form to the new Namecheap Private Email mailbox.

## What changes
- Replaces the placeholder/non-connected submission endpoint with real SMTP delivery through Namecheap Private Email.
- Sends the uploaded artifact as an email attachment to TORC.
- Sends the submitter an automatic confirmation email.
- Keeps submission as a scope request; no payment is taken.
- Adds a hidden honeypot field for basic bot filtering.
- Changes the direct-upload maximum from 8 MB to 4 MB because Vercel Functions reject request bodies above 4.5 MB.
- Accepts PDF, DOC, DOCX, TXT, and MD.

## Required Vercel environment variables
Add these in Vercel → torc-world → Settings → Environment Variables:

- `TORC_MAIL_USER` = `contact@torc.world`
- `TORC_MAIL_PASSWORD` = the password for the contact@torc.world Namecheap mailbox
- `TORC_SUBMISSIONS_EMAIL` = `contact@torc.world`

Set them for Production. Do not put the mailbox password in GitHub or source code.
After saving the variables, redeploy the latest Production deployment.

## Namecheap SMTP used
- Host: `mail.privateemail.com`
- Port: `465`
- SSL: enabled

## Files
- `app/api/artifact-submission/route.ts`
- `app/evaluate-your-work/SubmissionForm.tsx`
- `package.json` (adds nodemailer)
