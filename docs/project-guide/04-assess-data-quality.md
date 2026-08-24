# 4. Assess Data Quality

## Purpose

Data quality is not a technical footnote - it's a business issue. A model trained on data with undetected leakage, or an insight drawn from a biased sample, leads to a bad business decision, not just a bad statistic. This stage requires you to actively look for problems rather than assume the data is fine because it loaded without errors.

## What you must do

**:material-alert-circle: Must** - identify and document, for the fields you intend to use:

- **Missing values** - how much, where, and whether missingness looks random or systematic.
- **Duplicates** - at the record level and, where relevant, at the entity level (e.g. same customer appearing twice).
- **Inconsistent categories** - e.g. `"UK"` / `"United Kingdom"` / `"GB"` used interchangeably.
- **Impossible or implausible values** - e.g. negative ages, dates in the future, balances that don't reconcile.
- **Outliers** - extreme values, and a first judgement on whether they're genuine or data errors.
- **Suspicious distributions** - spikes at round numbers, default-value floods (e.g. everyone born on 1 January), improbable uniformity.
- **Bias** - ways the sample might not represent the population you actually care about.
- **Target leakage** - fields that could only be known *after* the outcome occurred, which would make your model unrealistically accurate and useless in practice.
- **Inconsistent timestamps**, where relevant - time zones, formats, or logically impossible sequences (e.g. repayment dated before the loan was issued).

**:material-alert: Should**

- Implement simple, automated checks (a script or notebook cell you can rerun) rather than one-off manual inspection - see below.
- Decide and document how you'll handle each issue (e.g. impute, exclude, flag) and why - not just that you noticed it.

**:material-lightbulb-outline: Could**

- Build a small reusable data-quality check module you call again later if the dataset is refreshed or extended.

## Why this is a business issue, not just a technical one

!!! example "How a data quality issue becomes a business problem"
    Suppose 20% of income values are missing, concentrated among self-employed customers. If you drop rows with missing income, your model implicitly learns from a sample that under-represents self-employed customers - and any risk-pricing decision built on it will be systematically wrong for exactly that group. The "technical" fix (drop nulls) created a business problem (a biased pricing model) that nobody asked for.

Every data quality decision you make has a downstream business consequence. Document your reasoning, not just your fix.

## Simple automated checks

You don't need a data quality framework - a short, rerunnable script is enough. Example checks worth writing (adapt to your actual fields):

```python
# Example only - adapt field names to your actual dataset
checks = {
    "missing_target": df["target"].isna().sum(),
    "duplicate_customer_ids": df["customer_id"].duplicated().sum(),
    "negative_balances": (df["balance"] < 0).sum(),
    "future_dated_transactions": (df["transaction_date"] > pd.Timestamp.today()).sum(),
    "age_out_of_range": (~df["age"].between(18, 100)).sum(),
}
```

**:material-alert-circle: Must** - run checks like these (or SQL equivalents) and report the results, not just the code.

## Target leakage - a specific trap

Target leakage happens when a feature is only available, or only takes a meaningful value, *because* the outcome already happened. It's dangerous precisely because it makes your model look excellent while being useless in production.

!!! warning "Example of leakage"
    Using "date account was closed" as a feature to predict churn - that field is only populated *after* a customer has already churned. A model using it will look near-perfect and tell you nothing useful for a decision that has to be made *before* churn happens.

**:material-alert-circle: Must** - for your chosen target variable, explicitly check every candidate feature: "could this only be known after the outcome occurred?" Document the ones you excluded and why.

## What this feeds into

Data quality findings directly shape [Explore the Data](05-explore-the-data.md) (you interpret patterns knowing where the data is unreliable) and [Build the Model](06-build-the-model.md) (leakage exclusions and missing-value handling decisions carry through into feature engineering).

## Where to go next

- [Explore the Data](05-explore-the-data.md)
- Required deliverable checklist: [Required Deliverables - Data understanding and quality assessment](../deliverables/required-deliverables.md#3-data-understanding-and-quality-assessment)
