# TORC Theory — hard 5 mm bottom site strip

Base:
- Current integrated archive `Archief(20260904-165325).zip`.

Changed only:
- `app/theory/book/book.module.css`

This time the bottom strip is not created with margin or a child element.
The actual `.readingPage` background itself is split:
- gold through the full reader,
- final 5 mm = normal site background,
- thin black rule exactly 5 mm above the bottom.

The previous helper `.readerBottomGround` is hidden.
Nothing else changed.
