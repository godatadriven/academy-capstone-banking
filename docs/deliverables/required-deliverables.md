# Required Deliverables

This page lists everything your capstone must produce, organised by the stage of the [Project Guide](../project-guide/index.md) that generates it. Each item is tagged as a **required deliverable**, a **supporting artefact**, or an **optional enhancement**.

| Tag | Meaning |
|---|---|
| :material-alert-circle:{ .pill-must } **Required** | Must exist and be assessable. Missing it is treated as an incomplete project. |
| :material-file-document-outline: **Supporting artefact** | Expected evidence of your reasoning - usually documentation, notes, or intermediate outputs, not a polished output in its own right. |
| :material-lightbulb-outline: **Optional enhancement** | Adds value if you have time; not required for a complete project. |

!!! tip "Deliverables map onto the Project Guide"
    Each numbered section below corresponds to a stage in the [Project Guide](../project-guide/index.md) - follow the links for the full reasoning behind each requirement.

## 1. Business problem framing

**Required:**

- Stakeholder identified by name/role
- Business decision stated explicitly
- Problem statement (1–2 sentences)
- Driver tree and/or hypothesis tree
- Initial hypotheses, labelled data-driven vs. assumption-based

**Supporting artefact:** notes on constraints and desired outcome.

See: [Frame the Problem](../project-guide/01-frame-the-problem.md)

## 2. Opportunity sizing

**Required:**

- Estimated financial and/or operational opportunity
- All assumptions used, documented explicitly

**Should also include:** sensitivity analysis (pessimistic/base/optimistic).

See: [Size the Opportunity](../project-guide/02-size-the-opportunity.md)

## 3. Data understanding and quality assessment

**Required:**

- Data inventory
- Data dictionary/understanding of fields used
- Documented quality issues: missing values, inconsistencies, bias, duplicates, impossible values, outliers, leakage
- Simple, rerunnable data-quality checks

See: [Understand the Data](../project-guide/03-understand-the-data.md), [Assess Data Quality](../project-guide/04-assess-data-quality.md)

## 4. Exploratory Data Analysis

**Required:**

- Distributions, correlations, segmentation, outlier analysis
- Structured research questions, tied to hypotheses
- Findings with business interpretation (insight → explanation → impact → follow-up)
- Follow-up hypotheses generated during EDA
- Critical reflection: bias, unknowns, possible misinterpretation

See: [Explore the Data](../project-guide/05-explore-the-data.md)

## 5. Modelling

**Required:**

- Problem formulation and justification
- Baseline
- Model(s) and selection rationale
- Evaluation metrics, chosen and justified against business requirements
- Validation approach
- Leakage and overfitting assessment
- Documented model limitations

**Supporting artefact:** feature engineering notes, where relevant.

See: [Build the Model](../project-guide/06-build-the-model.md)

## 6. Business impact assessment

**Required:**

- Model/analysis performance translated into business impact
- Financial impact, where possible
- Operational consequences
- False-positive/false-negative trade-offs, where relevant
- Key risks

See: [Quantify Business Impact](../project-guide/07-quantify-business-impact.md)

## 7. MVP and engineering

**Required:**

- Evidence of iterative milestones (MVP 1 → 2 → 3 → Final)
- Modular, reusable code
- Conceptual version control (Git history)
- Reproducibility (documented environment/dependencies)
- Logging and error handling
- Explanation of what production-ready would require

See: [Build the MVP](../project-guide/08-build-the-mvp.md), [Consider Production Readiness](../project-guide/09-production-readiness.md)

## 8. GenAI assessment

**Required:**

- Value, risk, feasibility assessment for at least one candidate GenAI use
- A justified decision - to use, or explicitly not to use, GenAI
- If used: implementation and evaluation of that use

See: [Assess GenAI](../project-guide/10-assess-genai.md)

## 9. Sustainability

**Required:**

- Assessment covering data availability, maintenance, scalability, model/data drift (where relevant), and ownership

See: [Assess Sustainability](../project-guide/11-assess-sustainability.md)

## 10. Power BI dashboard

**Required:**

- Clear business question driving the dashboard
- Pyramid-principle structure
- Simple, focused visuals
- Key insights clearly surfaced
- At least one advanced feature: drill-down, drill-through, filters, or a basic data model

See: [Build the Power BI Dashboard](../project-guide/12-power-bi-dashboard.md)

## 11. Storyboard

**Required:**

- Pyramid-proof structure (message → argument → evidence)
- Message-first headlines per slide/page
- Supporting evidence mapped to each message
- Recommendation and stakeholder ask visible in the structure

See: [Build the Story](../project-guide/13-build-the-story.md)

## 12. Final presentation

**Required:**

- Adapted for a mixed technical/non-technical audience
- Clear recommendation
- Business implications
- Risks and limitations acknowledged
- Next steps stated

See: [Build the Story](../project-guide/13-build-the-story.md)

## 13. Technical documentation

**Required:**

- README
- Project structure explanation
- Assumptions log
- Reproducibility instructions
- Explanation of roles required to take the solution further

See: [Technical Documentation](technical-documentation.md)

## Optional enhancements, across the project

These are genuinely optional - pursue them only once every required item above is solid:

- Comparing multiple modelling approaches beyond the minimum needed to justify your choice
- A small automated test suite
- More than one advanced Power BI feature
- Basic explainability techniques (e.g. feature importance) for the stakeholder story
- A lightweight conceptual monitoring/drift-detection proposal

## Where to go next

- [Technical Documentation](technical-documentation.md)
- [Definition of Done](definition-of-done.md)
- [Capstone Checklist](../checklist.md)
