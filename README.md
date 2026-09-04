# TORC Theory — real 5 mm bottom website-ground strip

Changed only:
- `app/theory/book/book.module.css`
- `app/theory/book/read/page.tsx`

Correction:
- The previous CSS-only margin/pseudo-element approach did not produce a visible strip.
- The opened-book route now contains a real final 5 mm element using the normal site background `var(--bg)`.
- The reader wrapper's large bottom padding is removed so the strip sits directly after the completed Theory composition.
- A thin black line separates the gold composition from the 5 mm site-ground strip.
- All previous Theory color/frame changes remain in the CSS base.
