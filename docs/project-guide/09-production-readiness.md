# 9. Consider Production Readiness

## Purpose

This stage is about **engineering maturity**, not deployment. The capstone does not need to become a live production system - but you do need to demonstrate that you understand what good engineering practice looks like, and what a real production system would additionally require.

!!! important "Two different things - don't confuse them"
    - A **production-ready solution** - a system actually deployed, monitored, and operated in a live environment.
    - **Understanding what would be required to make this production-ready** - what you're actually being assessed on.

    You must demonstrate the second. You are **not** required to deliver the first.

## What you must demonstrate in your own project

**:material-alert-circle: Must**

- **Modularity** - code organised into logical, reusable pieces (functions, scripts, notebooks with a clear purpose) rather than one long undifferentiated script.
- **Reusable code** - avoid copy-pasted blocks for logic you use more than once (e.g. a data-quality check, a metric calculation).
- **Conceptual version control** - use Git (or equivalent) to track your work over time, with commits that reflect meaningful units of progress. You don't need a sophisticated branching strategy - you do need a sensible history.
- **Reproducibility** - someone else should be able to take your code and, with the same data, reproduce your results. Document your environment and dependencies (see [Technical Documentation](../deliverables/technical-documentation.md)).
- **Logging** - key steps in your pipeline (data loaded, rows dropped, model trained) should produce some visible trace, even if it's simple print/log statements - not silent execution.
- **Error handling** - anticipate realistic failure points (e.g. missing file, unexpected null, empty dataframe) and handle them sensibly rather than letting the pipeline fail opaquely.

**:material-alert: Should**

- Include basic checks/tests for critical logic (e.g. a data-quality check function, a metric calculation) - this doesn't need to be a full test suite.
- Structure your project directory sensibly and explain the structure in your [Technical Documentation](../deliverables/technical-documentation.md).
- Document your dependencies (e.g. a requirements file) so the project can actually be rerun.

**:material-lightbulb-outline: Could**

- Add a small automated test suite for your most critical functions.
- Add configuration (e.g. a config file) instead of hard-coded values for things like file paths or thresholds.

## What would need to happen after this capstone?

**:material-alert-circle: Must** - include a short, explicit section in your documentation addressing what a real production deployment would additionally require. You are not expected to build these - only to show you understand them.

=== "Data & pipelines"

    - **Production data pipelines** - automated, scheduled ingestion and transformation instead of manual notebook runs.
    - **Orchestration** - a scheduler/orchestrator (e.g. Airflow-style tooling) managing dependencies between pipeline steps.

=== "Monitoring & operations"

    - **Monitoring** - tracking pipeline health, data volumes, and system uptime.
    - **Model monitoring** - tracking live prediction quality against outcomes as they become known.

=== "Model lifecycle"

    - **Retraining** - a defined process and cadence for refreshing the model as new data arrives.
    - **Data drift** - detecting when incoming data starts to differ from what the model was trained on.
    - **Model drift** - detecting when model performance degrades over time even if the input data looks stable.

=== "Governance"

    - **Ownership** - a named owner responsible for the solution's ongoing performance and decisions.
    - **Security / privacy** - access controls, data handling and privacy requirements for a live system touching customer data.
    - **Scalability** - whether the current approach would hold up at full production data volumes and request rates.

See [Assess Sustainability](11-assess-sustainability.md) for how these considerations connect to whether your solution would actually keep working after the capstone ends.

## What this feeds into

This stage's output belongs directly in [Technical Documentation](../deliverables/technical-documentation.md), and the "what would need to happen after this capstone" section is one of the most commonly tested areas in the [Assessment Rubric](../assessment/rubric.md) dimension on data engineering & reproducibility.

## Where to go next

- [Assess GenAI](10-assess-genai.md)
- Required deliverable checklist: [Required Deliverables - MVP and engineering](../deliverables/required-deliverables.md#7-mvp-and-engineering)
