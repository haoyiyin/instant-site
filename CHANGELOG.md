# Changelog

All notable changes to Instant Site skill.

## [0.1.1] - 2026-05-29

### Changed
- Made Cloudflare Pages the preferred/default deployment workflow
- Added Wrangler OAuth login, Pages project creation, deployment, verification, and state-recording guidance
- Demoted Surge.sh to fallback deployment provider
- Updated templates, state examples, evals, and validation guidance for Cloudflare Pages
- Added `cloudflare-pages` capability to skill.json

## [0.1.0] - 2026-05-28

### Added
- Initial release of Instant Site Agent Skill
- Core SKILL.md with operating principles and task routing
- Workflow documents: site-generation, deployment, seo-audit, multilingual-rtl
- Buyer context documentation and example templates
- Product positioning example template
- Tool registry for deployment, forms, SEO, and state management
- Eval framework with rubric and 5 core cases
- Plugin metadata for Claude Code marketplace
- Validation script for skill structure

### Features
- From-zero static site generation for foreign trade independent sites
- Surge.sh default deployment with Netlify Drop fallback
- FormSubmit zero-configuration inquiry forms
- DESIGN.md template system (11 templates)
- Multi-language and RTL support with hreflang
- Three-layer SEO audit: local, deployed, external
- Review gates for risky publishing
- Multi-site operations from registry
- State file persistence for agent operations