# TORC Batch 99 — hard navigation restore + guide endpoint adjustment

Apply after Batch 98.

Changes only:
- `app/nav.module.css`
- `app/artifacts/artifacts-v4.module.css`

Navigation:
- adds a final authoritative `min-width:761px` override after every older breakpoint;
- explicitly restores the TORC lockup, subtitle, full horizontal nav row, normal button height/padding/type;
- preserves light-gold resting navigation, deeper-gold active state, oxblood Organizations.

Artifacts:
- keeps the approved red guide thickness;
- lowers the upper guide endpoint by another 4px (`-58px` → `-54px`), while keeping the lower endpoint attached to the hero corners.
