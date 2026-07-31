# Content Management

Every fact on this site — your headline, your job history, the projects you've shipped, the tech you use — lives in **JSON files under `src/content/`**. Editing your résumé is editing JSON. No component code changes required.

## How it works

```
src/content/*.json     ← you edit these
       │
       ▼
src/types/content.ts   ← TypeScript enforces the shape
       │
       ▼
src/lib/content/*.ts   ← typed loaders (getHero(), getProjects(), …)
       │
       ▼
src/app/**/page.tsx    ← reads via loader, passes to components
```

Everything is loaded at **build time**. Change a JSON file → `npm run dev` hot-reloads → `npm run build` bakes it into static HTML.

## Files & schemas

Each file below shows the required shape. Full canonical types are in [`src/types/content.ts`](../src/types/content.ts).

### `profile.json`

```jsonc
{
  "fullName": "MD Mashfiqur Rahman",
  "displayName": "Mashfiqur Rahman",
  "title": "Software Engineer",
  "tagline": "Full-stack engineer …",
  "location": "Dhaka, Bangladesh",
  "yearsOfExperience": 5,
  "availability": "Open to opportunities",
  "avatar": "/profile.jpg",
  "resumeUrl": "/Mashfiqur_Rahman.pdf"
}
```

### `hero.json`

```jsonc
{
  "greeting": "Hello, I'm …",
  "headline": "…",
  "subheadline": "…",
  "primaryCta":   { "label": "View my work", "href": "/projects" },
  "secondaryCta": { "label": "Get in touch", "href": "/contact" },
  "stats":     [ { "label": "…", "value": "…" } ],
  "highlights": [ "…" ]
}
```

### `about.json`

Body copy + strengths + personality + interests + languages.

### `experience.json`

Array of jobs, newest first. Each entry:

```jsonc
{
  "id": "axilweb",
  "company": "Axilweb Ltd.",
  "position": "Software Engineer",
  "location": "Dhaka, Bangladesh",
  "employmentType": "Full-time",
  "startDate": "2022-10-01",
  "endDate": null,        // null = current
  "current": true,
  "companyDescription": "…",
  "summary": "…",
  "responsibilities": [ "…" ],
  "achievements":     [ "…" ],
  "technologies":     [ "Laravel", "Vue.js", … ]
}
```

### `education.json`

Array. Each entry: `institution`, `degree`, `field`, `startYear`, `endYear`, `score`, `scoreScale`, optional `distinction`, optional `department`.

### `projects.json`

Array. Each entry:

```jsonc
{
  "id": "shapla",
  "name": "Shapla",
  "slug": "shapla",
  "summary": "…",
  "description": "…",
  "role": "Software Engineer",
  "year": "2022",
  "status": "live",       // "live" | "archived" | "in-development"
  "featured": true,       // shown on the Home page
  "thumbnail": "/projects/shapla.svg",
  "url": "https://www.shapla.io",
  "technologies": [ "…" ],
  "tags":         [ "…" ],
  "highlights":   [ "…" ]
}
```

### `skills.json`

Array of skill groups (`Backend`, `Frontend`, `Database`, `DevOps`, `Desktop`, `Tools`). Each group has an `icon` (Lucide icon name) and a `skills` array. Each skill has `name` and optional `level` (`expert` / `advanced` / `proficient` / `familiar`) — the level drives its badge styling.

### `certifications.json`

Array of certifications with `name`, `issuer`, `issueDate` (ISO), optional `expiryDate`, optional `credentialUrl`, and `skills` array.

### `achievements.json`

Array with `title`, `organization`, `date`, `description`, `category`.

### `testimonials.json`

Array with `quote`, `author`, `role`, `company`, `relationship`. **Current entries are placeholders — replace with real quotes when you have them.**

### `publications.json`

Array with `title`, `venue`, `date`, `summary`, optional `url`. **Currently a placeholder.**

### `references.json`

Array with `name`, `title`, `organization`, `email`, optional `phone`. Rendered on the Education page.

### `social.json`

Array with `platform`, `label`, `url`, `handle`, `icon` (Lucide icon name).

### `contact.json`

Contact page copy + `channels` array (each with `type`, `label`, `value`, optional `href`, `icon`, optional `primary`).

### `navigation.json`

Two arrays: `primary` (header nav) and `footer` (footer nav). Each item: `id`, `label`, `href`.

### `seo.json`

Site-level SEO: `siteName`, `title`, `titleTemplate` (use `%s` for the page-level title), `description`, `keywords`, `author`, `siteUrl`, `locale`, `ogImage`, `themeColor.light`, `themeColor.dark`.

### `github-stats.json`

Toggles for the GitHub-stats section on Home (`enabled`, `username`, `note`).

## Editing workflow

1. Open the relevant JSON file in `src/content/`.
2. Edit values. TypeScript will complain in your editor (via loader typing) if you break the shape.
3. `npm run dev` shows changes instantly.
4. `npm run build` proves the whole site still builds.
5. `git commit && git push origin main` — GitHub Actions ships the update.

## Icon names

`icon` fields use **Lucide icon names**, e.g. `"Rocket"`, `"Database"`, `"Github"`, `"Mail"`. The full registry is in [`src/components/ui/icon.tsx`](../src/components/ui/icon.tsx). Add a new icon by:

1. Importing it from `lucide-react` in `src/components/ui/icon.tsx`.
2. Adding it to the `REGISTRY` object.

## Adding a new content type

1. Add the interface to [`src/types/content.ts`](../src/types/content.ts).
2. Add the JSON file to `src/content/`.
3. Add a `getFoo()` loader in [`src/lib/content/index.ts`](../src/lib/content/index.ts).
4. Use it from a page.
