# TORC.world — payment setup

The site now includes a working Stripe Checkout integration for **Commission an Artifact — $9.99**.

## What is already implemented

- `/commission` — public artifact commission form
- duplicate-title check against the current artifact database
- optional named or anonymous commissioner credit
- $9.99 Stripe Checkout session creation
- artifact/commissioner details stored as Stripe Checkout metadata
- `/commission/success` confirmation page
- `/evaluate-your-work` Coming Soon page
- no card details are handled or stored by TORC.world

## One account-side step is still required

Create or use a Stripe account and obtain its **Secret key**.

In Vercel:

1. Open the TORC.world project.
2. Settings → Environment Variables.
3. Add:
   - Name: `STRIPE_SECRET_KEY`
   - Value: your Stripe secret key (`sk_live_...` for live payments; `sk_test_...` for testing).
4. Apply it to Production (and Preview if desired).
5. Redeploy.

No Stripe product or Price ID is required for this version: the server creates a one-time $9.99 Checkout line item directly.

## Fulfillment in version 1

There is deliberately no automated TORC evaluation trigger yet.

After payment, open Stripe Dashboard → Payments / Checkout Sessions. The session metadata contains:

- artifact title
- creator
- year
- artifact type
- commissioner display name
- commissioner email
- attribution mode
- identification notes

Process the commission manually with the existing TORC methodology, publish it, then add the commissioner attribution to the artifact page.

## Before opening to real customers

Add/confirm:
- a public contact email
- privacy policy
- terms / commission policy
- cancellation/refund policy and turnaround language
- Stripe account identity/business/tax settings appropriate to your situation

For live launch, test one commission using Stripe test mode first.

## Attribution wording

The public commission flow now highlights optional permanent credit, using `Commissioned by A. Smith · September 2026` as the generic example.
