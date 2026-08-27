# TORC Organizations build fix

Removes the accidental global `:root{}` selector from:
`app/for-organizations/organizations.module.css`

Next.js CSS Modules require local selectors. No design or backend behavior is changed.
