# TORC Batch 49 — Actual Global Ground Token Fix

Apply after Batch 48.

Batch 48 targeted `site-polish.css`, but the app's real site background is defined in
`app/globals.css` through the global `--bg` token. That is why the desktop environment
could remain visually grey.

This patch changes the actual global token:

- old site ground: `#f5f2ea`
- new site ground: `#ddceb3`

`#ddceb3` is the existing light ochre / muted gold used by the neutral
“Choose a question or leave this open” focus-control family.

It also explicitly binds `html, body` to that token with `!important` so the viewport
environment cannot continue showing the old grey.

Cards and page components with their own explicit backgrounds remain their own colors.
No layout, copy, navigation, pricing behavior, forms, routes, Theory content, or artifact
data are changed.
