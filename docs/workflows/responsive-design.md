# Responsive Design Workflow

Complete workflow for building mobile-first, responsive static sites that adapt to all screen sizes.

## When to use

Apply this workflow for:
- All new site generation
- All page templates and components
- CSS architecture and breakpoint strategy
- Mobile UX optimization

## Screen Size Targets

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile Small | ≤ 375px | iPhone SE, small phones |
| Mobile | ≤ 480px | Standard phones |
| Mobile Large | ≤ 640px | Large phones, small tablets |
| Tablet | 768px - 1024px | Tablets, iPad |
| Desktop Small | 1024px - 1280px | Small laptops |
| Desktop | ≥ 1280px | Standard desktops, large screens |

## Breakpoint Strategy

### Option A: Mobile-First (Recommended)

Start with mobile styles, add complexity for larger screens:

```css
/* Base: Mobile styles (default) */
.component { /* mobile styles */ }

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .component { /* tablet styles */ }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .component { /* desktop styles */ }
}

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) {
  .component { /* large desktop styles */ }
}
```

### Option B: Desktop-First (Legacy)

Start with desktop, simplify for smaller screens:

```css
/* Base: Desktop styles (default) */
.component { /* desktop styles */ }

/* Tablet: below 1024px */
@media (max-width: 1024px) {
  .component { /* tablet styles */ }
}

/* Mobile: below 768px */
@media (max-width: 768px) {
  .component { /* mobile styles */ }
}
```

**Recommendation**: Use mobile-first for better performance and simpler CSS.

---

## Responsive Layout Patterns

### Hero Section

```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">...</h1>
    <p class="hero-subtext">...</p>
    <div class="hero-cta">
      <a href="#" class="btn btn-primary">...</a>
    </div>
  </div>
  <div class="hero-visual">
    <img src="..." alt="...">
  </div>
</section>
```

```css
/* Mobile: Stack vertically */
.hero {
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  min-height: auto; /* No fixed height on mobile */
}

.hero-content {
  order: 1;
  text-align: center;
}

.hero-visual {
  order: 2;
  margin-top: 24px;
}

.hero-title {
  font-size: 28px;
  line-height: 1.2;
}

.hero-subtext {
  font-size: 16px;
  margin-top: 12px;
}

/* Tablet: Two columns */
@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    align-items: center;
    padding: 48px 32px;
    min-height: 400px;
  }

  .hero-content {
    flex: 1;
    text-align: left;
    padding-right: 32px;
  }

  .hero-visual {
    flex: 1;
    margin-top: 0;
  }

  .hero-title {
    font-size: 36px;
  }
}

/* Desktop: Full height hero */
@media (min-width: 1024px) {
  .hero {
    padding: 80px 48px;
    min-height: 500px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-subtext {
    font-size: 18px;
  }
}
```

### Grid Layouts

```css
/* Mobile: Single column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Navigation

**Desktop**: Horizontal nav bar
**Mobile**: Hamburger menu with slide-in panel

```html
<header class="nav">
  <div class="nav-brand">
    <a href="/">Brand</a>
  </div>
  
  <!-- Desktop nav -->
  <nav class="nav-links">
    <a href="/products">Products</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  
  <!-- Mobile toggle -->
  <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
    <svg><!-- hamburger icon --></svg>
  </button>
  
  <!-- Mobile nav panel -->
  <div class="nav-mobile">
    <nav class="nav-mobile-links">
      <a href="/products">Products</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
</header>
```

```css
/* Desktop: Show horizontal nav, hide mobile */
.nav-links {
  display: flex;
  gap: 24px;
}

.nav-toggle {
  display: none;
}

.nav-mobile {
  display: none;
}

/* Mobile: Hide horizontal nav, show hamburger */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-toggle {
    display: block;
    padding: 8px;
  }

  .nav-mobile {
    display: none; /* Toggled by JS */
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: white;
    padding: 24px;
    z-index: 1000;
    box-shadow: -4px 0 24px rgba(0,0,0,0.15);
  }

  .nav-mobile.active {
    display: block;
  }

  .nav-mobile-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
```

**JavaScript toggle** (minimal, non-SEO-critical):
```js
document.querySelector('.nav-toggle').addEventListener('click', function() {
  const mobileNav = document.querySelector('.nav-mobile');
  mobileNav.classList.toggle('active');
  this.setAttribute('aria-expanded', mobileNav.classList.contains('active'));
});
```

### Tables

Mobile strategy: Stack rows as cards or scroll horizontally.

**Option 1: Card stack on mobile**:

```css
/* Mobile: Each row becomes a card */
.spec-table {
  display: block;
}

.spec-row {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.spec-label {
  font-weight: 600;
  margin-bottom: 4px;
}

.spec-value {
  color: #555;
}

/* Desktop: Traditional table */
@media (min-width: 768px) {
  .spec-table {
    display: table;
    width: 100%;
  }

  .spec-row {
    display: table-row;
  }

  .spec-label, .spec-value {
    display: table-cell;
    padding: 12px 16px;
    border-bottom: 1px solid #ddd;
  }

  .spec-label {
    width: 30%;
    background: #f5f5f5;
  }
}
```

**Option 2: Horizontal scroll**:

```css
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-wrapper table {
  min-width: 600px; /* Prevent squishing */
}
```

---

## Typography Scaling

### Fluid Typography (Modern)

Use `clamp()` for smooth scaling:

```css
.heading-1 {
  font-size: clamp(24px, 5vw + 8px, 48px);
  /* Min: 24px (mobile), Max: 48px (large desktop) */
}

.heading-2 {
  font-size: clamp(20px, 4vw + 4px, 36px);
}

.body-text {
  font-size: clamp(14px, 1vw + 12px, 18px);
  line-height: 1.6;
}
```

### Fixed Typography (Traditional)

```css
/* Mobile */
.heading-1 { font-size: 24px; }
.heading-2 { font-size: 20px; }
.body-text { font-size: 14px; }

/* Tablet */
@media (min-width: 768px) {
  .heading-1 { font-size: 32px; }
  .heading-2 { font-size: 24px; }
  .body-text { font-size: 16px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .heading-1 { font-size: 40px; }
  .heading-2 { font-size: 28px; }
  .body-text { font-size: 16px; }
}
```

---

## Touch Target Requirements

All interactive elements must meet accessibility standards:

```css
/* Minimum touch target size */
.btn, a, input, select, button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

/* Link targets in text */
p a, li a {
  padding: 4px 0; /* Add vertical padding */
}
```

**WCAG 2.5.5**: Target size at least 44x44 CSS pixels.

---

## Spacing Scale

```css
/* Mobile spacing */
.section { padding: 32px 16px; }
.section-gap { margin-top: 32px; }

/* Tablet */
@media (min-width: 768px) {
  .section { padding: 48px 32px; }
  .section-gap { margin-top: 48px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .section { padding: 64px 48px; }
  .section-gap { margin-top: 64px; }
}

@media (min-width: 1280px) {
  .section { padding: 80px 64px; }
  .section-gap { margin-top: 80px; }
}
```

---

## Image Responsiveness

### Responsive Images

```html
<!-- With srcset -->
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="..."
  loading="lazy"
>
```

### CSS Background Images

```css
.hero-bg {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center center;
}

@media (min-width: 768px) {
  .hero-bg {
    background-image: url('hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero-bg {
    background-image: url('hero-desktop.jpg');
  }
}
```

### Aspect Ratio Control

```css
.image-container {
  aspect-ratio: 16/9; /* Fixed ratio */
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Square thumbnails */
.thumbnail {
  aspect-ratio: 1/1;
}

/* Product card images */
.product-image {
  aspect-ratio: 4/3;
}
```

---

## Form Responsiveness

```css
/* Mobile: Full width inputs */
.form-group {
  margin-bottom: 16px;
}

input, textarea, select {
  width: 100%;
  min-height: 44px;
  padding: 12px;
  font-size: 16px; /* Prevent iOS zoom */
}

/* Desktop: Two-column layout */
@media (min-width: 768px) {
  .form-row {
    display: flex;
    gap: 16px;
  }

  .form-row .form-group {
    flex: 1;
  }
}
```

**Important**: `font-size: 16px` prevents iOS auto-zoom on focus.

---

## Performance for Mobile

### Critical CSS

Load essential styles first, defer decorative styles:

```html
<head>
  <style>
    /* Critical: layout, typography, navigation */
    /* Inline for fast first paint */
  </style>
  <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
</head>
```

### Lazy Loading

```html
<!-- Images below the fold -->
<img src="..." loading="lazy" alt="...">

<!-- Iframes -->
<iframe src="..." loading="lazy"></iframe>
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Testing Checklist

### Device Testing

- [ ] iPhone SE (375px)
- [ ] iPhone 14 (390px)
- [ ] iPhone 14 Pro Max (428px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop 1280px
- [ ] Desktop 1920px

### Browser Testing

- [ ] Safari iOS (WebKit)
- [ ] Chrome Android
- [ ] Safari macOS
- [ ] Chrome desktop
- [ ] Firefox desktop
- [ ] Edge desktop

### Key Checks

- [ ] Hero fits initial viewport without scroll on mobile
- [ ] All text readable without zoom (16px minimum body)
- [ ] All buttons/touch targets ≥ 44px height
- [ ] No horizontal scroll on any viewport
- [ ] Navigation accessible on mobile
- [ ] Images scale properly, no distortion
- [ ] Forms usable on mobile (no zoom on focus)
- [ ] Tables readable or have mobile alternative
- [ ] CTA visible without excessive scroll
- [ ] Reduced motion fallback works
- [ ] RTL layout mirrors correctly (if needed)

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Fixed pixel widths | Use max-width + percentage |
| Small touch targets | Ensure 44px minimum height |
| Hidden mobile navigation | Implement hamburger menu |
| Input font < 16px | Causes iOS zoom, use 16px+ |
| Unresponsive tables | Stack as cards or scroll |
| Large images on mobile | Use responsive srcset |
| No viewport meta | Add `<meta name="viewport">` |
| Horizontal scroll | Check overflow, use proper breakpoints |

---

## Required Meta Tag

Every page must include:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

This ensures proper mobile rendering and prevents layout issues.

---

## CSS Framework Template

Include this base in all projects:

```css
/* ================================
   RESPONSIVE BASE
   ================================ */

:root {
  /* Breakpoint values (reference only) */
  --bp-mobile: 480px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-large: 1280px;
  
  /* Spacing scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  
  /* Mobile spacing */
  --section-padding: var(--space-xl);
  --section-gap: var(--space-xl);
}

@media (min-width: 768px) {
  :root {
    --section-padding: var(--space-2xl);
    --section-gap: var(--space-2xl);
  }
}

@media (min-width: 1024px) {
  :root {
    --section-padding: var(--space-3xl);
    --section-gap: var(--space-3xl);
  }
}

/* ================================
   BASE TYPOGRAPHY (Mobile-first)
   ================================ */

html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-size: 1rem;
  line-height: 1.6;
}

h1 { font-size: clamp(24px, 5vw, 48px); }
h2 { font-size: clamp(20px, 4vw, 36px); }
h3 { font-size: clamp(18px, 3vw, 28px); }
h4 { font-size: clamp(16px, 2vw, 22px); }

/* ================================
   BASE LAYOUT
   ================================ */

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-xl);
  }
}

.section {
  padding: var(--section-padding) 0;
}

/* ================================
   TOUCH TARGETS
   ================================ */

.btn, button, a[role="button"] {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* ================================
   RESPONSIVE GRID
   ================================ */

.grid {
  display: grid;
  gap: var(--space-md);
}

.grid-2 { grid-template-columns: 1fr; }
.grid-3 { grid-template-columns: 1fr; }
.grid-4 { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid { gap: var(--space-lg); }
}

@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
  .grid { gap: var(--space-xl); }
}

/* ================================
   RESPONSIVE FLEX
   ================================ */

.flex-row {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .flex-row {
    flex-direction: row;
    gap: var(--space-lg);
  }
}

/* ================================
   RESPONSIVE IMAGE
   ================================ */

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ================================
   RESPONSIVE TABLE
   ================================ */

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* ================================
   REDUCED MOTION
   ================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ================================
   PRINT OPTIMIZATION
   ================================ */

@media print {
  .nav, .nav-mobile, .nav-toggle {
    display: none !important;
  }
  
  a[href]::after {
    content: " (" attr(href) ")";
  }
}
```