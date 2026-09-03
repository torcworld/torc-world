# TORC Theory + Submission Privacy build fix

Copy the `app` folder into the root of the TORC website project and merge/replace matching files.

This patch is based on the last working Theory archive. The Submit page now contains its form and pricing components directly in `page.tsx`, so the build no longer depends on resolving `./SubmissionForm` or `./PricingCards`. It also adds the Submission & Privacy trust statement.
