# Paylo – Fintech Landing Page

A responsive landing page for a smart money app, built with **React 18, Vite and Tailwind CSS**.

Sections: sticky navbar with mobile menu, hero with a phone app mockup, trusted-by logos, features grid, how it works, stats band, pricing with a monthly/yearly toggle, reviews, FAQ accordion, call-to-action and footer.

## Live demo

https://hasnain-ijaz.github.io/paylo-landing/

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

The production files go to `dist/`. `vite.config.js` uses `base: './'`, so the build works on GitHub Pages with any repo name.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main` (Settings → Pages → Source: GitHub Actions).

## Edit the content

All text (features, plans, reviews, FAQ) lives in `src/data.js`. Colors and fonts are in `tailwind.config.js`.

---

Paylo is a demo brand made for a portfolio. Built by Hasnain Ijaz.
