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
2. **Surge first** — Use Surge.sh as the default deployment provider; use Netlify Drop only as emergency demo fallback.
3. **DESIGN.md required** — Generate or reuse a DESIGN.md before building pages.
4. **SEO by default** — Every page needs title, description, canonical, Open Graph, Twitter Card, and relevant JSON-LD.
5. **State in files** — Use `site.config.json`, `.instant-site/state.json`, and related JSON files instead of relying on chat history.
6. **Review risky publishing** — Default to `review_required` for new commercial content, product claims, pricing, certifications, legal text, and domain changes.
7. **Multi-site isolation** — When operating multiple sites, read each site's config and state separately; never reuse canonical URLs, sitemap URLs, or domains across sites.

## Part 1: Intake and Site Configuration

When building or operating a site, first locate or create `site.config.json`.

Required inputs:

- Brand name, tagline, language, target markets, and tone
- Business type, industry, target customers, and export markets
- Product list with names, slugs, features, applications, and target keywords
- Certifications and proof points that can be safely claimed
- Contact email, WhatsApp, address, and primary CTA
- Surge domain and optional custom domain
- DESIGN.md template
- Required pages
- Publishing policy: `review_required`, `hybrid`, or `auto_publish`

Recommended user site structure:

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

State files:

- `site.config.json` — source of truth for build, deploy, content, and SEO decisions.
- `content-plan.json` — planned blog posts, product updates, industry news, cadence, and content rules.
- `seo-profile.json` — target keywords, markets, mapped pages, competitors, and optional external SEO integrations.
- `review-policy.json` — publishing rules and approval requirements.
- `.instant-site/state.json` — current domain, last deployment, content status, SEO status, and known issues.
- `.instant-site/deployments.json` — deployment history and verification results.

If required information is missing, create a config draft with explicit `needsConfirmation` fields instead of inventing business facts.

## Part 2: Full Static Site Generation

Use this workflow when the user asks to create a site from zero.

1. Read `site.config.json` or collect the minimum inputs listed above.
2. Select or generate `DESIGN.md` from one of the templates in `templates/design/`.
3. Generate the minimum page set:
   - `index.html`
   - `products/index.html`
   - `products/{slug}.html` for each priority product
   - `about.html`
   - `contact.html`
   - `blog/index.html`
   - `robots.txt`
   - `sitemap.xml`
4. Generate shared assets:
   - `assets/css/styles.css`
   - `assets/js/main.js` only when needed for non-critical enhancements
   - `assets/images/` placeholders or user-provided optimized images
5. Run the site generation checklist.
6. Produce a publish review before first deployment.

Page requirements:

### Home page

- Hero section with clear value proposition
- Main product categories or featured products
- Export/manufacturing/service advantages
- Certifications or verified trust signals
- FAQ section
- Strong inquiry CTA
- `WebSite` and `Organization` JSON-LD where appropriate

### Products index

- Product categories or cards
- Descriptive internal links to product detail pages
- Commercial-intent copy for buyers
- Category-level title, description, canonical, and OG tags

### Product detail page

- Product overview
- Key features
- Specifications table
- Applications and buyer use cases
- FAQ
- Request-a-quote CTA
- `Product` JSON-LD when product facts are available

### About page

- Company introduction
- Production capability
- Quality control
- Export markets
- `Organization` JSON-LD

### Contact page

- Email, WhatsApp, and address when provided
- Use FormSubmit as the default inquiry form (see Part 10)
- `mailto:` fallback when the user explicitly opts out of FormSubmit
- Inquiry CTA
- Do not invent phone numbers, addresses, certifications, clients, or factory claims

### Blog index and article pages

- Blog index lists published articles
- Article pages include title, description, canonical, OG/Twitter, author or organization attribution, publish date, internal links, FAQ where useful, and product CTA

Generation rules:

- HTML must contain SEO-critical content without requiring JavaScript.
- Every page must have unique title, meta description, canonical, Open Graph, and Twitter Card tags.
- `og:image` and `twitter:image` must use absolute URLs after deployment target is known.
- Images need descriptive filenames, alt text, width, height, and lazy loading where appropriate.
- Important pages must appear in `sitemap.xml`.
- `robots.txt` must reference the sitemap.
- Avoid placeholders such as `TODO`, `Lorem ipsum`, `example.com`, and `your-project.surge.sh` in final published files.

## Part 3: DESIGN.md Template Selection

DESIGN.md defines the visual system that the agent must follow when generating static pages.

Use this 9-section format:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Recommended templates:

| Template | Best For |
|----------|----------|
| `b2b-industrial` | Machinery, tools, hardware, building materials, industrial exports |
| `clean-export-brand` | Consumer goods, homeware, packaging, light industry |
| `premium-manufacturing` | OEM/ODM, precision manufacturing, high-ticket products |
| `warm-content` | Content-heavy sites, guides, founder stories, educational blogs |
| `dark-tech` | AI, electronics, industrial technology, high-tech products |

When generating pages, read `DESIGN.md` before editing HTML/CSS and keep colors, typography, spacing, buttons, cards, forms, and responsive behavior consistent.

## Part 4: Deploy and Verify with Surge.sh

Surge.sh is the default deployment path.

```bash
npm install -g surge
cd ./customer-site
surge . example-site.surge.sh
```

Custom domain:

```bash
surge . --domain www.example.com
```

First Surge use may ask for email and password and store credentials in `~/.netrc`.

### Pre-deploy checks

Before running Surge, verify:

- `index.html` exists.
- `robots.txt` exists and references the target sitemap URL.
- `sitemap.xml` exists and includes homepage, product pages, about page, contact page, and blog index.
- `DESIGN.md` exists.
- Canonical URLs use the deployment domain.
- Open Graph and Twitter image URLs are absolute.
- No final published file contains unresolved placeholders.
- Custom domain deployments have DNS configured or the user understands DNS is still required.

### Post-deploy verification

```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Verification passes when:

- Homepage returns 2xx or expected 3xx.
- HTTPS is available.
- `robots.txt` is reachable and includes sitemap.
- `sitemap.xml` is reachable and contains important pages.
- Homepage contains title, description, canonical, and OG tags.
- No Surge 504 appears.

After successful deployment, update the user's site state:

- `.instant-site/deployments.json`
- `.instant-site/state.json`

Record timestamp, target domain, command, status, verification results, and known issues.

### Deployment failures

- `surge` missing: ask the user to install it with `npm install -g surge`.
- First login required: explain the email/password prompt and `~/.netrc` storage.
- CLI success but 504: wait 10-30 minutes and retry; use Netlify Drop only for urgent demos.
- Custom domain failure: check DNS provider records.
- Need CSP/HSTS/custom headers: Surge is not suitable; consider Cloudflare Pages or another provider.

## Part 5: Scheduled Content Operations

Use this workflow for regular blog posts, product updates, and industry content.

Inputs:

- `content-plan.json`
- `review-policy.json`
- `site.config.json`
- Existing pages and sitemap

Workflow:

1. Read `content-plan.json` and select the next `planned` topic due by cadence.
2. Generate a draft in `.instant-site/content-drafts/` unless the user explicitly requests direct file publishing.
3. Check the draft for:
   - Brand tone consistency
   - Target keyword and search intent alignment
   - Unique title, description, canonical, OG/Twitter
   - FAQ where useful
   - 3-5 relevant internal links
   - Product or inquiry CTA
   - No unsupported certification, customer, price, lead-time, or compliance claims
   - No placeholders
4. Apply `review-policy.json`:
   - `review_required`: show summary and wait for approval.
   - `hybrid`: auto-publish only low-risk approved categories.
   - `auto_publish`: publish only if all required checks pass and the user has explicitly allowed it.
5. On publish:
   - Move content into `blog/{slug}.html` or the relevant product page.
   - Update `blog/index.html`.
   - Update `sitemap.xml` and lastmod values.
   - Add internal links from relevant pages.
   - Update `.instant-site/state.json` and `.instant-site/content-calendar.json`.
6. Deploy and verify if publishing changes live.

Recommended agent schedules:

```text
weekly-content-draft:
  interval: weekly
  action: generate_next_content_draft
  requiresApproval: true

monthly-product-refresh:
  interval: monthly
  action: review_product_pages_for_updates
  requiresApproval: true

weekly-seo-audit:
  interval: weekly
  action: run_static_seo_audit
  requiresApproval: false
```

## Part 6: SEO Audit and Optimization

Use this workflow for SEO checks and low-risk optimization.

Inputs:

- `seo-profile.json`
- `site.config.json`
- HTML files
- `robots.txt`
- `sitemap.xml`
- Optional external data from Google Search Console, Bing Webmaster Tools, PageSpeed Insights, IndexNow, or a rank tracking API

### Audit layers

#### A. Local static audit

Check every HTML page for:

- `<html lang>`
- charset and viewport
- unique title
- meta description
- canonical
- Open Graph tags
- Twitter Card tags
- JSON-LD where appropriate
- semantic headings
- internal links
- image alt, width, height, lazy loading
- no unresolved placeholders
- no pure CSR dependency for SEO-critical content

Check site files:

- `robots.txt` exists and references sitemap.
- `sitemap.xml` includes all important pages.
- URLs are lowercase, semantic, and hyphenated.

#### B. Deployed-site audit

Check online URLs for:

- Homepage HTTP status
- robots.txt HTTP status
- sitemap.xml HTTP status
- Canonical points to live URL
- OG image is reachable
- Important pages do not return 404 or 504

#### C. External data audit

Real ranking and performance data require external tools. Do not claim exact Google ranking monitoring without configured data access.

- Google Search Console: clicks, impressions, CTR, average position after site verification and authorization.
- Bing Webmaster Tools: indexing and search data after verification.
- PageSpeed Insights: lab and field performance when available.
- IndexNow: URL submission when a key is configured.
- Third-party rank tracking API: optional and user-provided.

### Issue severity

- **Critical** — page unreachable, robots blocks indexing, sitemap broken, canonical points to wrong domain.
- **High** — missing title, description, canonical, important structured data, or sitemap entry.
- **Medium** — weak image SEO, internal links, heading structure, Core Web Vitals risk.
- **Low** — content expansion, FAQ/AEO improvements, minor metadata wording.

### Auto-fix boundaries

Can be auto-fixed when allowed:

- sitemap lastmod updates
- robots sitemap URL fixes
- missing canonical based on known domain
- basic OG/Twitter tag completion
- blog index links for already approved content

Require review:

- major title or description rewrites
- new SEO content blocks
- product claims
- certification claims
- pricing, lead time, compliance, or legal statements
- competitor comparisons

Core Web Vitals targets:

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

Do not use FID as a current Core Web Vital. Do not recommend deprecated HowTo schema. FAQPage can help clarity and AI citation but does not guarantee Google rich results for commercial sites.

## Part 7: Multi-Site Operations

Use `sites.registry.json` when the user operates more than one site.

Example structure:

```text
workspace/
  sites.registry.json
  sites/
    acme-tools/
    homeware-export/
```

Workflow:

1. Read `sites.registry.json`.
2. Select only sites with `status: active`.
3. For each site, read its own `site.config.json`, `review-policy.json`, and `.instant-site/state.json`.
4. Check whether content or SEO cadence is due.
5. Process one site at a time.
6. Keep canonical URLs, sitemap URLs, deployment domains, drafts, and audit reports isolated per site.
7. Produce a summary report with:
   - healthy sites
   - sites needing human review
   - SEO issues by severity
   - deployment failures
   - DNS or external tool blockers

Recommended multi-site schedules:

- Daily health check: homepage, robots, sitemap, last deployment status.
- Weekly content planning: generate due drafts, do not publish by default.
- Weekly SEO audit: report issues and auto-fix low-risk items if allowed.
- Monthly strategy review: compare Search Console data if configured; otherwise summarize technical SEO and content status.

## Part 8: Review Gates and Publishing Policy

Default to human approval for:

- First launch
- New product pages
- New blog articles
- Brand positioning changes
- Pricing, lead time, certification, compliance, or legal claims
- Contact method changes
- Custom domain changes
- Page deletion
- Major title or description rewrites

Low-risk actions may be automated when policy allows:

- sitemap updates
- robots sitemap URL correction
- lastmod updates
- minor metadata completion
- internal links to already approved pages
- approved draft publishing
- deployment verification
- health checks
- SEO audit report generation

Before publishing, output a review summary:

```text
Publish Review
- Site:
- Domain:
- Files to publish:
- New pages:
- Modified pages:
- SEO changes:
- Claims requiring user confirmation:
- Deployment target:
- Rollback option:
```

Recommend git for user site projects so rollbacks can use previous commits or deployment history.

## Part 9: Fallbacks and Pitfalls

1. **Surge credential prompt** — First use may ask for email and password and store credentials in `~/.netrc`.
2. **Surge temporary 504** — CLI success can still produce a temporary CDN 504. Wait 10-30 minutes and retry.
3. **Netlify Drop is fallback only** — Good for emergency demos, not the default operating path.
4. **Surge has no custom headers** — Use meta tags for partial coverage; choose another provider if CSP/HSTS are mandatory.
5. **DNS is external** — Custom domain deployment still requires correct DNS records from the user's provider.
6. **Static sites use FormSubmit for forms** — FormSubmit.co requires no registration, no API key. Point form action to `https://formsubmit.co/{contactEmail}`. Use Web3Forms as fallback if FormSubmit is blocked.
7. **Do not invent claims** — Product specifications, certifications, clients, factory capacity, lead times, and prices must come from the user or verified source.
8. **Search ranking data is external** — Technical SEO is local; ranking monitoring requires Search Console, Bing, or a rank tracker.
9. **`og:image` must be absolute** — Use a full deployed URL, not `/og.png`.
10. **Avoid deprecated SEO advice** — Use INP, not FID; do not use HowTo schema.

## Part 10: Inquiry Form with FormSubmit

Static sites cannot process forms server-side. Use FormSubmit as the default zero-configuration inquiry form for contact and product inquiry pages.

### Why FormSubmit

- Zero configuration: no registration, no API key required.
- Only needs the contact email from `site.config.json`.
- Free with unlimited submissions.
- Emails are forwarded to the configured contact inbox.

### Form HTML Template

```html
<form action="https://formsubmit.co/{contactEmail}" method="POST">
  <input type="hidden" name="_subject" value="New inquiry from {brandName}">
  <input type="hidden" name="_next" value="https://{domain}/thanks.html">

  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="text" name="company" placeholder="Company (optional)">
  <textarea name="message" placeholder="Describe your inquiry..." required></textarea>

  <button type="submit">Send Inquiry</button>
</form>
```

### Hidden Fields

| Field | Purpose |
|-------|---------|
| `_subject` | Email subject line — use `{brandName}` |
| `_next` | Custom thank-you page URL — use absolute deployed URL |

### Required Steps

1. Replace `{contactEmail}` with the email from `site.config.json`.
2. Set `_next` to the absolute URL of a `thanks.html` page on the deployed domain.
3. Generate a simple `thanks.html` page with a thank-you message and a link back to the homepage.
4. **First activation**: the first form submission triggers a confirmation email from FormSubmit to the contact email. The user must click the confirmation link. Remind the user to check their inbox (and spam folder) after the first submission.

### Spam Protection

FormSubmit includes a default CAPTCHA challenge on submission. Do not disable it unless the user explicitly requests a frictionless experience — the tradeoff is higher spam risk. If the user opts out of CAPTCHA, FormSubmit's built-in spam filter still provides baseline protection.

### Fallback: Web3Forms

If FormSubmit is unavailable or blocked:

- Use Web3Forms (`https://api.web3forms.com/submit`) — requires one-time registration to get an access key.
- Form action: `https://api.web3forms.com/submit` with `<input type="hidden" name="access_key" value="{key}">`.
- Free tier: 250 submissions/month.

### After Deployment

Test the contact form by submitting a test inquiry and verifying the confirmation email is received. Update `.instant-site/state.json` to record that the form has been activated.

## Verification Commands

After deployment:

```bash
curl -I https://example-site.surge.sh/
curl https://example-site.surge.sh/robots.txt
curl https://example-site.surge.sh/sitemap.xml
curl -s https://example-site.surge.sh/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Manual checks when relevant:

- Google Rich Results Test for structured data
- PageSpeed Insights for performance
- Google Search Console after site verification
- Bing Webmaster Tools after site verification
- IndexNow only when the user provides a valid key

## Example Prompts

```text
请根据以下品牌和产品信息，从零生成一个英文 B2B 外贸独立站，使用 b2b-industrial DESIGN.md，包含首页、产品列表页、2 个产品详情页、关于我们、联系方式、robots.txt 和 sitemap.xml。部署目标是 acme-tools.surge.sh，发布前需要我审核。
```

```text
为 sites.registry.json 中所有 active 站点执行本周 SEO 审计。只生成报告，不自动修改页面。
```

```text
根据 content-plan.json 为 acme-tools 生成下一篇博客草稿，目标关键词是 CNC cutting tool supplier。生成后先进入审核，不要发布。
```

```text
部署当前站点到 Surge.sh，并验证首页、robots.txt、sitemap.xml、meta 标签和 canonical。
```
