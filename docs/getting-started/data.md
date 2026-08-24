# Data

## What you'll receive

You will be provided with a **synthetic, bank-style dataset** relevant to your chosen [use case](../overview/use-cases.md). Synthetic data is used so the project can simulate realistic banking data without any real customer information.

- **Dataset(s):** `[DATASET TO BE PROVIDED]`
- **Data dictionary:** `[DATA DICTIONARY TO BE ADDED]`
- **Target variable(s):** `[TARGET VARIABLE TO BE CONFIRMED]`
- **Access instructions:** `[DATA ACCESS INSTRUCTIONS TO BE ADDED]`

!!! warning "This page intentionally contains no dataset specifics"
    No columns, record counts, distributions, targets or statistics are defined here - they depend on the dataset your course team provides for your use case. Do not assume anything about the data until you've inspected it yourself in [Understand the Data](../project-guide/03-understand-the-data.md).

## What the data will plausibly contain

Depending on your [use case](../overview/use-cases.md), you can expect data drawn from categories such as:

- **Customer demographics** - e.g. age, tenure, region, segment.
- **Account / product holdings** - which products a customer holds and since when.
- **Transaction history** - transaction-level activity over some time window.
- **Loan / credit history** - origination details, repayment history, delinquency status.
- **Target variable(s)** relevant to your use case - e.g. default flag, churn flag, fraud flag.

Exactly which of these apply, and their structure, will only be confirmed once your dataset is provided.

## What the data will realistically look like

The datasets are designed to resemble real banking data - including its imperfections. **Expect, and plan for:**

- Missing values
- Outliers
- Class imbalance (especially relevant for fraud, AML and churn use cases)
- Noise
- Inconsistencies (e.g. inconsistent categories, formats, or timestamps)
- Other data-quality issues you'll need to discover yourself

This is intentional. Part of the capstone is demonstrating that you can work with imperfect data responsibly - see [Assess Data Quality](../project-guide/04-assess-data-quality.md). Do not wait for someone to tell you the data is clean; assume it isn't, and prove it either way.

## What to do when you receive your data

1. Do **not** start modelling immediately. Start with [Understand the Data](../project-guide/03-understand-the-data.md).
2. Build a simple data inventory: what tables/files exist, what each represents, how they relate.
3. Run the data quality checks described in [Assess Data Quality](../project-guide/04-assess-data-quality.md) before drawing any conclusions.
4. Document anything ambiguous or undefined (e.g. an unclear column, an unconfirmed target variable) rather than guessing silently - record it as an assumption.

## Where to go next

- [Understand the Data](../project-guide/03-understand-the-data.md)
- [Assess Data Quality](../project-guide/04-assess-data-quality.md)
- [Open Items](../open-items.md) - tracks all outstanding data placeholders for your course team.
