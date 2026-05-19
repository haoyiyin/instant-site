# SEO Operations

Instant Site separates SEO into local static checks, deployed-site checks, and external data checks.

## Local Static Audit

Check every HTML file for:

- `<html lang>`
- charset and viewport
- unique title
- meta description
- canonical URL
- Open Graph tags
- Twitter Card tags
- semantic heading order
- internal links
- image alt, width, height, and lazy loading
- JSON-LD where appropriate
- no unresolved placeholders
- no pure CSR dependency for SEO-critical content

Check site files:

- `robots.txt` exists and references sitemap.
- `sitemap.xml` includes all important pages.
- URLs are lowercase, semantic, and hyphenated.
- `og:image` and `twitter:image` are absolute URLs after deployment target is known.

## Deployed-Site Audit

Use network checks after deployment:

```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Verify:

- Homepage status is 2xx or expected 3xx.
- HTTPS works.
- robots.txt is reachable.
- sitemap.xml is reachable.
- canonical URLs point to the deployed domain.
- Open Graph image URLs are reachable when checked.
- Important pages do not return 404 or 504.

## External Data

Exact search ranking monitoring requires external data access.

Supported optional sources:

- Google Search Console after site verification and authorization
- Bing Webmaster Tools after site verification
- PageSpeed Insights for performance reports
- IndexNow when a key is configured
- Third-party rank tracking APIs supplied by the user

Without these sources, the agent should report technical SEO status and content recommendations, not exact ranking changes.

## Severity Model

- Critical: indexing blocked, page unreachable, sitemap broken, canonical points to wrong domain.
- High: missing title, description, canonical, important schema, or sitemap entry.
- Medium: weak image SEO, heading structure, internal links, performance risk.
- Low: content expansion, FAQ/AEO improvements, minor copy refinements.

## Auto-Fix Policy

Can be auto-fixed when policy allows:

- sitemap lastmod updates
- robots sitemap URL correction
- missing canonical from known domain
- basic Open Graph and Twitter tag completion
- blog index links for already approved pages

Requires review:

- major title or description rewrites
- new SEO content sections
- product claims
- certifications
- pricing, delivery, compliance, or legal statements
- competitor comparisons

## Current SEO Guidance

- Use INP, not FID.
- Do not use deprecated HowTo schema.
- Use FAQPage only where the FAQ is useful for users; it does not guarantee Google rich results for commercial sites.
- Keep SEO-critical content in static HTML.
