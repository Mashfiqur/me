# Theme

Light, dark and system themes — driven by CSS custom properties, orchestrated by [`next-themes`](https://github.com/pacocoursey/next-themes), zero hydration flash.

## How it works

1. [`src/app/globals.css`](../src/app/globals.css) defines the token palette as HSL triplets on `:root` (light) and `.dark` (dark).
2. [`tailwind.config.ts`](../tailwind.config.ts) maps Tailwind color utilities to those CSS variables — so `bg-background` becomes `hsl(var(--background))` and automatically switches with the theme.
3. [`src/providers/theme-provider.tsx`](../src/providers/theme-provider.tsx) wraps the app with `next-themes`, applying `class="dark"` on `<html>` when appropriate.
4. [`src/components/ui/theme-toggle.tsx`](../src/components/ui/theme-toggle.tsx) is a three-state radio group (Light / System / Dark) in the header.

## Design tokens

| Token | Purpose |
|---|---|
| `--background` / `--foreground` | Page background + primary text |
| `--card` / `--card-foreground` | Card surface + text on cards |
| `--muted` / `--muted-foreground` | Muted surface + secondary text |
| `--accent` / `--accent-foreground` | Interactive-neutral surface + text |
| `--primary` / `--primary-foreground` | Brand accent + text on primary surfaces |
| `--border` | Divider lines, card borders |
| `--input` | Input borders |
| `--ring` | Focus ring |
| `--subtle` | Very subtle surface — used for alternating sections |
| `--radius` | Base border-radius (0.75 rem) |

Change a token in `globals.css` and it propagates everywhere — no per-component color edits.

## Changing the brand color

Edit the `--primary` / `--ring` HSL triplets in both `:root` and `.dark`:

```css
:root  { --primary: 174 62% 42%; --ring: 174 62% 42%; }
.dark  { --primary: 174 62% 48%; --ring: 174 62% 48%; }
```

Also update `themeColor` in [`src/content/seo.json`](../src/content/seo.json) so the browser chrome (address bar on mobile) matches.

## Adding a new theme (e.g. sepia)

1. Add a block like `.sepia { … }` in `globals.css`.
2. Update the `ThemeProvider` to accept the new theme (`themes={['light', 'dark', 'sepia']}`).
3. Add the option to `ThemeToggle`.

## Fonts

- **Inter** — sans (headings, body). Loaded via `next/font` in [`src/app/layout.tsx`](../src/app/layout.tsx), bound to `--font-sans`.
- **JetBrains Mono** — mono (code, technical labels). Bound to `--font-mono`.

Both are self-hosted at build time — no request to Google runtime, no CLS.

## Reduced motion

`prefers-reduced-motion` is respected globally by a media query in `globals.css` that clamps animations and transitions to ~1 ms. Add motion freely — it will disable itself for users who ask.

## No hydration flash

`next-themes` reads the stored preference **before** React hydrates, and sets `class="dark"` on `<html>` server-side (via the `suppressHydrationWarning` on `<html>`). `disableTransitionOnChange` prevents the initial CSS transition from firing during the theme swap. Result: no flash.
