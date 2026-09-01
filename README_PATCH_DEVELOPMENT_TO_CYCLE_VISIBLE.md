# TORC sales page — visible Development → Cycle credit

This patch makes the €595 → €995 upgrade path explicit inside the expanded TORC Development package.

## Change

When Development is expanded, a dedicated **CONTINUE TO VERIFY** panel now appears immediately above the Development CTA:

> **Going on to the TORC Development Cycle?**  
> Continue within 30 days and your full €595 Development fee is credited toward the €995 Cycle. **You pay €400 to upgrade.**

The previous plain forward-credit sentence in the Development sidebar was removed to avoid duplicate wording. The existing €195 → €595 credit remains in the Development sidebar for clients arriving from Evaluation.

Both the `app/evaluate-your-work/` implementation and the legacy mirrored `evaluate-your-work/` files are included.
