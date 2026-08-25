# Use Cases

Your team decides on **one real business problem within the bank** to solve end-to-end. This is a deliberate departure from earlier bootcamp exercises, where the problem and data were both handed to you - here, scoping a genuine problem is part of what's being assessed.

!!! info "Still stuck? See a worked example first"
    If you want to see what a fully scoped use case looks like before picking your own, read the [Example Use Case](example-use-case.md) - a fictional, fully worked example (with a dummy dataset) that walks the whole methodology end-to-end.

## Choosing a real use case

Pick a problem that is:

- **Real** - something an actual team or stakeholder at the bank genuinely cares about, not a hypothetical.
- **Scoped to a decision** - see [Frame the Problem](../project-guide/01-frame-the-problem.md) for the difference between a business question and a business decision. "Understand our customers better" is not a use case; "decide which overdue customers to prioritise for contact" is.
- **Backed by data you can actually get** - see [Data](../getting-started/data.md). A great use case with no realistic path to data isn't a workable capstone; check access is plausible before committing.
- **Achievable within your timeline** - see [Milestones](../getting-started/milestones.md). Ambition is good; a problem so large it can't produce a credible answer in the time available is not.

## Categories that tend to work well

These are **starting points for the kind of problem to look for**, not a menu to pick from - use them to sanity-check that your own idea is the right shape and size for a capstone, or as inspiration if you're stuck.

=== "Credit risk modelling"

    **Problem shape:** Predict probability of default on a loan/mortgage portfolio to support risk-based pricing or provisioning decisions.

    **Typical stakeholder:** Credit risk manager, pricing team.

    **Typical decision:** Which applicants/accounts should be priced differently, provisioned for, or declined.

    **Likely problem type:** Classification (binary: default / no default) or, for provisioning, a probability estimate.

=== "Fraud detection"

    **Problem shape:** Flag suspicious transactions in real time while managing the trade-off between customer friction (false positives) and missed fraud (false negatives).

    **Typical stakeholder:** Fraud operations lead.

    **Typical decision:** Which transactions to block, hold for review, or allow - and where to set that threshold.

    **Likely problem type:** Classification, usually with significant class imbalance.

=== "Customer churn"

    **Problem shape:** Predict which retail banking customers are likely to leave, and identify the drivers, to inform a retention strategy.

    **Typical stakeholder:** Retention / customer experience lead.

    **Typical decision:** Who to target with retention offers, and what to offer.

    **Likely problem type:** Classification, often paired with driver/segment analysis.

=== "Next-best-action / cross-sell"

    **Problem shape:** Predict which product a customer is likely to need next (e.g. mortgage, savings account, credit card).

    **Typical stakeholder:** Marketing / product lead.

    **Typical decision:** Who to target for which product, and through which channel.

    **Likely problem type:** Classification (per product) or ranking.

=== "Collections prioritisation"

    **Problem shape:** Predict which overdue customers are most likely to repay if contacted, to prioritise collections effort. This is the theme used in the [Example Use Case](example-use-case.md).

    **Typical stakeholder:** Collections operations manager.

    **Typical decision:** Who collections agents should contact first, and via what channel.

    **Likely problem type:** Classification / ranking under limited operational capacity.

=== "AML transaction monitoring"

    **Problem shape:** Detect unusual transaction patterns that may indicate money laundering.

    **Typical stakeholder:** Financial crime / compliance lead.

    **Typical decision:** Which patterns or customers to escalate for investigation.

    **Likely problem type:** Anomaly detection or classification, usually with severe class imbalance and a very high cost of false negatives.

## The hard parts are usually...

The first thing you'll need to do any kind of data analysis, modeling or visualisation, is to get data. This can be a big blocker, so make your requests early and get support to receive the data you need. Don't expect to get access to everything, you will probably receive a sample dataset with which you can work.

Secondly, whatever use case you choose, there will likely be some challenges along the way. This doesn't mean you've taken a wrong turn, this means that you have a chance to solve real life business problems.

For example, for the above examples, common challenges can pop up in different places:

| Use case shape | The hard part is usually... |
|---|---|
| Credit risk | Translating a probability into a pricing/provisioning decision with real financial consequences. |
| Fraud detection | The false-positive/false-negative trade-off and severe class imbalance. |
| Churn | Distinguishing correlation from actionable driver, and making the retention story concrete. |
| Cross-sell | Defining "success" and connecting a prediction to a realistic commercial action. |
| Collections | Working under limited contact capacity - ranking, not just classifying. |
| AML | Extreme class imbalance and a very high cost of missing a true positive. |

## Getting your use case scoped and confirmed

**:material-alert-circle: Must** - before moving on to [Size the Opportunity](../project-guide/02-size-the-opportunity.md), confirm your chosen use case with your course facilitator: a one-paragraph problem statement and a candidate stakeholder is enough for a quick scope check. This isn't asking permission to be creative - it's a checkpoint to catch a use case that's too broad, too narrow, or has no realistic path to data, before your team has sunk a week into it.