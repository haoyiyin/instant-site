# Deployment Checklist

## Before Deploy

- [ ] `index.html` exists.
- [ ] `DESIGN.md` exists and matches the selected template.
- [ ] `robots.txt` exists and references the deployed sitemap URL.
- [ ] `sitemap.xml` exists and includes homepage, product pages, about page, contact page, and blog index.
- [ ] Canonical URLs use the deployment domain.
- [ ] Open Graph and Twitter image URLs are absolute.
- [ ] Every page has title, description, canonical, Open Graph, and Twitter Card tags.
- [ ] Product pages with enough data include `Product` JSON-LD.
- [ ] About page includes `Organization` JSON-LD when company data is available.
- [ ] No final published file contains `TODO`, `Lorem ipsum`, `your-project.surge.sh`, or unresolved placeholders.
- [ ] Custom domain DNS has been configured or the user understands DNS is still pending.

## Deploy

```bash
surge . example-site.surge.sh
```

Custom domain:

```bash
surge . --domain www.example.com
```

## After Deploy

- [ ] Homepage returns 2xx or expected 3xx.
- [ ] HTTPS works.
- [ ] `robots.txt` is reachable.
- [ ] `sitemap.xml` is reachable.
- [ ] Homepage metadata is present.
- [ ] No Surge 504 is observed.
- [ ] `.instant-site/state.json` is updated.
- [ ] `.instant-site/deployments.json` is updated.
