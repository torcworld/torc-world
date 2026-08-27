# TORC — Nodemailer TypeScript Build Fix

One-file deployment patch.

Replaces only:
- package.json

Fix:
- Adds `@types/nodemailer` to devDependencies.
- This resolves the Vercel build error:
  `Could not find a declaration file for module 'nodemailer'`.

No website content, styling, submission logic, DNS, or email settings are changed.
