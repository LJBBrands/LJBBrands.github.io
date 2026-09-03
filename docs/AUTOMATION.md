# Automation

## Intended flow

```
Issue
  → agent-ready
  → branch
  → implementation
  → lint / test / build / accessibility checks
  → automated review
  → pull request
  → human approval
  → merge
  → staging / preview
  → human production approval
```

Today, merge to `main` also triggers GitHub Pages. That is **not** the same as a human production-approval gate. See [RELEASE.md](./RELEASE.md).

## Agent-ready criteria

Use the **Agent-ready** issue template. An issue is ready only when all of the following are true:

1. One outcome, written as a testable change
2. In-scope surfaces listed
3. Human-only items listed
4. Acceptance commands listed
5. No missing product facts, financial claims, or legal text the agent would have to invent

If an issue is not agent-ready, the agent should stop and say so.

## What CI automates

On pull requests and `main`:

- pinned Node/npm install (`npm ci`)
- `npm run ci` (doctor, lint, format, unit tests, secret scan, SEO structure)
- production build
- `npm run check:site` (internal links, static HTML a11y)
- Playwright WebKit smoke
- `npm audit --audit-level=high`

GitHub Dependency Review is documented as a human settings step. It is not in CI until Dependency graph is enabled at
https://github.com/LJBBrands/LJBBrands.github.io/settings/security_analysis
— the official action fails on this repository today.

## Orchestrator recommendation

Keep **GitHub Issues + GitHub Actions + this repository’s AGENTS.md** as the orchestrator for Phase 1.

Do not add a second system (custom agent bus, extra project manager, or Website 2.0 pipeline) until issue volume or preview hosting makes the current path fail. Cursor Cloud agents should read the Agent-ready template and the docs in this folder.

A later optional improvement, requiring human GitHub settings:

- required status checks on `main`
- required reviewers
- environment protection on `github-pages` so deploy is not implicit in merge

## Future Playwright coverage

Current smoke already covers overflow, reduced motion, mobile menu, project dialog, and public email. Add cases when those surfaces exist as stable UI:

- navigation labels
- investor CTA
- contact / investor form states
- dedicated product pages (none yet)
