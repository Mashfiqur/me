# Folder Structure

```
portfolio/                            # ← Next.js application root
├── src/
│   ├── app/                          # App Router (each folder is a route)
│   │   ├── layout.tsx                # Root layout — fonts, theme, header, footer
│   │   ├── page.tsx                  # Home
│   │   ├── globals.css               # Design tokens + base + component layer
│   │   ├── icon.svg                  # Favicon
│   │   ├── apple-icon.svg            # Apple touch icon
│   │   ├── not-found.tsx             # 404
│   │   ├── sitemap.ts                # /sitemap.xml
│   │   ├── robots.ts                 # /robots.txt
│   │   ├── about/                    # /about
│   │   ├── achievements/             # /achievements
│   │   ├── certifications/           # /certifications
│   │   ├── contact/                  # /contact
│   │   ├── education/                # /education
│   │   ├── experience/               # /experience
│   │   ├── projects/                 # /projects
│   │   └── skills/                   # /skills
│   │
│   ├── components/
│   │   ├── ui/                       # Design-system primitives
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── container.tsx
│   │   │   ├── icon.tsx              # Lucide icon registry
│   │   │   ├── section-heading.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── layout/                   # Cross-page structural components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── page-header.tsx       # Sub-route page header
│   │   └── sections/                 # Page-level section blocks
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── project-card.tsx
│   │       ├── featured-projects.tsx
│   │       ├── experience-timeline.tsx
│   │       ├── skills-section.tsx
│   │       ├── achievements-section.tsx
│   │       ├── testimonials-section.tsx
│   │       ├── github-stats-section.tsx
│   │       └── contact-cta.tsx
│   │
│   ├── content/                      # ← All portfolio content (JSON)
│   │   ├── profile.json
│   │   ├── hero.json
│   │   ├── about.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── certifications.json
│   │   ├── achievements.json
│   │   ├── testimonials.json
│   │   ├── publications.json
│   │   ├── references.json
│   │   ├── social.json
│   │   ├── contact.json
│   │   ├── navigation.json
│   │   ├── seo.json
│   │   └── github-stats.json
│   │
│   ├── lib/
│   │   ├── content/index.ts          # Typed content accessors
│   │   ├── seo/metadata.ts           # buildMetadata() — Next Metadata API
│   │   ├── seo/json-ld.ts            # personJsonLd() — schema.org
│   │   └── utils/
│   │       ├── cn.ts                 # className merger (clsx + tw-merge)
│   │       └── format.ts             # date range + duration helpers
│   │
│   ├── providers/
│   │   └── theme-provider.tsx        # next-themes wrapper
│   │
│   ├── config/
│   │   └── site.ts                   # basePath, withBasePath(), theme colors
│   │
│   └── types/
│       └── content.ts                # All content interfaces
│
├── public/                           # Static assets served as-is
│   ├── profile.jpg                   # Profile photo
│   ├── Mashfiqur_Rahman.pdf          # Downloadable resume
│   ├── og-image.svg                  # Open Graph card
│   └── .nojekyll                     # Tells GitHub Pages not to run Jekyll
│
├── docs/                             # Documentation (this folder)
│   ├── Architecture.md
│   ├── ContentManagement.md
│   ├── Deployment.md
│   ├── FolderStructure.md
│   ├── Performance.md
│   └── Theme.md
│
├── next.config.ts                    # Static export + basePath + image config
├── tailwind.config.ts                # Design tokens → Tailwind theme
├── postcss.config.mjs
├── tsconfig.json                     # Strict TS + path aliases
├── eslint.config.mjs                 # Next + TS lint rules
├── .prettierrc.json
├── .editorconfig
├── package.json
└── README.md
```

The GitHub Actions workflow lives at the repository root:

```
../.github/workflows/deploy.yml       # Build + deploy to GitHub Pages on push to main
```

## Path aliases

`@/*` maps to `src/*` — configured in [`tsconfig.json`](../tsconfig.json).

Common imports:

```ts
import { Container } from '@/components/ui/container';
import { getHero, getProjects } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import type { ExperienceEntry } from '@/types/content';
```

## Conventions

- **One file per section component.** No barrel files.
- **`kebab-case` filenames**, `PascalCase` exports.
- **Server Components by default.** Add `'use client'` only where interactivity requires it (currently: `Header`, `ThemeToggle`, `ThemeProvider`).
- **No `any`.** `noUncheckedIndexedAccess` is on — array/object indexing is checked.
