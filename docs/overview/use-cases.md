# Use Cases

Your team chooses **one** realistic banking business problem to solve end-to-end, or proposes your own subject for approval. Choose early - your use case shapes your stakeholder, your data needs, your problem type, and your opportunity sizing.

!!! question "Choosing your own use case"
    You may propose an alternative use case if it demonstrates the same end-to-end skills (business framing, opportunity sizing, EDA, modelling, business impact, dashboard, story) and is **approved** by the course team before you commit significant time to it. Bring a one-paragraph problem statement and a candidate stakeholder to the approval conversation.

## Suggested use cases

=== "Credit risk modelling"

    **Problem:** Predict probability of default on a loan/mortgage portfolio to support risk-based pricing or provisioning decisions.

    **Typical stakeholder:** Credit risk manager, pricing team.

    **Typical decision:** Which applicants/accounts should be priced differently, provisioned for, or declined.

    **Likely problem type:** Classification (binary: default / no default) or, for provisioning, a probability estimate.

=== "Fraud detection"

    **Problem:** Flag suspicious transactions in real time while managing the trade-off between customer friction (false positives) and missed fraud (false negatives).

    **Typical stakeholder:** Fraud operations lead.

    **Typical decision:** Which transactions to block, hold for review, or allow - and where to set that threshold.

    **Likely problem type:** Classification, usually with significant class imbalance.

=== "Customer churn"

    **Problem:** Predict which retail banking customers are likely to leave, and identify the drivers, to inform a retention strategy.

    **Typical stakeholder:** Retention / customer experience lead.

    **Typical decision:** Who to target with retention offers, and what to offer.

    **Likely problem type:** Classification, often paired with driver/segment analysis.

=== "Next-best-action / cross-sell"

    **Problem:** Predict which product a customer is likely to need next (e.g. mortgage, savings account, credit card).

    **Typical stakeholder:** Marketing / product lead.

    **Typical decision:** Who to target for which product, and through which channel.

    **Likely problem type:** Classification (per product) or ranking.

=== "Collections prioritisation"

    **Problem:** Predict which overdue customers are most likely to repay if contacted, to prioritise collections effort.

    **Typical stakeholder:** Collections operations manager.

    **Typical decision:** Who collections agents should contact first, and via what channel.

    **Likely problem type:** Classification / ranking under limited operational capacity.

=== "AML transaction monitoring"

    **Problem:** Detect unusual transaction patterns that may indicate money laundering.

    **Typical stakeholder:** Financial crime / compliance lead.

    **Typical decision:** Which patterns or customers to escalate for investigation.

    **Likely problem type:** Anomaly detection or classification, usually with severe class imbalance and a very high cost of false negatives.

## Choosing between them

There's no "easy mode" here - each use case has a genuinely hard part:

| Use case | The hard part is usually... |
|---|---|
| Credit risk | Translating a probability into a pricing/provisioning decision with real financial consequences. |
| Fraud detection | The false-positive/false-negative trade-off and severe class imbalance. |
| Churn | Distinguishing correlation from actionable driver, and making the retention story concrete. |
| Cross-sell | Defining "success" and connecting a prediction to a realistic commercial action. |
| Collections | Working under limited contact capacity - ranking, not just classifying. |
| AML | Extreme class imbalance and a very high cost of missing a true positive. |

Pick the use case your team finds **most interesting to argue about** - the framing and trade-off discussions are where the real learning happens.

## Where to go next

- [Data](../getting-started/data.md) - what data you can expect for your chosen use case.
- [Frame the Problem](../project-guide/01-frame-the-problem.md) - turn your chosen use case into a concrete problem statement.
