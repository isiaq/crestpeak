# Crestpeak Digital — Website

A React + TypeScript + Vite + Tailwind single-page site for Crestpeak Digital Limited.

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in a real [Formspree](https://formspree.io) endpoint so the
contact form actually sends messages:

```bash
cp .env.example .env
```

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

Without this set, the contact form will show a clear "not connected" error instead of pretending to
have sent the message.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Under **Settings → Environment variables**, add `VITE_FORMSPREE_ENDPOINT` with your real Formspree
   endpoint (add it for both Production and Preview environments).
5. Deploy. Cloudflare Pages auto-detects the `public/_redirects` file already in this repo, which is
   required for client-side routing (`/about`, `/services`, etc.) to work on page refresh/direct visits
   — without it, refreshing any page other than the homepage would 404.
6. Optional: add a custom domain under **Custom domains** once deployed.

## Pushing to GitHub

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

(Create the empty repository on GitHub first, without a README/.gitignore, then run the above.)

## Notes on this codebase

- `src/hooks/useDocumentMeta.ts` sets a unique `<title>` and meta description per route — since this is
  a client-rendered SPA (no server-side rendering), bots that don't execute JavaScript will still see the
  default homepage title/description from `index.html`. Search engines that do execute JS (Google) see
  the per-page values correctly. For guaranteed per-page metadata for all crawlers, this app would need
  to move to a framework with SSR/prerendering (e.g. Next.js, Astro, or `vite-plugin-ssr`).
- `src/pages/NotFound.tsx` + the catch-all route in `App.tsx` give a proper "page not found" UI for
  unmatched client-side routes. Because `public/_redirects` rewrites all paths to `index.html` with a
  `200` status (required for client-side routing to work at all), the HTTP status code for a genuinely
  missing page will still be `200`, not a real `404` — this is a standard trade-off for single-page apps
  without SSR, not a bug specific to this project.
