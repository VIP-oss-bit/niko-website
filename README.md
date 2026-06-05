# Alterations by Nicole — Astro site

A 1-page static site for [Alterations by Nicole](https://alterationsbynicole.co.uk), a Bristol-based tailoring and alterations studio.

## Stack

- **Astro** 5.x — static site generator
- **Fraunces** + **Inter** + **JetBrains Mono** — Google Fonts
- No JavaScript framework, no Tailwind — plain CSS in scoped Astro components

## Run locally

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:4321

## Build for production

```bash
npm run build
```

Output goes to `dist/`. That's what Cloudflare Pages deploys.

## Deploy on Cloudflare Pages

When connecting the repo to Cloudflare Pages:

| Setting | Value |
|---------|-------|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(empty)* |

Cloudflare runs `npm install && npm run build` on every push to `main` and serves the resulting `dist/` folder.

## Project structure

```
.
├── astro.config.mjs        # Astro config
├── package.json
├── public/                 # Static assets (favicon, og-image, robots.txt)
│   ├── favicon.png         # 512x512 — add yours
│   └── og-image.png        # 1200x630 — add yours
└── src/
    ├── layouts/
    │   └── Layout.astro    # <html>, <head>, fonts, global styles
    └── pages/
        └── index.astro     # The homepage — all sections
```

## Edit content

- **Brand voice, headline, copy, services list, about Nicole, contact details** → `src/pages/index.astro`
- **Page title, meta description, social share image** → top of `src/pages/index.astro` (Astro frontmatter)
- **Colors, typography, layout system** → `src/layouts/Layout.astro` (global `<style>` block)

## Add favicon and og image

Drop a 512×512 PNG as `public/favicon.png` and a 1200×630 PNG as `public/og-image.png`. They'll be served at the root of the site automatically.
