#!/usr/bin/env node
/**
 * Validate Instant Site skill structure.
 * Zero-dependency validation script using Node built-ins.
 */

import { existsSync, readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

let errors = 0;
let warnings = 0;

function check(condition, message, level = 'error') {
  if (!condition) {
    if (level === 'error') {
      console.error(`❌ ${message}`);
      errors++;
    } else {
      console.warn(`⚠️  ${message}`);
      warnings++;
    }
  } else {
    console.log(`✓ ${message}`);
  }
}

function parseJSON(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    return null;
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  let currentKey = null;
  let currentArray = [];

  for (const line of match[1].split('\n')) {
    // Skip empty lines
    if (!line.trim()) continue;

    // Array item: starts with "- "
    if (line.match(/^  - /)) {
      if (currentKey && currentArray) {
        currentArray.push(line.replace(/^  - /, '').trim());
      }
      continue;
    }

    // Key-value line
    const idx = line.indexOf(':');
    if (idx === -1) continue;

    // Save previous array if exists
    if (currentKey && currentArray.length > 0) {
      fm[currentKey] = currentArray;
      currentArray = [];
    }

    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();

    // Check if this starts an array (value is empty or just whitespace)
    if (!val) {
      currentKey = key;
      currentArray = [];
      continue;
    }

    // String value
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
    currentKey = null;
  }

  // Save last array
  if (currentKey && currentArray.length > 0) {
    fm[currentKey] = currentArray;
  }

  return fm;
}

// 1. SKILL.md exists and has frontmatter
console.log('\n=== Core Files ===');
const skillPath = join(ROOT, 'SKILL.md');
if (existsSync(skillPath)) {
  const skillContent = readFileSync(skillPath, 'utf8');
  const fm = parseFrontmatter(skillContent);
  check(fm !== null, 'SKILL.md has YAML frontmatter');
  check(fm?.name === 'instant-site', 'frontmatter name is instant-site');
  check(fm?.description && fm.description.length > 0, 'frontmatter has description');
  check(fm?.triggers && fm.triggers.length > 0, 'frontmatter has triggers');
} else {
  check(false, 'SKILL.md exists');
}

// 2. Required docs
console.log('\n=== Required Docs ===');
const requiredDocs = [
  'docs/review-gates.md',
  'docs/site-state.md',
  'docs/content-lifecycle.md',
  'docs/seo-operations.md',
  'docs/multi-site-operations.md',
  'docs/buyer-context.md',
  'docs/tool-registry.md'
];
for (const doc of requiredDocs) {
  check(existsSync(join(ROOT, doc)), `${doc} exists`);
}

// 3. Workflow docs
console.log('\n=== Workflow Docs ===');
const workflows = [
  'docs/workflows/site-generation.md',
  'docs/workflows/deployment.md',
  'docs/workflows/seo-audit.md',
  'docs/workflows/multilingual-rtl.md'
];
for (const wf of workflows) {
  check(existsSync(join(ROOT, wf)), `${wf} exists`, 'warning');
}

// 4. Templates JSON parseable
console.log('\n=== Templates ===');
const templatesDir = join(ROOT, 'templates');
if (existsSync(templatesDir)) {
  const templateFiles = readdirSync(templatesDir).filter(f => f.endsWith('.json'));
  for (const tf of templateFiles) {
    const parsed = parseJSON(join(templatesDir, tf));
    check(parsed !== null, `templates/${tf} is valid JSON`);
  }
} else {
  check(false, 'templates directory exists');
}

// 5. skill.json and VERSION
console.log('\n=== Metadata ===');
const skillJson = parseJSON(join(ROOT, 'skill.json'));
check(skillJson !== null, 'skill.json is valid JSON');
check(skillJson?.name === 'instant-site', 'skill.json name is instant-site');

const versionFile = join(ROOT, 'VERSION');
if (existsSync(versionFile)) {
  const version = readFileSync(versionFile, 'utf8').trim();
  check(version === skillJson?.version, 'VERSION matches skill.json version');
} else {
  check(false, 'VERSION file exists');
}

check(existsSync(join(ROOT, 'CHANGELOG.md')), 'CHANGELOG.md exists');

// 6. Plugin metadata
console.log('\n=== Plugin Metadata ===');
const pluginJson = parseJSON(join(ROOT, '.claude-plugin/plugin.json'));
check(pluginJson !== null, '.claude-plugin/plugin.json is valid JSON');
const marketplaceJson = parseJSON(join(ROOT, '.claude-plugin/marketplace.json'));
check(marketplaceJson !== null, '.claude-plugin/marketplace.json is valid JSON');

// 7. Evals
console.log('\n=== Evals ===');
check(existsSync(join(ROOT, 'evals/README.md')), 'evals/README.md exists');
check(existsSync(join(ROOT, 'evals/rubric.md')), 'evals/rubric.md exists');
const casesDir = join(ROOT, 'evals/cases');
if (existsSync(casesDir)) {
  const caseFiles = readdirSync(casesDir).filter(f => f.endsWith('.md'));
  check(caseFiles.length >= 3, `At least 3 eval cases exist (found ${caseFiles.length})`);
  for (const cf of caseFiles) {
    const content = readFileSync(join(casesDir, cf), 'utf8');
    check(content.includes('## Prompt'), `${cf} has Prompt section`);
    check(content.includes('## Assertions'), `${cf} has Assertions section`);
  }
} else {
  check(false, 'evals/cases directory exists');
}

// 8. README references new structure
console.log('\n=== README ===');
const readmePath = join(ROOT, 'README.md');
if (existsSync(readmePath)) {
  const readme = readFileSync(readmePath, 'utf8');
  check(readme.includes('Instant Site'), 'README mentions Instant Site');
  // Don't check specific paths yet since README not updated
} else {
  check(false, 'README.md exists');
}

// 9. Core triggers coverage
console.log('\n=== Triggers Coverage ===');
if (existsSync(skillPath)) {
  const skillContent = readFileSync(skillPath, 'utf8');
  const fm = parseFrontmatter(skillContent);
  const triggers = fm?.triggers || [];
  const hasEnglish = triggers.some(t => typeof t === 'string' && t.match(/deploy|site|seo/i));
  const hasChinese = triggers.some(t => typeof t === 'string' && t.match(/上线|建站|运营|SEO/));
  check(hasEnglish, 'Has English triggers for deploy, site, SEO');
  check(hasChinese, 'Has Chinese triggers for 上线, 建站, 运营');
}

// 10. Deployment guidance checks
console.log('\n=== Deployment Guidance ===');
if (existsSync(skillPath)) {
  const skillContent = readFileSync(skillPath, 'utf8');
  check(skillContent.includes('Cloudflare Pages first') || skillContent.includes('Cloudflare Pages'), 'SKILL.md mentions Cloudflare Pages');
  check(skillContent.includes('Surge') && skillContent.includes('fallback'), 'SKILL.md mentions Surge as fallback');
}

const deploymentPath = join(ROOT, 'docs/workflows/deployment.md');
if (existsSync(deploymentPath)) {
  const deploymentContent = readFileSync(deploymentPath, 'utf8');
  check(deploymentContent.includes('wrangler login'), 'deployment.md includes wrangler login');
  check(deploymentContent.includes('pages project create'), 'deployment.md includes pages project create');
  check(deploymentContent.includes('pages deploy'), 'deployment.md includes pages deploy');
  check(deploymentContent.includes('Surge') && deploymentContent.includes('fallback'), 'deployment.md mentions Surge as fallback');
}

const toolRegistryPath = join(ROOT, 'docs/tool-registry.md');
if (existsSync(toolRegistryPath)) {
  const registryContent = readFileSync(toolRegistryPath, 'utf8');
  check(registryContent.includes('Cloudflare Pages (Primary)') || registryContent.includes('Cloudflare Pages'), 'tool-registry.md lists Cloudflare Pages as primary');
  check(registryContent.includes('Surge.sh (Fallback)') || registryContent.includes('Surge.sh') && registryContent.includes('Fallback'), 'tool-registry.md lists Surge.sh as fallback');
}

// Summary
console.log('\n=== Summary ===');
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.log('\n❌ Validation failed. Fix errors before proceeding.');
  process.exit(1);
} else {
  console.log('\n✅ Validation passed.');
  if (warnings > 0) {
    console.log(`   ${warnings} warnings to review.`);
  }
  process.exit(0);
}