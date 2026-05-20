# Warm Content DESIGN.md

## 1. Visual Theme & Atmosphere

Warm, editorial, calm, and readable. The site should support educational content, founder stories, buyer guides, and trust-building articles.

## 2. Color Palette & Roles

- Canvas: `#fffdf8`
- Surface: `#f7f2ea`
- Ink: `#2f2a24`
- Muted Text: `#7a7066`
- Primary: `#8b5e34`
- Accent: `#2f7d6d`
- Border: `#e6d9ca`
- Highlight: `#fff2cc`

## 3. Typography Rules

- Headings: Georgia, Charter, or serif; 400-600 weight.
- Body: system-ui sans or serif; 17px/1.75 for articles.
- Captions: 13-14px muted text.
- Keep line length between 65-75 characters for long-form content.

## 4. Component Stylings

- Buttons: softly rounded, calm primary color.
- Article cards: title, excerpt, date, category, light border.
- Callouts: warm background, left border, concise text.
- FAQ: accordion only if it degrades gracefully; static content preferred.

## 5. Layout Principles

- Content max width: 720-760px.
- Marketing sections max width: 1120px.
- Use generous top and bottom spacing.
- Keep blog index easy to scan by category or topic.

## 6. Depth & Elevation

- Avoid heavy shadows.
- Use paper-like surfaces and thin borders.
- Let typography and whitespace carry hierarchy.

## 7. Do's and Don'ts

Do:

- Use clear article structure.
- Include summaries and practical takeaways.
- Link articles to relevant products or contact pages.
- Keep claims grounded.

Don't:

- Use dense marketing blocks inside articles.
- Use flashy animations.
- Sacrifice readability for visuals.
- Invent statistics or citations.

## 8. Responsive Behavior

- Keep article body comfortable on mobile.
- Use single-column layouts below 768px.
- Ensure tap targets are at least 44px tall.
- Keep sticky elements minimal.
- RTL: mirror layout direction. Use `dir="rtl"` on `<html>`. Mirror padding/margin/text-align. Arabic font stack: `Tajawal, 'Noto Naskh Arabic', sans-serif`.

## 9. Agent Prompt Guide

Use this style for content-led independent sites, educational blogs, buyer guides, and trust-building pages. Prioritize readable static HTML, semantic headings, internal links, and FAQ sections.
