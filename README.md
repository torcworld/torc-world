# TORC Analysis — Six-Dimensional Model refinement

Changed only:
- `app/artifact/components/ArtifactAnalysis.tsx`
- `app/artifact/components/artifact-analysis.module.css`

Changes:
- Removes “Definition + artifact analysis” from all six closed dimension rows.
- Makes the six closed rows materially more compact vertically.
- Hover/open state uses TORC's light-brown interaction material (`#d9c7a6`) for clearer clickability, with only a very restrained positional response.
- Expanded dimensions now show, in order:
  1. Formal definition.
  2. In plain language.
  3. Why this artifact scores [score].
- Uses the six formal definitions and six plain-language definitions supplied by the user.
- Existing artifact-specific score explanations remain unchanged.
