# TORC promoted artifacts — batch 01

Small website patch. It changes only four website files:

- `lib/artifacts.ts`
- `app/artifact/[slug]/featuredAnalyses.ts`
- `app/artifact/[slug]/page.tsx`
- `app/artifacts/page.tsx`

## Added to the public corpus

- Sophocles — *Oedipus Rex* — 3b | 807
- Simone de Beauvoir — *The Second Sex* — G | 887
- Johannes Kepler — *Astronomia Nova* — M | 922
- James Clerk Maxwell — *A Treatise on Electricity and Magnetism* — M | 960
- Franz Kafka — *The Trial* — 3a | 803
- Augustine of Hippo — *Confessions* — 3c | 845
- Alan Turing — *On Computable Numbers, with an Application to the Entscheidungsproblem* — M | 959
- Ingmar Bergman — *Persona* — 3b | 824
- Charles Lyell — *Principles of Geology* — M | 898
- Miguel de Cervantes — *Don Quixote* — 3b | 863
- William Shakespeare — *King Lear* — 3b | 846
- Ibn al-Haytham — *Book of Optics* — M | 922
- John Rawls — *A Theory of Justice* — G | 909
- Michel Foucault — *Discipline and Punish* — G | 884
- Milan Kundera — *The Unbearable Lightness of Being* — 3b | 815
- William Harvey — *De Motu Cordis* — M | 890
- Albert Einstein — *On the Electrodynamics of Moving Bodies* — M | 953

Each entry includes its six public dimension scores and a full artifact-specific public analysis using the existing featured-analysis page structure.

## Deliberately not changed

- Shannon was not touched; it was already on the site.
- Mendel was not added; that case remains parked for the M discussion.
- No other artifact entries or analysis texts were rewritten, except the existing Kundera featured analysis, which was updated from the earlier 3c reading to the new 3b determination.
- No visual CSS was changed.
- No homepage, methodology, compare, submit, theory, or organization page was changed.

## Shared compatibility changes required by this batch

- Added `M` to the Operational Order display-name map so new M pages render correctly.
- Added `M` to the archive sort order while leaving existing legacy `GΩ` entries untouched.
- Updated the shared 3a display label from `Corrective recursive consciousness` to the current `External recursive consciousness`, required for the new Kafka 3a page.

## Validation

- TypeScript syntax was checked on all four changed files. The isolated patch environment reports only unresolved Next/React/CSS imports and pre-existing type-resolution issues because dependencies are not installed there; no new parser/syntax errors were produced.
- Slug audit: all 17 promoted artifacts occur exactly once in `lib/artifacts.ts` and exactly once in `featuredAnalyses.ts`.
- Diff audit: only the four files listed above changed.
