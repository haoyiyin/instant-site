# Deployment Checklist

## Before Deploy

**Reference**: `docs/tool-registry.md` for deployment tools and fallbacks.

- [ ] `index.html` exists.
- [ ] `DESIGN.md` exists and matches the selected template.
- [ ] `robots.txt` exists and references the deployed sitemap URL.
- [ ] `sitemap.xml` exists and includes homepage, product pages, about page, contact page, blog index, and all generated/published blog article detail pages.
- [ ] Canonical URLs use the deployment domain.
- [ ] Open Graph and Twitter image URLs are absolute.
- [ ] Every page has title, description, canonical, Open Graph, and Twitter Card tags.
- [ ] Product pages with enough data include `Product` JSON-LD.
- [ ] About page includes `Organization` JSON-LD when company data is available.
- [ ] No final published file contains `TODO`, `Lorem ipsum`, unresolved placeholders.
- [ ] `_headers` file reviewed if present (CSP, HSTS, cache rules).
- [ ] `_redirects` file reviewed if present.
- [ ] Cloudflare Pages project name is lowercase, URL-safe, stable.
- [ ] Custom domain DNS has been configured or the user understands DNS is still pending.
- [ ] If `blog/index.html` lists articles, every article link resolves to an existing `blog/{slug}.html` file.

## Cloudflare Token Authorization

- [ ] Guide the user to register or log into Cloudflare.
- [ ] Guide the user to create a Custom API Token using the **Edit Cloudflare Workers** template (sufficient for Pages deployment).
- [ ] Inform the user that the Token is sensitive and should not be shared publicly.
- [ ] User understands the Token is used only for the current deployment session.
- [ ] Do not store the Token in `.instant-site/state.json`, `.instant-site/deployments.json`, `site.config.json`, logs, README, or any project file.
- [ ] Verify auth with `CLOUDFLARE_API_TOKEN=<token> npx wrangler whoami`.
- [ ] Continue only after token-based `whoami` succeeds.
- [ ] If auth fails, guide user to check token completeness, permissions, selected account, and expiry.
- [ ] Do not request broad permissions (Zone:Edit, DNS:Edit, full admin) unless user explicitly approves for custom-domain automation.

## Pages Project

- [ ] Run `CLOUDFLARE_API_TOKEN=<token> npx wrangler pages project list` to check existing projects.
- [ ] Create project if needed: `CLOUDFLARE_API_TOKEN=<token> npx wrangler pages project create <project-name> --production-branch main`.
- [ ] Verify project name matches `site.config.json`.

## Deploy

```bash
cd ./customer-site
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages deploy . --project-name <project-name> --branch main
```

Capture deployment URL from output (e.g., `https://acme-tools.pages.dev`).

**Important:** Deployment records must omit `CLOUDFLARE_API_TOKEN=...`. Record the sanitized command only.

## After Deploy

- [ ] Homepage returns 2xx or expected 3xx.
- [ ] HTTPS works.
- [ ] `robots.txt` is reachable.
- [ ] `sitemap.xml` is reachable.
- [ ] Homepage metadata is present.
- [ ] Security headers present if `_headers` configured.
- [ ] `.instant-site/state.json` is updated with provider, project, domain.
- [ ] `.instant-site/deployments.json` is appended with deployment record (sanitized command).
- [ ] Suggest user can delete the Cloudflare API Token after successful deployment.

## Visual Production QA

- [ ] Hero looks correct at laptop (1024px), mobile (375px), and large desktop (1440px).
- [ ] Desktop navigation stays on one line, height at or below 80px.
- [ ] CTA labels do not wrap.
- [ ] Dark mode consistent across all sections (if included).
- [ ] Reduced-motion respected (if animations exist).
- [ ] No text-only or placeholder hero shipped accidentally.
- [ ] OG image matches page and deployment domain.
- [ ] Images have reserved dimensions, no visible CLS.
- [ ] LCP risk low (hero image optimized or preloaded).

## Surge.sh Fallback

Use only when Cloudflare account/token setup is unavailable:
- User cannot register Cloudflare account
- User cannot create or submit API Token
- Token permissions insufficient and user declines to adjust
- Cloudflare Pages deployment fails repeatedly
- User explicitly requests Surge fallback

```bash
npm install -g surge
surge . <domain>.surge.sh
```

Fallback-specific checks:
- [ ] First-time credentials stored in `~/.netrc`.
- [ ] No Surge 504 observed (wait 10-30 min if occurs).
- [ ] State files reflect fallback provider used.