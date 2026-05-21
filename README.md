# Instant Site

Agent-operated platform for foreign trade independent sites. An AI agent reads this skill to build, deploy, and operate static sites — from zero to launch, then continuously with content updates, SEO audits, multi-language support, and inquiry forms. Works with any AI agent (Claude Code, Cursor, Windsurf, Copilot, Hermes, etc.).

## What It Does

Full lifecycle, agent-operated:

1. **Build** — Generate a complete static site from product, brand, market, and SEO inputs.
2. **Design** — Use DESIGN.md templates (B2B industrial, clean export, premium manufacturing, warm content, dark tech) for visual consistency.
3. **Deploy** — Publish to Surge.sh with custom domain support and post-deploy verification.
4. **Verify** — Check homepage, robots.txt, sitemap.xml, metadata, canonical URLs, and CDN availability.
5. **Content Operations** — Generate blog drafts, product updates, and industry articles on a schedule with review gates.
6. **SEO Optimization** — Three-layer audits: local static, deployed-site, and external data (Search Console, PageSpeed, etc.).
7. **Inquiry Forms** — Zero-config contact forms via FormSubmit; emails delivered to the configured inbox without registration or API keys.
8. **Multi-Language** — Subdirectory-based `/en/` `/ar/` with hreflang, RTL support, per-language content plans, and language switchers.
9. **Multi-Site** — Manage multiple independent sites from a registry with isolated configs, domains, and schedules.

## Best For

- B2B foreign trade websites (machinery, tools, hardware, OEM/ODM)
- B2C consumer goods and lifestyle brands targeting overseas markets
- Product catalog and single-product landing pages
- Small brand independent sites
- Static marketing sites that need repeatable content and SEO operations

## Quick Start

Create a project directory, then ask an AI agent:

```text
Build an English B2B foreign trade site for the following brand and products. Use the b2b-industrial DESIGN.md template. Generate site.config.json, DESIGN.md, index.html, product pages, about.html, contact.html, robots.txt, and sitemap.xml. Prepare a publish review before deployment.
```

Minimum inputs:

- Brand name and tagline
- Target markets and languages
- Product list, features, applications, and target keywords
- Certifications or proof points
- Contact email and primary CTA
- Preferred Surge domain or custom domain
- Design template selection
- Publishing policy: `review_required`, `hybrid`, or `auto_publish`

## Project Structure

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

## Core Features

| Feature | Description |
|---------|-------------|
| **Full Site Generation** | Home, products, about, contact, blog, robots.txt, sitemap.xml — complete from day one |
| **DESIGN.md System** | 11 visual templates ensuring AI-generated pages look consistent |
| **Zero-Config Forms** | FormSubmit inquiry forms — no registration, no API key, emails go straight to your inbox |
| **Multi-Language + RTL** | Subdirectory structure with hreflang, Arabic RTL support, per-language content |
| **Content Calendar** | Scheduled blog posts, product refreshes, industry articles with review gates |
| **3-Layer SEO** | Static HTML audit + deployed-site checks + external data (Search Console, PageSpeed) |
| **Publish Safety** | Default `review_required` — risky claims (pricing, certifications, legal) need human approval |
| **Multi-Site Registry** | Manage many sites from one workspace with isolated configs and cadences |
| **State in Files** | `.instant-site/state.json` stores deployment and content status, not in chat history |

## Deployment

Surge.sh is the default target — simple, free, automatic HTTPS on `*.surge.sh`:

```bash
npm install -g surge
cd ./customer-site
surge . example-site.surge.sh
```

Custom domain:

```bash
surge . --domain www.example.com
```

### Verification

```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

## Design Templates

| Template | Best For |
|----------|----------|
| **B2B** | — |
| `b2b-industrial` | Machinery, tools, hardware, building materials |
| `clean-export-brand` | Homeware, consumer goods, light industry |
| `premium-manufacturing` | OEM/ODM, precision manufacturing, high-ticket products |
| `saas-tech` | SaaS platforms, cloud services, developer tools, API products |
| `enterprise-corporate` | Enterprise services, consulting, professional services |
| `fintech-secure` | Fintech, payments, crypto, financial services |
| **B2C** | — |
| `warm-content` | Blogs, founder stories, educational content |
| `dark-tech` | AI, electronics, industrial technology |
| `ecommerce-vibrant` | DTC brands, fashion, consumer retail |
| `lifestyle-minimal` | Premium lifestyle, design-forward brands, wellness |
| `luxury-automotive` | Luxury goods, automotive, high-end consumer products |

## Multi-Site Operations

Use `sites.registry.json` to manage multiple sites:

```text
workspace/
  sites.registry.json
  sites/
    acme-tools/
    homeware-export/
```

Each site maintains its own `site.config.json`, `.instant-site/state.json`, and deployment target.

## Review & Safety

Human approval required by default for:

- First launch
- New product pages and blog articles
- Brand positioning changes
- Pricing, lead time, certification, compliance claims
- Contact method and custom domain changes

Low-risk actions (sitemap updates, minor metadata, health checks, SEO audit reports) may be automated when policy allows.

## Installation

```bash
# Copy to your agent's skills/tools directory
cp -r instant-site ~/.your-agent/skills/
```

`SKILL.md` is a standalone operating guide — copy it into any site project and any AI agent can read and follow it.

## License

MIT
