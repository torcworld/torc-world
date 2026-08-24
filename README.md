# TORC.world starter

A deliberately restrained Next.js starter for TORC.world.

## What is included
- Home
- Canon
- Artifact pages
- Theory placeholder
- Compare placeholder
- About
- Three sample artifact records

## Run locally
1. Install Node.js (current LTS).
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Recommended deployment path
1. Create a GitHub account/repository and upload this project.
2. Create a Vercel account and import the GitHub repository.
3. Vercel detects Next.js automatically and deploys it.
4. In Vercel → Project → Domains, add `torc.world`.
5. Vercel will show the DNS records to add at the company where you registered the domain.
6. After DNS verifies, TORC.world serves this project.

## Later — no rebuild required
- Add Supabase for the artifact database.
- Add Supabase Auth for user accounts.
- Add private file storage for uploads.
- Add Stripe for paid evaluations.
- Add seven independent AI API evaluation jobs plus a non-evaluating aggregator.

## Where to add artifacts now
Edit `lib/artifacts.ts`. Each record automatically appears in the Canon and gets an artifact page.

## Important
Do not put API keys, database passwords, or payment secrets directly in source files. Later they belong in environment variables.
