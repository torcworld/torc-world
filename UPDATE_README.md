# TORC.world update — A Serious Man + artifact analysis

Upload these files to the repository root, preserving paths.

## Included
- Adds **A Serious Man** (screenplay) as **3b | 800**, with the seven-evaluator record and consensus report.
- Replaces public-facing **Commission an artifact** messaging on the homepage and artifact archive with **Have your artifact evaluated**.
- Rebuilds `/evaluate-your-work` as the main artifact-analysis service page.
- Redirects the old `/commission` route to `/evaluate-your-work`, so old links no longer expose the discontinued commission product.
- No price has been invented. The page leaves evaluation depth/pricing open until you decide the actual packages.

The old commission API/success files are intentionally not deleted by this patch; they become unreachable through the user-facing flow. They can be removed later once you decide whether any payment code should be reused for evaluation checkout.


## Faust evaluation update
- Promotes `faust` from in-progress to evaluated.
- Consensus DIP: **3c | 883** (7/7 Operational Order agreement).
- Adds the Faust artifact page, seven independent evaluator pages, and the full supplied consensus report.
- Consensus dimensions: RL 9.0 · AD 9.2 · CD 8.6 · ID 8.7 · IC 9.0 · GR 8.3.
- Keeps the artifact-analysis commercial route introduced by this patch; no commission artifacts are restored.
