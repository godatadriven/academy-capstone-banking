# Tools & Constraints

## Tools

You should use the tools you've learned throughout the bootcamp, applied where they're actually the right fit for the task - not for their own sake.

| Tool | Typical use in this project |
|---|---|
| **SQL** | Querying, joining and aggregating source data; simple data-quality checks. |
| **Python** | Data cleaning, exploratory analysis, feature engineering, modelling, evaluation. |
| **Power BI** | The final stakeholder-facing dashboard - see [Build the Power BI Dashboard](../project-guide/4-dashboards/01-power-bi-dashboard.md). |
| **Git / version control** | Conceptual version control of your work - see [Consider Production Readiness](../project-guide/5-production/02-production-readiness.md). |
| **GenAI tools** | Where justified - see [Assess GenAI](../project-guide/5-production/03-assess-genai.md). Not mandatory. |

You are expected to **justify** tool choices where it isn't obvious - see [Explore the Data](../project-guide/2-data-exploration/03-explore-the-data.md) for the specific requirement to explain when you used Python vs. SQL.

## Constraints

- The project must be built on **real data you source yourself** from within the bank for your chosen use case - see [Data](data.md). Do not fabricate data, and do not substitute the [Example Use Case](../overview/example-use-case.md)'s dummy dataset unless your course facilitator has agreed to it as a fallback.
- Any data you use must be handled according to your bank's data governance and privacy policies - see [Data](data.md#data-handling-and-privacy-this-is-real-data). Do not include unmasked customer-identifiable information in anything you submit, present, or store outside approved systems.
- The project does **not** need to be deployed as a live production system. See [Consider Production Readiness](../project-guide/5-production/02-production-readiness.md) for what level of engineering maturity is expected instead.
- `[COMPUTE / ENVIRONMENT CONSTRAINTS TO BE CONFIRMED]`
- `[LICENSING / TOOL ACCESS CONSTRAINTS TO BE CONFIRMED]`

## Assumptions you're allowed to make

Where information required to complete a stage is not provided (e.g. unit economics for opportunity sizing, or organisation-specific Power BI conventions), you **may** make reasonable, realistic assumptions - provided you:

1. State the assumption explicitly, wherever it's used.
2. Explain why it's reasonable.
3. Where it materially affects a conclusion, test how sensitive that conclusion is to the assumption (see [Size the Opportunity](../project-guide/1-business-opps/04-size-the-opportunity.md)).

This is not a loophole - it's a core skill being assessed. Real analytics work constantly requires reasoning under incomplete information.
