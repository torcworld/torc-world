# TORC Analysis frame + Organizations hover correction

Changed only:
- `app/artifact/artifact-frame.module.css`
- `app/nav.module.css`

Analysis:
- Removes the vertical frame extensions above the gold/analysis composition.
- Moves the composition upward so its top begins about 3mm below the detached guide.
- Adds delicate 1px charcoal horizontal closures across the tops of both gold fields.
- Keeps the existing delicate side rules on the gold fields.
- Reduces the bottom closure to the same delicate 1px charcoal weight.

Organizations:
- Hover/focus explicitly remains gold (`#c7aa76`), matching the navigation family.
