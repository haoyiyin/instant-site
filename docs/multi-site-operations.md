# Multi-Site Operations

Use `sites.registry.json` to operate multiple independent sites from one workspace.

## Workspace Structure

```text
workspace/
  sites.registry.json
  sites/
    acme-tools/
      site.config.json
      .instant-site/state.json
    homeware-export/
      site.config.json
      .instant-site/state.json
```

## Registry Fields

Each site entry should include:

- `siteId`
- `path`
- `domain`
- `customDomain`
- `language`
- `status`
- `contentCadence`
- `seoAuditCadence`
- `publishMode`

## Processing Rules

1. Process only `status: active` sites.
2. Read each site's own config and state before acting.
3. Never reuse canonical URLs, sitemap URLs, drafts, deployment domains, or SEO reports across sites.
4. Process one site at a time.
5. Respect each site's publishing policy.
6. Limit the number of sites per scheduled run to avoid excessive generation or deployment.

## Suggested Operations

### Daily Health Check

- Homepage status
- robots.txt status
- sitemap.xml status
- last deployment state
- obvious Surge 504 or DNS failure

### Weekly Content Planning

- Select due sites based on `contentCadence`.
- Generate drafts only by default.
- Record pending drafts in each site's state.

### Weekly SEO Audit

- Run local static audit.
- Run deployed-site checks if the domain is live.
- Auto-fix only low-risk issues allowed by policy.
- Produce per-site and summary reports.

### Monthly Strategy Review

- If Search Console is configured, compare clicks, impressions, CTR, and average position.
- If external data is not configured, summarize technical SEO status, published content, and pending issues.

## Summary Report

A multi-site run should report:

- Healthy sites
- Sites with deployment or DNS issues
- Sites needing human review
- SEO issues by severity
- Drafts generated
- Content or deployment actions skipped by policy
