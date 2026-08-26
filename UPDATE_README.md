# TORC Artifacts polish — forced refresh repair

This patch intentionally uses a NEW CSS module filename (`artifacts-v2.module.css`) and changes the page markup so deployment cannot silently reuse the previous styling asset.

Changes:
- More vertical breathing room between Artifacts and the evaluation CTA.
- Black evaluation button sits clearly below its descriptive copy.
- Compare block is larger and more legible without becoming dominant.
- Search/filter labels are darker and bolder.
- Operational Order / Cognitive Magnitude table sort controls are clearly black, bold, underlined, and clickable.
- No global CSS changes.
