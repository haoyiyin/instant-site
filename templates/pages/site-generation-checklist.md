# Site Generation Checklist

## Inputs

- [ ] Brand name and tagline
- [ ] Language and target markets
- [ ] Product list with slugs
- [ ] Product features and applications
- [ ] Target keywords mapped to pages
- [ ] Certifications and proof points verified by user
- [ ] Contact email, WhatsApp, or inquiry CTA
- [ ] Surge domain or custom domain
- [ ] DESIGN.md template selected
- [ ] Publishing policy selected

## Buyer Context (Recommended)

- [ ] Buyer roles identified (importer, distributor, procurement manager, OEM buyer)
- [ ] Purchase concerns documented (MOQ, lead time, certification, customization)
- [ ] Trust requirements listed (factory photos, certifications, case studies)
- [ ] Conversion goal specified (quote request, sample request, WhatsApp inquiry)
- [ ] `buyer-context.json` created or `.instant-site/buyer-context.json`
- [ ] `needsConfirmation` fields populated for uncertain claims

## Multi-Language (if multiple languages configured)

- [ ] Default language site generated first and verified.
- [ ] Each language in its own subdirectory (`/en/`, `/ar/`).
- [ ] Every page has `<link rel="alternate" hreflang="...">` for all configured languages.
- [ ] Every page includes `<link rel="alternate" hreflang="x-default">`.
- [ ] Root `index.html` does language detection redirect.
- [ ] Language switcher present in nav on all pages.
- [ ] RTL languages use `dir="rtl"` and mirrored CSS.
- [ ] Sitemap includes hreflang annotations.

## Files

- [ ] `site.config.json`
- [ ] `DESIGN.md`
- [ ] `index.html`
- [ ] `products/index.html`
- [ ] Product detail pages
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `blog/index.html`
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] `assets/css/styles.css`

## Per-Page SEO

- [ ] Unique title
- [ ] Meta description
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Semantic headings
- [ ] Internal links
- [ ] CTA

## Inquiry Form

- [ ] Contact page uses FormSubmit `<form>` with correct contact email.
- [ ] `_next` points to absolute URL of `thanks.html`.
- [ ] `_subject` includes brand name.
- [ ] FormSubmit CAPTCHA is enabled (default).
- [ ] Form fields include name, email, message at minimum.
- [ ] `thanks.html` page exists with thank-you message and homepage link.
- [ ] First submission confirmation email reminder prepared for the user.

## Structured Data

- [ ] `WebSite` where appropriate
- [ ] `Organization` where company data is available
- [ ] `Product` on product detail pages with enough verified data
- [ ] `FAQPage` when FAQ content is present

## Safety

- [ ] No invented certifications
- [ ] No invented customer logos or case studies
- [ ] No unsupported pricing or lead-time claims
- [ ] No unresolved placeholders
- [ ] Publish review prepared before first launch

## Design Preflight

- [ ] Design read stated before template selection.
- [ ] Design dials selected or inferred.
- [ ] Template selection justified (matches audience, industry, vibe).
- [ ] Typography is brand-appropriate, not default Inter unless justified.
- [ ] Palette has one consistent accent color.
- [ ] Hero fits initial viewport (headline max 2 lines, subtext max 20 words).
- [ ] Hero has max 4 text elements (eyebrow, headline, subtext, CTAs).
- [ ] CTA visible without scroll on laptop viewport.
- [ ] CTA label does not wrap on desktop.
- [ ] Eyebrow count limited (max 1 per 3 sections).
- [ ] No three consecutive zigzag image/text sections.
- [ ] No unjustified three-equal-card feature rows.
- [ ] Visual asset plan exists (hero, supporting visuals, OG image).
- [ ] All images from free commercial-use sources (Unsplash/Pexels/Pixabay/Burst).
- [ ] No placeholder images in production files.
- [ ] Images have alt text, width, height attributes.
- [ ] No fake div-based product screenshots.
- [ ] No em-dashes in visible copy.
- [ ] No decorative version labels, section numbers, scroll cues, weather strips.
- [ ] Mobile collapse explicit for every multi-column section.
- [ ] Button and form contrast pass WCAG AA.
- [ ] Reduced-motion fallback exists if motion is used.

## Image Acquisition

- [ ] User-provided images checked first.
- [ ] Free stock search performed (Unsplash/Pexels/Pixabay).
- [ ] Keywords appropriate for industry and page type.
- [ ] Images downloaded and saved to `assets/images/`.
- [ ] Image naming follows convention: `{purpose}-{source}-{id}.jpg`.
- [ ] All images verified for commercial-use license.
- [ ] No images from Google Images/Pinterest/unknown sources.
- [ ] OG image configured for each page.
- [ ] Image files optimized (< 500KB for hero, < 200KB for others).
