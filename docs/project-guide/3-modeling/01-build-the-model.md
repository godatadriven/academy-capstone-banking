# Build the Model

## Purpose

Turn your business question into a well-formulated analytical or modelling problem, and build a first working solution you understand and defend.

!!! important "This is not primarily an algorithm exercise"
    The quality of your reasoning and business relevance matters more than using a sophisticated algorithm. A well-justified logistic regression, clearly explained and correctly validated, is a stronger capstone submission than an unexplained ensemble model nobody on the team can walk through. **No specific algorithm is mandated.**

## What you must do

**:material-alert-circle: Must**

- **Translate the business question into a problem type** - classification, regression, forecasting, ranking, or another formulation - and justify why.
- **Distinguish between candidate modelling algorithms** and pick the one that actually fits your problem, your data volume, and your need for interpretability - not the most advanced one you know.
- **Build a baseline** before building anything more complex (see below).
- **Build a working model** in your tool of choice (e.g. Python and scikit-learn) once the baseline is beaten or matched.
- **Select model(s)** appropriate to the problem, and justify the choice against your business requirements - not just against a leaderboard metric.

**:material-alert: Should**

- Perform feature engineering where it's relevant to the problem, and explain the reasoning behind engineered features (not just that you tried them).
- Compare at least two modelling approaches (which can include a simple vs. a more complex model) to justify your final choice.
- Use more advanced techniques - feature selection, feature generation, hyperparameter tuning, additional data processing - once a simpler version is working, not before.
- Prioritise which improvements to pursue next rather than trying everything at once - see [Build an MVP](../5-production/01-build-the-mvp.md) for the iterative mindset this stage should follow.

**:material-lightbulb-outline: Could**

- Explore basic explainability techniques (e.g. feature importance, partial dependence) if useful for the stakeholder story in [Build the Story](../6-business-impact/02-build-the-story.md).

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

## What this feeds into

Your working model and its baseline comparison are the direct input to [Evaluate the Model](02-evaluate-the-model.md), where you decide which metrics actually matter, validate properly, and check for leakage and overfitting.

## Where to go next

- [Evaluate the Model](02-evaluate-the-model.md)
