# Evals for Instant Site

Evals help prevent skill regression by defining expected behavior for core scenarios.

## Purpose

Each eval case documents:
- A realistic prompt
- Expected agent behavior
- Specific assertions to verify

Evals are human/agent readable, not automated tests. Use them for:
- Pre-merge review of skill changes
- Manual quality checks after updates
- Agent self-verification during execution

## Structure

Each case file contains:
```markdown
# Eval Case: <name>

## Prompt
<realistic user request>

## Expected Behavior
<what the agent should do>

## Assertions
- [ ] <specific check>
- [ ] <specific check>
```

## Usage

1. Read the eval case before implementing a similar task
2. After implementation, check against assertions
3. Mark assertions as pass/fail
4. Report gaps or unexpected behavior

## Available Cases

| Case | Purpose |
|------|---------|
| `b2b-industrial-site.md` | From-zero site generation for B2B foreign trade |
| `multilingual-rtl-site.md` | Multi-language with RTL support |
| `seo-audit.md` | SEO audit without external data claims |
| `redesign-preserve-seo.md` | Redesign without breaking SEO |
| `content-draft-review-gate.md` | Content draft with proper review gate |

## Rubric

See `rubric.md` for the quality dimensions used across all evals.

## Adding New Cases

When adding new evals:
1. Use realistic prompts from actual usage
2. Focus on regression risk areas
3. Keep assertions specific and checkable
4. Document common failure modes