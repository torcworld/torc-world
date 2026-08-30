# TORC Batch 64 — Unified Gold Corpus + Thin Oxblood Rails + Desktop Active Nav

Apply after Batch 63 SAFE.

Artifacts:
- `Curated TORC analyses` loses the italic/cheap treatment and becomes a restrained, tracked institutional label in warm gold.
- Search inputs/selects are no longer white. They use the same light gold as the search surround.
- The black side rails are replaced by extremely thin 1px oxblood rules, thinner than the search-console border.
- A new corpus surface wraps the toolbar, table, pagination and Compare section, all in the same light navigation gold (`#d9c7a6`).
- Compare remains separated structurally with a thin oxblood top rule rather than another heavy box.

Desktop navigation:
- Ships the known TorcNav root layout explicitly.
- Adds a high-specificity global desktop selector in `site-polish.css` for links with `aria-current="page"`.
- This avoids relying on CSS-module class precedence for the persistent current-page gold.
- Mobile behavior is left alone.

No artifact data, filters, sorting, pagination logic, scores, routes, analysis content or Submit content are changed.
