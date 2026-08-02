# NS Barber Shop — Landing Page

Luxury landing page for **NS Barber Shop** — *Estilo Maestro. Pura Distinción.*

A single-page site built with plain HTML, CSS, and vanilla JavaScript. It features a
black & metallic-gold aesthetic, a bilingual (ES/EN) interface, and dynamic WhatsApp
booking for every service.

## Features

- 🔥 Urgency (FOMO) banner to drive same-day bookings
- 🖤 Black (`#0A0A0B`) + metallic gold (`#D4AF37`) luxury theme
- 🌐 ES/EN language toggle (swaps `data-es` / `data-en` text on the fly)
- 💈 Services grid: Corte Adulto, Corte Niños y Jóvenes, Perfilado de Cejas Damas
  (destacado), Corte y Barba
- 📸 Gallery grid + branding card with schedule and phone
- 💬 Dynamic WhatsApp CTA — every "Reservar" button opens a pre-filled chat to
  **+506 8715-4471**
- 📱 Fully responsive (gallery, service cards, and logo/schedule adapt to mobile)

## Project structure

```
ns-barbershop-landing/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── IMG_4350.jpg
│       ├── IMG_4351.jpg
│       ├── IMG_4352.jpg
│       └── IMG_4354.jpg
└── README.md
```

> **Images:** drop `IMG_4350.jpg`, `IMG_4351.jpg`, `IMG_4352.jpg`, and `IMG_4354.jpg`
> into `assets/images/`. The layout references these filenames directly.

## Tech

- HTML5 + semantic sections
- CSS custom properties, CSS Grid, responsive media queries
- Vanilla JavaScript (no build step, no dependencies)
- Fonts: **Cinzel** (display) + **Plus Jakarta Sans** (body) via Google Fonts CDN

## Run locally

No build step required. Either open `index.html` directly in a browser, or serve it:

```bash
# Python
python -m http.server 3000

# or Node
npx serve .
```

Then visit <http://localhost:3000>.

## Deploy with Vercel CLI

1. **Install the CLI** (once):

   ```bash
   npm i -g vercel
   ```

2. **Log in:**

   ```bash
   vercel login
   ```

3. **Deploy a preview** from the project root:

   ```bash
   vercel
   ```

   Accept the prompts (scope, link/create project, root directory `./`). Vercel
   auto-detects this as a static site — no framework or build command needed.

4. **Promote to production:**

   ```bash
   vercel --prod
   ```

The CLI prints the live URL when the deployment finishes.

---

© 2026 NS Barber Shop. Cortes Modernos y Clásicos.
