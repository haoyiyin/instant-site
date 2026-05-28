# Deployment Workflow

Deploy and verify static sites to Surge.sh with post-deploy checks.

## When to use

Use this workflow when:
- Deploying a new site for the first time
- Redeploying after content or design changes
- Setting up a custom domain
- Verifying site health after deployment

## Required inputs

Before deployment:
- `site.config.json` with domain configuration
- `DESIGN.md` exists
- All HTML files generated
- `robots.txt` and `sitemap.xml` ready
- Canonical URLs use the target domain
- OG and Twitter image URLs are absolute

## Steps

### 1. Pre-deploy checks

Run `templates/deployment-checklist.md` before deploy section:
- `index.html` exists
- `DESIGN.md` exists and matches selected template
- `robots.txt` references deployed sitemap URL
- `sitemap.xml` includes all important pages
- Canonical URLs use deployment domain
- OG and Twitter image URLs are absolute
- No unresolved placeholders in files meant for publish
- Custom domain DNS configured (if applicable)

### 2. Deploy to Surge.sh

Default deployment:
```bash
npm install -g surge
cd ./customer-site
surge . example-site.surge.sh
```

Custom domain:
```bash
surge . --domain www.example.com
```

First-time Surge use:
- Prompts for email and password
- Stores credentials in `~/.netrc`
- Explain this to user before running

### 3. Post-deploy verification

Run network checks:
```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Verification passes when:
- Homepage returns 2xx or expected 3xx
- HTTPS available
- `robots.txt` reachable
- `sitemap.xml` reachable
- Homepage contains title, description, canonical, OG tags
- No Surge 504 error

### 4. Update state files

After successful deployment:
- Update `.instant-site/deployments.json` with timestamp, domain, command, status, verification results
- Update `.instant-site/state.json` with current domain and last deployment info

### 5. Visual QA (manual)

Run `templates/deployment-checklist.md` visual production QA section:
- Hero correct at 1024px, 375px, 1440px
- Desktop nav on one line, height ≤80px
- CTA labels don't wrap
- Dark mode consistent (if included)
- Reduced-motion respected
- No text-only or placeholder hero shipped
- OG image matches page
- Images have reserved dimensions
- LCP risk low

## Output files

After deployment:
- `.instant-site/state.json` — updated with deployment info
- `.instant-site/deployments.json` — appended with deployment record

## Review gates

Human approval required for:
- First launch
- Custom domain changes
- Major page structure changes

Low-risk redeployments can be automated when policy allows:
- Content updates to already-approved pages
- Minor metadata changes
- Sitemap refresh

## Verification

Deployment record should include:
```json
{
  "timestamp": "2026-05-28T00:00:00Z",
  "domain": "example-site.surge.sh",
  "command": "surge . example-site.surge.sh",
  "status": "success",
  "verification": {
    "homepage": "pass",
    "robots": "pass",
    "sitemap": "pass",
    "metadata": "pass"
  },
  "notes": []
}
```

## Common mistakes

- Deploying with placeholders in files
- Canonical URLs pointing to wrong domain
- OG image URLs not absolute
- Missing `thanks.html` for FormSubmit `_next`
- First-time Surge credentials blocking automation
- Ignoring Surge 504 (wait 10-30 minutes and retry)
- Using Netlify Drop as default (use only as fallback for urgent demos)

## Fallbacks

### Netlify Drop

Use only for emergency demos when Surge fails:
```bash
npx netlify-cli deploy --prod --dir=./customer-site
```

### Cloudflare Pages

Use when CSP/HSTS/custom headers required:
- Surge cannot add custom headers
- Cloudflare Pages supports headers via `_headers` file
- Requires separate setup workflow

### Deployment failures

- `surge` missing: ask user to install with `npm install -g surge`
- First login required: explain email/password prompt
- CLI success but 504: wait 10-30 minutes, retry
- Custom domain failure: check DNS provider records