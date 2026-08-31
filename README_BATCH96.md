# TORC Batch 96 — Artifacts exact global ground + restored upper guide

Apply after Batch 95.

Changes only `app/artifacts/artifacts-v4.module.css`.

- Artifacts empty side/gap ground now uses `var(--bg)` directly, i.e. the exact same global background token as the navigation and other pages. No guessed hex value.
- Restores the thin translucent grey horizontal rule at the top of the Artifacts composition.
- The two existing oxblood hero-edge hairlines keep their 52px upward extensions and now meet that horizontal rule exactly.
- No markup, data, analyses, routing, mobile layout, or Theory changes.
