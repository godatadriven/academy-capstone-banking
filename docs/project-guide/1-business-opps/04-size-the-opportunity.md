# Size the Opportunity

## Purpose

Before investing weeks into data and modelling work, estimate whether the problem is actually worth solving and what the impact would be if it were solved well. Opportunity sizing keeps the project grounded in business value rather than technical interest.

## What you must do

**:material-alert-circle: Must**

- Apply an opportunity sizing process to estimate the **financial and/or operational opportunity** at stake if the business problem is solved (e.g. reduced losses, recovered revenue, hours saved, risk avoided).
- Document every **assumption** used to produce that estimate, explicitly and separately from the calculation itself.
- Show your working - the estimate should be reproducible by someone reading your documentation, not just a number on a slide.

**:material-alert: Should**

- Run a **sensitivity analysis**: show how the opportunity estimate changes under optimistic / base / pessimistic assumptions. Stakeholders trust a range with clear drivers far more than a single confident-looking number.
- Revisit your opportunity estimate once you have real findings from [Explore the Data](../2-data-exploration/03-explore-the-data.md) and a working model from [Evaluate the Model](../3-modeling/02-evaluate-the-model.md) - your first-pass estimate is a hypothesis too.

**:material-lightbulb-outline: Could**

- Compare the opportunity size against the likely cost of building and operating the solution, to sanity-check that it's worth pursuing at all.

## When you don't have the financial inputs you need

The data you source may not contain everything needed to size the opportunity precisely (e.g. cost per false positive, revenue per retained customer, cost of an agent-hour). This is expected.

!!! info "Placeholder for missing business inputs"
    `[BUSINESS ASSUMPTIONS / UNIT ECONOMICS TO BE PROVIDED OR AGREED]`

    Where these values aren't supplied, you **may** define your own reasonable, realistic assumptions. State them clearly, explain why they're plausible for a bank of this type, and use them consistently across the project. Do not silently assume a number and use it without flagging it.

## A simple sizing structure

A useful pattern for opportunity sizing:

```
Opportunity ≈ (number of cases affected) × (value per case) × (% addressable by your solution)
```

!!! example "Illustrative only - figures are placeholders, not real requirements"
    Collections use case:

    - Overdue accounts per month: `[N]` *(from data)*
    - Average recoverable balance per account: `[£X]` *(assumption - state why)*
    - Estimated uplift in recovery rate from better prioritisation: `[+Y percentage points]` *(assumption, ideally sensitivity-tested)*
    - **Estimated opportunity:** `N × £X × Y%` per month, shown across pessimistic / base / optimistic assumptions.

    Do not treat these example figures as targets for your own project - your numbers come from your data and your own documented assumptions. See [Example Use Case](../../overview/example-use-case.md) for a fully worked version of this.

## Sensitivity analysis, simply

You don't need a complex simulation. A simple table is often enough:

| Scenario | Key assumption | Estimated opportunity |
|---|---|---|
| Pessimistic | `[assumption value]` | `[range]` |
| Base case | `[assumption value]` | `[range]` |
| Optimistic | `[assumption value]` | `[range]` |

This shows the stakeholder which assumptions the conclusion actually depends on - which is often more useful than the single "best" number.

## What this feeds into

Your opportunity estimate is the anchor for [Quantify Business Impact](../4-dashboards/02-quantify-business-impact.md) later - you'll compare the value actually captured by your model/analysis against this initial estimate. It's also central to your [final recommendation](../6-business-impact/02-build-the-story.md): "is this worth piloting?" only has a defensible answer once the opportunity is sized.

## Where to go next

Now you are ready to gather your data and start exploring:

- [Collect the Data](../2-data-exploration/01-collect-the-data.md)
