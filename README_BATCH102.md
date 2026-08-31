# TORC Batch 102 — isolated nav root + two corpus additions

Apply after Batch 101.

Navigation
- Replaces TorcNav markup and nav.module.css together.
- Removes the legacy global class names `nav`, `navlinks`, and `brand` from TorcNav.
- The navigation now lives entirely in CSS-module classes, preventing accumulated global `.nav`/`.navlinks`/`.brand` rules from collapsing or hiding the desktop lockup/buttons.
- Desktop/tablet navigation is explicit from 761px upward; mobile 2×2 navigation is only <=760px.
- Restores TORC lockup + subtitle and full Artifacts / Theory / Submit Your Artifact / Organizations button geometry.

Corpus
- Adds John Kennedy Toole, *A Confederacy of Dunces* — 2 | 743.
- Adds H. J. Eysenck, *Genius: The Natural History of Creativity* — G | 833.
- Uses medians from five independent v1.6.3 evaluations for CMS and each dimension.
- Adds full public-facing featured analyses for both artifact routes.

No Artifacts page TSX is included. No Artifacts layout/color/guide CSS is changed in this batch.
