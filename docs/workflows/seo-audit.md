# SEO Audit Workflow

Three-layer SEO audit: local static, deployed-site, and external data.

## When to use

Use this workflow when:
- Running scheduled SEO audits for active sites
- Checking site before first launch
- Diagnosing ranking or indexing issues
- Reviewing redesign impact on SEO

## Required inputs

- `seo-profile.json` with target keywords and mapped pages
- `site.config.json` with domain configuration
- All HTML files for local static audit
- Optional: Search Console, Bing, PageSpeed, IndexNow access

## Steps

### 1. Local static audit

Check every HTML file for:
- `<html lang>` attribute
- charset and viewport meta tags
- Unique title (60 chars max)
- Meta description (160 chars max)
- Canonical URL (absolute, matches domain)
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- Twitter Card tags: `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD where appropriate
- Semantic heading order (h1 → h2 → h3)
- Internal links to other pages
- Image alt text, width, height, lazy loading
- No unresolved placeholders
- SEO-critical content in static HTML (not CSR-only)

Check site files:
- `robots.txt` exists and references sitemap
- `sitemap.xml` includes all important pages
- URLs lowercase, semantic, hyphenated
- Multi-language sites have hreflang on every page

### 2. Deployed-site audit

After deployment, run network checks:
```bash
curl -I https://example-site.pages.dev/
curl https://example-site.pages.dev/robots.txt
curl https://example-site.pages.dev/sitemap.xml
curl -s https://example-site.pages.dev/ | grep -E '<title>|canonical'
```

Verify:
- Homepage returns 2xx or expected 3xx
- HTTPS works
- `robots.txt` reachable
- `sitemap.xml` reachable
- Canonical points to deployed URL
- OG image reachable
- Important pages don't return 404 or 504

### 3. External data audit (optional)

Real ranking and performance data require external tools:
- **Google Search Console**: clicks, impressions, CTR, position (requires site verification)
- **Bing Webmaster Tools**: indexing and search data (requires verification)
- **PageSpeed Insights**: lab and field performance
- **IndexNow**: URL submission when key configured
- **Third-party rank tracking**: user-provided API

**Important**: Do not claim exact ranking data without configured external access. Report technical SEO status and recommendations instead.

## Issue severity

| Severity | Examples |
|----------|----------|
| Critical | Page unreachable, robots blocks indexing, sitemap broken, canonical wrong domain |
| High | Missing title, description, canonical, important schema, sitemap entry |
| Medium | Weak image SEO, heading structure, internal links, Core Web Vitals risk |
| Low | Content expansion, FAQ improvements, minor metadata wording |

## Auto-fix policy

Can be auto-fixed when allowed:
- sitemap lastmod updates
- robots sitemap URL correction
- Missing canonical from known domain
- Basic OG/Twitter tag completion
- Blog index links for approved pages

Requires review:
- Major title or description rewrites
- New SEO content sections
- Product or certification claims
- Pricing, delivery, compliance statements
- Competitor comparisons

## Output files

Generate audit report:
```text
.instant-site/seo-audits/{timestamp}-audit.md
```

Include:
- Summary by severity
- Local static issues
- Deployed-site issues
- External data status (if configured)
- Auto-fixes applied
- Issues requiring review
- Recommendations

## Review gates

Low-risk audits can run without approval:
- Static file checks
- Deployed-site health checks
- Report generation

Requires approval:
- Auto-fixing metadata
- Adding new SEO content
- Modifying claims or legal text

## Verification

Audit report should confirm:
- All pages checked
- Severity correctly categorized
- External data limitations stated clearly
- Auto-fix actions documented
- Review items listed with specific file paths

## Current SEO guidance

- Use INP (Interaction to Next Paint), not deprecated FID
- Do not use deprecated HowTo schema
- FAQPage helpful for clarity but doesn't guarantee rich results for commercial sites
- Keep SEO-critical content in static HTML
- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1

## Common mistakes

- Claiming ranking data without Search Console access
- Reporting "no schema" based on `web_fetch` (JS-injected schema invisible)
- Auto-fixing claims without review
- Using deprecated FID metric
- Recommending HowTo schema
- Missing hreflang on multi-language pages