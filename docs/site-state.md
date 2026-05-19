# Site State

Instant Site stores operational context in project files so an agent can resume work without relying on conversation history.

## Required Files

```text
customer-site/
  site.config.json
  content-plan.json
  seo-profile.json
  review-policy.json
  .instant-site/
    state.json
    deployments.json
    content-calendar.json
    content-drafts/
    seo-audits/
```

## `site.config.json`

Source of truth for site generation and operation.

It should define:

- `siteId`
- brand identity, language, tone, and markets
- business type, industry, products, and certifications
- deployment domain and optional custom domain
- contact methods and primary CTA
- selected DESIGN.md template
- required page types
- publishing mode

If the agent lacks required business facts, it should add them to `needsConfirmation` rather than inventing them.

## `.instant-site/state.json`

Recommended shape:

```json
{
  "siteId": "acme-tools",
  "currentDomain": "acme-tools.surge.sh",
  "lastDeployment": {
    "timestamp": "2026-05-19T00:00:00Z",
    "command": "surge . acme-tools.surge.sh",
    "status": "success",
    "verified": true
  },
  "content": {
    "lastPublishedAt": null,
    "pendingDrafts": [],
    "nextScheduledTopic": null
  },
  "seo": {
    "lastAuditAt": null,
    "lastScore": null,
    "knownIssues": []
  }
}
```

## `.instant-site/deployments.json`

Track every deployment:

```json
{
  "deployments": [
    {
      "timestamp": "2026-05-19T00:00:00Z",
      "domain": "acme-tools.surge.sh",
      "command": "surge . acme-tools.surge.sh",
      "status": "success",
      "verification": {
        "homepage": "pass",
        "robots": "pass",
        "sitemap": "pass",
        "metadata": "pass"
      },
      "notes": []
    }
  ]
}
```

## Rules

- Read state before scheduled operations.
- Update state after deployment, publishing, or SEO audit.
- Keep each site's `.instant-site/` directory isolated.
- Do not use a previous chat message as the only record of deployment or content status.
