# E-Commerce Vibrant DESIGN.md

## 1. Visual Theme & Atmosphere

Bold, energetic, conversion-optimized, and visually engaging. The site should feel like a vibrant retail destination: eye-catching product displays, clear CTAs, and social proof.

## 2. Color Palette & Roles

- Canvas: `#ffffff`
- Surface: `#fefaf6` (warm off-white)
- Surface Accent: `#fff3e0` (sale sections)
- Ink: `#1a1a1a`
- Muted Text: `#6b6b6b`
- Primary: `#e8452c` (vibrant red-orange, for CTAs)
- Secondary: `#f7b731` (warm yellow, for badges)
- Border: `#e8e2db`
- Success: `#2d9c5c`
- Star Rating: `#f5a623`

Use red-orange for CTAs. Reserve yellow for sale badges and urgency indicators.

## 3. Typography Rules

- Headings: Poppins, Montserrat, or system sans; 700-800 weight for hero; 600 for sections.
- Body: system-ui sans; 15-16px/1.6.
- Product titles: 16-18px, 600 weight.
- Price text: 18-20px, bold, primary color for sale prices.
- Review text: 14px, muted color.

## 4. Component Stylings

- Buttons: 8-10px radius, solid primary for "Add to Cart" and "Buy Now", outlined secondary for "View Details".
- Product cards: clean image, product title, price, star rating, quick-add button. Hover shows secondary image or zoom.
- Sale badges: absolute positioned, bold text, secondary color background.
- Review cards: star rating, reviewer name (when provided), review text, verified badge.
- Variant selectors: color swatches, size options, clear active state.

## 5. Layout Principles

- Max width: 1280-1400px for product grids.
- Hero: full-width banner with lifestyle imagery, headline, prominent CTA.
- Product grids: 3-4 columns desktop, 2 tablet, 1-2 mobile. Consistent aspect ratios.
- Social proof: customer reviews, ratings, trust badges.
- Footer: newsletter signup, social links, payment icons.
- Section spacing: 64-80px desktop, 40-56px mobile.

## 6. Depth & Elevation

- Shadows: `0 4px 16px rgba(26, 26, 26, 0.08)` for product cards.
- Hover elevation: `0 8px 24px rgba(26, 26, 26, 0.12)`.
- Sale sections use warm accent background for visual separation.

## 7. Do's and Don'ts

Do:

- Lead with product value and lifestyle benefits.
- Display pricing, availability, and shipping clearly.
- Include reviews and ratings when available.
- Make "Add to Cart" and "Buy Now" prominent and accessible.

Don't:

- Invent reviews, ratings, or testimonials.
- Use misleading pricing or fake urgency indicators.
- Hide return policy, shipping info, or customer service contact.

## 8. Responsive Behavior

- Product grids: 4 → 3 → 2 → 1 columns based on screen width.
- Keep buttons at least 44px tall on touch devices.
- Hero stacks vertically on mobile, CTA above the fold.
- Navigation collapses to hamburger menu below 768px.
- RTL: mirror layout direction. Use `dir="rtl"` on `<html>`. Mirror padding/margin/text-align. Arabic font stack: `Tajawal, 'Noto Naskh Arabic', sans-serif`.

## 9. Agent Prompt Guide

Use this style for DTC brands, fashion retailers, consumer product stores, and e-commerce sites. Generate static HTML with product grids, collection pages, review sections, and conversion-focused CTAs. Keep SEO-critical content visible in HTML without JavaScript.
