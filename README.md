# Abhi Dahiya — Portfolio

An architecture-themed portfolio site: fluted columns flank the page, work
history reads as ascending floors of a building, education sits at the base
as the foundation. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Composes all sections
    ├── index.css           # Tailwind + global blueprint-grid background
    ├── data/
    │   └── profile.js      # All CV content lives here — edit freely
    └── components/
        ├── Pillars.jsx     # Fixed decorative columns down each side
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx  # "Floors" — newest role on top
        ├── Education.jsx   # "Foundation"
        ├── Contact.jsx
        └── Footer.jsx
```

## Run it locally

This machine couldn't reach npm's registry to test-install packages, so
run these steps on your own computer (with Node 18+ installed):

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a static, deployable version:

```bash
npm run build
npm run preview   # to test the production build locally
```

The output goes to `dist/` — you can drag that folder onto Netlify, or
deploy it to Vercel/GitHub Pages.

## Editing content

All text — name, contact info, summary, skills, experience, education —
lives in `src/data/profile.js`. You won't need to touch any component to
update the content.

## Notes on the design

- Colors, fonts, and spacing tokens are defined in `tailwind.config.js`
  (limestone/paper/ink/bronze/verdigris/charcoal palette, Fraunces +
  Manrope type pairing).
- Motion respects `prefers-reduced-motion` (see `src/index.css`) — anyone
  with that OS setting enabled gets an effectively static page.
- The hero column-drawing animation only plays once on load; scroll
  animations are `whileInView` with `once: true` so they don't replay
  and distract when scrolling back up.
