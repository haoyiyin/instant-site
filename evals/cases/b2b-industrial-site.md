# Eval Case: B2B Industrial Site Generation

From-zero site generation for a B2B foreign trade independent site.

## Prompt

```text
Build an English B2B foreign trade site for Acme Tools, a precision cutting tool manufacturer.
Target markets: US, EU, Middle East.
Products: CNC cutting tools, carbide end mills, tool holders.
Certifications: ISO 9001, CE.
Contact email: sales@acmetools.com.
Use the b2b-industrial DESIGN.md template.
Cloudflare Pages project: acme-tools.
Deployment domain: acme-tools.pages.dev.
Optional Surge fallback: acme-tools.surge.sh.
Generate homepage, product listing, 3 product detail pages, about page, contact page, blog index, robots.txt, and sitemap.xml.
Prepare a publish review before deployment.
```

## Expected Behavior

1. **Design read**: Agent states design read before template selection
2. **Config generation**: Creates `site.config.json` with Cloudflare Pages deployment fields
3. **DESIGN.md**: Generates or references b2b-industrial template
4. **Buyer context**: Creates `.instant-site/buyer-context.json` with buyer roles, concerns, trust requirements
5. **Page generation**: Generates all requested pages with SEO tags
6. **FormSubmit**: Contact page uses FormSubmit with correct email and absolute `_next`
7. **SEO complete**: Every page has title, description, canonical, OG, Twitter, JSON-LD
8. **Sitemap/robots**: Correct and cross-referencing
9. **Publish review**: Produced before deployment, lists Cloudflare Pages deployment plan, files and claims needing confirmation
10. **No invented claims**: Does not add certifications, customers, or factory capacity not provided
11. **Cloudflare Pages default**: Deployment plan uses Wrangler with API Token authorization and `.pages.dev`, Surge only as fallback

## Assertions

- [ ] Design read stated before template selection
- [ ] Template choice justified (matches B2B industrial audience)
- [ ] `site.config.json` created with brand, products, deploymentProvider, cloudflareProject, domain, design, publishing policy
- [ ] `buyer-context.json` created with buyer roles, concerns, trust requirements
- [ ] Homepage hero focuses on buyer outcome, not just product features
- [ ] Product pages have specs, applications, FAQ, quote CTA
- [ ] About page has company intro, capabilities, export markets, Organization JSON-LD
- [ ] Contact page uses FormSubmit with correct email
- [ ] `thanks.html` exists with absolute URL in `_next`
- [ ] Every page has unique title, description, canonical, OG, Twitter
- [ ] `sitemap.xml` includes all important pages
- [ ] `robots.txt` references sitemap URL
- [ ] No Inter + slate + purple default palette
- [ ] No centered hero + three feature cards pattern
- [ ] No fake div screenshots or placeholder images in final output
- [ ] No invented certifications, customer names, or factory capacity
- [ ] Publish review lists Cloudflare Pages deployment plan (Wrangler, API Token authorization, project, domain)
- [ ] User-facing deployment instructions explain Cloudflare account registration and API Token creation
- [ ] API Token uses the **Edit Cloudflare Workers** template (sufficient for Pages deployment)
- [ ] Token is never stored in site config, state files, deployment records, or generated customer docs
- [ ] Surge.sh only listed as fallback option
- [ ] Deployment domain uses `.pages.dev` (not `.surge.sh` as primary)
- [ ] Review gate triggered (review_required default)

## Common Failures

- Missing design read statement
- Using default AI slop design patterns
- Inventing customer testimonials or factory size
- Missing canonical or OG URLs
- FormSubmit `_next` URL not absolute
- Deploying without publish review
- Using Surge.sh as primary deployment (Cloudflare Pages should be default)
- Missing Cloudflare Pages project name in config or publish review