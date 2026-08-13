# Siddhartha — Portfolio

Personal portfolio site for Siddhartha Yadav, a full-stack developer. A single-page React app with an interactive hero, experience timeline, capabilities grid, and selected project work.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server and production build
- **Tailwind CSS** — styling and design tokens
- **Framer Motion** — scroll reveals and micro-interactions
- **Lucide React** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
├── public/          Static assets (resume, favicon, project images)
├── src/
│   ├── App.tsx      Main page — sections, content, and layout
│   ├── main.tsx     React entry point
│   ├── index.css    Global styles and Tailwind utilities
│   ├── components/  UI components (Button)
│   └── lib/         Shared helpers
├── index.html       HTML shell and SEO meta tags
└── tailwind.config.js
```

## Editing content

All page content lives in [`src/App.tsx`](src/App.tsx) as static data arrays:

- `experience` — work history
- `capabilities` — skills grid
- `projects` — selected work cards
- `buildOptions` — interactive hero widget options

Update those arrays and section copy directly in `App.tsx`. Static assets (resume PDF, project screenshots) go in `public/`.

## Deployment

Build the site with `npm run build`. The output is written to `dist/`, which can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, etc.).
