# Evaluate and Finetune the Model

## Purpose

A model isn't finished without knowing how good it actually is, whether that number can be trusted, and what it means for the business. This stage is where a working model from [Build the Model](01-build-the-model.md) becomes a result you can stand behind.

## What you must do

**:material-alert-circle: Must**

- **Select evaluation metrics based on business requirements**: Know why you're optimising for recall, precision, F1, RMSE, or something else.
- **Calculate key metrics** for your model, and for your baseline, so the comparison is explicit.
- **Validate correctly** using an approach appropriate to your data (e.g. train/test split, cross-validation, time-based split if there's a temporal element) and explain why you chose it.
- **Assess leakage** - revisit the leakage check from [Assess Data Quality](../2-data-exploration/02-assess-data-quality.md) specifically for the features that ended up in your model.
- **Assess overfitting** by comparing training vs. validation/test performance and explain what you see.
- **Translate model metrics into business impact** - can you translate your metrics into actual business value? This could be something like money/time saved or business growth.

**:material-alert: Should**

- Create visuals or a short summary of key metrics aimed at a stakeholder audience, not just a metrics table for your own team - see [Build the Power BI Dashboard](../4-dashboards/01-power-bi-dashboard.md) and [Build the Story](../6-business-impact/02-build-the-story.md) for where this ultimately gets used.
- State the limitations of your final model plainly, including where it's likely to perform worse.

## Metrics must be chosen for business reasons

Do not default to accuracy. Ask what error costs the business:

| If the business consequence is... | Consider prioritising |
|---|---|
| Missing a true positive is very costly (e.g. missed fraud/AML case) | Recall |
| A false positive is very costly (e.g. blocking a genuine transaction) | Precision |
| Both matter and are roughly balanced | F1 / balanced metrics |
| The target is a continuous value | RMSE / MAE, chosen based on how errors should be penalised |
| Ranking/prioritisation under limited capacity | Precision at K / lift |

**:material-alert-circle: Must** - be able to answer: *"Why this metric, and not another one?"*

## "Accuracy = X" is not an answer

!!! danger "Not sufficient on its own"
    "Our model achieves 91% accuracy" tells a stakeholder almost nothing on its own - especially under class imbalance, where predicting the majority class every time can already look accurate. Always be able to complete the sentence:

    **"What does this mean for the bank?"**

    See [Quantify Business Impact](../4-dashboards/02-quantify-business-impact.md) for how to answer that properly.

## What this feeds into

Your validated metrics and documented limitations are the direct input to [Quantify Business Impact](../4-dashboards/02-quantify-business-impact.md), and this discussion is required content for [Build the Story](../6-business-impact/02-build-the-story.md) - a credible presentation acknowledges what the model doesn't do well.

## Where to go next

- [Build the Power BI Dashboard](../4-dashboards/01-power-bi-dashboard.md)
