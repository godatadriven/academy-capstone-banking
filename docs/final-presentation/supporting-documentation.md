# Supporting Documentation

Every capstone must ship with documentation that lets someone else understand, rerun, and extend your work. This is a direct test of the reproducibility and engineering-awareness principles covered in [Production Readiness](../project-guide/5-production/02-production-readiness.md).

## What must be included

**:material-alert-circle: Must**

### README

A single entry point that explains, at minimum:

- What the project is and which use case/business problem it addresses
- How to set up the environment and install dependencies
- How to run the analysis/model/pipeline end to end
- Where to find the key outputs (dashboard, presentation, key notebooks/scripts)

### Project structure

A short explanation of how the repository/folder is organised - what lives where, and why. A simple tree with one-line annotations is usually enough:

```text
capstone/
├── data/               # raw and processed data (or data access instructions)
├── notebooks/          # exploratory and modelling notebooks
├── src/                # reusable functions/modules
├── dashboard/           # Power BI file(s)
├── docs/                # write-ups: framing, opportunity sizing, findings
└── README.md
```

*(Illustrative structure - adapt to whatever you actually built.)*

### Assumptions

A single, consolidated log of every assumption made across the project - opportunity sizing, data handling, feature engineering, business impact estimation. Assumptions scattered only inside individual notebooks are hard for a reviewer or stakeholder to find; keep a summary list, even if the detail lives elsewhere.

### Reproducibility instructions

Specific enough that someone with the same data access could reproduce your key results: environment/dependency setup, execution order, any manual steps.

### Explanation of roles required to take the solution further

**:material-alert-circle: Must** - a short section naming the roles/skills a real organisation would need to take this from capstone to production, connecting to the [production-readiness](../project-guide/5-production/02-production-readiness.md) discussion. For example (illustrative, not exhaustive):

| Role | Would be needed for |
|---|---|
| Data engineer | Building and maintaining production data pipelines |
| ML/software engineer | Deploying and monitoring the model in a live system |
| Data scientist/analyst | Ongoing model evaluation, retraining decisions |
| Risk/compliance stakeholder | Sign-off on regulatory and fairness considerations |
| Business owner | Ongoing accountability for the solution's outcomes |

## What good documentation looks like vs. what doesn't

| Good | Not good enough |
|---|---|
| README lets a new reader run the project without asking you a question | README is a single sentence, or missing |
| Assumptions are listed in one place, with reasoning | Assumptions are buried inside code comments only |
| Structure explanation matches what's actually in the repo | Structure described doesn't match reality |
| Reproducibility instructions were tested by someone who didn't build the project | Instructions assume knowledge only the author has |