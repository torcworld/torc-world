# TORC Sitewide Refinement V1

A coordinated refinement of the public/intellectual side of TORC.

## Changed
- `app/layout.tsx`
- `app/nav.module.css`
- `app/site-polish.css` (new)
- `app/page.tsx`
- `app/home.module.css` (new)
- `app/theory/page.tsx`
- `app/theory/theory.module.css` (new)
- `app/about/about.module.css`
- `app/artifacts/artifacts-v4.module.css`

## Homepage
- TORC now has a real institutional identity/hero rather than just an oversized word.
- New visual TORC coordinate/DIP motif using CSS only.
- Clear routes into Archive, Compare, and Theory.
- More tactile coordinate explanation.
- Refined featured-artifact cards.
- Stronger Theory / Living Edition section.
- Replaces the duplicated mini-Organizations page with two concise commercial doors:
  creators and organizations.

## Header
- TORC becomes a compact home/brand lockup.
- Small “Theory Of Representational Consciousness” descriptor on wider screens.
- Submit Your Artifact and Organizations remain the two commercial CTAs.

## Theory
- Becomes a real intellectual gateway, not merely a button before the book.
- Book object, problem statement, coordinate architecture, DIP equation, canonical edition section.
- Existing theory claims preserved.

## About
- Same content, stronger provenance/identity treatment.
- TORC acronym initials become restrained oxblood marks.
- Canonical book gets a warm-paper institutional panel.
- Sections gain rhythm without becoming “marketing”.

## Artifacts
- Intentionally remains the most sober page.
- Creator CTA is warmer and more intentional.
- Better focus/hover states.
- Pagination gets restrained TORC accent.
- Embedded comparison tool receives a subtle warm analytical panel.

## Compare
- No logic changes.
- `site-polish.css` adds a restrained data-console treatment:
  warmer picker panel, clearer hover/focus, dark comparison headline, row feedback.

## Safety
No changes to:
- submission API/backend/SMTP
- artifact data
- compare logic
- book reader
- Organizations page
- Submit page
- payments

No CSS Module contains a global `:root` selector.
