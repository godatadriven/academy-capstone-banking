# 11. Assess Sustainability

## Purpose

A solution that works once, in a notebook, during the capstone is not the same as a solution that would keep working after the capstone ends. This stage asks you to honestly assess whether - and under what conditions - your solution would remain valid and useful over time.

## What you must assess

**:material-alert-circle: Must** - address each of the following for your specific solution:

- **Data availability** - will the data your solution relies on continue to be available, at the same quality and cadence, going forward?
- **Data quality over time** - could the data quality issues you found in [Assess Data Quality](04-assess-data-quality.md) get better or worse over time, and what would that do to your solution?
- **Maintenance** - what ongoing effort would be required to keep this working (beyond a one-off build)?
- **Scalability** - would your approach hold up at full production data volumes, or does it rely on the capstone dataset being conveniently small?
- **Model/data drift**, where relevant - how would you know if the model's assumptions about the world had stopped holding?
- **Ownership** - who would need to own this solution's ongoing performance in a real deployment?

**:material-alert: Should**

- Connect your sustainability assessment back to your [production-readiness](09-production-readiness.md) discussion - they're closely related but distinct: production-readiness is about *building* it properly; sustainability is about *keeping it working*.
- Be honest about weaknesses. A sustainability assessment that concludes "everything is fine" for a project built on a static, cleaned snapshot of data is unlikely to be credible.

**:material-lightbulb-outline: Could**

- Propose a lightweight monitoring approach (even conceptual) for detecting drift, if relevant to your use case.

## Questions worth answering explicitly

| Dimension | Ask yourself |
|---|---|
| Data availability | Is this data generated as a natural by-product of business activity, or was it specially assembled for this project? |
| Data quality over time | Are the issues found in [Assess Data Quality](04-assess-data-quality.md) likely to persist, worsen, or improve? |
| Maintenance | What breaks first if nobody touches this for six months? |
| Scalability | Does your approach assume a dataset size that won't hold at production scale? |
| Drift | What early signal would tell you the model's assumptions no longer match reality? |
| Ownership | If this needed retraining next quarter, whose job would that be? |

## Why this matters to a stakeholder

A model that performs well today but degrades silently within a few months, with no one responsible for noticing, is a liability - not an asset. Stakeholders approving a pilot (see [Build the Story](13-build-the-story.md)) need to know what ongoing commitment they're signing up for, not just the day-one result.

## What this feeds into

Sustainability considerations are required content for [Technical Documentation](../deliverables/technical-documentation.md), and should surface as a limitation or risk in your [final presentation](13-build-the-story.md) if genuinely material.

## Where to go next

- [Build the Power BI Dashboard](12-power-bi-dashboard.md)
- Required deliverable checklist: [Required Deliverables - Sustainability](../deliverables/required-deliverables.md#9-sustainability)
