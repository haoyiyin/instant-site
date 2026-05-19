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
