# Deployment

The portfolio ships as a **static export** — plain HTML/CSS/JS in `./out/` — and deploys to **GitHub Pages** via [GitHub Actions](../.github/workflows/deploy.yml).

## First-time setup (one time only)

1. **Push this repo to GitHub.** Assumed repo name: `me` (so the site is served at `https://<user>.github.io/me`).
2. **Enable GitHub Pages** for the repo:
   - GitHub → repo → **Settings → Pages**
   - **Source:** `GitHub Actions`
3. Push to `main`. The workflow runs and deploys automatically.
4. Watch the run under **Actions** → **Deploy to GitHub Pages**. First build takes ~2–3 minutes.

## How the workflow works

[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)

1. Checks out the repo
2. Sets up Node 20 with npm cache
3. Configures Pages (auto-detects the base URL)
4. `npm ci` → `npm run lint` → `npm run typecheck` → `npm run build`
5. Touches `out/.nojekyll` so GitHub Pages serves `_next/*` correctly
6. Uploads `out/` as a Pages artifact
7. Deploys the artifact

## The `basePath` gotcha

GitHub Pages serves project pages under `/repo-name`. Next needs to know this at build time so assets and links are prefixed correctly.

The workflow sets:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /me
```

[`next.config.ts`](../next.config.ts) reads it and applies `basePath` and `assetPrefix` **only in production builds** — so `npm run dev` stays at `/` while the deployed site correctly serves from `/me/`.

**If you rename the repo, update this one value.**

## Renaming the repo

1. Rename on GitHub.
2. Edit `NEXT_PUBLIC_BASE_PATH` in [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).
3. Update `siteUrl` in [`src/content/seo.json`](../src/content/seo.json).
4. Push. New URL is live after the next deploy.

## Custom domain

1. Add a `CNAME` file to `public/` containing your domain (e.g. `mashfiqur.dev`).
2. Configure DNS as [GitHub Pages docs describe](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Since a custom domain serves from `/`, **remove the base path**: set `NEXT_PUBLIC_BASE_PATH: ""` in the workflow.
4. Update `siteUrl` in `seo.json` to your custom domain.

## Migrating to a dedicated machine

The static export runs anywhere. Options in ~ascending complexity:

### Option A — any static host (Netlify, Cloudflare Pages, S3+CloudFront, VPS+NGINX)

- Run `npm run build` (with `NEXT_PUBLIC_BASE_PATH=""`)
- Upload `out/` — done.

### Option B — full Next.js (SSR / ISR) on a VPS

- Remove `output: 'export'` from `next.config.ts`
- Unset `basePath` and `assetPrefix` (or point them at your domain layout)
- `npm run build && npm run start` behind NGINX / Caddy, or run it in Docker
- The content layer keeps working unchanged — loaders read JSON regardless of rendering mode

### Option C — Vercel

- Same as Option B, but Vercel handles the runtime. Point Vercel at the repo; it detects Next.js automatically.

## Local production preview

```bash
npm run build
npx serve out            # or any static server
```

The site at `http://localhost:3000` uses no base path (dev config).

## Troubleshooting

**404s on assets / broken images after deploy** — almost always a `basePath` mismatch. Confirm `NEXT_PUBLIC_BASE_PATH` in the workflow matches the repo name.

**Pages workflow succeeds but the site doesn't update** — check **Settings → Pages** shows "Source: GitHub Actions" (not "Deploy from a branch").

**`_next/*` returns 404** — `out/.nojekyll` is missing. The workflow creates it, but if you deploy by hand, `touch out/.nojekyll` before uploading.
