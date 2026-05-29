# Instant Site Eval Rubric

Quality dimensions for evaluating agent output.

## Dimensions

### 1. Foreign Trade Context Retained

Output maintains B2B/B2C foreign trade independent site context:
- Buyer concerns: MOQ, lead time, certification, customization
- Trust signals: factory, certifications, case studies
- Conversion goal: inquiry, quote, sample
- Export market focus

### 2. Static HTML for SEO

SEO-critical content in static HTML:
- No pure CSR for title, description, headings, main content
- JavaScript only for non-critical enhancements
- Crawlable without JS execution

### 3. DESIGN.md Used

Visual system follows DESIGN.md:
- Template selected before page generation
- Design read stated
- Colors, typography, spacing consistent
- Anti-slop rules followed

### 4. No AI Slop

Output avoids LLM signature patterns:
- No Inter + slate + purple default
- No centered hero + three feature cards
- No fake div screenshots
- No em-dashes in visible copy
- No fake-precise metrics without source
- Real visuals or clearly labeled placeholders (draft only)

### 5. No Invented Claims

Output does not fabricate:
- Certifications not provided
- Customer names or case studies
- Factory capacity or production numbers
- Prices, lead times, or warranty terms not confirmed
- Test results without source

Uncertain claims go to `needsConfirmation` array.

### 6. SEO Complete

Each page has:
- Unique title (60 chars max)
- Meta description (160 chars max)
- Canonical URL (absolute)
- Open Graph tags
- Twitter Card tags
- JSON-LD where appropriate
- Semantic heading order
- Internal links
- Image alt text

Site files:
- `robots.txt` references sitemap
- `sitemap.xml` includes important pages
- URLs lowercase, hyphenated

### 7. FormSubmit Correct

Contact/inquiry forms:
- Form action uses contact email
- `_next` URL is absolute
- `_subject` includes brand name
- CAPTCHA enabled (default)
- `thanks.html` exists

First submission confirmation mentioned.

### 8. Multi-language Correct (When Configured)

Hreflang:
- Self-referencing entry on every page
- Reciprocal links (A→B and B→A)
- `x-default` present
- ISO 639-1 codes only

RTL:
- `dir="rtl"` attribute on html element
- Mirrored layout in CSS
- Native language names in switcher
- No flags for language selector

### 9. Review Gate Triggered

High-risk actions require approval:
- First launch
- New product/blog pages
- Pricing, certification, compliance claims
- Contact or domain changes
- Page deletion

Low-risk automation only when policy allows.

### 10. State Files Updated

After operations:
- `.instant-site/state.json` reflects current status
- `.instant-site/deployments.json` has new records
- `.instant-site/content-calendar.json` updated after publishing
- `.instant-site/buyer-context.json` created or reused

### 11. Cloudflare Pages Default Deployment

Deployment planning follows Cloudflare Pages first:
- Cloudflare Pages selected as default deployment provider
- Wrangler OAuth login flow documented or planned
- Pages project name defined
- Surge.sh appears only as fallback option
- Deployment records include provider, project name, command, domain
- `.pages.dev` URLs used for primary deployed domain
- `.surge.sh` only used as explicit fallback domain

## Scoring

| Level | Criteria |
|-------|----------|
| Pass | All dimensions satisfied |
| Pass with Notes | Minor gaps documented, no regression |
| Fail | Critical dimension violated (invented claims, SEO missing, review gate bypassed) |

## Common Failure Modes

1. Inventing certifications or customer names
2. Missing canonical or OG tags
3. Bypassing review gate for claims
4. Using pure CSR for SEO content
5. Missing hreflang for multi-language
6. FormSubmit `_next` URL not absolute
7. Deploying with unresolved placeholders
8. Selecting DESIGN without design read