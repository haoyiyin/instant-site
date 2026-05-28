# Buyer Context

Buyer context captures foreign trade buyer information before generating pages. This helps the agent create content that matches real buyer concerns, objections, and language patterns.

## Purpose

Before generating homepage, product pages, blog, FAQ, CTAs, forms, and SEO content, the agent should understand:
- Who the buyers are (roles, companies, markets)
- What concerns they have before purchasing
- What trust signals they require
- How they describe their problems and needs

Without buyer context, pages tend to focus on product features instead of buyer outcomes and trust.

## Location

Recommended location: `.instant-site/buyer-context.json`

Alternative: `buyer-context.json` in the site root when `.instant-site/` is not yet created.

## Workflow

### 1. Check for existing context

Before site generation, check if `buyer-context.json` exists. If yes, read it.

If no:
- Offer to create from provided information
- Or generate draft with `needsConfirmation` fields

### 2. Gather information

Ask or infer from:

**Target markets**
- Which regions or countries are primary export targets?
- Any market-specific regulations or certifications required?

**Buyer roles**
- Importers, distributors, procurement managers, OEM buyers, technical evaluators?
- Who makes the purchase decision vs. who uses the product?

**Purchase concerns**
- MOQ, lead time, certification, customization, warranty, sample policy, payment terms?
- What objections are common in sales conversations?

**Trust requirements**
- Factory photos or videos?
- Certifications: ISO, CE, UL, FDA?
- Test reports or third-party inspection?
- Case studies or customer references?

**Conversion goal**
- Quote request, sample request, catalog download, WhatsApp inquiry, call?

**Customer language**
- How do buyers describe their problem in emails or inquiries?
- What terms do they use for the product category?

### 3. Create or update context file

Generate `.instant-site/buyer-context.json` with gathered information.

Add `needsConfirmation` array for any uncertain facts. Do not invent:
- Buyer roles not mentioned
- Objections not heard
- Certifications not verified
- Customer names or case studies not provided

### 4. Use during generation

When generating pages, reference buyer context for:
- Homepage hero: focus on buyer problem and outcome
- Product page FAQ: address common concerns
- Contact page: match conversion goal
- Blog topics: align with buyer questions
- CTA copy: use buyer's language patterns

## Example structure

See `templates/buyer-context.example.json`.

## Integration with site.config.json

`buyer-context.json` complements `site.config.json`:
- `site.config.json`: brand, products, deployment, design
- `buyer-context.json`: buyers, concerns, trust, conversion

Both should exist before full site generation. `site.config.json` remains the primary config file; `buyer-context.json` is optional but recommended for better content quality.

## Updating context

Update buyer context when:
- New market added
- New buyer role identified from inquiries
- New objection observed in sales
- Trust requirement changes (new certification, new case study)

Keep context file versioned with the site project.

## Safety rules

- Do not invent buyer roles, concerns, or objections
- Do not add certifications or case studies without verification
- Use `needsConfirmation` to flag uncertain claims
- Review context with user before first generation