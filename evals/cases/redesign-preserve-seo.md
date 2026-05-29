# Eval Case: Redesign Preserve SEO

Redesign existing site without breaking SEO.

## Prompt

```text
Redesign the existing site at hardware-export.pages.dev.
Modernize the visual design using the b2b-industrial DESIGN.md template.
Keep existing URLs, navigation labels, and SEO metadata.
Do not change the contact form fields.
Preserve the current canonical URLs and title structure.
Prepare a redesign audit and publish review.
```

## Expected Behavior

1. **Redesign audit**: Documents current SEO state before changes
2. **Preserve URLs**: No silent URL changes
3. **Preserve nav**: Same navigation labels
4. **Preserve forms**: Same field names and order
5. **Preserve metadata**: Title structure, verified claims
6. **Review gate**: High-risk changes flagged for approval
7. **Rollback plan**: Documented rollback path

## Assertions

- [ ] Redesign audit performed before generation
- [ ] Current brand tokens documented (colors, typography)
- [ ] Current URL structure documented
- [ ] Current primary nav labels documented
- [ ] Current form fields documented
- [ ] Current SEO metadata documented
- [ ] Ranking-sensitive pages identified
- [ ] Existing visual assets cataloged
- [ ] No URL changes without explicit approval
- [ ] No nav label changes without explicit approval
- [ ] No form field name/order changes
- [ ] No analytics ID changes
- [ ] No legal copy changes
- [ ] No verified claim changes
- [ ] Publish review lists preserved vs. changed items
- [ ] Rollback plan documented

## Common Failures

- Silently changing URLs (breaks backlinks, bookmarks)
- Changing nav labels (confuses returning visitors)
- Changing form fields (breaks form integrations)
- Removing verified certifications
- Adding new claims without review
- No redesign audit before generation
- No rollback plan