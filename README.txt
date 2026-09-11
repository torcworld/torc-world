TORC PATCH — REMOVE 15 ARTIFACTS + ANALYSES

This patch is cumulative from the latest artifact dataset.

1. Copy `lib/artifacts.ts` into your repo, replacing the existing file.
2. From the repository root run:

   python apply-removals.py

   (Copy `apply-removals.py` to the repository root first.)

The script removes any dedicated analysis/evaluator/report folders for these artifacts and also removes stale entries from `app/artifact/[slug]/featuredAnalyses.ts` when present.

REMOVED:
- A Mathematical Theory of Communication (a-mathematical-theory-of-communication)
- Incompleteness Theorems (on-formally-undecidable-propositions)
- De revolutionibus (copernicus-de-revolutionibus)
- Mathematical Principles of Natural Philosophy (philosophiae-naturalis-principia-mathematica)
- General Relativity (die-grundlage-der-allgemeinen-relativitatstheorie)
- On the Origin of Species (on-the-origin-of-species)
- The Structure of Scientific Revolutions (the-structure-of-scientific-revolutions)
- The Logic of Scientific Discovery (the-logic-of-scientific-discovery)
- Astronomia Nova (astronomia-nova)
- A Treatise on Electricity and Magnetism (a-treatise-on-electricity-and-magnetism)
- On Computable Numbers… (on-computable-numbers)
- Principles of Geology (principles-of-geology)
- Book of Optics (book-of-optics)
- De Motu Cordis (de-motu-cordis)
- On the Electrodynamics of Moving Bodies (on-the-electrodynamics-of-moving-bodies)

After removal the archive dataset contains 63 artifacts.

No other artifact records are changed.
