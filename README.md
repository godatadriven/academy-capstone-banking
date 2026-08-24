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

### Password gate

The deployed site is gated behind a client-side password prompt (`docs/assets/javascripts/gate.js` + styles in `docs/assets/stylesheets/extra.css`). A visitor must enter the correct password once per browser session before the page content is revealed.

**Important - read before relying on this for anything sensitive:**

- This is a **soft gate**, not real access control. The full page content still ships inside the built HTML/JS - it is only hidden by CSS/JS until the password is entered. Anyone who reads the page source, disables JavaScript, or inspects the built `site/` output directly can see the content without the password.
- It's appropriate for keeping an internal/pre-release capstone brief out of casual view (e.g. a public preview URL that isn't meant to be indexed or stumbled on) - it is **not** appropriate for genuinely confidential content.
- For real access control, put the gate at the hosting layer instead - e.g. Netlify password protection, Cloudflare Access, a private GitHub Pages network, or basic auth at a reverse proxy.
- The gate uses the browser's `crypto.subtle` API, which only works in a "secure context" - HTTPS, or `http://localhost`/`http://127.0.0.1` for local testing. Deploy over HTTPS (GitHub Pages and Netlify both do this by default) or the password form will silently fail to validate.

**To change the password:**

1. Generate a new SHA-256 hash of the desired password:

   ```bash
   python3 -c "import hashlib; print(hashlib.sha256('your-new-password'.encode()).hexdigest())"
   ```

2. Replace the `PASSWORD_HASH` constant in `docs/assets/javascripts/gate.js` with the new hash.
3. Rebuild (`mkdocs build`) and redeploy.

The hash is stored rather than the plaintext password so the password isn't trivially visible in the page source - but see the caveat above, this still isn't strong security.
