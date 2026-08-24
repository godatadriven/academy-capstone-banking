# Data Bootcamp Capstone - Documentation Site

This is the source for the MkDocs Material site that serves as the official capstone project brief for trainees. It is built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Prerequisites

- Python 3.9+
- pip

## Setup

From the project root:

```bash
python3 -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run the site locally

```bash
source .venv/bin/activate
mkdocs serve
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. The site live-reloads as you edit files under `docs/`.

## Build a static site

```bash
source .venv/bin/activate
mkdocs build
```

This outputs a static site to `site/` (git-ignored), which can be hosted anywhere that serves static files.

## Project structure

```text
.
├── mkdocs.yml                  # Site configuration, navigation, theme
├── requirements.txt            # Python dependencies for building the site
├── docs/
│   ├── index.md                 # Home page
│   ├── overview/                 # Capstone Overview section
│   ├── getting-started/          # Getting Started section
│   ├── project-guide/            # The 13-stage project guide
│   ├── deliverables/             # Required deliverables, docs, definition of done
│   ├── assessment/               # Assessment criteria & rubric
│   ├── learning-objectives.md    # Learning objectives, mapped to the project
│   ├── checklist.md              # Capstone checklist
│   ├── open-items.md             # Consolidated list of unresolved placeholders
│   └── assets/stylesheets/       # Light custom CSS on top of Material defaults
└── README.md
```

## Editing content

- All content lives in `docs/` as Markdown. Navigation is defined explicitly in `mkdocs.yml` under `nav:` - add new pages there or they won't appear in the site navigation.
- The site uses Material for MkDocs features including admonitions, tabbed content, Mermaid diagrams (fenced code blocks with `mermaid`), and task-list checkboxes. See the [Material for MkDocs reference docs](https://squidfunk.github.io/mkdocs-material/reference/) for syntax.
- Placeholders for information not yet finalised (dataset details, dates, weightings, etc.) use a consistent `[X TO BE CONFIRMED]` / `[X TO BE ADDED]` convention. See [`docs/open-items.md`](docs/open-items.md) for the full list - update that page whenever you resolve or add a placeholder elsewhere.

## Deployment

`[DEPLOYMENT TARGET / HOSTING TO BE CONFIRMED]` - this repository currently only defines the local build. If you use GitHub Pages, `mkdocs gh-deploy` will build and publish the `site/` output to a `gh-pages` branch once a remote is configured.
