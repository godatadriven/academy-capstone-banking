# Data

## Source your own data

Unlike earlier bootcamp exercises, **no dataset is provided for the capstone.** Once your team has decided on a [use case](../overview/use-cases.md) within the bank, you are responsible for sourcing real data for it - from your own team, a system you have access to, or a colleague/stakeholder who can provide an extract.

This is intentional. Getting hold of the right data, from the right owner, in a usable form, is itself a core part of a real analytics project. 

!!! warning "Start this early"
    Sourcing data includes identifying the right source, requesting access, getting an extract. This routinely takes longer than expected, and it's a hard dependency for almost everything else in the project. See [Milestones](milestones.md): confirming your data source is part of **Milestone 1 (Frame)**, not something you leave until you're ready to start the EDA.

## What "sourcing your own data" involves

**:material-alert-circle: Must**

- Identify a plausible internal data source for your chosen use case (a system, a report extract, a colleague who can pull one for you).
- Get the access/extract you actually need via whatever your company's normal process is for requesting data (e.g. a manager, a data owner, an internal data platform team).
- Confirm the data is usable for training purposes under your company's data handling and privacy rules **before** you start working with it - see the governance note below.
- Document where the data came from, who provided it, and any conditions attached to using it, as part of your [Technical Documentation](../final-presentation/supporting-documentation.md).

**:material-alert: Should**

- Source data early enough that a slow or failed request doesn't block your timeline and have a fallback plan (e.g. a narrower scope, an alternative source, or falling back to the [example use case](../overview/example-use-case.md) dataset) if access doesn't come through in time.
- Prefer an extract that's already reasonably de-identified or masked over pulling raw production data directly, if your company's tooling makes that possible.

## Data handling and privacy - this is real data

Because this is genuine internal data rather than a synthetic training set, normal data handling responsibilities apply in full. This is part of what makes the capstone a realistic simulation of real analytics work.

!!! danger "Follow your bank's data governance policy"
    `[ORGANISATION-SPECIFIC DATA GOVERNANCE / PRIVACY GUIDANCE TO BE ADDED]`

    At minimum, you are expected to: only use data you have legitimate access to for this purpose; avoid including unmasked customer-identifiable information (names, account numbers, national ID numbers, etc.) in any artefact you submit, present, or store outside approved systems; and check with your data owner or manager if you're unsure whether a dataset is appropriate to use for a training exercise. If in doubt, ask before you pull the data, not after.

## What to expect once you have data

Real internal data will very likely be messier than anything you've worked with so far in the bootcamp. Expect, and plan for:

- Missing values
- Outliers
- Class imbalance (especially relevant for fraud, AML and churn use cases)
- Noise
- Inconsistencies (e.g. inconsistent categories, formats, or timestamps)
- Undocumented or ambiguous fields you'll need to chase down with whoever owns the source system

This is exactly what [Assess Data Quality](../project-guide/04-assess-data-quality.md) is designed for so don't wait for someone to tell you the data is clean.

## If you don't have data yet, or want to see the method applied first

A fully worked, fictional example including problem framing, a dummy dataset description, and how the methodology applies to it end-to-end is provided at [Example Use Case](../overview/example-use-case.md). 

Use it two ways:

- As a **reference** for what "good" looks like at each stage, before you've got your own data in hand.
- As a **fallback dataset** if your real data access is delayed and you need something to work with so the rest of the team isn't blocked.

The example is illustrative only and it is not a substitute for sourcing your own data where that's achievable. Your final submission should be built on your real, sourced data unless your course facilitator has agreed otherwise.

## What to do once you receive your data

1. Do **not** start modelling immediately. Start with [Understanding the Data](../project-guide/03-understand-the-data.md).
2. Build a simple data inventory: what tables/files exist, what each represents, how they relate.
3. Run the data quality checks described in [Assess Data Quality](../project-guide/04-assess-data-quality.md) before drawing any conclusions.
4. Document anything ambiguous or undefined (e.g. an unclear column, an unconfirmed target variable) rather than guessing silently - record it as an assumption, and go back to your data source/owner to confirm where you can.