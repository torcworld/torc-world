# TORC Living Edition — restored reading design + chapter navigation

This patch keeps the revised Living Edition manuscript (including the Chapter Seven wording change), restores the book-style paper layout and chapter treatment, and adds a discreet table of contents for jumping between Personal Motivation, Parts, Chapters 1–9, and the Epilogue.

The contents control fades when the reader is inactive, wakes when the pointer moves / the page scrolls / the screen is touched, and expands only on hover or focus. On mobile it becomes a compact floating Contents pill.

Replace the matching files under `app/theory/book/` and redeploy. No artifact/evaluation data is changed.
