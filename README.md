# Instant Site

A universal agent skill for building, deploying, updating, and SEO-optimizing static foreign trade independent sites with HTML/CSS/JS, DESIGN.md templates, Surge.sh, and scheduled agent operations. Works with any AI agent (Claude Code, Cursor, Windsurf, Copilot, Hermes, etc.).

## What It Does

Instant Site is designed as a full lifecycle workflow for agent-operated independent sites:

1. **Build** — Generate a complete static site from product, brand, market, and SEO inputs.
2. **Design** — Use DESIGN.md templates to keep layout, typography, colors, and components consistent.
3. **Deploy** — Publish to Surge.sh, including custom domain workflows.
4. **Verify** — Check homepage, robots.txt, sitemap.xml, metadata, canonical URLs, and Surge availability after deployment.
5. **Update** — Generate content drafts for blog posts, product updates, and industry articles on a schedule.
6. **SEO Optimize** — Run static and deployed-site SEO audits, fix low-risk issues, and prepare higher-risk changes for review.
7. **Operate Multiple Sites** — Use a registry file to manage several independent sites with isolated configs and schedules.

## Best For

- B2B foreign trade websites
- Product catalog sites
- Single-product landing pages
- Small brand independent sites
- Static marketing sites that need repeatable content and SEO operations

Instant Site is not a replacement for a full backend, ecommerce platform, CRM, or CMS. If a site needs payments, accounts, server-side forms, strict custom HTTP headers, or complex editorial permissions, use Instant Site for static marketing pages only or move to a platform with backend support.

## Quick Start: Build a New Foreign Trade Site

Create a project directory, then ask the agent to generate the site from your business inputs:

```text
Build an English B2B foreign trade site for the following brand and products. Use the b2b-industrial DESIGN.md template. Generate site.config.json, DESIGN.md, index.html, product pages, about.html, contact.html, robots.txt, and sitemap.xml. Prepare a publish review before deployment.
```

Minimum inputs:

- Brand name and tagline
- Target markets and language
- Product list, features, applications, and target keywords
- Certifications or proof points that can be safely claimed
- Contact email, WhatsApp, or inquiry CTA
- Preferred Surge domain or custom domain
- Preferred design template
- Publishing policy: `review_required`, `hybrid`, or `auto_publish`

## Recommended Project Structure

```text
customer-site/
  site.config.json
  content-plan.json
  seo-profile.json
  review-policy.json
  DESIGN.md
  index.html
  about.html
  contact.html
  products/
    index.html
    product-slug.html
  blog/
    index.html
    article-slug.html
  assets/
    css/styles.css
    js/main.js
    images/
  robots.txt
  sitemap.xml
  .instant-site/
    state.json
    deployments.json
    content-calendar.json
    content-drafts/
    seo-audits/
```

For multi-site operations:

```text
workspace/
  sites.registry.json
  sites/
    site-a/
    site-b/
```

## Site Configuration

`site.config.json` is the source of truth for generation, deployment, content updates, and SEO audits. It should include:

- `siteId`
- brand name, tagline, language, markets, and tone
- business type, industry, products, certifications, and target customers
- Surge domain, custom domain, contact methods, and primary CTA
- selected DESIGN.md template
- required pages
- publishing mode

See `templates/site.config.example.json` for a complete example.

Runtime state should be stored in `.instant-site/state.json`, not in chat history. Deployment history should be stored in `.instant-site/deployments.json`.

## DESIGN.md Templates

Instant Site uses DESIGN.md to make AI-generated static pages consistent. The templates follow a 9-section structure:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Included templates:

| Template | Style | Best For |
|----------|-------|----------|
| `b2b-industrial` | Precise, trustworthy, manufacturing-focused | Machinery, tools, hardware, building materials |
| `clean-export-brand` | Bright, clean, approachable export brand | Homeware, consumer goods, light industry |
| `premium-manufacturing` | Premium, technical, high-confidence | OEM/ODM, advanced manufacturing, high-ticket products |
| `warm-content` | Editorial, readable, content-first | Blogs, founder stories, educational content |
| `dark-tech` | Dark, cinematic, high-tech | AI, electronics, industrial technology |

## Deployment with Surge.sh

Surge.sh is the default deployment target because it is simple static hosting with automatic SSL.

```bash
npm install -g surge
cd ./customer-site
surge . example-site.surge.sh
```

Custom domain:

```bash
surge . --domain www.example.com
```

First Surge use may ask for email and password and store credentials in `~/.netrc`. DNS setup for custom domains must be completed in the user's domain provider.

### Deployment Checklist

Before deployment, verify:

- `index.html`, `robots.txt`, `sitemap.xml`, and `DESIGN.md` exist.
- Canonical URLs match the target domain.
- `robots.txt` references the sitemap.
- `sitemap.xml` includes homepage, products, about, contact, and blog index.
- Open Graph images use absolute URLs.
- No placeholder text remains.

After deployment, verify:

```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

If Surge returns a temporary 504 after CLI success, wait 10-30 minutes and retry. Netlify Drop can be used as an emergency demo fallback, but it is not the preferred long-term operating path.

## Scheduled Content Operations

Content operations are driven by `content-plan.json` and `review-policy.json`.

Recommended cadence:

- Weekly blog or industry article draft
- Monthly product page refresh
- Weekly SEO audit
- Monthly strategy review if Search Console or other external SEO data is connected

Default behavior is `review_required`: the agent generates drafts and checks them, but does not publish new commercial content without approval. This protects against incorrect product claims, fake certifications, unsupported delivery promises, and inaccurate pricing.

## SEO Audits and Search Data Limitations

Instant Site supports three SEO layers:

1. **Local static audit** — scan HTML, robots.txt, sitemap.xml, canonical URLs, metadata, JSON-LD, images, internal links, and placeholders.
2. **Deployed-site audit** — verify HTTP status, HTTPS access, robots.txt, sitemap.xml, canonical, OG image availability, and 404/504 issues.
3. **External data audit** — use Google Search Console, Bing Webmaster Tools, PageSpeed Insights, IndexNow, or a rank tracking API when configured.

Technical and on-page SEO can be automated from static files. Real search ranking monitoring requires external data access. Without Search Console, Bing Webmaster Tools, or a third-party rank tracker, Instant Site should not claim exact ranking changes.

SEO rules retained from the original skill:

- Use unique title and meta description on every page.
- Use Open Graph and Twitter Card tags.
- Use canonical URLs.
- Use JSON-LD for `WebSite`, `Organization`, `Product`, and `FAQPage` where appropriate.
- Optimize Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- Use descriptive image names, alt text, lazy loading, modern formats, width, and height.
- Do not rely on pure CSR/SPAs for SEO-critical pages.
- Do not use deprecated HowTo schema.
- Do not reference FID as a current Core Web Vital.

## Multi-Site Operations

Use `sites.registry.json` to operate multiple sites. Each site should have its own project directory, `site.config.json`, `.instant-site/state.json`, and deployment target.

The agent should:

- Process only active sites.
- Respect each site's content and SEO cadence.
- Keep canonical URLs, sitemap URLs, and deployment domains isolated per site.
- Generate drafts by default rather than publishing new content automatically.
- Produce a summary report for health checks, pending reviews, SEO issues, and deployment failures.

## Review Gates and Safety

Human approval is required by default for:

- First launch
- New product pages
- New blog articles
- Brand positioning changes
- Pricing, lead time, certification, compliance, or legal claims
- Contact method changes
- Custom domain changes
- Page deletion
- Major title or description rewrites

Low-risk automated actions may include sitemap updates, robots sitemap URL fixes, lastmod updates, minor metadata completion, approved draft publishing, deployment verification, health checks, and SEO audit report generation.

## Pitfalls

| Issue | Solution |
|-------|----------|
| Surge CDN returns 504 | Wait 10-30 min, retry, or use Netlify Drop as emergency fallback |
| Custom domain does not resolve | Check DNS records with the domain provider |
| No custom HTTP headers on Surge | Use meta tags for partial coverage or move to Cloudflare Pages if CSP/HSTS are mandatory |
| CSR/SPA sites hurt SEO | Generate static HTML for SEO-critical pages |
| FID references in old SEO content | Use INP; FID was replaced in March 2024 |
| FAQ rich results are limited | Use FAQPage mainly for clarity and AI citation, not guaranteed Google rich results |
| `og:image` uses a relative path | Use an absolute URL such as `https://domain/og.png` |

## Installation
### For AI Agents

```bash
# Copy to your agent's skills/tools directory
cp -r instant-site ~/.your-agent/skills/
```

### Standalone Use

`SKILL.md` is a standalone operating guide. Copy it into a site project — any AI agent can read and follow it.

## License

MIT
