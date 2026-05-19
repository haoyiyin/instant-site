# Content Lifecycle

Instant Site supports recurring content operations for blogs, product updates, and industry articles while keeping risky publishing behind review gates.

## Inputs

- `site.config.json`
- `content-plan.json`
- `review-policy.json`
- Existing site pages
- `.instant-site/state.json`

## Workflow

1. Read `content-plan.json`.
2. Select the next due topic with `status: planned`.
3. Generate a draft into `.instant-site/content-drafts/`.
4. Run the content review checklist.
5. Apply `review-policy.json`.
6. If approval is required, present a summary and stop before publishing.
7. If publishing is allowed, move the content into the site, update indexes and sitemap, deploy, and verify.

## Draft Checklist

- [ ] Matches brand tone and language.
- [ ] Targets one primary keyword and search intent.
- [ ] Has unique title and meta description.
- [ ] Has canonical, Open Graph, and Twitter Card tags.
- [ ] Includes relevant internal links.
- [ ] Includes product or inquiry CTA.
- [ ] Includes FAQ where useful.
- [ ] Avoids unsupported certifications, prices, lead times, factory capacity, and client claims.
- [ ] Contains no placeholders.

## Publish Updates

When a draft is approved and published, update:

- `blog/{slug}.html` or the relevant target page
- `blog/index.html`
- `sitemap.xml`
- relevant internal links
- `.instant-site/content-calendar.json`
- `.instant-site/state.json`

## Suggested Schedules

```text
weekly-content-draft:
  interval: weekly
  action: generate_next_content_draft
  requiresApproval: true

monthly-product-refresh:
  interval: monthly
  action: review_product_pages_for_updates
  requiresApproval: true
```

## Publishing Modes

- `review_required` — Always stop before publishing new commercial content.
- `hybrid` — Auto-publish low-risk updates, require approval for new content and claims.
- `auto_publish` — Publish only when the user explicitly configured it and all checks pass.
