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
- deployment provider, project name, domain, and optional custom domain
- fallback provider and domain
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
  "currentDomain": "acme-tools.pages.dev",
  "deploymentProvider": "cloudflare_pages",
  "cloudflareProject": "acme-tools",
  "customDomain": "www.acmetools.com",
  "customDomainStatus": "pending",
  "lastDeployment": {
    "timestamp": "2026-05-29T00:00:00Z",
    "provider": "cloudflare_pages",
    "projectName": "acme-tools",
    "command": "npx wrangler pages deploy . --project-name acme-tools --branch main",
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

For Surge fallback:

```json
{
  "siteId": "acme-tools",
  "currentDomain": "acme-tools.surge.sh",
  "deploymentProvider": "surge",
  "lastDeployment": {
    "timestamp": "2026-05-29T00:00:00Z",
    "provider": "surge",
    "domain": "acme-tools.surge.sh",
    "command": "surge . acme-tools.surge.sh",
    "status": "success",
    "verified": true
  }
}
```

## `.instant-site/deployments.json`

Track every deployment:

```json
{
  "deployments": [
    {
      "timestamp": "2026-05-29T00:00:00Z",
      "provider": "cloudflare_pages",
      "projectName": "acme-tools",
      "domain": "acme-tools.pages.dev",
      "customDomain": "www.acmetools.com",
      "customDomainStatus": "pending",
      "command": "npx wrangler pages deploy . --project-name acme-tools --branch main",
      "status": "success",
      "verification": {
        "homepage": "pass",
        "robots": "pass",
        "sitemap": "pass",
        "metadata": "pass",
        "headers": "pass"
      },
      "notes": []
    }
  ]
}
```

For Surge fallback:

```json
{
  "deployments": [
    {
      "timestamp": "2026-05-29T00:00:00Z",
      "provider": "surge",
      "domain": "acme-tools.surge.sh",
      "command": "surge . acme-tools.surge.sh",
      "status": "success",
      "verification": {
        "homepage": "pass",
        "robots": "pass",
        "sitemap": "pass",
        "metadata": "pass"
      },
      "notes": ["fallback used: Cloudflare account/token setup unavailable"]
    }
  ]
}
```

## Rules

- Read state before scheduled operations.
- Update state after deployment, publishing, or SEO audit.
- Keep each site's `.instant-site/` directory isolated.
- Record deployment provider, project name, and command for Cloudflare Pages.
- Record fallback reason if Surge used.
- Do not use a previous chat message as the only record of deployment or content status.
- Never store Cloudflare API Tokens, OAuth callback URLs, authorization codes, or other secrets in state files.
- Deployment command records must omit environment variable assignments containing secrets. Record the sanitized command only (e.g., `npx wrangler pages deploy . --project-name acme-tools --branch main`, without `CLOUDFLARE_API_TOKEN=...`).
- If token auth was used, state may optionally record `"authMethod": "api_token"` but must not record token value, prefix, suffix, hash, token name, or any metadata that identifies the secret.