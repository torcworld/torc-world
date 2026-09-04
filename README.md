# TORC Theory — current-source 5 mm bottom ground

Base:
- `Archief(20260904-165325).zip` supplied by the user.

Changed only:
- `app/theory/book/book.module.css`

Exact change:
- On the opened-book route only (`.bookPage:has(.bookReader)`), the outer page background is the normal site background.
- Adds exactly 5 mm bottom padding to that outer page, after the complete reader.
- Removes bottom margin from the reader itself to prevent margin/collapse ambiguity.
- No TSX, colors inside the reader, book styling, top frame, or other pages changed.
