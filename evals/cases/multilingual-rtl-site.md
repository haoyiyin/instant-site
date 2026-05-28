# Eval Case: Multi-Language RTL Site

Multi-language site generation with Arabic RTL support.

## Prompt

```text
Build an English + Arabic B2B foreign trade site for a hardware exporter.
Default language: English.
Second language: Arabic (RTL).
Target markets: US, EU, Middle East.
Products: industrial fasteners, hinges, brackets.
Certifications: ISO 9001.
Contact: sales@hardwareexporter.com.
Domain: hardware-export.surge.sh.
Use subdirectory structure (/en/, /ar/).
Generate hreflang for all pages.
Include language switcher in navigation.
Prepare publish review before deployment.
```

## Expected Behavior

1. **Default language first**: Generates complete English site first
2. **Subdirectory structure**: `/en/` and `/ar/` directories
3. **Hreflang**: Every page has alternates for all languages + x-default
4. **Reciprocal links**: English pages link to Arabic, Arabic link back to English
5. **RTL implementation**: Arabic pages have `dir="rtl"`, mirrored CSS
6. **Language switcher**: Native names (English, العربية), links to equivalent pages
7. **Sitemap hreflang**: XML includes hreflang annotations
8. **Root redirect**: Minimal language detector at root `index.html`

## Assertions

- [ ] Default language (English) generated and verified first
- [ ] `/en/` subdirectory contains all pages
- [ ] `/ar/` subdirectory contains parallel pages
- [ ] Every English page has hreflang to Arabic + x-default
- [ ] Every Arabic page has hreflang to English + x-default
- [ ] Self-referencing hreflang entry on every page
- [ ] Arabic pages have `<html lang="ar" dir="rtl">`
- [ ] RTL CSS mirrors layout (text-align, padding, flex direction)
- [ ] Language switcher uses native names (not flags)
- [ ] Language switcher links to equivalent page, not homepage
- [ ] `sitemap.xml` includes hreflang for all language variants
- [ ] Root `index.html` has language redirect/selector
- [ ] No invalid hreflang codes (uses ISO 639-1: `en`, `ar`)
- [ ] No one-directional hreflang (both directions present)

## Common Failures

- Missing self-referencing hreflang (cluster ignored by search engines)
- One-directional hreflang (A→B but B missing A)
- Using flags instead of native language names
- Language switcher linking to homepage instead of equivalent
- RTL not applied to html attribute
- Missing x-default