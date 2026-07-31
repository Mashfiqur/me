# Architecture

## Guiding principles

- **SOLID · DRY · KISS · YAGNI.** No abstraction without a second concrete use case.
- **Content is data, not code.** Nothing hard-codes portfolio text — every screen reads typed JSON via a loader.
- **Server Components by default.** Client Components only when interactivity is required (theme toggle, mobile nav).
- **Static-first.** Every route pre-renders at build time and ships as HTML.

## Layered architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  app/                                                            │
│  Route pages (Server Components) — compose sections, define      │
│  metadata, and read from content loaders.                        │
├─────────────────────────────────────────────────────────────────┤
│  components/                                                     │
│  ├── ui/         Design-system primitives (Button, Card, Badge)  │
│  ├── layout/     Header, Footer, PageHeader                      │
│  └── sections/   Page-level section blocks (Hero, Timeline, …)   │
├─────────────────────────────────────────────────────────────────┤
│  lib/                                                            │
│  ├── content/    Typed accessors — the ONLY way to read content  │
│  ├── seo/        Metadata + JSON-LD builders                     │
│  └── utils/      cn(), formatters                                │
├─────────────────────────────────────────────────────────────────┤
│  content/        JSON source of truth for every portfolio fact   │
│  types/          TypeScript interfaces validating that content   │
└─────────────────────────────────────────────────────────────────┘
```

### Rule: components never import JSON

Components receive typed props. Pages import loaders from `@/lib/content` and pass the returned data down. This inverts the dependency — sections don't know where content comes from, so tomorrow you can swap the JSON layer for a CMS without touching any UI.

### Rule: types are the contract

Every content shape is described in [`src/types/content.ts`](../src/types/content.ts). Loaders cast the imported JSON to those types at the boundary — TypeScript enforces the shape from that point on.

## Data flow

```
content/*.json
      │
      ▼
lib/content/index.ts       ← typed accessor (getHero, getProjects, …)
      │
      ▼
app/**/page.tsx            ← Server Component reads via loader
      │
      ▼
components/sections/**     ← receive typed props, render
```

## Theming

- CSS custom properties define the token palette in [`src/app/globals.css`](../src/app/globals.css) (`:root` for light, `.dark` for dark).
- Tailwind extends the palette to reference those variables — no dual `dark:` class explosion needed.
- `next-themes` writes the `class` on `<html>` with `disableTransitionOnChange` and `enableSystem`, so system preference works and there's no hydration flash.
- All motion respects `prefers-reduced-motion` via a `@media` rule in `globals.css`.

## Static export

- `next.config.ts` sets `output: 'export'` — the build writes plain HTML/CSS/JS to `./out/`.
- `basePath` is env-driven (`NEXT_PUBLIC_BASE_PATH`) so dev is at `/` and CI-built artifacts are prefixed with `/me` for GitHub Pages.
- `images.unoptimized = true` because GitHub Pages has no image optimizer runtime.

## SEO

- **Metadata API** — every page builds metadata via `buildMetadata()` in [`src/lib/seo/metadata.ts`](../src/lib/seo/metadata.ts). Titles use a template (`%s · Mashfiqur Rahman`).
- **JSON-LD Person schema** — injected once in the root layout via [`src/lib/seo/json-ld.ts`](../src/lib/seo/json-ld.ts), sourced from `profile.json`, `experience.json`, `education.json`, `social.json`.
- **`sitemap.ts` + `robots.ts`** — generated statically from the navigation manifest.
- **Open Graph image** — SVG at `public/og-image.svg`, referenced through the `withBasePath` helper.

## Accessibility

- Skip-link, keyboard-navigable menu, `aria-current` on active nav items, `aria-expanded` / `aria-controls` on the mobile toggle, role `radiogroup`/`radio` on the theme toggle.
- All icon-only buttons carry `aria-label`; all decorative icons carry `aria-hidden`.
- Focus ring is a 2 px offset ring — visible on every interactive element.

## Extending

- **Add a new section** → create it in `components/sections/`, take typed props, add its content file if needed, wire it into a page.
- **Add a new page** → create `src/app/<route>/page.tsx` + `metadata`, add a navigation entry in `content/navigation.json` — that's it.
- **Move off GitHub Pages** → drop `output: 'export'`, unset `NEXT_PUBLIC_BASE_PATH`, host anywhere that runs Next.js (or keep the static export and serve it from any CDN / VPS).
