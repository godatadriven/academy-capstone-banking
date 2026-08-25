# What Success Looks Like

A strong capstone is judged on the **quality of thinking and the coherence of the story**, not on the sophistication of any single artefact. Use this page to calibrate what you're aiming for before you start.

## The single most important test

At every stage, ask yourself:

> "Does this build on what came before it, and does it move us closer to a stakeholder decision?"

A capstone that jumps straight to modelling without a framed problem, or that produces a beautiful dashboard nobody asked for, will score poorly even if each individual artefact is technically well made. Conversely, a project with a simple model but a crystal-clear line from *business problem → data → analysis → recommendation* will score well.

## Signs of a strong capstone

- The stakeholder and the decision they need to make are stated in one sentence, early, and referenced throughout.
- Hypotheses were written down **before** the data was explored in depth, and the team can say which were confirmed, which were rejected, and which are still open.
- Data quality issues are documented, not hidden - including ones that limit the conclusions you can draw.
- The chosen model or analytical approach is justified against business requirements (e.g. cost of false positives vs. false negatives), not chosen because it's the most advanced technique the team knows.
- Model or analysis performance is translated into a business number, a risk, or a trade-off - not left as an accuracy score on a slide.
- The team can clearly state what they are *not* confident about.
- The final presentation opens with the recommendation, not a chronological walkthrough of the project.
- Assumptions are explicit and documented wherever the data didn't provide an answer.

## Signs of a weak capstone

- The project reads as a list of separate exercises ("here is our EDA", "here is our model", "here is our dashboard") with no narrative connecting them.
- A model is built and tuned extensively before anyone checks whether the underlying business question and data actually support the approach.
- Metrics are reported (accuracy, AUC, R²) without any translation into what they mean for the bank or the stakeholder.
- Data quality issues are discovered but not documented or accounted for in the conclusions.
- The final presentation is a demo of every notebook and every chart produced, in chronological order.
- Assumptions are made silently and never surfaced.
- GenAI is used (or avoided) without any stated reasoning.

## "Must", "should" and "could" - how to read this site

Throughout the [Project Guide](../project-guide/index.md) and [Deliverables](../deliverables/required-deliverables.md), instructions are labelled:

| Label | Meaning |
|---|---|
| **Must** | A required part of the project. Its absence will be treated as an incomplete deliverable. |
| **Should** | Strongly expected for a solid submission. Deviating is acceptable only with a clear, stated reason. |
| **Could** | An optional enhancement. Good to include if you have time and it adds genuine value - not required for a complete project. |

This distinction matters: don't spend a week polishing a **could** while a **must** is unfinished.
