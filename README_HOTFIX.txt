TORC deployment hotfix

Why this exists:
- The previous Batch 2 patch replaced app/artifact/[slug]/page.tsx with a dispatcher that imports other route pages.
- The later "fixed" patch omitted that file, so applying it did not restore the already-modified route in GitHub.
- This hotfix explicitly restores app/artifact/[slug]/page.tsx to the stable Batch 1 version.
- Dedicated static routes (including 2001: A Space Odyssey and the Batch 2 artifacts) remain intact and will take precedence for their exact URLs.

Apply this on top of the current repository.
