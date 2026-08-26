# Production Readiness

## Purpose

This stage is about **engineering maturity**. The capstone does not need to become a live production system - but you need to demonstrate that you understand what good engineering practice looks like, and what a production system would require.

!!! important "Two different things:"
    - An **in-production solution**: a deployed system with monitoring and operating in a live environment.
    - **Production-ready work and follow up**: a code base that is scalable, reproducable and ready for further production collaboration with the deployment team.

## What you must demonstrate in your own project

**:material-alert-circle: Must**

- **Modularity** - code organised into logical, reusable pieces (functions, scripts, notebooks with a clear purpose) meaning your repo is its own product.
- **Reusable code** - avoid copy-pasted blocks for logic you use more than once (e.g. a data-quality check, a metric calculation).
- **Conceptual version control** - use Git (or equivalent) to track your work over time, with commits that reflect meaningful units of progress. 
- **Collaborate through GitHub (or your equivalent)** - work through branches and pull requests as a team.
- **Reproducibility** - document your environment and dependencies (see [Supporting Documentation](../../final-presentation/supporting-documentation.md)).
- **Logging** - key steps in your pipeline (data loaded, rows dropped, model trained) are traceable.
- **Error handling** - anticipating realistic failure points (e.g. missing file, unexpected null, empty dataframe) and making a plan on how to handle them.

**:material-alert: Should**

- Open at least one **pull request** within your team, with at least one **peer review** on it, even for a small change.
- Include basic checks/tests for critical logic (e.g. a data-quality check function, a metric calculation) - this doesn't need to be a full test suite.
- Structure your project directory sensibly and explain the structure in your [Supporting Documentation](../../final-presentation/supporting-documentation.md).
- Document your dependencies (e.g. a requirements file) so the project can be rerun.

**:material-lightbulb-outline: Could**

- Add a small automated test suite for your most critical functions.
- Add configuration (e.g. a config file) instead of hard-coded values for things like file paths or thresholds.
- Use GitHub features beyond the basics (issue templates, required reviewers, a lightweight CI check) to make collaboration and review more structured.

## What would need to happen after this capstone?

**:material-alert-circle: Must** - include a short, explicit section in your documentation addressing what a real production deployment would additionally require to show you understand how they connect to your own project's data needs (see [Collect the Data](../2-data-exploration/01-collect-the-data.md) for the data lifecycle this feeds from).

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

See [Assess Sustainability](../6-business-impact/01-assess-sustainability.md) for how these considerations connect to whether your solution would actually keep working after the capstone ends.

## What this feeds into

This stage's output belongs directly in [Supporting Documentation](../../final-presentation/supporting-documentation.md), and the "what would need to happen after this capstone" section is one of the most commonly tested areas in the [Assessment Rubric](../../final-presentation/assessment-rubric.md).

## Where to go next

- [Assess GenAI](03-assess-genai.md)
