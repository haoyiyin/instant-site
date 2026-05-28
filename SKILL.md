---
name: instant-site
description: "Build, deploy, update, and SEO-optimize static foreign trade independent sites using HTML/CSS/JS, DESIGN.md templates, Surge.sh, and scheduled agent operations. Use for from-zero site generation, static deployment, scheduled content operations, SEO audits, and multi-site independent site operations."
triggers:
  - deploy static site
  - free hosting
  - no registration hosting
  - surge deploy
  - netlify drop
  - static site SEO
  - build foreign trade site
  - independent site operations
  - scheduled website content
  - multi-site operations
  - 上线静态站
  - 免费部署
  - 外贸独立站
  - 从零建站
  - 独立站运营
  - 自动更新网站内容
  - SEO 审计
  - 多站点运营
---

# Instant Site — Agent-Operated Foreign Trade Independent Sites

Instant Site helps an agent build, deploy, update, and SEO-optimize static foreign trade independent sites. The default stack is HTML/CSS/JS, DESIGN.md, Surge.sh, JSON state files, and scheduled agent operations.

## Operating Principles

1. **Static first** — Generate crawlable HTML/CSS/JS. Do not use pure CSR/SPAs for SEO-critical pages.
2. **Surge first** — Use Surge.sh as the default deployment provider; use Netlify Drop only as emergency demo fallback; use Cloudflare Pages when CSP/HSTS/custom headers are required.
3. **DESIGN.md required** — Generate or reuse a DESIGN.md before building pages.
4. **SEO by default** — Every page needs title, description, canonical, Open Graph, Twitter Card, and relevant JSON-LD.
5. **State in files** — Use `site.config.json`, `.instant-site/state.json`, and related JSON files instead of relying on chat history.
6. **Review risky publishing** — Default to `review_required` for new commercial content, product claims, pricing, certifications, legal text, and domain changes.
7. **Multi-site isolation** — When operating multiple sites, read each site's config and state separately; never reuse canonical URLs, sitemap URLs, or domains across sites.
8. **Design quality matters** — Prevent generic AI-looking sites. Infer design direction before template selection. Avoid default slop patterns. Follow layout discipline. Use real visuals.

## Read Documents by Task

Before execution, read the appropriate workflow document:

| Task | Read First |
|------|------------|
| **From-zero site generation** | `docs/workflows/site-generation.md` → `templates/pages/site-generation-checklist.md` |
| **Image acquisition** | `docs/workflows/image-acquisition.md` → `docs/tool-registry.md` (Image Acquisition section) |
| **Deployment** | `docs/workflows/deployment.md` → `templates/deployment-checklist.md` |
| **SEO audit** | `docs/workflows/seo-audit.md` → `docs/seo-operations.md` |
| **Multi-language / RTL** | `docs/workflows/multilingual-rtl.md` |
| **Content operations** | `docs/content-lifecycle.md` → `templates/content-plan.example.json` |
| **Multi-site management** | `docs/multi-site-operations.md` → `templates/sites.registry.example.json` |
| **Publishing review** | `docs/review-gates.md` |
| **Buyer context** | `docs/buyer-context.md` → `templates/buyer-context.example.json` |
| **Tool reference** | `docs/tool-registry.md` |
| **State files** | `docs/site-state.md` |

## Design Quality Rules

### Design Read Before Template Selection

Before selecting or generating a DESIGN.md, state one line:
```text
Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <template>.
```

### Anti-Slop Defaults

Avoid these LLM-signature patterns unless the brief explicitly calls for them:
- Inter plus slate plus purple gradient as default palette
- Centered hero sections as default layout
- Three equal feature cards in a row
- Fake dashboard or product screenshots built from styled divs
- Decorative status dots, section-number eyebrows, scroll cues, version labels
- Plain text wordmarks for invented social-proof logo walls
- Em-dashes in visible copy
- Fake-precise metrics without a source
- Text-only "minimalism" without real visuals

### Layout Discipline

- Hero must fit the initial viewport without scroll
- Hero subtext max 20 words, max 4 lines
- Hero stack max 4 text elements
- Desktop navigation height at or below 80px
- Every multi-column section must collapse below 768px
- CTA labels must not wrap on desktop

### Visual Asset Strategy

Every major landing page needs a visual asset plan:
- Hero visual
- 1-3 supporting visuals
- OG image for social sharing

**Priority order**:
```
User-provided assets → Generated images → Free stock images → Placeholder (draft only)
```

**Free stock sources (all commercial-use, no attribution required)**:
- **Unsplash** — Hero backgrounds, general business photos
- **Pexels** — Products, industrial settings, machinery
- **Pixabay** — Fallback, vectors/illustrations
- **Burst by Shopify** — E-commerce, consumer goods

**Search workflow**:
1. Use brave-search/web-fetch/scrapling skills to search stock sites
2. Keywords: `{industry} professional`, `{product} equipment`, `manufacturing plant`
3. Download to `assets/images/`, integrate with proper alt text

**Rules**:
- Never ship production pages with placeholder images
- Never use images from non-commercial sources (Google Images, Pinterest)
- All images must have descriptive alt text
- See `docs/workflows/image-acquisition.md` for complete workflow

## Review Gates and Claim Safety

### Human Approval Required

Default to approval before:
- First launch
- New product pages and blog articles
- Brand positioning changes
- Pricing, lead time, certification, compliance, or legal claims
- Contact method and custom domain changes
- Page deletion

### Low-Risk Automation

When `review-policy.json` allows:
- sitemap updates
- robots sitemap URL correction
- lastmod updates
- minor metadata completion
- internal links to already approved pages
- approved draft publishing
- deployment verification
- health checks
- SEO audit report generation

### Claim Safety

Do not invent or exaggerate:
- factory size or production capacity
- certifications, patents, or compliance guarantees
- customer names, case studies, or test results
- prices, delivery times, or warranty terms

If a claim is useful but unverified, mark it as needing confirmation in `needsConfirmation` array.

## Project Structure

Recommended user site structure:
```text
customer-site/
  site.config.json
  buyer-context.json
  content-plan.json
  seo-profile.json
  review-policy.json
  DESIGN.md
  index.html
  products/
    index.html
    {slug}.html
  blog/
    index.html
    {slug}.html
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
    buyer-context.json
```

For multi-site workspace:
```text
workspace/
  sites.registry.json
  sites/
    site-a/
    site-b/
```

## Quick Start

Ask an agent:
```text
Build an English B2B foreign trade site for the following brand and products.
Use the b2b-industrial DESIGN.md template.
Generate site.config.json, DESIGN.md, index.html, product pages, about.html,
contact.html, robots.txt, and sitemap.xml.
Prepare a publish review before deployment.
```

Minimum inputs:
- Brand name and tagline
- Target markets and languages
- Product list, features, applications, and target keywords
- Certifications or proof points (verified)
- Contact email and primary CTA
- Surge domain or custom domain
- Design template selection
- Publishing policy: `review_required`, `hybrid`, or `auto_publish`

## Best For

- B2B foreign trade websites (machinery, tools, hardware, OEM/ODM)
- B2C consumer goods and lifestyle brands targeting overseas markets
- Product catalog and single-product landing pages
- Small brand independent sites
- Static marketing sites with repeatable content and SEO operations

## Limitations

- **Surge cannot add custom headers** — Use Cloudflare Pages for CSP/HSTS
- **External SEO data requires authorization** — Do not claim rankings without Search Console access
- **curl cannot detect JS-injected schema** — Use browser tools for JSON-LD verification
- **FormSubmit first submission needs confirmation** — Remind user to check email
- **Static sites use FormSubmit for forms** — No server-side processing

## Current SEO Guidance

- Use INP, not deprecated FID
- Do not use deprecated HowTo schema
- FAQPage helpful for clarity but doesn't guarantee rich results
- Keep SEO-critical content in static HTML
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1

## License

MIT