# SaaS Tech DESIGN.md

## Template Fit

**Best for:** SaaS platforms, cloud services, developer tools, API products, tech startups.

**Avoid for:** Traditional B2B manufacturing, regulated industries, luxury brands.

**Default dials:**
- DESIGN_VARIANCE: 6-7
- MOTION_INTENSITY: 4-6
- VISUAL_DENSITY: 4-5

**Asset strategy:** Real product screenshots, generated visuals, or abstract system diagrams. No fake div-based dashboards.

**Layout families:** Hero with dual CTA, feature grids (avoid default three-equal), code blocks, metric displays.

**Anti-slop risks:**
- Avoid default indigo/purple gradient unless brand calls for it.
- Do not use three equal feature cards as default layout.
- No fake dashboard screenshots built from styled divs.
- Avoid Inter default; consider Geist, Sora, or system sans.

## 1. Visual Theme & Atmosphere

Clean, geometric, developer-friendly, and technically credible. The site should feel like a modern cloud platform: precise, fast, and approachable. Use subtle gradient mesh backgrounds for hero sections and clean card layouts.

## 2. Color Palette & Roles

- Canvas: `#ffffff`
- Surface: `#f8f9fc`
- Surface Dark: `#0f1119`
- Ink: `#0f172a`
- Muted Text: `#64748b`
- Primary: `#4f46e5` (indigo)
- Accent: `#06b6d4` (cyan, for code badges)
- Gradient: `linear-gradient(135deg, #6366f1, #7c3aed)` (hero accents only)
- Border: `#e2e8f0`
- Success: `#10b981`

Use indigo for trust and navigation. Reserve gradient for hero sections only.

## 3. Typography Rules

- Headings: Inter, Sora, or system sans; 600-700 weight; tight letter spacing.
- Body: system-ui sans; 15-16px/1.65.
- Code/API labels: JetBrains Mono, monospace; 13-14px.
- Metric displays: 48-64px, 700 weight, tabular numbers.

## 4. Component Stylings

- Buttons: 8-10px radius, solid primary for CTA, outlined secondary for docs links.
- Cards: white background, 1px border, 12px radius, subtle shadow on hover. Feature cards with icon, title, 2-line description.
- Code blocks: dark background (#0f1119), 13-14px monospace, 16px padding.
- Metric blocks: large bold numerals (48-64px), muted label below.
- Tables: high contrast header, alternating row backgrounds, 14-15px.

## 5. Layout Principles

- Max width: 1200-1280px.
- Hero: large headline, subheadline, dual CTA, optional gradient mesh background.
- Feature sections: 3-column grid, 96-120px vertical spacing.
- Section spacing: 72-96px desktop, 48-64px mobile.

## 6. Depth & Elevation

- Shadows: `0 4px 16px rgba(15, 23, 42, 0.08)` for cards.
- Hover elevation: `0 8px 24px rgba(15, 23, 42, 0.12)`.
- Code blocks use dark surface with no shadow.

## 7. Do's and Don'ts

Do:

- Lead with product value and developer experience.
- Include code snippets and API examples where relevant.
- Use metric blocks to demonstrate scale and reliability.

Don't:

- Use overly playful or decorative elements.
- Invent customer logos, case studies, or usage metrics.
- Hide documentation behind complex navigation.

## 8. Responsive Behavior

- Hero stacks vertically on mobile, headline stays prominent.
- Feature grids collapse to single column below 768px.
- Code blocks scroll horizontally on small screens.
- Keep buttons at least 44px tall on touch devices.
- RTL: mirror layout direction. Use `dir="rtl"` on `<html>`. Mirror padding/margin/text-align. Arabic font stack: `Tajawal, 'Noto Naskh Arabic', sans-serif`.

## 9. Agent Prompt Guide

Use this style for SaaS platforms, cloud services, developer tools, API products, and tech startups. Generate static HTML with clean sections, feature grids, pricing tables, code examples, and developer-focused CTAs. Keep SEO-critical content visible in HTML without JavaScript.
