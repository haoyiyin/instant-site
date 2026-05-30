# Deployment Workflow

Deploy and verify static sites to Cloudflare Pages by default using a Cloudflare API Token, with Surge.sh fallback.

## When to use

Use this workflow when:
- Deploying a new site for the first time
- Redeploying after content or design changes
- Setting up a custom domain
- Verifying site health after deployment

## Required inputs

Before deployment:
- `site.config.json` with deployment configuration
- `DESIGN.md` exists
- All HTML files generated
- `robots.txt` and `sitemap.xml` ready
- Cloudflare Pages project name (lowercase, URL-safe)
- Canonical URLs use the target domain
- OG and Twitter image URLs are absolute
- Optional `_headers` file for CSP/HSTS/custom caching
- Optional `_redirects` file for redirect rules
- Cloudflare account created and email verified
- Cloudflare API Token provided only for the current deployment session
- Token has minimal Pages permissions
- Token must not be stored in project files or deployment records

## Steps

### 1. Pre-deploy checks

Run `templates/deployment-checklist.md` before deploy section:
- `index.html` exists
- `DESIGN.md` exists and matches selected template
- `robots.txt` references deployed sitemap URL
- `sitemap.xml` includes all important pages
- Canonical URLs use deployment domain
- OG and Twitter image URLs are absolute
- No unresolved placeholders in files meant for publish
- `_headers` reviewed if present (CSP, HSTS, cache rules)
- `_redirects` reviewed if present
- Project name is lowercase, URL-safe, stable
- Custom domain DNS configured (if applicable)

### 2. Cloudflare Token Authorization

Check authentication status with the user-provided token:
```bash
CLOUDFLARE_API_TOKEN=<token> npx wrangler whoami
```

**Important security rules:**
- Do not run `npx wrangler whoami` without the token as the primary check — this may misuse existing local OAuth state
- Do not echo the token back in chat
- Do not store the token in state files, deployment records, logs, README, or any project files
- Never store commands containing `CLOUDFLARE_API_TOKEN=...` in deployment records
- If `whoami` fails, stop deployment — do not continue to project creation or deploy
- The token is used only for the current deployment session

**Guidance for non-technical users (Chinese):**

当用户需要提供 Cloudflare API Token 时，可直接发送以下指引：

```
为了把网站发布到 Cloudflare Pages，我需要你提供一个临时使用的 Cloudflare API Token。
这个 Token 相当于一把钥匙，请不要发给无关人员。部署完成后，你可以在 Cloudflare 后台删除它。

请按下面步骤操作：

1. 打开 https://dash.cloudflare.com/sign-up 注册 Cloudflare 账号（如果还没有）。
2. 使用邮箱注册并完成邮箱验证。
3. 登录 Cloudflare Dashboard。
4. 点击右上角头像，进入 My Profile（我的个人资料）。
5. 点击 API Tokens。
6. 点击 Create Token。
7. 选择 Create a Custom Token（创建自定义令牌）。
8. Token 名称填写：Instant Site Pages Deploy（或任意你喜欢的名称）。
9. 在模板区域找到并选择：**Edit Cloudflare Workers**（这个模板包含了部署 Pages 所需的权限）。
10. Account Resources 选择 Include / All accounts（或选择你的具体账号）。
11. 其他选项保持默认。
12. 点击 Continue to summary。
13. 点击 Create Token。
14. Cloudflare 只会显示一次 Token，请立即复制完整 Token 发给我。

安全提醒：
- 不要截图公开这个 Token。
- 不要把 Token 保存到网站项目文件里。
- 部署成功后，如果你担心安全，可以回到 API Tokens 页面删除这个 Token。
- 删除 Token 不会删除已经上线的网站，只是以后重新部署时需要重新创建 Token。
```

**Token submission prompt:**

当用户准备提交 Token 时：

```
请把刚刚复制的 Cloudflare API Token 粘贴给我。
我只会在当前部署命令中临时使用它，不会保存到项目文件、状态文件或部署记录。
```

**Do not request broad permissions:**
- Default token uses the **Edit Cloudflare Workers** template (sufficient for Pages deployment)
- Do not request Zone:Edit, DNS:Edit, or full account admin unless a specific custom-domain automation step requires it and the user explicitly approves
- Custom domains can still be configured manually in Cloudflare Dashboard without DNS-edit token permissions

### 3. Create or Reuse Pages Project

Check existing projects:
```bash
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages project list
```

Create new project if needed:
```bash
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages project create <project-name> --production-branch main
```

**Rules:**
- Project name must be lowercase, URL-safe
- If project exists, reuse it — do not delete/recreate
- Production branch typically `main`

### 4. Deploy to Cloudflare Pages

Deploy the static site directory:
```bash
cd ./customer-site
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages deploy . --project-name <project-name> --branch main
```

Capture the deployment URL from Wrangler output:
- Default: `https://<project-name>.pages.dev`
- Branch preview: `https://<branch>--<project-name>.pages.dev`

### 5. Custom Domain (Optional)

Custom domain setup may require Cloudflare dashboard:
- Wrangler deploys to `.pages.dev` automatically
- Custom domain activation often needs DNS confirmation in Cloudflare dashboard
- Mark custom domain as `pending` until HTTPS and DNS verification pass

DNS configuration:
- CNAME to `<project-name>.pages.dev` or Cloudflare-provided target
- Verify HTTPS works before marking domain as active

### 6. Post-deploy verification

Run network checks:
```bash
curl -I https://<project-name>.pages.dev/
curl https://<project-name>.pages.dev/robots.txt
curl https://<project-name>.pages.dev/sitemap.xml
curl -s https://<project-name>.pages.dev/ | grep -E '<title>|<meta name="description"|og:title|canonical'
```

Optional header verification (if `_headers` present):
```bash
curl -I https://<project-name>.pages.dev/ | grep -Ei 'content-security-policy|strict-transport-security|x-content-type-options|cache-control'
```

Verification passes when:
- Homepage returns 2xx or expected 3xx
- HTTPS available
- `robots.txt` reachable
- `sitemap.xml` reachable
- Homepage contains title, description, canonical, OG tags
- Security headers present if `_headers` configured

### 7. Update state files

After successful deployment:
- Update `.instant-site/deployments.json` with timestamp, provider, project, domain, sanitized command, status, verification results
- Update `.instant-site/state.json` with current domain and last deployment info
- **Important:** Deployment records must store sanitized commands only — omit `CLOUDFLARE_API_TOKEN=...` from the recorded command

### 8. Visual QA (manual)

Run `templates/deployment-checklist.md` visual production QA section:
- Hero correct at 1024px, 375px, 1440px
- Desktop nav on one line, height ≤80px
- CTA labels don't wrap
- Dark mode consistent (if included)
- Reduced-motion respected
- No text-only or placeholder hero shipped
- OG image matches page
- Images have reserved dimensions
- LCP risk low

## Output files

After deployment:
- `.instant-site/state.json` — updated with deployment info
- `.instant-site/deployments.json` — appended with deployment record

## Review gates

Human approval required for:
- First launch
- Custom domain changes
- Major page structure changes

Low-risk redeployments can be automated when policy allows:
- Content updates to already-approved pages
- Minor metadata changes
- Sitemap refresh

## Surge.sh Fallback

Use Surge.sh only when:
- User cannot register or log into Cloudflare
- User cannot create or submit an API Token
- Token permissions are insufficient and user declines to adjust
- Cloudflare Pages project creation or deployment fails repeatedly
- User explicitly requests Surge for quick temporary publishing

Before switching to Surge:
- Confirm Cloudflare account/token setup has been attempted
- Confirm user understands Cloudflare Token limitations and agrees to fallback

Fallback commands:
```bash
npm install -g surge
cd ./customer-site
surge . <domain>.surge.sh
```

Custom domain:
```bash
surge . --domain www.example.com
```

**Surge limitations:**
- First use prompts for email/password, stores in `~/.netrc`
- Temporary 504 can occur after CLI success (wait 10-30 min)
- No custom headers support
- Cannot use `_headers` or `_redirects`

## Netlify Drop (Emergency Only)

Use only for emergency demos when both Cloudflare and Surge fail:
```bash
npx netlify-cli deploy --prod --dir=./customer-site
```

## Deployment Record Shape

```json
{
  "timestamp": "2026-05-29T00:00:00Z",
  "provider": "cloudflare_pages",
  "projectName": "acme-tools",
  "domain": "acme-tools.pages.dev",
  "customDomain": "www.acmetools.com",
  "customDomainStatus": "pending",
  "command": "npx wrangler pages deploy . --project-name acme-tools --branch main",
  "status": "success",
  "verification": {
    "homepage": "pass",
    "robots": "pass",
    "sitemap": "pass",
    "metadata": "pass",
    "headers": "pass"
  },
  "notes": []
}
```

For Surge fallback:
```json
{
  "timestamp": "2026-05-29T00:00:00Z",
  "provider": "surge",
  "domain": "acme-tools.surge.sh",
  "command": "surge . acme-tools.surge.sh",
  "status": "success",
  "verification": {
    "homepage": "pass",
    "robots": "pass",
    "sitemap": "pass",
    "metadata": "pass"
  },
  "notes": ["fallback used: Cloudflare account/token setup unavailable"]
}
```

**Important:** Never include Cloudflare API Tokens, OAuth callback URLs, authorization codes, or other secrets in deployment records. The notes field should only describe the reason for fallback, not any sensitive credentials. Commands must be sanitized — omit any `CLOUDFLARE_API_TOKEN=...` assignments.

## Common mistakes

- Running `wrangler pages deploy` before token authorization
- Running `wrangler pages project create` or `pages deploy` before `CLOUDFLARE_API_TOKEN=<token> wrangler whoami` succeeds
- Forgetting project creation step
- Using different project name from `site.config.json`
- Leaving canonical URLs on old domain after Cloudflare deploy
- Assuming custom domain is active before DNS verifies
- Treating Surge as default instead of fallback
- Forgetting to verify `_headers` when security headers configured
- Deploying with unresolved placeholders
- OG image URLs not absolute
- Missing `thanks.html` for FormSubmit `_next`
- Recording commands with `CLOUDFLARE_API_TOKEN=...` in deployment records or state files
- Requesting broad token permissions (Zone:Edit, DNS:Edit, full admin) when minimal Pages permissions suffice
- Retrying deployment while auth is still incomplete
- Asking users for OAuth callback URL or manual callback paste (token auth is simpler)

## Troubleshooting

- `wrangler whoami` fails with token:
  - Check token was copied completely (no truncation)
  - Check token has not been revoked or expired in Cloudflare Dashboard
  - Check token uses the **Edit Cloudflare Workers** template (or equivalent permissions)
  - Check Account Resources was set correctly when creating token
- `Invalid API Token` error:
  - Recreate the token in Cloudflare Dashboard
- `Missing permissions` error:
  - Add minimal required permissions based on Wrangler error message
  - Do not default to full admin permissions
- `pages project create` fails:
  - Check project name is lowercase and URL-safe
  - Check Cloudflare account has Pages available
- `pages deploy` succeeds but URL unavailable:
  - Wait a few minutes for global propagation
  - Retry curl checks
- User concerned about security:
  - Remind user they can delete token after deployment succeeds
  - Deleting token does not affect deployed site
- Token visible in shell history:
  - Remind user to clear shell history if concerned, or use a different terminal session
  - Skill cannot control shell history, but commits to not writing token to project files