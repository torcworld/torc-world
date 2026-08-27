# TORC — Navigation + Living Edition Contents Discovery

UPDATE/OVERLAY PATCH — not a complete repository.

Changes:

## Living Edition
- The table of contents opens automatically when the reader first enters the book page.
- It remains visibly open for about 5 seconds if the reader does nothing.
- Clicking/tapping into the reading page collapses it immediately.
- After that it returns to the existing discreet/fading Contents control.
- Hover/focus/tap still makes the contents available whenever needed.
- The manuscript, book-paper styling, chapter formatting, and author/title presentation are preserved.

## Main navigation
New order:
- Artifacts
- Theory
- Compare
- Organizations
- About
- Submit Your Artifact

Compare is restored as a first-class navigation destination now that the comparison page has a stronger explanatory/teaching role.

## Submit Your Artifact
- Replaces the navigation wording `Evaluate an Artifact` with `Submit Your Artifact`.
- Still points to the existing `/evaluate-your-work` route; no service functionality is removed.
- Styled as a restrained warm-toned CTA, separated visually from the ordinary navigation links.
- Designed to stand out as the primary commercial action without turning the header into an advertising banner.

Files:
- app/layout.tsx
- app/nav.module.css
- app/theory/book/BookNavigator.tsx
- app/theory/book/book.module.css
- app/theory/book/page.tsx
