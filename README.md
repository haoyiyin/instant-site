# Instant Site

A [Hermes Agent](https://hermes-agent.nousresearch.com) skill for deploying static sites to the web with **zero registration**, **one command**, and **built-in SEO optimization**.

## What It Does

Instant Site covers the full loop from code to live, production-ready website:

1. **Deploy** — Push any folder of HTML/CSS/JS to a live URL with a single CLI command
2. **Design** — AI-ready DESIGN.md templates for consistent, professional UI generation
3. **SEO** — Post-launch checklist covering meta tags, structured data, Core Web Vitals, and AI crawler optimization

## Deployment

Uses [Surge.sh](https://surge.sh) — free static hosting with a global CDN and automatic SSL.

```bash
# Install
npm install -g surge

# Deploy
cd ./my-site
surge . my-project.surge.sh
```

That's it. First run asks for an email (stored locally in `~/.netrc`, no password, no account dashboard).

### Alternatives

- **[Netlify Drop](https://app.netlify.com/drop)** — drag-and-drop deploy, no login required, sites expire after inactivity

## Design Templates

The skill includes three ready-to-use DESIGN.md templates following the [Google Stitch DESIGN.md spec](https://stitch.withgoogle.com/docs/design-md/format/):

| Template | Style | Best For |
|----------|-------|----------|
| **Minimal Dev** | Black & white, pill buttons, Inter font | Developer tools, SaaS landing pages |
| **Warm Content** | Serif headings, soft surfaces, reading-optimized | Blogs, portfolios, content sites |
| **Dark Tech** | Gradient mesh, thin typography, cinematic | AI products, fintech, premium brands |

Drop a `DESIGN.md` into your project root and tell any AI agent: *"Build this page following the DESIGN.md."*

Design references sourced from [awesome-design-md](https://github.com/voltagent/awesome-design-md).

## SEO Checklist

A prioritized post-deploy audit covering:

### Critical
- `robots.txt` with sitemap reference
- `sitemap.xml` generation
- Unique `<title>` and `<meta description>` per page
- Open Graph + Twitter Card meta tags
- Canonical URLs
- JSON-LD structured data (`WebSite`, `Organization`, `Product`)

### High Priority
- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Image SEO: descriptive filenames, alt text, lazy loading, WebP/AVIF
- Font and CSS optimization (preload, critical CSS inlining)

### Medium Priority
- Semantic URL structure (`/blog/my-post` not `/page123`)
- Internal linking strategy (3-5 links per page, descriptive anchors)
- Security headers via meta tags

### AI Search Optimization (GEO/AEO)
- AI crawler management (`GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`)
- FAQ structured data for AI citation benefit

SEO methodology inspired by [claude-seo](https://github.com/AgriciDaniel/claude-seo).

## Pitfalls

| Issue | Solution |
|-------|----------|
| Surge CDN returns 504 | Wait 10-30 min or use Netlify Drop as fallback |
| No custom HTTP headers on Surge | Use `<meta>` tags for partial coverage, or switch to Cloudflare Pages |
| CSR/SPA sites hurt SEO | Use SSR or pre-rendering |
| FID references in the wild | FID was replaced by INP in March 2024 |
| FAQ Schema on commercial sites | Only benefits AI citations, not Google rich results (since Aug 2023) |
| `og:image` must be absolute URL | `https://domain/og.png` not `/og.png` |

## Installation

### For Hermes Agent

```bash
# Copy to your skills directory
cp -r instant-site ~/.hermes/skills/devops/

# Or install via Hermes CLI
hermes skills install devops/instant-site
```

### Manual Use (Without Hermes)

The `SKILL.md` is a standalone reference document. Copy it into your project and follow the checklists directly.

## License

MIT
