# TORC Submit Consultancy Rewrite — Build Compatibility v3

Based on the v2 Submit rewrite package.

Additional compatibility correction:
- `ArtifactAnalysis` now accepts `cms?: number` because artifact records returned by `getArtifact()` type CMS as optional.
- Missing CMS renders as an em dash instead of forcing a fabricated numeric fallback.

Previous compatibility fixes retained:
- `range` is optional.
- `title` accepts `ReactNode` for intentional JSX titles such as Nāgārjuna's line-broken title.

No navigation, corpus data, artifact copy, or global CSS is included.
