# Open Items

This page lists every unresolved placeholder across the site, so the course team can complete the documentation without hunting through every page. Nothing on this page should be inferred or guessed by trainees - treat every row as genuinely unresolved until the linked page is updated.

## Placeholder convention

All open items on this site use one of these consistent tags:

| Tag | Used for |
|---|---|
| `[TO BE CONFIRMED]` | A decision or figure not yet finalised |
| `[TO BE ADDED]` | Content or guidance to be written and added |
| `[DATASET TO BE PROVIDED]` | Dataset-specific content that depends on the actual data |
| `[DATE TO BE ADDED]` | A calendar date |
| `[WEIGHTING TO BE CONFIRMED]` | Assessment weighting |
| `[ORGANISATION-SPECIFIC GUIDANCE TO BE ADDED]` | Internal process/policy content not yet supplied |

## Team & assessment logistics

| Item | Where it appears |
|---|---|
| Team size | [Team & Roles](getting-started/team-and-roles.md) |
| Team formation approach | [Team & Roles](getting-started/team-and-roles.md) |
| Individual vs. team assessment approach | [Team & Roles](getting-started/team-and-roles.md) |
| Final presentation length | [Team & Roles](getting-started/team-and-roles.md), [Build the Story](project-guide/13-build-the-story.md) |
| Final presentation slide count | [Team & Roles](getting-started/team-and-roles.md) |
| Final submission date | [Team & Roles](getting-started/team-and-roles.md) |

## Data

| Item | Where it appears |
|---|---|
| Dataset(s) to be provided | [Data](getting-started/data.md), [Understand the Data](project-guide/03-understand-the-data.md) |
| Data dictionary | [Data](getting-started/data.md), [Understand the Data](project-guide/03-understand-the-data.md) |
| Target variable(s) | [Data](getting-started/data.md), [Understand the Data](project-guide/03-understand-the-data.md) |
| Data access instructions | [Data](getting-started/data.md) |

## Tools, environment & constraints

| Item | Where it appears |
|---|---|
| Compute/environment constraints | [Tools & Constraints](getting-started/tools-and-constraints.md) |
| Licensing/tool access constraints | [Tools & Constraints](getting-started/tools-and-constraints.md) |

## Timeline

| Item | Where it appears |
|---|---|
| Milestone dates | [Milestones](getting-started/milestones.md) |

## Business assumptions

| Item | Where it appears |
|---|---|
| Business assumptions / unit economics | [Size the Opportunity](project-guide/02-size-the-opportunity.md) |

## Organisation-specific guidance

| Item | Where it appears |
|---|---|
| Organisation-specific Power BI guidance | [Build the Power BI Dashboard](project-guide/12-power-bi-dashboard.md) |

## Assessment

| Item | Where it appears |
|---|---|
| Weighting per assessment dimension (×9) | [Assessment Criteria](assessment/criteria.md), [Assessment Rubric](assessment/rubric.md) |

## For the course team

Once each item above is confirmed, update the linked page directly and remove the corresponding row from this page. Search the `docs/` folder for the literal string `TO BE` to find every remaining placeholder in the source Markdown.

```bash
grep -rn "TO BE " docs/
```
