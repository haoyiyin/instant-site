# Tool Registry

Reference for tools, services, and fallbacks used in Instant Site workflow.

## How to use this registry

1. **Find tools by category** — Browse sections below
2. **Check when to use** — Each tool lists purpose and triggers
3. **Verify requirements** — Required inputs and limitations noted
4. **Apply fallbacks** — When primary tool fails, use documented fallback

---

## Static Generation

### HTML/CSS/JS

**Purpose**: Core static site technology stack.

**When to use**: Always. SEO-critical content must be in static HTML.

**Required inputs**: None.

**Safe automation level**: Full.

**Notes**: Do not use pure CSR/SPA for SEO-critical pages. React/Vue fine for non-critical enhancements only.

---

## Image Acquisition

### Unsplash (Primary)

**Purpose**: Free commercial-use photos, no attribution required.

**When to use**: Hero backgrounds, lifestyle images, general business photos.

**Required inputs**: Keyword search terms.

**Safe automation level**: Full.

**Search methods**:
- Web search skill: "Unsplash free stock image `{keyword}`"
- Direct: `https://unsplash.com/s/photos/{keyword}`
- API (optional): `https://api.unsplash.com/search/photos?query={keyword}`

**License**: Free for commercial use, no attribution required.

**Fallback**: Pexels.

**Notes**:
- High-quality professional photos
- Cannot create competing stock service from images

### Pexels (Primary for Products)

**Purpose**: Free commercial-use photos, strong business/product category.

**When to use**: Product photography, industrial settings, machinery.

**Required inputs**: Keyword search terms.

**Safe automation level**: Full.

**Search methods**:
- Web search skill: "Pexels royalty free `{keyword}`"
- Direct: `https://www.pexels.com/search/{keyword}/`

**License**: Free for commercial use, no attribution required.

**Fallback**: Pixabay.

**Notes**:
- Excellent for manufacturing/industrial content
- Also offers free videos

### Pixabay (Fallback)

**Purpose**: Free commercial-use photos, vectors, illustrations.

**When to use**: When Unsplash/Pexels lack content, need vectors/illustrations.

**Required inputs**: Keyword search terms.

**Safe automation level**: Full.

**Search methods**:
- Direct: `https://pixabay.com/images/search/{keyword}/`

**License**: Free for commercial use, no attribution required.

**Fallback**: Burst by Shopify (B2C).

**Notes**:
- Largest library of free images
- Includes vectors and illustrations

### Burst by Shopify (E-commerce)

**Purpose**: Free commercial-use images for e-commerce/retail.

**When to use**: B2C consumer goods, retail, product photography.

**Required inputs**: Keyword search terms.

**Safe automation level**: Full.

**Search URL**: `https://burst.shopify.com/search?q={keyword}`

**License**: Free for commercial use, no attribution required.

**Fallback**: Placeholder (draft only).

**Notes**:
- E-commerce focused
- High-quality lifestyle images

### Image Search Skills

**brave-search**: Search for "Unsplash/Pexels `{keyword}` free commercial image"

**web-fetch**: Fetch search pages and extract image URLs/IDs

**scrapling**: Scrape stock sites when API unavailable

**Workflow**: See `docs/workflows/image-acquisition.md` for complete process.

---

## Design

### DESIGN.md Templates

**Purpose**: Visual system definition for consistent page generation.

**When to use**: Before generating any pages. Required.

**Required inputs**: Template selection, design dials (optional).

**Templates available**:
- B2B: `b2b-industrial`, `clean-export-brand`, `premium-manufacturing`, `saas-tech`, `enterprise-corporate`, `fintech-secure`
- B2C: `warm-content`, `dark-tech`, `ecommerce-vibrant`, `lifestyle-minimal`, `luxury-automotive`

**Safe automation level**: Full after template selection and design read.

**Fallback**: None. DESIGN.md required.

**Notes**: State design read before selection. Avoid AI slop patterns.

---

## Deployment

### Surge.sh (Primary)

**Purpose**: Default static site deployment.

**When to use**: All deployments unless custom headers/CSP/HSTS required.

**Required inputs**: `site.config.json` with domain, generated files.

**Safe automation level**: Full after first-time credentials stored.

**Fallback**: Netlify Drop for emergency demos only.

**Notes**:
- First use prompts for email/password, stores in `~/.netrc`
- Temporary 504 can occur after CLI success (wait 10-30 min)
- No custom headers support

### Netlify Drop (Fallback)

**Purpose**: Emergency deployment when Surge fails.

**When to use**: Only for urgent demos when Surge unavailable.

**Required inputs**: Generated files.

**Safe automation level**: Full.

**Fallback**: None (Surge is primary).

**Notes**: Not default operating path. Use sparingly.

### Cloudflare Pages (Advanced)

**Purpose**: Deployment with custom headers, CSP, HSTS.

**When to use**: When security headers required (CSP, HSTS, custom caching).

**Required inputs**: Generated files, `_headers` configuration.

**Safe automation level**: Requires separate setup workflow.

**Fallback**: Surge for standard deployments.

**Notes**: More setup complexity. Use when Surge limitations are blockers.

---

## Verification

### curl (Network Checks)

**Purpose**: Post-deploy verification of critical URLs.

**When to use**: After every deployment.

**Required inputs**: Deployed domain.

**Safe automation level**: Full.

**Commands**:
```bash
curl -I https://domain.com/
curl https://domain.com/robots.txt
curl https://domain.com/sitemap.xml
curl -s https://domain.com/ | grep -E '<title>|canonical'
```

**Fallback**: Manual browser check.

**Notes**: Does not render JavaScript. Use browser for visual QA.

### Browser Visual QA (Manual)

**Purpose**: Visual production quality check.

**When to use**: After deployment, before production release.

**Required inputs**: Deployed URL, viewport sizes.

**Safe automation level**: None (manual).

**Checklist**: See `templates/deployment-checklist.md` Visual Production QA section.

**Fallback**: None (manual process).

---

## Forms

### FormSubmit (Primary)

**Purpose**: Zero-configuration inquiry forms.

**When to use**: Contact and inquiry forms on static sites.

**Required inputs**: Contact email from `site.config.json`.

**Safe automation level**: Full.

**Fallback**: Web3Forms.

**Notes**:
- No registration, no API key
- First submission triggers confirmation email (remind user)
- CAPTCHA included by default
- `_next` URL must be absolute

### Web3Forms (Fallback)

**Purpose**: Alternative form backend when FormSubmit unavailable.

**When to use**: When FormSubmit blocked or user prefers.

**Required inputs**: Access key (requires registration).

**Safe automation level**: Requires one-time setup.

**Fallback**: `mailto:` link.

**Notes**: Free tier: 250 submissions/month.

---

## SEO Data

### Local Static Audit

**Purpose**: Check HTML files for SEO completeness.

**When to use**: Before and after generation.

**Required inputs**: All HTML files, `robots.txt`, `sitemap.xml`.

**Safe automation level**: Full.

**Fallback**: None.

**Notes**: See `docs/workflows/seo-audit.md`.

### Deployed-Site Checks

**Purpose**: Verify live URLs after deployment.

**When to use**: After deployment.

**Required inputs**: Deployed domain.

**Safe automation level**: Full.

**Fallback**: None.

**Notes**: Uses curl. Does not check JS-injected content.

### Google Search Console (Optional)

**Purpose**: Real search performance data.

**When to use**: When configured and authorized.

**Required inputs**: Site verification, API access.

**Safe automation level**: Read-only.

**Fallback**: Report technical SEO status without ranking data.

**Notes**: Do not claim ranking data without GSC access.

### Bing Webmaster Tools (Optional)

**Purpose**: Bing-specific indexing data.

**When to use**: When configured and authorized.

**Required inputs**: Site verification.

**Safe automation level**: Read-only.

**Fallback**: None.

**Notes**: Similar to GSC for Bing search.

### PageSpeed Insights (Optional)

**Purpose**: Performance metrics.

**When to use**: When configured or manual check.

**Required inputs**: Deployed URL.

**Safe automation level**: Read-only.

**Fallback**: Manual Lighthouse run.

**Notes**: CWV targets: LCP < 2.5s, INP < 200ms, CLS < 0.1.

### IndexNow (Optional)

**Purpose**: Fast URL submission to search engines.

**When to use**: When key configured.

**Required inputs**: IndexNow API key.

**Safe automation level**: Full when key available.

**Fallback**: Manual submission via GSC/Bing.

**Notes**: Key must be placed at `/key.txt` on site.

### Third-Party Rank Tracking (Optional)

**Purpose**: Keyword position monitoring over time.

**When to use**: When user provides API access.

**Required inputs**: API credentials for rank tracking service.

**Safe automation level**: Read-only.

**Fallback**: Report technical SEO without ranking claims.

**Notes**: Do not claim exact rankings without configured access. Examples: DataForSEO, Semrush, Ahrefs rank tracking APIs.

---

## Analytics (Optional)

### GA4

**Purpose**: Web analytics.

**When to use**: When user requests analytics.

**Required inputs**: Measurement ID.

**Safe automation level**: Full after ID provided.

**Fallback**: Plausible.

**Notes**: Not required by default. Optional enhancement.

### Plausible

**Purpose**: Privacy-focused analytics.

**When to use**: When user prefers privacy-focused option.

**Required inputs**: Plausible account/domain setup.

**Safe automation level**: Full after setup.

**Fallback**: GA4.

**Notes**: Simpler, no cookies. Paid service.

---

## State

### site.config.json

**Purpose**: Primary site configuration.

**When to use**: All operations.

**Required inputs**: Brand, products, domain, design, publishing policy.

**Safe automation level**: Full with review gates.

**Fallback**: None (required).

**Notes**: See `templates/site.config.example.json`.

### .instant-site/state.json

**Purpose**: Operational state tracking.

**When to use**: Scheduled operations, multi-site runs.

**Required inputs**: Deployment and content status.

**Safe automation level**: Full.

**Fallback**: None (required).

**Notes**: See `docs/site-state.md`.

### .instant-site/deployments.json

**Purpose**: Deployment history.

**When to use**: Post-deploy, rollback reference.

**Required inputs**: Deployment records.

**Safe automation level**: Full.

**Fallback**: None (required).

---

## Tool Selection Summary

| Category | Primary | Fallback | When to Switch |
|----------|---------|----------|----------------|
| Deployment | Surge.sh | Netlify Drop | Surge unavailable, urgent demo |
| Deployment (headers) | Cloudflare Pages | Surge | CSP/HSTS required |
| Forms | FormSubmit | Web3Forms | FormSubmit blocked |
| Images (general) | Unsplash | Pexels | Unsplash lacks content |
| Images (products) | Pexels | Pixabay | Pexels lacks content |
| Images (e-commerce) | Burst | Unsplash | Burst lacks content |
| SEO Data | GSC (if configured) | Technical audit | No API access |
| Analytics | GA4 | Plausible | User preference |
| Verification | curl | Browser manual | Visual QA needed |

---

## Limitations

- **curl cannot detect JS-injected schema**: Use browser tools for JSON-LD check
- **Surge cannot add custom headers**: Use Cloudflare Pages for CSP/HSTS
- **External SEO data requires authorization**: Do not claim rankings without access
- **FormSubmit first submission needs confirmation**: Remind user to check email