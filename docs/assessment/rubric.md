# Assessment Rubric

This rubric describes what each level of quality looks like for each [assessment dimension](criteria.md). Descriptors focus on the **quality of thinking and application** - not simply whether an artefact was produced.

!!! warning "Weighting not yet confirmed"
    This rubric describes quality levels, not a numeric grading scheme. `[WEIGHTING TO BE CONFIRMED]` - see [Assessment Criteria](criteria.md) and [Open Items](../open-items.md).

## How to read the levels

| Level | In short |
|---|---|
| **Emerging** | The artefact exists but the reasoning is thin, generic, or disconnected from the rest of the project. |
| **Meets expectations** | Solid, correct, business-connected work that satisfies what was asked. |
| **Strong** | Clear, well-justified reasoning; findings are specific and connected to the stakeholder's decision. |
| **Excellent** | Judgement-level work: reasoning anticipates edge cases, trade-offs and limitations without being prompted, and the whole project reads as one coherent argument. |

## 1. Business framing & opportunity identification

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Stakeholder/decision named but generic ("the bank") | Specific stakeholder and decision stated | Hypotheses are genuinely testable and tied to a driver tree | Framing anticipates how the stakeholder would push back, and addresses it |
| Opportunity size asserted without working | Opportunity size calculated with stated assumptions | Assumptions are realistic and individually justified | Sensitivity analysis shows which assumptions the conclusion actually depends on |

## 2. Data understanding, quality & EDA

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Data described at a surface level | Data inventory and dictionary accurate and complete | Quality issues found are tied to specific business consequences | Team distinguishes genuine signal from artefacts of data quality issues throughout |
| EDA is a broad, unstructured tour of charts | EDA covers distributions, correlations, segmentation, outliers | EDA is visibly hypothesis-driven and iterative | Findings consistently follow insight → explanation → impact → new hypothesis |

## 3. Modelling & evaluation

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Model built without a stated baseline | Baseline established; model outperforms it | Metric choice explicitly justified by business requirements | Team can explain exactly where and why the model is likely to fail |
| Leakage/overfitting not checked | Leakage and overfitting checked once | Checks are specific to the actual features used | Validation approach is justified against the data's structure (e.g. temporal) |

## 4. Business impact & decision-making

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Metric reported with no business translation | Performance translated into at least one business term | Financial, operational and risk impact all addressed | False-positive/false-negative trade-off is quantified and drives a specific threshold decision |

## 5. Data engineering & reproducibility

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Single unstructured script/notebook | Code is modular with a sensible structure | Project is genuinely reproducible by someone else | Logging/error handling anticipates realistic failure points; "what production would require" is specific and credible |

## 6. Power BI & visualisation

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Dashboard is a collection of unrelated charts | Clear business question drives the dashboard | Pyramid structure used; advanced feature implemented meaningfully | Dashboard could stand alone without the presentation and still make its point |

## 7. Storytelling & stakeholder communication

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Presentation is a chronological walkthrough of the work | Storyboard used; message-first structure | Adapted clearly for mixed technical/non-technical audience | Recommendation and ask are specific enough that a real stakeholder could act on them immediately |

## 8. GenAI & sustainability

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| GenAI use/non-use asserted without reasoning | Value/risk/feasibility briefly assessed | Assessment is specific to this project's actual risk profile | A justified non-use decision is treated with the same rigour as a use decision |
| Sustainability not addressed | Sustainability dimensions listed | Team identifies genuine, specific weaknesses | Ownership and drift are addressed with a credible, concrete answer |

## 9. Critical thinking & limitations

| Emerging | Meets expectations | Strong | Excellent |
|---|---|---|---|
| Limitations only surface when asked | Limitations stated in documentation | Limitations are specific and tied to evidence | Team proactively distinguishes what they're confident about from what they're not, throughout |

## Where to go next

- [Assessment Criteria](criteria.md)
- [Definition of Done](../deliverables/definition-of-done.md)
