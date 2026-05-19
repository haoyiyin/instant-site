---
name: instant-site
description: "Deploy static sites for free without registration, with SEO optimization. Use when user wants to quickly publish a static site (HTML/CSS/JS) online with zero signup, or needs SEO audit after deployment."
triggers:
  - deploy static site
  - free hosting
  - no registration hosting
  - surge deploy
  - netlify drop
  - static site SEO
  - 上线静态站
  - 免费部署
---

# Instant Site — Free Static Site Deployment + SEO Optimization

Zero-registration static site deployment with post-launch SEO checklist.

## Part 1: One-Command Deployment

唯一方案：**Surge.sh**。一行命令，首次运行输入邮箱+密码即可（自动创建账号，存本地 `~/.netrc`）。

```bash
# 首次使用
npm install -g surge
cd ./my-site && surge . my-project.surge.sh

# 后续更新（同一行）
surge ./dist my-project.surge.sh

# package.json 集成
"scripts": { "deploy": "surge ./dist my-project.surge.sh" }

# 自定义域名
surge . --domain mysite.com
```

> **备选**: Netlify Drop (app.netlify.com/drop) 拖拽文件夹即部署，完全无需登录，但站点会过期。仅适合临时演示。

## Part 2: Frontend Design (DESIGN.md Approach)

借鉴 [awesome-design-md](https://github.com/voltagent/awesome-design-md) 的 DESIGN.md 理念：用纯 Markdown 定义设计系统，让 AI agent 生成一致的 UI。

### 快速流程

1. **选择设计风格** — 从以下常用风格中选一个，或自定义
2. **生成 DESIGN.md** — 放到项目根目录
3. **告诉 AI agent** — "按照 DESIGN.md 构建页面"

### 常用静态站设计模板

#### 模板 A: 极简开发者风格 (类 Vercel/Linear)
```markdown
## Visual Theme
Stark black-and-white, minimal chrome, developer-centric.

## Colors
- Canvas: #ffffff
- Ink/Primary: #171717
- Mute: #888888
- Accent: #0070f3
- Surface Soft: #fafafa
- Border: #ebebeb

## Typography
- Headlines: Inter 600, -1.2px tracking
- Body: Inter 400, 16px/1.6
- Code: JetBrains Mono 400, 14px

## Layout
- Max-width: 1200px, centered
- Section spacing: 96px vertical
- Card padding: 24-32px
- 4px base grid

## Components
- Buttons: pill-shaped (radius 9999px), single primary color
- Cards: white bg, subtle shadow, 12px radius
- Input: 6px radius, 1px #e3e8ee border

## Do's
- Generous whitespace
- Sentence-case headings
- Single accent color for CTAs

## Don'ts
- No gradients on buttons
- No centered body text
- No drop shadows on text
```

#### 模板 B: 温暖内容型 (类 Notion/Medium)
```markdown
## Visual Theme
Warm minimalism, reading-optimized, serif headings.

## Colors
- Canvas: #ffffff
- Surface: #f7f6f3
- Ink: #37352f
- Mute: #9b9a97
- Accent: #2eaadc
- Border: #e3e2de

## Typography
- Headlines: Georgia/serif, 400, -0.2px tracking
- Body: system-ui sans, 16px/1.7
- Mono: IBM Plex Mono

## Layout
- Max-width: 720px (content-first)
- Section spacing: 64px
- Generous line-height for readability
```

#### 模板 C: 暗黑科技风 (类 Stripe/AI 产品)
```markdown
## Visual Theme
Deep dark background, gradient mesh accents, cinematic.

## Colors
- Canvas: #0a0a0a
- Surface: #141414
- Ink: #ededed
- Mute: #888
- Primary: #533afd (indigo)
- Gradient: cyan → violet → pink

## Typography
- Display: 300 weight, -1.4px tracking (thin + tight = premium)
- Body: 400, 15px/1.5
- Mono: for code/tech labels

## Layout
- Max-width: 1200px
- Hero section with gradient mesh backdrop
- Card: dark surface, subtle border, 12px radius
```

### DESIGN.md 完整格式 (9 Sections)

参考 [Stitch DESIGN.md 规范](https://stitch.withgoogle.com/docs/design-md/format/)：

1. **Visual Theme & Atmosphere** — 整体氛围和设计理念
2. **Color Palette & Roles** — 语义化颜色 + hex 值 + 用途
3. **Typography Rules** — 字体族 + 完整字阶
4. **Component Stylings** — 按钮/卡片/输入框等样式和状态
5. **Layout Principles** — 间距系统/网格/留白哲学
6. **Depth & Elevation** — 阴影系统和层级
7. **Do's and Don'ts** — 设计红线
8. **Responsive Behavior** — 断点/触控目标/折叠策略
9. **Agent Prompt Guide** — 给 AI agent 的快速参考

### 推荐 DESIGN.md 资源

直接从 awesome-design-md 选取参考：
- **简洁科技**: `vercel`, `linear`, `cursor`
- **温暖内容**: `notion`, `medium-style`
- **暗黑高级**: `stripe`, `elevenlabs`, `runwayml`
- **开发工具**: `supabase`, `posthog`, `sentry`

## Part 3: Post-Deploy SEO Checklist

借鉴 [claude-seo](https://github.com/AgriciDaniel/claude-seo) 的 SEO 审计框架，针对静态站的关键优化项。

### 3.1 必做项 (Critical)

#### robots.txt
```
User-agent: *
Allow: /

# 站点地图
Sitemap: https://your-project.surge.sh/sitemap.xml

# 可选：屏蔽 AI 爬虫
# User-agent: GPTBot
# Disallow: /
# User-agent: ClaudeBot
# Disallow: /
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-project.surge.sh/</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-project.surge.sh/about</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

#### Meta Tags (每个页面)
```html
<head>
  <!-- 基础 -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题 - 站点名</title>
  <meta name="description" content="150字以内的页面描述">

  <!-- Open Graph -->
  <meta property="og:title" content="页面标题">
  <meta property="og:description" content="页面描述">
  <meta property="og:image" content="https://your-project.surge.sh/og-image.png">
  <meta property="og:url" content="https://your-project.surge.sh/">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="页面标题">
  <meta name="twitter:description" content="页面描述">
  <meta name="twitter:image" content="https://your-project.surge.sh/og-image.png">

  <!-- Canonical -->
  <link rel="canonical" href="https://your-project.surge.sh/">
</head>
```

#### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "站点名",
  "url": "https://your-project.surge.sh",
  "description": "站点描述",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://your-project.surge.sh/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### 3.2 高优先级 (High)

#### Core Web Vitals 目标
- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### 静态站常见优化
```html
<!-- 图片懒加载 -->
<img src="photo.webp" alt="描述" loading="lazy" width="800" height="600">

<!-- 预连接关键资源 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.example.com" crossorigin>

<!-- 字体优化 -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- 关键 CSS 内联 -->
<style>/* 首屏关键 CSS */</style>
<link rel="stylesheet" href="/styles.css" media="print" onload="this.media='all'">
```

#### 图片 SEO
- 使用描述性文件名: `product-hero.webp` 而非 `img001.jpg`
- Alt text 必填，自然语言描述
- 现代格式: WebP/AVIF 优先，PNG/JPG 兜底
- 明确 width/height 防止 CLS

### 3.3 中优先级 (Medium)

#### 安全头 (Surge 不支持自定义头，通过 meta 标签部分实现)
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

#### URL 结构
- 使用短横线分隔: `/blog/my-post` ✓ `/blog/my_post` ✗
- 语义化路径: `/pricing` ✓ `/page123` ✗
- 小写字母，无特殊字符

#### 内链策略
- 每页至少 3-5 个内部链接
- 使用描述性锚文本（"查看定价方案" ✓ "点击这里" ✗）
- 确保重要页面从首页 ≤3 次点击可达

### 3.4 AI 搜索优化 (GEO/AEO)

2025-2026 趋势：AI 爬虫和搜索引擎优化同等重要。

```html
<!-- 结构化数据增强 AI 可读性 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "这个产品是做什么的？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "清晰简洁的回答..."
    }
  }]
}
</script>
```

**AI 爬虫管理策略**:
- `GPTBot` — OpenAI 训练数据采集
- `ClaudeBot` — Anthropic 数据采集
- `Google-Extended` — Gemini 训练（不影响 Google 搜索排名）
- `PerplexityBot` — Perplexity AI 引用

> 屏蔽 AI 爬虫 = 放弃 AI 搜索引擎的品牌曝光机会。建议允许。

### 3.5 提交索引

部署后主动通知搜索引擎：

```bash
# Google — 通过 Google Search Console (需验证站点)
# Bing — 通过 Bing Webmaster Tools
# IndexNow (Bing/Yandex) — 一行 curl：
curl "https://api.indexnow.org/indexnow?url=https://your-project.surge.sh/&key=YOUR_KEY"
```

### SEO 审计快速检查表

| 检查项 | 状态 |
|--------|------|
| robots.txt 存在且有效 | ☐ |
| sitemap.xml 存在且提交 | ☐ |
| 每页有唯一 title + description | ☐ |
| canonical 标签正确 | ☐ |
| OG/Twitter meta 完整 | ☐ |
| JSON-LD 结构化数据 | ☐ |
| 图片有 alt + 懒加载 | ☐ |
| 移动端响应式 | ☐ |
| HTTPS 启用 | ☐ |
| LCP < 2.5s | ☐ |
| INP < 200ms | ☐ |
| CLS < 0.1 | ☐ |
| 内链 ≥3/页 | ☐ |
| 提交 Google/Bing | ☐ |

## Pitfalls

1. **Surge 的 email 不是注册** — 首次 `surge` 会问邮箱+密码（自动创建账号），存入 `~/.netrc`。后续部署无需再输入。
2. **Surge 偶发 504** — Surge CDN 不稳定，CLI 显示 Success 但站点可能返回 504。遇到时等 10-30 分钟重试，或换 Netlify Drop 应急。
3. **Surge 不支持自定义 HTTP 头** — 无法设 HSTS、CSP 等安全头。如需这些，考虑 Cloudflare Pages（需注册）。
4. **静态站 JS 渲染问题** — 纯 CSR (React/Vue SPA) 对 SEO 不友好。用 SSR 或预渲染。
5. **INP 取代了 FID** — 2024年3月起，Core Web Vitals 中 FID 已被 INP 替代。不要引用 FID。
6. **FAQ Schema 受限** — 2023年8月起，Google 仅对政府/医疗站点显示 FAQ 富片段。商业站点的 FAQPage 对 Google 无直接收益，但对 AI 引用仍有价值。
7. **不要用 HowTo Schema** — 2023年9月已废弃。
8. **og:image 需要绝对 URL** — `https://your-project.surge.sh/og.png` ✓ `/og.png` ✗

## Verification

部署后验证：
```bash
# 1. 检查站点可访问
curl -I https://your-project.surge.sh/

# 2. 检查 robots.txt
curl https://your-project.surge.sh/robots.txt

# 3. 检查 sitemap
curl https://your-project.surge.sh/sitemap.xml

# 4. 检查 meta 标签
curl -s https://your-project.surge.sh/ | grep -E '<title>|<meta name="description"|og:title'

# 5. 结构化数据验证
# 打开 https://search.google.com/test/rich-results 输入 URL

# 6. PageSpeed 测试
# 打开 https://pagespeed.web.dev/ 输入 URL
```
