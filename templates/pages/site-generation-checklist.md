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
