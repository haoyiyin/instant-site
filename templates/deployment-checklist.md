# Deployment Checklist

## Before Deploy

**Reference**: `docs/tool-registry.md` for deployment tools and fallbacks.

- [ ] `index.html` exists.
- [ ] `DESIGN.md` exists and matches the selected template.
- [ ] `robots.txt` exists and references the deployed sitemap URL.
- [ ] `sitemap.xml` exists and includes homepage, product pages, about page, contact page, and blog index.
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

## Cloudflare Auth

- [ ] Run `npx wrangler whoami` to check authentication.
- [ ] If not authenticated, run `npx wrangler login --browser=false`.
- [ ] Show the OAuth URL to the user with cross-device/browser authorization guidance.
- [ ] Tell the user: if authorization happens on another device/browser and the final page cannot reach localhost, they should paste the full final callback URL or authorization result back to the agent.
- [ ] Keep the Wrangler login process open while waiting for authorization or manual callback input.
- [ ] Treat any pasted callback URL/code/state as sensitive: do not repeat it in chat, do not save it, do not write it to state files or deployment records.
- [ ] If Wrangler prompts for the returned URL/result, paste the user's input into Wrangler.
- [ ] Re-run `npx wrangler whoami` and continue only after it succeeds.
- [ ] If OAuth cannot be completed after retry with manual callback guidance, choose fallback path (same-device browser, API token for technical users, or Surge.sh) with user approval.

## Pages Project

- [ ] Run `npx wrangler pages project list` to check existing projects.
- [ ] Create project if needed: `npx wrangler pages project create <project-name> --production-branch main`.
- [ ] Verify project name matches `site.config.json`.

## Deploy

```bash
cd ./customer-site
npx wrangler pages deploy . --project-name <project-name> --branch main
```

Capture deployment URL from output (e.g., `https://acme-tools.pages.dev`).

## After Deploy

- [ ] Homepage returns 2xx or expected 3xx.
- [ ] HTTPS works.
- [ ] `robots.txt` is reachable.
- [ ] `sitemap.xml` is reachable.
- [ ] Homepage metadata is present.
- [ ] Security headers present if `_headers` configured.
- [ ] `.instant-site/state.json` is updated with provider, project, domain.
- [ ] `.instant-site/deployments.json` is appended with deployment record.

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

Use only when Cloudflare OAuth is unavailable after:
- Manual callback guidance has been attempted
- Same-device/browser retry has been attempted if feasible
- User understands Cloudflare OAuth limitations and agrees to fallback

```bash
npm install -g surge
surge . <domain>.surge.sh
```

Fallback-specific checks:
- [ ] First-time credentials stored in `~/.netrc`.
- [ ] No Surge 504 observed (wait 10-30 min if occurs).
- [ ] State files reflect fallback provider used.