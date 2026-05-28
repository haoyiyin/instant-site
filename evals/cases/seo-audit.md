# Eval Case: SEO Audit

SEO audit without external data claims.

## Prompt

```text
Run an SEO audit for the site at hardware-export.surge.sh.
Check local static files, deployed URLs, and identify issues.
We don't have Search Console or PageSpeed configured yet.
Report issues by severity and recommend fixes.
```

## Expected Behavior

1. **Local static audit**: Checks all HTML files for SEO tags
2. **Deployed-site audit**: Verifies live URLs with curl
3. **No ranking claims**: Does not claim exact rankings without GSC
4. **Severity categorization**: Critical, high, medium, low
5. **Auto-fix policy**: Only fixes low-risk items when allowed
6. **Report format**: Structured with issues, severity, recommendations

## Assertions

- [ ] All HTML files checked for title, description, canonical, OG, Twitter
- [ ] Heading structure checked (semantic order)
- [ ] Image alt text and dimensions checked
- [ ] `robots.txt` reachable and references sitemap
- [ ] `sitemap.xml` reachable and includes important pages
- [ ] Homepage returns 2xx
- [ ] HTTPS works
- [ ] Canonical points to deployed domain
- [ ] OG image URL reachable
- [ ] No claim of exact Google rankings
- [ ] Clear statement that external data requires GSC/PageSpeed access
- [ ] Issues categorized by severity
- [ ] Report lists auto-fixable vs. review-required fixes
- [ ] Current SEO guidance used (INP, not FID; no HowTo schema)

## Common Failures

- Claiming ranking data without Search Console
- Using deprecated FID metric
- Recommending HowTo schema
- Reporting "no schema" based on curl (JS-injected schema invisible)
- Auto-fixing claims without review gate