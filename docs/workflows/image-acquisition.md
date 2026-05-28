# Image Acquisition Workflow

Complete workflow for acquiring **free commercial-use images** when building a static foreign trade site.

## When to use

Use this workflow when:
- Generating pages that require visual assets (hero, products, supporting visuals)
- No user-provided images available
- Image generation tools unavailable or failed
- Need royalty-free stock images for production-ready pages

## Image Priority Strategy

Follow this order:
1. **User-provided assets** — Best quality, brand-authentic
2. **Generated images** — Custom, on-brand (requires AI image generation capability)
3. **Free stock images (commercial license)** — Professional, royalty-free, NO attribution required
4. **Clearly labeled placeholders** — Drafts only, NOT for production

---

## Free Commercial-Use Image Sources

### Unsplash (Primary)

**License**: Unsplash License — **Free for commercial use, no attribution required**

**Purpose**: High-quality professional photos.

**When to use**: Hero backgrounds, lifestyle images, business scenes, abstract visuals.

**Search methods**:
- Web search skill: "Search Unsplash for `{keyword}` free stock photo"
- Direct URL: `https://unsplash.com/s/photos/{keyword}`
- API (if key available): `https://api.unsplash.com/search/photos?query={keyword}`

**Usage rules**:
- ✅ Commercial use allowed
- ✅ No attribution required
- ✅ Can modify images
- ❌ Cannot create competing stock photo service
- ❌ Cannot use images in inappropriate context

**Best for**: Hero images, backgrounds, general business photos

---

### Pexels (Primary for Products)

**License**: Pexels License — **Free for commercial use, no attribution required**

**Purpose**: Professional stock photos and videos.

**When to use**: Product photography style, industrial settings, machinery, business environments.

**Search methods**:
- Web search skill: "Search Pexels for `{keyword}` royalty free photo"
- Direct URL: `https://www.pexels.com/search/{keyword}/`
- API (if key available): `https://api.pexels.com/v1/search?query={keyword}`

**Usage rules**:
- ✅ Commercial use allowed
- ✅ No attribution required
- ✅ Can modify images
- ❌ Cannot redistribute as stock photos
- ❌ Cannot imply endorsement by photographer

**Best for**: Product showcases, factory/industrial scenes, equipment photos

---

### Pixabay (Fallback)

**License**: Pixabay License — **Free for commercial use, no attribution required**

**Purpose**: Large library of photos, vectors, illustrations, videos.

**When to use**: When Unsplash/Pexels lack matching content, need illustrations or vectors.

**Search methods**:
- Web search skill: "Search Pixabay for `{keyword}` free image"
- Direct URL: `https://pixabay.com/images/search/{keyword}/`

**Usage rules**:
- ✅ Commercial use allowed
- ✅ No attribution required
- ✅ Can modify images
- ❌ Cannot redistribute as-is on stock sites
- ❌ Cannot use for illegal purposes

**Best for**: Diverse content, illustrations, vectors, when other sources fail

---

### Burst by Shopify (For E-commerce)

**License**: Free for commercial use, no attribution required

**Purpose**: E-commerce and retail focused images.

**When to use**: B2C consumer goods, retail displays, product photography.

**Search URL**: `https://burst.shopify.com/search?q={keyword}`

**Best for**: Consumer products, retail, lifestyle, e-commerce visuals

---

### Freepik (Free Tier — Requires Attribution)

**License**: Free tier requires attribution for commercial use

**Purpose**: Vectors, icons, PSDs, photos.

**When to use**: Icons, illustrations, graphic elements.

**Usage rules**:
- ✅ Free tier commercial use WITH attribution
- ✅ Premium tier removes attribution requirement
- Must include: "Designed by Freepik" or link to source

**Recommendation**: Use only when attribution is acceptable, or use Freepik Premium

---

## NOT Recommended for Commercial Use (Avoid)

| Source | Reason |
|--------|--------|
| Google Images search | Mixed licenses, requires verification |
| Pinterest | No clear licensing |
| Getty Images | Paid only |
| Shutterstock | Paid only |
| Adobe Stock | Paid only |
| Random web downloads | Unknown licensing, risky |

---

## Search Keyword Strategy

### By Industry (B2B Foreign Trade)

| Industry | Keyword Examples |
|----------|-----------------|
| Manufacturing | `industrial factory`, `manufacturing plant`, `production line`, `precision engineering` |
| Hardware/Tools | `tools workshop`, `power tools`, `hand tools professional`, `hardware equipment` |
| Machinery | `heavy machinery`, `industrial equipment`, `CNC machine`, `factory equipment` |
| Electronics | `electronics manufacturing`, `tech production`, `pcb assembly`, `electronic components` |
| Automotive Parts | `automotive manufacturing`, `car parts`, `auto workshop`, `vehicle assembly` |
| Medical Equipment | `medical device`, `healthcare equipment`, `lab facility`, `medical technology` |
| Agriculture | `agricultural machinery`, `farm equipment`, `greenhouse technology`, `crop processing` |

### By Page Type

| Page | Keywords |
|------|----------|
| Homepage hero | `{industry} professional`, `modern factory`, `business teamwork` |
| Product page | `{product name}`, `{product application}`, `{category} equipment` |
| About page | `factory interior`, `manufacturing team`, `quality control`, `company culture` |
| Contact page | `professional office`, `customer support`, `business meeting` |

### Keyword Tips

1. Add `professional` or `modern` for quality signals
2. Specify context: `factory interior` > `factory`
3. Include application: `CNC machining metal` > `CNC`
4. Use industry terms for relevance

---

## Integration Workflow

### Step 1: Define Image Needs

```json
{
  "page": "index.html",
  "requiredImages": [
    {
      "location": "hero",
      "keywords": ["industrial factory professional", "manufacturing modern"],
      "minWidth": 1920,
      "aspectRatio": "16:9",
      "alt": "{brand} manufacturing facility"
    },
    {
      "location": "product-showcase",
      "keywords": ["machinery equipment", "industrial product"],
      "minWidth": 800,
      "aspectRatio": "4:3",
      "alt": "{product} overview"
    }
  ]
}
```

### Step 2: Search Free Stock Sites

Using available skills:

```text
# With brave-search skill
brave-search: "Unsplash free commercial use image for `{keyword}`"

# With web-fetch skill
web-fetch: https://unsplash.com/s/photos/{keyword}
Extract: image URLs, photographer info, image IDs

# With scrapling skill (for Pexels)
scrapling: https://www.pexels.com/search/{keyword}/
Extract: download URLs, preview images
```

### Step 3: Verify Image

Check each candidate:
- [ ] Resolution ≥ minimum width
- [ ] Aspect ratio fits location
- [ ] Content matches context
- [ ] Professional appearance
- [ ] Source license confirmed (Unsplash/Pexels/Pixabay)

### Step 4: Download & Organize

```bash
# Download to assets folder
curl -L -o assets/images/{purpose}-{id}.jpg "{direct_url}"

# Naming convention
hero-unsplash-{id}.jpg
product-pexels-{id}.jpg
about-pixabay-{id}.jpg
```

### Step 5: Integrate into HTML

```html
<!-- Proper attributes -->
<img
  src="assets/images/hero-unsplash-{id}.jpg"
  alt="{brand} modern manufacturing facility with advanced equipment"
  width="1920"
  height="1080"
  loading="lazy"
>
```

### Step 6: OG Image Setup

```html
<meta property="og:image" content="https://{domain}/assets/images/hero-unsplash-{id}.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

---

## Fallback Chain

```
1. User-provided assets
2. Generated images (if tool available)
3. Unsplash (search → select → download)
4. Pexels (if Unsplash lacks content)
5. Pixabay (if Pexels also lacks)
6. Burst by Shopify (for e-commerce/B2C)
7. Placeholder with DRAFT label (internal only, NEVER ship to production)
```

**Production rule**: Never deploy pages with placeholder images. If all sources fail, ask user for assets or postpone launch.

---

## Image Optimization Checklist

- [ ] Format: JPG for photos, PNG/WebP for transparency
- [ ] Size: Compressed (< 500KB for hero, < 200KB for others)
- [ ] Dimensions: Width/height attributes set
- [ ] Responsive: srcset for different viewports (optional)
- [ ] Loading: `loading="lazy"` for below-fold images
- [ ] Alt text: Descriptive, includes keywords, brand-relevant

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using Google Images | Use Unsplash/Pexels/Pixabay only |
| Missing alt text | Write descriptive alt with keywords |
| Low resolution (< 800px) | Filter for high-res, check before download |
| Large file sizes | Compress before deploy |
| Generic keywords | Use specific industry/product terms |
| Placeholders in production | Never ship, get real images first |
| Paid site images | Stick to free commercial-use sources |

---

## Quick Reference: License Summary

| Source | Commercial Use | Attribution | Modify | Redistribute |
|--------|----------------|-------------|--------|--------------|
| **Unsplash** | ✅ Yes | ❌ Not required | ✅ Yes | ❌ As stock |
| **Pexels** | ✅ Yes | ❌ Not required | ✅ Yes | ❌ As stock |
| **Pixabay** | ✅ Yes | ❌ Not required | ✅ Yes | ❌ As stock |
| **Burst** | ✅ Yes | ❌ Not required | ✅ Yes | ✅ Yes |
| **Freepik (free)** | ✅ Yes | ✅ **Required** | ✅ Yes | ❌ No |

**Recommendation**: Prioritize Unsplash, Pexels, Pixabay for zero-attribution commercial use.

---

## Checklist Before Production

- [ ] All images from free commercial-use sources (Unsplash/Pexels/Pixabay/Burst)
- [ ] No placeholders in production files
- [ ] All images have descriptive alt text
- [ ] Width/height attributes set
- [ ] Files optimized (size < 500KB)
- [ ] OG image configured for social sharing
- [ ] Images match page context and industry
- [ ] Files properly named and organized in assets/images/