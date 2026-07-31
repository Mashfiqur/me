# Mashfiqur Rahman — Portfolio

Production-grade, JSON-driven personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, `next/font` and `next/image`. Statically exported and deployed to **GitHub Pages** via GitHub Actions on every push to `main`.

- **Live site:** https://mashfiqur.github.io/me

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Common commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server on `:3000` |
| `npm run build` | Production static build (writes to `./out/`) |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint autofix |
| `npm run typecheck` | TypeScript check |
| `npm run format` | Prettier write |

## Editing content

All portfolio content is JSON — **no component code needs to change when your résumé does.**

See [`docs/ContentManagement.md`](./docs/ContentManagement.md) for the full guide.

Quick reference:

| File | Owns |
|---|---|
| `src/content/profile.json` | Name, title, tagline, location, availability |
| `src/content/hero.json` | Hero headline, CTAs, quick stats |
| `src/content/about.json` | About page body, strengths, personality, interests, languages |
| `src/content/experience.json` | Career timeline (Axilweb, Shapla, Evident BD, Amin Travels & Tours) |
| `src/content/education.json` | NSU, HSC, SSC |
| `src/content/projects.json` | Projects with tech stack, tags, URLs, highlights |
| `src/content/skills.json` | Skills grouped by discipline |
| `src/content/certifications.json` | Certifications and specialised training |
| `src/content/achievements.json` | Awards and milestones |
| `src/content/testimonials.json` | Peer quotes (dummy — replace with real ones) |
| `src/content/publications.json` | Publications / talks (dummy — replace) |
| `src/content/references.json` | Professional references |
| `src/content/contact.json` | Contact channels, availability, response time |
| `src/content/social.json` | Social links |
| `src/content/navigation.json` | Header + footer nav items |
| `src/content/seo.json` | Site title, description, OG image, canonical URL |
| `src/content/github-stats.json` | Optional GitHub section toggles |

## Updating the résumé PDF

Replace `public/Mashfiqur_Rahman.pdf` **with the same filename** — every download link on the site points there.

## Updating the profile photo

Replace `public/profile.jpg` **with the same filename**.

## Deployment

Push to `main` and GitHub Actions builds + deploys automatically to GitHub Pages.

- Repo name assumed: `me` (URL: `https://mashfiqur.github.io/me`)
- `basePath` is controlled by `NEXT_PUBLIC_BASE_PATH` in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
- To switch to a custom domain / dedicated machine, see [`docs/Deployment.md`](./docs/Deployment.md)

## Documentation

- [`docs/Architecture.md`](./docs/Architecture.md) — layers, boundaries, data flow
- [`docs/FolderStructure.md`](./docs/FolderStructure.md) — directory-by-directory purpose
- [`docs/ContentManagement.md`](./docs/ContentManagement.md) — JSON schemas + how to edit content
- [`docs/Deployment.md`](./docs/Deployment.md) — GitHub Pages, basePath, custom domain, migration path
- [`docs/Theme.md`](./docs/Theme.md) — light/dark/system theming and design tokens
- [`docs/Performance.md`](./docs/Performance.md) — Web Vitals strategy and budgets

## Tech stack

- **Framework:** Next.js 15 (App Router, RSC, static export)
- **Language:** TypeScript (strict, `noUncheckedIndexedAccess`)
- **Styling:** Tailwind CSS 3 + CSS custom properties for theming
- **Fonts:** `next/font` (Inter + JetBrains Mono, self-hosted)
- **Icons:** Lucide
- **Theming:** `next-themes` (light / dark / system, no hydration flash)
- **Motion:** Framer Motion (opt-in, respects `prefers-reduced-motion`)
- **Quality:** ESLint (next + typescript), Prettier, Husky + lint-staged
- **Hosting:** GitHub Pages via GitHub Actions

## Repository files

- [`Mashfiqur_Rahman.pdf`](./Mashfiqur_Rahman.pdf) — original source résumé (kept for reference; the copy served to visitors lives in [`public/Mashfiqur_Rahman.pdf`](./public/Mashfiqur_Rahman.pdf))
- [`WhatsApp Image 2026-07-30 at 4.56.58 PM.jpeg`](./WhatsApp%20Image%202026-07-30%20at%204.56.58%20PM.jpeg) — original source portrait (the resized copy served to visitors lives in [`public/profile.jpg`](./public/profile.jpg))

## License

Personal portfolio — content © MD Mashfiqur Rahman. Code is MIT-licensed for reference.
