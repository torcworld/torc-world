# TORC Batch 33 — Compare Return-State Fix

Apply after Batch 32.

## What changed
- `compare/page.tsx` now waits until the existing `?a=...&b=...` comparison has been restored before synchronizing selection state back into browser history.
- This prevents the initial empty React state from briefly replacing `/compare?a=...&b=...` with `/compare` when returning from a Full Analysis page.
- The comparison remains encoded in the URL, so browser Back returns to the same two artifacts and the rendered comparison results.

No artifact data, analysis copy, layout, or scoring logic was changed.
