# Assess Sustainability

## Purpose

"Sustainability" here means two related things, and your assessment should cover both:

1. **Operational sustainability** - will your solution still be valid, accurate and maintained after the capstone ends, or does it quietly stop working?
2. **Environmental sustainability** - does building and running your solution align with the bank's commitment to reducing its environmental footprint, or does it needlessly waste compute, energy and data storage to get there?

A solution that works once, in a notebook, during the capstone satisfies neither. This stage asks you to honestly assess both.

## What you must assess

**:material-alert-circle: Must** - address each of the following for your specific solution:

- **Data availability** - will the data your solution relies on continue to be available going forward?
- **Data quality over time** - could the data quality issues you found in [Assess Data Quality](../2-data-exploration/02-assess-data-quality.md) get better or worse over time, and what would that do to your solution?
- **Maintenance** - what effort would be required to keep this working (beyond a one-off build)?
- **Scalability** - would your approach hold up at full production data volumes, or does it rely on the capstone dataset being small?
- **Model/data drift**, where relevant, how would you know if the model's assumptions about the world had stopped holding?
- **Ownership** - who would need to own this solution's ongoing performance in a real deployment?
- **Cost** - what would it roughly cost to keep this running (compute, licensing, people time) and does the value justify that?
- **Environmental impact** - see the dedicated section below. What is the compute/energy footprint of building, training and running this solution, and could a lighter-weight approach deliver comparable value?

**:material-alert: Should**

- Connect your sustainability assessment back to your [production-readiness](../5-production/02-production-readiness.md) discussion. Production-readiness is about *building* the product properly and sustainability is about *keeping it working* - responsibly.
- Be honest about weaknesses. A sustainability assessment that concludes "everything is fine" for a project built on a static, cleaned snapshot of data is unlikely to be credible.
- Find out, even roughly, how a model like yours would actually be put into production at your company - this context is what makes a cost/feasibility assessment realistic rather than guesswork.

## Environmental sustainability

The bank has its own commitments to operating sustainably, and technology - including data and AI work - is part of that footprint, not separate from it. A model that's technically excellent but wastefully built (needlessly large, retrained far more often than needed, hoarding data nobody uses) works against that commitment even if nobody notices at capstone scale.

**:material-alert-circle: Must** - consider, and briefly document your reasoning on:

- **Model size and complexity vs. energy cost** - a larger or more complex model generally costs more compute, and therefore more energy, to train and to run. If your [baseline or a simpler model](../3-modeling/01-build-the-model.md) performs close to your more complex one, the environmental cost of the extra complexity is a real factor in deciding which to recommend - not just an academic one.
- **Data footprint** - are you storing or processing more data than the use case actually needs (e.g. more history, more columns, more frequent refreshes than the business decision requires)? Data minimisation is good practice for privacy (see [Data](../../getting-started/data.md)) and reduces storage/compute footprint at the same time.
- **Retraining and refresh cadence** - would a real deployment need to retrain or refresh as often as feels intuitive, or would a slower, "good enough" cadence deliver most of the value at a fraction of the compute cost?
- **Dashboard/report efficiency** - does your [Power BI dashboard](../4-dashboards/01-power-bi-dashboard.md) refresh on a sensible schedule for how often the underlying data actually changes, rather than defaulting to the most frequent option available?

**:material-alert: Should**

- Where you had a choice between a simpler and a more resource-intensive approach at comparable performance, state that you considered the trade-off, even if you ultimately chose the more intensive option for a good reason.

!!! info "Organisation-specific guidance"
    `[ORGANISATION-SPECIFIC ESG / ENVIRONMENTAL SUSTAINABILITY GUIDANCE TO BE ADDED]`

    Where the bank has specific environmental sustainability targets, reporting requirements, or preferred/approved compute environments (e.g. a lower-carbon cloud region), they will be provided separately - don't assume a policy that hasn't been confirmed.

!!! example "This connects back to earlier stages, not just this one"
    [Build the Model](../3-modeling/01-build-the-model.md) already asks you not to reach for a sophisticated algorithm by default, and to justify complexity against a baseline. Environmental sustainability is one more reason that guidance exists - "good enough and efficient" is often both the more defensible business answer and the more environmentally responsible one.

## Questions worth answering explicitly

| Dimension | Ask yourself |
|---|---|
| Data availability | Is this data generated as a natural by-product of business activity, or was it specially assembled for this project? |
| Data quality over time | Are the issues found in [Assess Data Quality](../2-data-exploration/02-assess-data-quality.md) likely to persist, worsen, or improve? |
| Maintenance | What breaks first if nobody touches this for six months? |
| Scalability | Does your approach assume a dataset size that won't hold at production scale? |
| Drift | What early signal would tell you the model's assumptions no longer match reality? |
| Ownership | If this needed retraining next quarter, whose job would that be? |
| Cost | Is the infrastructure/compute cost of running this proportionate to the business value in [Quantify Business Impact](../4-dashboards/02-quantify-business-impact.md)? |
| Environmental impact | Could a simpler model, a smaller data footprint, or a less frequent refresh cadence deliver most of the same value at meaningfully lower compute/energy cost? |

## Why this matters to a stakeholder

A model that performs well today but degrades silently within a few months, with no one responsible for noticing, is a liability - not an asset. And a solution that's disproportionately resource-hungry for the value it delivers works against the bank's own sustainability commitments, which a stakeholder approving a pilot is increasingly likely to ask about. Stakeholders approving a pilot (see [Build the Story](02-build-the-story.md)) need to know what ongoing commitment - operational and environmental - they're signing up for, not just the day-one result.

## What this feeds into

Sustainability considerations - both operational and environmental - are required content for [Supporting Documentation](../../final-presentation/supporting-documentation.md), and should surface as a limitation or risk in your [final presentation](02-build-the-story.md) if genuinely material.

## Where to go next

- [Build the Story](02-build-the-story.md)
