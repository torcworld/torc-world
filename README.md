# TORC homepage gold/clickable refinement — FIXED

This replaces the previous refinement patch.

The previous ZIP accidentally wrote literal `\\n` escape sequences into `app/home.module.css` instead of real line breaks. That can cause the stylesheet/build to fail. This fixed patch contains the same intended visual changes with valid CSS formatting.

Replace:
- `app/page.tsx`
- `app/home.module.css`
