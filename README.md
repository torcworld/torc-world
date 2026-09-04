# TORC Artifacts — mirrored pagination rule

Changed only:
- `app/artifacts/artifacts-overhaul.module.css`

Change:
- Adds one black horizontal rule directly below the pagination.
- It has the same artifact-column width as the existing rule above the pagination.
- The rule sits 20px below the pagination, matching the 20px distance from the upper rule to the pagination.
- Removes the previous transform-based Compare positioning so the geometry is clean and explicit.
- Compare Artifacts begins below this new rule.
