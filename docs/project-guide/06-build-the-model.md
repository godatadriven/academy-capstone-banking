# 6. Build the Model

## Purpose

Turn your business question into a well-formulated analytical or modelling problem, and build a solution you actually understand and can defend - not just one that produces a good-looking metric.

!!! important "This is not primarily an algorithm exercise"
    The quality of your reasoning and business relevance matters more than using a sophisticated algorithm. A well-justified logistic regression, clearly explained and correctly validated, is a stronger capstone submission than an unexplained ensemble model nobody on the team can walk through. **No specific algorithm is mandated.**

## What you must do

**:material-alert-circle: Must**

- **Translate the business question into a problem type** - classification, regression, forecasting, ranking, or another formulation - and justify why.
- **Build a baseline** before building anything more complex (see below).
- **Select model(s)** appropriate to the problem, and justify the choice against your business requirements - not just against a leaderboard metric.
- **Select evaluation metrics based on business requirements**, not by default. Know why you're optimising for recall, precision, F1, RMSE, or something else - see [Quantify Business Impact](07-quantify-business-impact.md).
- **Validate correctly** - use an approach appropriate to your data (e.g. train/test split, cross-validation, time-based split if there's a temporal element) and explain why you chose it.
- **Assess leakage** - revisit the leakage check from [Assess Data Quality](04-assess-data-quality.md) specifically for the features that ended up in your model.
- **Assess overfitting** - compare training vs. validation/test performance and explain what you see.
- **Translate model metrics into business impact** - see [Quantify Business Impact](07-quantify-business-impact.md). A metric alone is not a finished answer.

**:material-alert: Should**

- Perform feature engineering where it's relevant to the problem, and explain the reasoning behind engineered features (not just that you tried them).
- Compare at least two modelling approaches (which can include a simple vs. a more complex model) to justify your final choice.
- State the limitations of your final model plainly, including where it's likely to perform worse.

**:material-lightbulb-outline: Could**

- Explore basic explainability techniques (e.g. feature importance, partial dependence) if useful for the stakeholder story in [Build the Story](13-build-the-story.md).

## Problem formulation - think before you build

**:material-alert-circle: Must** - write down your problem type and justify it before building anything.

| Business question shape | Likely problem type |
|---|---|
| "Will this happen? (yes/no)" | Classification |
| "How much / how many?" | Regression |
| "What will this look like over time?" | Forecasting |
| "Which of these should we prioritise?" | Ranking / scoring |

## Always build a baseline first

**:material-alert-circle: Must** - before building a "real" model, establish a baseline: the simplest reasonable approach, such as a majority-class prediction, a simple rule, or a basic linear/logistic model. The baseline answers one question: *"Is a more complex approach actually earning its complexity?"*

!!! example "Why a baseline matters"
    If a simple rule ("flag anyone with 2+ missed payments") already catches 70% of defaults, and your sophisticated model only improves that to 74% at the cost of being uninterpretable, that's a genuinely important finding - not a disappointing one. Report it as such.

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

    See [Quantify Business Impact](07-quantify-business-impact.md) for how to answer that properly.

## Common pitfalls to actively check for

- **Leakage** - a feature that's only available after the outcome (see [Assess Data Quality](04-assess-data-quality.md)).
- **Overfitting** - strong training performance that doesn't hold on validation/test data.
- **Incorrect validation** - e.g. randomly splitting time-ordered data, letting future information leak into training.
- **Optimising the wrong metric** - a high score on a metric the business doesn't actually care about.

## What this feeds into

Your model's output and evaluation are the direct input to [Quantify Business Impact](07-quantify-business-impact.md), and your validation/limitations discussion is required content for [Build the Story](13-build-the-story.md) - a credible presentation acknowledges what the model doesn't do well.

## Where to go next

- [Quantify Business Impact](07-quantify-business-impact.md)
- Required deliverable checklist: [Required Deliverables - Modelling](../deliverables/required-deliverables.md#5-modelling)
