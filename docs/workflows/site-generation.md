# Site Generation Workflow

Complete workflow for generating a static foreign trade independent site from zero.

## When to use

Use this workflow when:
- Building a new B2B or B2C foreign trade site from scratch
- Creating a product catalog or single-product landing page
- Setting up a static marketing site with inquiry forms

## Required inputs

Before generation, gather or create:

1. **Brand inputs**
   - Brand name and tagline
   - Language and target markets
   - Brand tone (professional, technical, warm, etc.)

2. **Product inputs**
   - Product list with names, slugs, features, applications
   - Target keywords mapped to pages
   - Certifications and proof points verified by user

3. **Contact inputs**
   - Contact email for inquiry forms
   - WhatsApp number (optional)
   - Address (optional, can be "To be confirmed")

4. **Deployment inputs**
   - Surge domain (e.g., `brand-name.surge.sh`)
   - Custom domain (optional)
   - Publishing policy: `review_required`, `hybrid`, or `auto_publish`

5. **Design inputs**
   - DESIGN.md template selection
   - Design dials (optional): VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY
   - Visual asset strategy: provided assets, generated, or free stock images

6. **Buyer context (recommended)**
   - Buyer roles: importer, distributor, procurement manager, OEM buyer
   - Purchase concerns: MOQ, lead time, certification, customization
   - Trust requirements: factory photos, certifications, case studies
   - Conversion goal: quote request, sample request, catalog download

## Steps

### 1. Read buyer context

If `.instant-site/buyer-context.json` exists, read it. If not, create a draft with `needsConfirmation` fields.

### 2. Create site.config.json

Generate `site.config.json` with all required fields. Add any missing business facts to `needsConfirmation` array instead of inventing them.

### 3. Select or generate DESIGN.md

Select from templates in `templates/design/`:
- B2B: `b2b-industrial`, `clean-export-brand`, `premium-manufacturing`, `saas-tech`, `enterprise-corporate`, `fintech-secure`
- B2C: `warm-content`, `dark-tech`, `ecommerce-vibrant`, `lifestyle-minimal`, `luxury-automotive`

Before selection, state one line:
```text
Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <template>.
```

### 4. Generate core pages

Minimum page set:
- `index.html` — Homepage with hero, products overview, advantages, certifications, FAQ, CTA
- `products/index.html` — Product listing with category cards
- `products/{slug}.html` — Product detail pages with specs, applications, FAQ, quote CTA
- `about.html` — Company introduction, capabilities, export markets
- `contact.html` — FormSubmit inquiry form, email, WhatsApp, address
- `blog/index.html` — Blog listing (can be empty initially)
- `robots.txt` — Sitemap reference
- `sitemap.xml` — All important pages with lastmod

### 5. Generate shared assets

- `assets/css/styles.css` — Based on DESIGN.md
- `assets/js/main.js` — Only when needed for non-critical enhancements
- `assets/images/` — Follow image acquisition workflow below

### 5a. Acquire images (if not provided by user)

If user has not provided images, follow `docs/workflows/image-acquisition.md`:

1. **Define image needs** — List required images per page (hero, products, supporting visuals, OG image)
2. **Search free stock sources** — Use Unsplash/Pexels/Pixabay (all free for commercial use, no attribution required)
3. **Download and organize** — Save to `assets/images/` with proper naming: `{purpose}-{source}-{id}.jpg`
4. **Integrate into HTML** — Add proper alt text, width, height, lazy loading

**Priority order**:
```
User-provided → Generated images → Unsplash → Pexels → Pixabay → Burst → Placeholder (draft only)
```

**Image sources (all free for commercial use, no attribution required)**:
- **Unsplash** — Best for hero backgrounds, general business photos
- **Pexels** — Best for products, industrial settings, machinery
- **Pixabay** — Fallback, diverse content including vectors
- **Burst by Shopify** — E-commerce and consumer goods

**Search keywords by industry**:
| Industry | Keywords |
|----------|----------|
| Manufacturing | `industrial factory`, `manufacturing plant`, `production line` |
| Machinery | `heavy machinery`, `industrial equipment`, `CNC machine` |
| Electronics | `electronics manufacturing`, `pcb assembly` |
| Automotive | `automotive manufacturing`, `car parts` |

**Production rule**: Never ship pages with placeholder images. If all sources fail, ask user for assets.

### 6. Generate inquiry form

Use FormSubmit as default:
```html
<form action="https://formsubmit.co/{contactEmail}" method="POST">
  <input type="hidden" name="_subject" value="New inquiry from {brandName}">
  <input type="hidden" name="_next" value="https://{domain}/thanks.html">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" placeholder="Describe your inquiry..." required></textarea>
  <button type="submit">Send Inquiry</button>
</form>
```

Generate `thanks.html` with thank-you message and homepage link.

### 7. Apply SEO per-page

Each page must have:
- Unique title (60 chars max)
- Meta description (160 chars max)
- Canonical URL (absolute)
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- Twitter Card tags: `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD where appropriate: `WebSite`, `Organization`, `Product`, `FAQPage`

### 8. Run site-generation checklist

Execute `templates/pages/site-generation-checklist.md` to verify completeness.

### 9. Prepare publish review

Before first deployment, produce a review summary:
```text
Publish Review
- Site:
- Domain:
- Files to publish:
- New pages:
- SEO changes:
- Claims requiring user confirmation:
- Deployment target:
- Rollback option:
```

## Output files

```text
customer-site/
  site.config.json
  DESIGN.md
  index.html
  products/
    index.html
    {slug}.html
  about.html
  contact.html
  thanks.html
  blog/
    index.html
  assets/
    css/styles.css
    js/main.js
    images/
      hero-unsplash-{id}.jpg
      product-pexels-{id}.jpg
      og-image.jpg
  robots.txt
  sitemap.xml
  .instant-site/
    state.json
```

## Review gates

Default to human approval for:
- First launch
- New product pages
- Pricing, lead time, certification, compliance claims
- Contact method changes
- Custom domain changes
- Page deletion

Low-risk actions can be automated when policy allows:
- Sitemap updates
- Robots URL correction
- Minor metadata completion

## Verification

After generation, verify:
- All HTML files contain SEO-critical content without requiring JavaScript
- Every page has unique title, description, canonical, OG, Twitter tags
- `sitemap.xml` includes all important pages
- `robots.txt` references sitemap
- No unresolved placeholders in files meant for publish
- All images from free commercial-use sources (Unsplash/Pexels/Pixabay)
- No placeholder images in production files
- All images have proper alt text
- FormSubmit form uses correct contact email
- `thanks.html` exists with absolute `_next` URL

## Common mistakes

- Selecting DESIGN.md template without stating design read
- Using Inter + slate + purple gradient as default palette
- Centered hero with three equal feature cards
- Fake div-based screenshots
- Em-dashes in visible copy
- Missing canonical or OG URLs
- FormSubmit `_next` URL not absolute
- Inventing certifications, customers, or factory capacity
- **Using placeholder images in production** (use free stock instead)
- **Using images from non-commercial sources** (use Unsplash/Pexels/Pixabay only)