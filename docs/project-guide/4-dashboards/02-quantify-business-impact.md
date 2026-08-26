# Quantify Business Impact

## Purpose

A model or analysis is only useful once its performance has been translated into terms the stakeholder actually cares about: money, operations, customers, and risk. This stage is all about demonstation what the model is worth to the business."

## What you must do

**:material-alert-circle: Must** - translate your analytical or model performance into:

- **Financial impact** where possible connecting back to your [opportunity sizing](../1-business-opps/04-size-the-opportunity.md). How much of the estimated opportunity does your solution actually capture?
- **Operational impact** - what changes in how people work (e.g. fewer manual reviews, a shorter contact list, a different prioritisation order)?
- **Customer impact** - how does this affect customers, positively or negatively (e.g. more friction, better-targeted offers, faster fraud resolution)?
- **Risk** - new risks introduced by acting on the model (e.g. regulatory, reputational, fairness).
- **Trade-offs**, explicitly, including false positives vs. false negatives where relevant to your use case.
- **Resource implications** - what it would take to actually act on your model's output (people, time, systems).

**:material-alert: Should**

- Compare the value your solution actually captures against your original opportunity estimate from [Size the Opportunity](../1-business-opps/04-size-the-opportunity.md), explaining any gaps.
- Where trade-offs exist, show the effect of moving a decision threshold (e.g. a table or chart of precision/recall or cost at different thresholds), not just one operating point.

## False positives vs. false negatives - make it concrete

Every classification-style use case has a real, asymmetric cost structure. Naming it explicitly is often more valuable to a stakeholder than the model's headline metric.

!!! example "Cost framing by use case"
    - **Fraud detection:** a false positive blocks a genuine customer transaction (friction, complaints, possible churn); a false negative lets fraud through (direct financial loss). Which costs more, and by how much, changes where you'd set the threshold.
    - **Collections:** a false positive wastes a contact attempt on someone who wouldn't have paid anyway (low cost, mostly opportunity cost); a false negative means a customer who *would* have repaid if contacted wasn't prioritised (lost recovery).
    - **AML monitoring:** a false negative can mean a genuine money-laundering case goes undetected (severe regulatory and reputational risk); a false positive means an unnecessary investigation (analyst time cost). The two are rarely symmetric.

**:material-alert-circle: Must** - for your use case, state which error type is more costly, roughly how much more costly, and how that should influence your model's operating threshold.

## From model output to a business number

A simple, defensible pattern:

```
Business impact ≈ (correct actions enabled by the model) × (value per correct action)
                 − (cost of incorrect actions the model causes)
                 − (cost of operating the solution)
```

!!! example "Illustrative only - figures are placeholders"
    If your model correctly flags `[N]` more at-risk customers than random prioritisation, and each successful retention is worth `[£X]`, while each false-positive contact costs `[£Y]` in wasted effort, your net estimated impact is `N × £X − (false positives × £Y)`, again shown across a sensitivity range rather than a single number.

## What "good enough" looks like

There is no universal accuracy or AUC threshold that makes a model "good enough" - it depends entirely on the decision it supports and the cost of errors. A model is good enough when:

- It outperforms your baseline by a business-meaningful margin (not just a statistically detectable one).
- Its error trade-offs are acceptable given the relative cost of false positives vs. false negatives.
- Its limitations are understood well enough that the stakeholder can make an informed decision about whether to act on it.

## What this feeds into

This stage produces the numbers and trade-offs that anchor your [final recommendation](../6-business-impact/02-build-the-story.md) and your team's answer to "what is the expected business impact?"

## Where to go next

- [Build an MVP](../5-production/01-build-the-mvp.md)
