# TORC Batch 63 SAFE

Use this instead of BOTH earlier Batch 63 attempts. Apply directly after Batch 62.

Why:
- The earlier attempts changed the active-nav implementation too aggressively.
- This version keeps the known Batch 62 TorcNav logic and only adds one local CSS-module root class.
- `aria-current="page"` is then styled beneath that real local root, which avoids the earlier global/local selector problem.

Changes:
- Current Artifacts / Theory / Submit navigation button stays deeper gold while that route is active.
- Artifacts gets the Submit-family charcoal header with large white title and oxblood top line.
- Search/filter console gets the lighter resting-navigation gold and oxblood frame.

No inline-style navigation logic. No new global class. No artifact route or analysis changes.
