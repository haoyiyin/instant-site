# Fintech Secure DESIGN.md

## Template Fit

**Best for:** Fintech, payments, crypto, financial services, insurtech.

**Avoid for:** Lifestyle brands, creative agencies, industrial manufacturing.

**Default dials:**
- DESIGN_VARIANCE: 4-5
- MOTION_INTENSITY: 2-3
- VISUAL_DENSITY: 5-6

**Asset strategy:** Trust indicators, compliance icons, platform screenshots. No fake metrics.

**Layout families:** Two-column hero, pricing tables, compliance sections, trust badges.

**Anti-slop risks:**
- No invented regulatory approvals, licenses, certifications.
- No fake-precise financial metrics without source.
- Avoid vague financial claims without supporting data.
- Use tabular numbers for financial figures.

## 1. Visual Theme & Atmosphere

Clean, high-trust, secure-feeling, and precisely organized. The site should feel like a reliable financial platform: transparent pricing, clear compliance, and professional presentation.

## 2. Color Palette & Roles

- Canvas: `#ffffff`
- Surface: `#f7faf9`
- Surface Strong: `#edf5f2`
- Ink: `#0f1a17`
- Muted Text: `#5f706a`
- Primary: `#0d7c66` (deep emerald/teal)
- Accent: `#1a56db` (trust blue, for verified badges)
- Alert: `#dc2626` (critical warnings only)
- Border: `#dde8e3`
- Data Cell: `#f0f7f4`

Use emerald for trust. Reserve accent blue for verified badges and compliance links.

## 3. Typography Rules

- Headings: Inter, system sans; 600 weight.
- Body: Inter, system sans; 15-16px/1.6.
- Financial figures: 16-18px, bold, tabular numbers (`font-variant-numeric: tabular-nums`).
- Legal disclaimers: 12-13px, muted text.

## 4. Component Stylings

- Buttons: 8px radius, solid primary for CTA, outlined secondary. Security buttons include lock icon.
- Cards: white background, 1px border, 10px radius, subtle shadow. Financial cards display key metrics with tabular numbers.
- Security badges: emerald background, white text, 6px radius, lock icon.
- Trust indicators: verified badge, compliance icons, security certifications.
- Data tables: high contrast header, alternating rows, right-aligned numbers.
- Forms: visible labels, inline validation, security indicators for sensitive fields.

## 5. Layout Principles

- Max width: 1200-1280px.
- Hero: two-column with headline, trust indicators, CTA, platform screenshot.
- Pricing: transparent tables with feature comparison.
- Compliance section: structured display of certifications and regulatory info.
- Footer: legal links, compliance info, security certifications.
- Section spacing: 72-96px desktop, 48-64px mobile.

## 6. Depth & Elevation

- Use borders and clean backgrounds for separation.
- Shadows: `0 4px 16px rgba(15, 26, 23, 0.06)` for cards.
- Security elements use subtle emerald backgrounds.

## 7. Do's and Don'ts

Do:

- Lead with security, compliance, and trust indicators.
- Display financial figures with tabular numbers.
- Include clear pricing, fees, and terms when available.

Don't:

- Invent regulatory approvals, licenses, or certifications.
- Use vague financial claims without supporting data.
- Hide fees, terms, or important financial information.

## 8. Responsive Behavior

- Financial tables scroll horizontally on mobile, key metrics stay visible.
- Keep buttons at least 44px tall on touch devices.
- Security badges remain visible on all screen sizes.
- RTL: mirror layout direction. Use `dir="rtl"` on `<html>`. Mirror padding/margin/text-align. Arabic font stack: `Tajawal, 'Noto Naskh Arabic', sans-serif`.

## 9. Agent Prompt Guide

Use this style for fintech, payment processors, crypto exchanges, financial services, and insurtech. Generate static HTML with product sections, pricing tables, compliance info, and trust-focused CTAs. Keep SEO-critical content visible in HTML without JavaScript.
