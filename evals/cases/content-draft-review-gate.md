# Eval Case: Content Draft Review Gate

Content draft with proper review gate for claims.

## Prompt

```text
Generate a blog article for hardware-export.pages.dev about "industrial fastener quality standards".
Target keyword: "industrial fastener quality".
Include internal links to product pages.
Add FAQ section.
Brand tone: technical, professional.
Do not publish yet — generate draft only.
```

## Expected Behavior

1. **Draft location**: Creates `.instant-site/content-drafts/{slug}.md`
2. **SEO tags**: Title, description, canonical, OG, Twitter
3. **Internal links**: Links to relevant product pages
4. **FAQ section**: Addresses buyer questions
5. **Claim safety**: No unsupported certifications or test results
6. **Review gate**: Stops before publishing, presents draft for approval
7. **Content calendar**: Updates `.instant-site/content-calendar.json`
8. **Publish readiness**: Draft summary identifies intended `blog/{slug}.html` target and notes that publishing must update `blog/index.html` with a clickable link and `sitemap.xml`

## Assertions

- [ ] Draft created in `.instant-site/content-drafts/` directory
- [ ] Title unique and targets keyword
- [ ] Description unique and summarizes content
- [ ] Canonical URL specified
- [ ] OG and Twitter tags present
- [ ] Internal links to relevant product pages
- [ ] FAQ section addresses buyer concerns
- [ ] No invented certifications or test results
- [ ] No pricing or lead time claims without confirmation
- [ ] Review gate triggered (stops before publishing)
- [ ] Draft summary presented for approval
- [ ] `.instant-site/content-calendar.json` updated with draft status
- [ ] No placeholders in draft
- [ ] Draft includes intended publish slug/path, such as `blog/industrial-fastener-quality-standards.html`
- [ ] Because publishing is not approved, no live blog index/detail page update is performed
- [ ] Publish plan states that approval will create `blog/{slug}.html`, add a clickable `blog/index.html` entry, and update `sitemap.xml`

## Common Failures

- Publishing without approval
- Adding certifications not verified
- Claiming test results without source
- Missing internal links
- Publishing directly instead of draft
- No content calendar update