# Performance

Targets: Lighthouse **100 / 100 / 100 / 100**. Excellent Core Web Vitals across all pages.

## What's already done

### Bundle & rendering

- **`output: 'export'`** — every route pre-renders to static HTML. Zero server runtime.
- **Server Components by default.** Only three files carry `'use client'`: `theme-provider.tsx`, `theme-toggle.tsx`, `header.tsx` (interactive nav). Everything else ships zero JS beyond the shared framework runtime.
- **`optimizePackageImports`** — `lucide-react` and `framer-motion` are tree-shaken by import path, so only the icons you register in [`icon.tsx`](../src/components/ui/icon.tsx) ship.
- **First Load JS: ~106 kB shared, 5 kB home page** — well within the 200 kB budget.

### Fonts

- `next/font` self-hosts Inter and JetBrains Mono.
- `display: swap` + preload — no FOIT, minimal CLS.
- Variable font subsets (Latin only).

### Images

- `next/image` on the hero portrait with `priority`, `fill` + `sizes` for correct responsive srcset.
- OG image is an SVG (tiny, sharp at any size).
- Favicons are SVG (`icon.svg`, `apple-icon.svg`) generated per-request from the Next Metadata API.
- `images.unoptimized: true` — required by GH Pages export; the source images are pre-sized.

### CSS

- Tailwind purge scans `src/**/*.{ts,tsx,mdx}` — production CSS is only what's used.
- Tokens are CSS custom properties → theme swap is a class toggle, not a re-render.

### Motion

- `framer-motion` used sparingly; `prefers-reduced-motion` collapses animations globally.

## Web Vitals strategy

| Metric | Target | How we hit it |
|---|---|---|
| **LCP** | < 2.5 s | Hero image is preloaded (`priority`), fonts preload, static HTML ships without JS |
| **CLS** | < 0.1 | `next/font` with `swap`, images have explicit dimensions via `fill` + `sizes`, no dynamically-injected banners |
| **INP** | < 200 ms | Almost no JS on non-interactive routes; mobile menu is a plain class toggle |
| **FCP** | < 1.8 s | Static HTML, small critical CSS, no blocking requests |
| **TBT** | < 200 ms | Shared JS < 106 kB, code-split per route, tree-shaken icons |

## Verifying locally

```bash
npm run build
npx serve out
# open http://localhost:3000 → run Lighthouse in Chrome DevTools
```

Or:

```bash
npm run build
npx @lhci/cli autorun --collect.staticDistDir=out
```

## Budget

| Category | Budget |
|---|---|
| First Load JS (shared) | 120 kB |
| Any single route JS | +10 kB over shared |
| Hero image | < 200 kB (JPEG) |
| Fonts (total) | < 100 kB (2 families, Latin, `swap`) |

Regressions blow past a budget → tighten before merging.

## Common regression traps

- **Adding a chart library** — most are 100–300 kB. If you need one, dynamically import it and gate behind interaction.
- **Adding a new icon** — cheap because of `optimizePackageImports`, as long as you go through the [`Icon`](../src/components/ui/icon.tsx) registry.
- **Client Components creeping in** — every `'use client'` moves work to the browser. Ask if the component actually needs interactivity or if a Server Component would do.
- **Large hero image** — if you replace `public/profile.jpg`, keep it under 300 kB (resize + strip metadata).

## Caching

GitHub Pages sets sensible caching headers for hashed asset paths (Next's `/_next/static/*` includes content hashes). HTML is served with short cache — that's correct for a portfolio that updates on push.
