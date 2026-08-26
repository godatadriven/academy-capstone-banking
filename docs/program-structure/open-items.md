# Open Items

This page lists every unresolved placeholder across the site, so the course team can complete the documentation without hunting through every page. Nothing on this page should be inferred or guessed by trainees - treat every row as genuinely unresolved until the linked page is updated.

## Placeholder convention

All open items on this site use one of these consistent tags:

| Tag | Used for |
|---|---|
| `[TO BE CONFIRMED]` | A decision or figure not yet finalised |
| `[TO BE ADDED]` | Content or guidance to be written and added |
| `[DATA SOURCE TO BE CONFIRMED]` | Dataset-specific content that depends on what each team sources |
| `[DATE TO BE ADDED]` | A calendar date |
| `[WEIGHTING TO BE CONFIRMED]` | Assessment weighting |
| `[ORGANISATION-SPECIFIC GUIDANCE TO BE ADDED]` | Internal process/policy content not yet supplied |

## Team & assessment logistics

| Item | Where it appears |
|---|---|
| Team size | [Team & Roles](getting-started/team-and-roles.md) |
| Team formation approach | [Team & Roles](getting-started/team-and-roles.md) |
| Individual vs. team assessment approach | [Team & Roles](getting-started/team-and-roles.md) |
| Final presentation length | [Team & Roles](getting-started/team-and-roles.md), [Build the Story](../project-guide/6-business-impact/02-build-the-story.md) |
| Final presentation slide count | [Team & Roles](getting-started/team-and-roles.md) |
| Final submission date | [Team & Roles](getting-started/team-and-roles.md) |

## Data

Each capstone team now sources its own data (see [Data](getting-started/data.md)), so most dataset specifics are resolved per team rather than centrally - the items below are the organisation-wide pieces still needed.

| Item | Where it appears |
|---|---|
| Organisation-specific data governance / privacy guidance for using internal data in a training exercise | [Data](getting-started/data.md) |
| Confirmation of the standard internal process for requesting a data extract (who to ask, typical turnaround) | [Data](getting-started/data.md) |

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
| Business assumptions / unit economics | [Size the Opportunity](../project-guide/1-business-opps/04-size-the-opportunity.md) |

## Organisation-specific guidance

| Item | Where it appears |
|---|---|
| Organisation-specific Power BI guidance | [Build the Power BI Dashboard](../project-guide/4-dashboards/01-power-bi-dashboard.md) |

## Assessment

| Item | Where it appears |
|---|---|
| Weighting per assessment dimension (×9) | [Assessment Criteria](assessment/criteria.md), [Assessment Rubric](assessment/rubric.md) |

## For the course team

Once each item above is confirmed, update the linked page directly and remove the corresponding row from this page. Search the `docs/` folder for the literal string `TO BE` to find every remaining placeholder in the source Markdown.

```bash
grep -rn "TO BE " docs/
```
