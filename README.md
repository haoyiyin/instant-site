# Instant Site

Agent-operated platform for foreign trade independent sites. An AI agent reads this skill to build, deploy, and operate static sites — from zero to launch, then continuously with content updates, SEO audits, multi-language support, and inquiry forms. Works with any AI agent (Claude Code, Cursor, Windsurf, Copilot, Hermes, etc.).

## What It Does

Full lifecycle, agent-operated:

1. **Build** — Generate a complete static site from product, brand, market, and SEO inputs.
2. **Design** — Use DESIGN.md templates (11 templates for B2B/B2C) for visual consistency.
3. **Deploy** — Publish to Cloudflare Pages via Wrangler OAuth, project creation, and direct upload. Surge.sh available as fallback.
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
Build an English B2B foreign trade site for the following brand and products. Use the b2b-industrial DESIGN.md template. Generate site.config.json, buyer-context.json, DESIGN.md, index.html, product pages, about.html, contact.html, robots.txt, and sitemap.xml. Prepare a publish review before deployment.
```

Minimum inputs:

- Brand name and tagline
- Target markets and languages
- Product list, features, applications, and target keywords
- Verified certifications or proof points
- Contact email and primary CTA
- Cloudflare Pages project name or preferred Pages subdomain
- Optional custom domain
- Optional Surge fallback domain
- Design template selection
- Publishing policy: `review_required`, `hybrid`, or `auto_publish`

## Project Structure

```text
instant-site/
  SKILL.md                      — Agent skill entry point
  README.md
  VERSION
  CHANGELOG.md
  skill.json                    — Skill metadata
  .claude-plugin/               — Claude Code plugin metadata
    plugin.json
    marketplace.json
  docs/
    review-gates.md             — Publishing approval rules
    site-state.md               — State file specification
    content-lifecycle.md        — Content operations workflow
    seo-operations.md           — SEO audit reference
    multi-site-operations.md    — Multi-site management
    buyer-context.md            — Buyer context documentation
    tool-registry.md            — Tool and fallback reference
    workflows/
      site-generation.md        — From-zero build workflow
      deployment.md             — Deploy and verify workflow
      seo-audit.md              — SEO audit workflow
      multilingual-rtl.md       — Multi-language workflow
  templates/
    design/                     — 11 DESIGN.md templates
    *.example.json              — Config templates
    pages/
      site-generation-checklist.md
    deployment-checklist.md
  evals/
    README.md                   — Eval framework intro
    rubric.md                   — Quality dimensions
    cases/                      — Eval cases for regression testing
  scripts/
    validate-skill.mjs          — Skill structure validator
  package.json
```

User site structure:

```text
customer-site/
  site.config.json
  buyer-context.json
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
    buyer-context.json
    content-drafts/
    seo-audits/
```

## Buyer Context

Before generating pages, create `buyer-context.json` to capture:
- Target markets and buyer roles
- Purchase concerns (MOQ, lead time, certification)
- Trust requirements (factory photos, certifications, case studies)
- Conversion goal (quote request, sample request, WhatsApp inquiry)
- Customer language patterns and objections

See `docs/buyer-context.md` and `templates/buyer-context.example.json`.

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

Cloudflare Pages is the default target — global CDN, automatic HTTPS on `*.pages.dev`, custom domains, and `_headers` support:

```bash
# Authenticate (user clicks OAuth URL shown by Wrangler)
npx wrangler login

# Create Pages project
npx wrangler pages project create acme-tools --production-branch main

# Deploy static files
cd ./customer-site
npx wrangler pages deploy . --project-name acme-tools --branch main
```

### User Authorization Flow

Wrangler prints an OAuth URL. The agent shows it to the user. User clicks, logs into Cloudflare, and authorizes. Wrangler stores credentials locally.

### Surge.sh Fallback

When Cloudflare auth/setup is unavailable:

```bash
npm install -g surge
surge . acme-tools.surge.sh
```

### Verification

```bash
curl -I https://acme-tools.pages.dev/
curl https://acme-tools.pages.dev/robots.txt
curl https://acme-tools.pages.dev/sitemap.xml
curl -s https://acme-tools.pages.dev/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Custom headers check (if `_headers` configured):

```bash
curl -I https://acme-tools.pages.dev/ | grep -Ei 'content-security-policy|strict-transport-security|x-content-type-options'
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

## Evals

Evals prevent skill regression. See `evals/README.md` for the framework and `evals/cases/` for core scenarios:
- B2B industrial site generation
- Multi-language RTL support
- SEO audit without external data claims
- Redesign preserving SEO
- Content draft review gates

## Validation

Run the skill structure validator:

```bash
npm run validate
```

Checks: SKILL.md frontmatter, required docs, workflow files, templates JSON, metadata, evals, triggers coverage.

## Installation

### Option 1: Clone and Copy

```bash
git clone https://github.com/haoyiyin/instant-site.git
cp -r instant-site ~/.your-agent/skills/
```

### Option 2: Claude Code Plugin

```bash
/plugin marketplace add haoyiyin/instant-site
/plugin install instant-site
```

### Option 3: Git Submodule

```bash
git submodule add https://github.com/haoyiyin/instant-site.git .agents/instant-site
```

`SKILL.md` is a standalone operating guide — copy it into any site project and any AI agent can read and follow it.

## Documentation

| Document | Purpose |
|----------|---------|
| `docs/workflows/site-generation.md` | From-zero build workflow |
| `docs/workflows/deployment.md` | Deploy and verify workflow |
| `docs/workflows/seo-audit.md` | SEO audit workflow |
| `docs/workflows/multilingual-rtl.md` | Multi-language workflow |
| `docs/buyer-context.md` | Buyer context documentation |
| `docs/tool-registry.md` | Tool and fallback reference |
| `docs/review-gates.md` | Publishing approval rules |
| `docs/content-lifecycle.md` | Content operations workflow |
| `docs/seo-operations.md` | SEO audit reference |
| `docs/multi-site-operations.md` | Multi-site management |
| `docs/site-state.md` | State file specification |
| `evals/rubric.md` | Quality dimensions for evals |

## License

MIT