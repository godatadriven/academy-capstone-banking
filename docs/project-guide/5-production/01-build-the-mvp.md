# Build an MVP

## Purpose

Avoid the single most common failure mode in analytics projects: spending most of your time perfecting a model before confirming the business problem and data actually support the approach. MVP thinking forces you to prove the concept works before investing.

## The expected progression

**:material-alert-circle: Must** - be able to show evidence of this progression (e.g. in a short changelog or notebook history):

### MVP 1 - Answer the business question

The simplest possible version: a baseline model or even a manual rule, built on a first-pass understanding of the data. The goal is to prove the business question is *answerable* with this data - not to get a good score.

### MVP 2 - Improve the analytical/modelled solution

An iteration on MVP 1 with better features, validation, or a more suitable model.

### MVP 3 - A solution that works for the stakeholder

Translate MVP 2's output into something a stakeholder could act on. This may include thresholds set with business logic, output connected to a decision, business impact quantified (see [Quantify Business Impact](../4-dashboards/02-quantify-business-impact.md)).

### Final - Demonstrate a credible, reproducible and sustainable solution?

Consolidate: documented limitations, reproducible code, sustainability considered (see [Production Readiness](02-production-readiness.md) and [Assess Sustainability](../6-business-impact/01-assess-sustainability.md)), and a polished story (see [Build the Story](../6-business-impact/02-build-the-story.md)).

```mermaid
flowchart LR
    M1["MVP 1\nCan we answer the\nquestion at all?"] --> M2["MVP 2\nCan we improve\nthe solution?"]
    M2 --> M3["MVP 3\nCan we make it\nuseful for a stakeholder?"]
    M3 --> F["Final\nCredible, reproducible\n& sustainable"]
```

## The Importance of Iteration

!!! warning "Don't perfect a model built on the wrong foundation"
    If your team spends two weeks tuning a model before checking whether the target variable is even well-defined, or whether the data supports the hypothesis at all, that time is largely wasted - you'll likely need to redo the modelling once the foundational issue surfaces. MVP 1 exists specifically to surface foundational problems early, while they're still cheap to fix.

## What "good" looks like at each stage

**:material-alert-circle: Must**

- Show that you validated the *approach* (MVP 1) before investing heavily in improving it (MVP 2).
- Be able to explain what changed between each MVP stage and why.
- Prioritise which improvements to make at each step - list the candidate improvements you considered and why you picked the ones you did.

**:material-alert: Should**

- Keep a lightweight record of this progression - a short section in your documentation or a few tagged notebook versions is enough; this doesn't need to be formal project management.

**:material-lightbulb-outline: Could**

- Frame your MVP progression using conceptual version control (see [Production Readiness](02-production-readiness.md)) - e.g. a commit history that shows the iteration.

## What this feeds into

Your MVP progression is part of your evidence for reproducibility and iterative thinking, both required in [Supporting Documentation](../../final-presentation/supporting-documentation.md), and directly supports the [Definition of Done](../../final-presentation/definition-of-done.md) question: "does our solution work, and how do we know?"

## Where to go next

- [Production Readiness](02-production-readiness.md)
