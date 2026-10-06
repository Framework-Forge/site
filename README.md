# Forgebox UI Kit

React/Vite showcase for the Forgebox UI Kit: HUD, NUI components, forms, dialogs, context menus, dashboard widgets and brand assets.

## Development

```bash
npm install
npm run dev
```

## Build the Site

```bash
npm run build
```

The static site is generated in `dist/`.

## Publish

### GitHub Pages

This repo includes `.github/workflows/deploy.yml`. Push to `main` or `master`, then enable GitHub Pages with source **GitHub Actions** in the repository settings.

### Vercel or Netlify

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

The Vite config uses `base: './'`, so the built site works both at a domain root and inside a GitHub Pages project path.