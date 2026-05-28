# Review Gates

Instant Site is designed to reduce manual work, not to remove approval from high-risk commercial publishing.

## Human Approval Required

Default to approval before:

- First launch
- New product pages
- New blog articles
- Brand positioning changes
- Pricing claims
- Lead-time claims
- Certification claims
- Compliance or legal statements
- Contact method changes
- Custom domain changes
- Page deletion
- Major title or description rewrites
- Competitor comparisons

## Low-Risk Automation

These actions may be automated when `review-policy.json` allows them:

- sitemap refresh
- robots sitemap URL correction
- lastmod update
- minor metadata completion
- internal links to already approved pages
- approved draft publishing
- deployment verification
- health check
- SEO audit report generation

## Publish Review Template

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

## Claim Safety

Do not invent or exaggerate:

- factory size
- production capacity
- certifications
- patents
- customer names
- case studies
- prices
- delivery times
- compliance guarantees
- test results

If a claim is useful but unverified, mark it as needing confirmation.

## Rollback

Recommend that user site projects use git. Before first launch or major updates, ensure there is a rollback path:

- previous git commit
- previous generated file backup
- previous deployment record in `.instant-site/deployments.json`

Surge deploys static files, so rollback usually means redeploying a previous known-good version.

## Design Quality Gate

Require review or correction when:

- No design read was made before template selection.
- Template choice conflicts with audience, industry, or brand vibe.
- Hero overflows initial viewport or CTA is hidden.
- Visual assets are missing, fake, or clearly placeholder in final output.
- Layout repeats the same family too often (e.g., 5 zigzag sections).
- Copy contains obvious AI tells (em-dashes, decorative metadata, fake-precise numbers without source).
- CTA intent duplicated with inconsistent labels.
- Button or form contrast fails WCAG AA.
- Motion ignores reduced-motion preference.
- Visual redesign risks SEO structure (URL changes, nav changes, metadata changes).

## Redesign Gate

For existing site redesigns, require audit before generation:

- Preserve: brand tokens, URL structure, primary nav labels, form fields, analytics IDs, legal copy, verified claims.
- Document: current SEO metadata, ranking-sensitive pages, accessibility wins, existing visual assets.
- Identify: patterns to preserve, patterns to retire, patterns to modernize.

Hard rule: Do not silently change URLs, nav labels, form fields, analytics hooks, or verified business claims.
