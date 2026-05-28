# Multi-Language and RTL Workflow

Generate and manage multi-language static sites with RTL support.

## When to use

Use this workflow when:
- Building a site for multiple markets with different languages
- Adding Arabic or other RTL language support
- Creating hreflang annotations for international SEO
- Setting up language switchers

## Required inputs

- `site.config.json` with `brand.languages` array
- Each language: `code`, `name`, `default` flag, optional `dir: "rtl"`
- Buyer context per language (optional but recommended)
- Content strategy: translate default or write per-market

## URL structure

All languages live under subdirectories on the same domain:
```text
/en/          — default language
/ar/          — Arabic (RTL)
/es/          — Spanish
```

Root `index.html` is a minimal language detector/redirect.

## Directory structure

```text
customer-site/
  index.html                 — language detector/redirect
  /en/
    index.html
    about.html
    contact.html
    products/
      index.html
      {slug}.html
    blog/
      index.html
  /ar/
    index.html
    about.html
    contact.html
    products/
      index.html
    blog/
      index.html
  /assets/
    css/styles.css           — shared, with RTL overrides
    js/main.js
    images/
  robots.txt
  sitemap.xml                — combined, with hreflang
```

## Steps

### 1. Generate default language first

Complete all pages for default language:
- Full page set as per site-generation workflow
- Verify deployment before adding other languages

### 2. Create language subdirectories

For each additional language:
- Create subdirectory (`/ar/`, `/es/`, etc.)
- Generate parallel pages

### 3. Adapt or translate content

Two approaches:
- **Translate**: Adapt default language content, adjust examples and buyer scenarios for target market
- **Independent**: Write fresh content per market

**Important**: Do not literal word-for-word translate. Adapt cultural references, examples, and buyer concerns.

### 4. Add hreflang to every page

Every page must list all language alternates:
```html
<link rel="alternate" hreflang="en" href="https://domain.com/en/products/">
<link rel="alternate" hreflang="ar" href="https://domain.com/ar/products/">
<link rel="alternate" hreflang="x-default" href="https://domain.com/en/products/">
```

Rules:
- ISO 639-1 language codes (`en`, `ar`, `es`, `fr`)
- `x-default` points to default language
- Every alternate must have reciprocal link back
- Self-referencing entry required on every page

### 5. Add language switcher

Include in navigation on every page:
- Use native language names (English, العربية, Español)
- Do not use country flags
- Link to equivalent page in target language, not homepage

### 6. Apply RTL rules (when dir: "rtl")

For RTL languages:
- `<html lang="{code}" dir="rtl">` on every page
- Mirror text alignment: `text-align: right` default
- Mirror padding/margin: `padding-left` → `padding-right`
- Mirror flexbox: `flex-direction: row-reverse` where needed
- RTL font stack from DESIGN.md: `Tajawal, 'Noto Naskh Arabic', sans-serif`
- Keep numbers in natural direction (LTR)
- Logo and icons not mirrored

### 7. Update sitemap with hreflang

```xml
<url>
  <loc>https://domain.com/en/products/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://domain.com/en/products/"/>
  <xhtml:link rel="alternate" hreflang="ar" href="https://domain.com/ar/products/"/>
</url>
```

### 8. Create language redirect

Root `index.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=/en/">
  <title>Redirecting...</title>
</head>
<body>
  <p><a href="/en/">English</a> | <a href="/ar/">العربية</a></p>
</body>
</html>
```

## Output files

Per-language page set plus:
- Language redirect at root
- Combined sitemap with hreflang
- Shared CSS with RTL overrides
- Single `robots.txt` (covers all subdirectories)

## Review gates

Approval required for:
- Adding new language
- Major content changes in non-default language
- Domain structure changes

Low-risk:
- Translations of already-approved content (when policy allows)
- Sitemap hreflang updates
- RTL CSS fixes

## Verification

After generation:
- Every page has hreflang for all configured languages
- `x-default` present on all pages
- Reciprocal links verified (A→B and B→A)
- RTL pages have `dir="rtl"` attribute
- Language switcher links to equivalent pages
- Sitemap includes all language variants

## Common mistakes

- Missing self-referencing hreflang entry (cluster ignored)
- One-directional hreflang (pair dropped)
- Invalid codes like `en-UK` (use `en-GB`)
- hreflang pointing to non-canonical or 404 page
- Language switcher linking to homepage instead of equivalent
- RTL applied to logo or brand marks
- Literal word-for-word translation without market adaptation