# 10. Assess GenAI

## Purpose

This stage tests judgement, not tool use.

!!! important "The requirement is not what you might expect"
    The requirement is **not**: "You must use GenAI."

    The requirement **is**: "You must assess whether GenAI would add value to this project - and justify your conclusion either way."

A well-reasoned decision **not** to use GenAI is an excellent, complete answer to this stage. A poorly-reasoned decision to bolt GenAI onto part of the project because it seems expected is not.

## What you must do

**:material-alert-circle: Must** - for at least one plausible point in your project where GenAI could conceivably be applied, assess it against all four dimensions:

- **Value** - what would GenAI actually add here? Be specific - "it could help" is not an assessment.
- **Risk** - what could go wrong? Consider accuracy/hallucination risk, data privacy (especially with customer data), and reliance on an unexplainable output for a business decision.
- **Feasibility** - is it realistically achievable within the project's constraints (time, tooling, data sensitivity)?
- **Cost/complexity** - does the benefit justify the added complexity, compared to a simpler existing approach?

**:material-alert: Should**

- Also address **governance**: if you did use GenAI output in a customer-facing or decision-facing way, who is accountable for it, and how would you check it's not systematically wrong or biased?
- If you conclude GenAI *should* be used somewhere, actually implement and evaluate it, not just describe the idea.

**:material-lightbulb-outline: Could**

- Explore more than one candidate application and compare them.

## Where GenAI plausibly fits in a project like this (examples only)

These are illustrative starting points for your own assessment - not a checklist to work through, and not an endorsement that any of them are a good idea for your specific project:

- Drafting or improving project **documentation**.
- Assisting **exploratory analysis** (e.g. summarising patterns to sanity-check your own reading of them).
- **Code assistance** during development.
- **Summarisation** of findings for different audiences.
- Assisting **stakeholder communication** (e.g. drafting narrative for a presentation, which you then verify and own).
- Processing **unstructured data**, if your dataset contains any (e.g. free-text fields).

## A simple way to structure the assessment

For each candidate use, a short table like this is often enough:

| Candidate use | Value | Risk | Feasibility | Verdict |
|---|---|---|---|---|
| `[e.g. drafting dashboard commentary]` | `[assessment]` | `[assessment]` | `[assessment]` | `[use / don't use, and why]` |

## Why "we chose not to use GenAI" can be an excellent answer

!!! example "A strong non-use justification"
    "We considered using GenAI to auto-generate risk explanations for individual credit decisions. We concluded against it: the risk of a subtly wrong or unverifiable explanation being presented as authoritative in a regulated credit decision context outweighs the time saved, and our structured feature-importance output already answers the 'why' question with a verifiable, auditable method. We would revisit this if a robust verification step were available."

    This is a stronger answer than using GenAI for the same task without this reasoning.

## What this feeds into

Your GenAI assessment is a required, standalone deliverable - see [Required Deliverables](../deliverables/required-deliverables.md#8-genai-assessment) - and is assessed as its own dimension in the [Assessment Rubric](../assessment/rubric.md).

## Where to go next

- [Assess Sustainability](11-assess-sustainability.md)
