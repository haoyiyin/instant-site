# Deployment Workflow

Deploy and verify static sites to Cloudflare Pages by default, with Surge.sh fallback.

## When to use

Use this workflow when:
- Deploying a new site for the first time
- Redeploying after content or design changes
- Setting up a custom domain
- Verifying site health after deployment

## Required inputs

Before deployment:
- `site.config.json` with deployment configuration
- `DESIGN.md` exists
- All HTML files generated
- `robots.txt` and `sitemap.xml` ready
- Cloudflare Pages project name (lowercase, URL-safe)
- Canonical URLs use the target domain
- OG and Twitter image URLs are absolute
- Optional `_headers` file for CSP/HSTS/custom caching
- Optional `_redirects` file for redirect rules

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
- `_headers` reviewed if present (CSP, HSTS, cache rules)
- `_redirects` reviewed if present
- Project name is lowercase, URL-safe, stable
- Custom domain DNS configured (if applicable)

### 2. Cloudflare Authentication

Check authentication status:
```bash
npx wrangler whoami
```

If not authenticated, trigger OAuth login:
```bash
npx wrangler login --browser=false
```

**User authorization flow:**
- Wrangler prints an OAuth URL
- Agent shows the URL to the user
- User opens URL, registers/logs into Cloudflare, authorizes Wrangler
- Wrangler stores OAuth credentials locally after success

**Important:**
- Do not ask ordinary users to create API tokens unless OAuth login is impossible
- OAuth URL flow is the recommended user-friendly path
- Credentials stored in `~/.wrangler/config/default.toml`

### 3. Create or Reuse Pages Project

Check existing projects:
```bash
npx wrangler pages project list
```

Create new project if needed:
```bash
npx wrangler pages project create <project-name> --production-branch main
```

**Rules:**
- Project name must be lowercase, URL-safe
- If project exists, reuse it — do not delete/recreate
- Production branch typically `main`

### 4. Deploy to Cloudflare Pages

Deploy the static site directory:
```bash
cd ./customer-site
npx wrangler pages deploy . --project-name <project-name> --branch main
```

Capture the deployment URL from Wrangler output:
- Default: `https://<project-name>.pages.dev`
- Branch preview: `https://<branch>--<project-name>.pages.dev`

### 5. Custom Domain (Optional)

Custom domain setup may require Cloudflare dashboard:
- Wrangler deploys to `.pages.dev` automatically
- Custom domain activation often needs DNS confirmation in Cloudflare dashboard
- Mark custom domain as `pending` until HTTPS and DNS verification pass

DNS configuration:
- CNAME to `<project-name>.pages.dev` or Cloudflare-provided target
- Verify HTTPS works before marking domain as active

### 6. Post-deploy verification

Run network checks:
```bash
curl -I https://<project-name>.pages.dev/
curl https://<project-name>.pages.dev/robots.txt
curl https://<project-name>.pages.dev/sitemap.xml
curl -s https://<project-name>.pages.dev/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Optional header verification (if `_headers` present):
```bash
curl -I https://<project-name>.pages.dev/ | grep -Ei 'content-security-policy|strict-transport-security|x-content-type-options|cache-control'
```

Verification passes when:
- Homepage returns 2xx or expected 3xx
- HTTPS available
- `robots.txt` reachable
- `sitemap.xml` reachable
- Homepage contains title, description, canonical, OG tags
- Security headers present if `_headers` configured

### 7. Update state files

After successful deployment:
- Update `.instant-site/deployments.json` with timestamp, provider, project, domain, command, status, verification results
- Update `.instant-site/state.json` with current domain and last deployment info

### 8. Visual QA (manual)

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

## Surge.sh Fallback

Use Surge.sh only when:
- Cloudflare OAuth cannot be completed
- Cloudflare account/project setup is unavailable
- User explicitly requests Surge
- Urgent demo needed and Cloudflare setup is blocked

Fallback commands:
```bash
npm install -g surge
cd ./customer-site
surge . <domain>.surge.sh
```

Custom domain:
```bash
surge . --domain www.example.com
```

**Surge limitations:**
- First use prompts for email/password, stores in `~/.netrc`
- Temporary 504 can occur after CLI success (wait 10-30 min)
- No custom headers support
- Cannot use `_headers` or `_redirects`

## Netlify Drop (Emergency Only)

Use only for emergency demos when both Cloudflare and Surge fail:
```bash
npx netlify-cli deploy --prod --dir=./customer-site
```

## Deployment Record Shape

```json
{
  "timestamp": "2026-05-29T00:00:00Z",
  "provider": "cloudflare_pages",
  "projectName": "acme-tools",
  "domain": "acme-tools.pages.dev",
  "customDomain": "www.acmetools.com",
  "customDomainStatus": "pending",
  "command": "npx wrangler pages deploy . --project-name acme-tools --branch main",
  "status": "success",
  "verification": {
    "homepage": "pass",
    "robots": "pass",
    "sitemap": "pass",
    "metadata": "pass",
    "headers": "pass"
  },
  "notes": []
}
```

For Surge fallback:
```json
{
  "timestamp": "2026-05-29T00:00:00Z",
  "provider": "surge",
  "domain": "acme-tools.surge.sh",
  "command": "surge . acme-tools.surge.sh",
  "status": "success",
  "verification": {
    "homepage": "pass",
    "robots": "pass",
    "sitemap": "pass",
    "metadata": "pass"
  },
  "notes": ["fallback used: Cloudflare OAuth unavailable"]
}
```

## Common mistakes

- Running `wrangler pages deploy` before OAuth login
- Forgetting project creation step
- Using different project name from `site.config.json`
- Leaving canonical URLs on old domain after Cloudflare deploy
- Assuming custom domain is active before DNS verifies
- Treating Surge as default instead of fallback
- Forgetting to verify `_headers` when security headers configured
- Deploying with unresolved placeholders
- OG image URLs not absolute
- Missing `thanks.html` for FormSubmit `_next`

## Troubleshooting

- `wrangler whoami` fails: run OAuth login flow
- Project creation fails: check project name format, check existing projects
- Deploy fails: verify static files exist, check project name match
- Custom domain pending: verify DNS CNAME, check Cloudflare dashboard
- Surge 504: wait 10-30 minutes and retry
- Headers not applied: verify `_headers` file format, check Cloudflare Pages headers documentation