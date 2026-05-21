# Enterprise Corporate DESIGN.md

## 1. Visual Theme & Atmosphere

Structured, authoritative, trustworthy, and systematically organized. The site should feel like a capable enterprise partner: clear service descriptions, case studies, and practical layouts.

## 2. Color Palette & Roles

- Canvas: `#ffffff`
- Surface: `#f4f6f9`
- Surface Strong: `#e9ecf2`
- Ink: `#1a1f2e`
- Muted Text: `#5f6b7a`
- Primary: `#1e3a5f` (deep navy)
- Accent: `#0077cc` (structured blue, for links)
- Border: `#d4d9e1`
- Data Highlight: `#f0f4fa`
- Success: `#1a7f37`

Use navy for authority. Keep the palette restrained and professional.

## 3. Typography Rules

- Headings: IBM Plex Sans, Inter, or system sans; 500-600 weight.
- Body: system-ui sans; 16px/1.6.
- Captions and legal: 13px, muted text.
- Tables and data displays: 14-15px, precisely aligned.

## 4. Component Stylings

- Buttons: 6px radius, solid primary for CTA, outlined secondary for downloads.
- Cards: white background, 1px border, 8px radius, subtle shadow on hover.
- Case study cards: image, client name (when provided), challenge summary, results metrics.
- Data tables: high contrast header, alternating row backgrounds, sortable indicators.
- Mega menu: multi-column dropdown with service categories.

## 5. Layout Principles

- Max width: 1200-1280px.
- Systematic 4px grid alignment.
- Hero: two-column with headline, trust indicators, CTA, professional imagery.
- Service sections: 2-3 column grid with icon cards.
- Footer: multi-column links, legal, certifications.
- Section spacing: 72-96px desktop, 48-64px mobile.

## 6. Depth & Elevation

- Use borders more than shadows.
- Shadows: `0 4px 12px rgba(26, 31, 46, 0.06)` for cards.
- Avoid decorative effects or gradients.

## 7. Do's and Don'ts

Do:

- Lead with service value and client outcomes.
- Include case studies and proof points when available.
- Maintain consistent professional tone.

Don't:

- Invent case studies, client names, or partnerships.
- Use overly casual or marketing-heavy language.
- Overload pages with dense text blocks.

## 8. Responsive Behavior

- Service grids collapse to single column below 768px.
- Keep buttons at least 44px tall on touch devices.
- Tables may scroll horizontally, core data stays readable.
- Mega menu collapses to accordion on mobile.
- RTL: mirror layout direction. Use `dir="rtl"` on `<html>`. Mirror padding/margin/text-align. Arabic font stack: `Tajawal, 'Noto Naskh Arabic', sans-serif`.

## 9. Agent Prompt Guide

Use this style for enterprise services, consulting, professional services, and corporate websites. Generate static HTML with service sections, case study layouts, team info, and inquiry CTAs. Keep SEO-critical content visible in HTML without JavaScript.
