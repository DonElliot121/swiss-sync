# Swiss Sync

B2B-Digitalstudio – Website für **Websites · Hosting · KI-Services**.

Stil: *Swiss Tech / Präzision* (Schwarz/Weiss + Swiss-Rot, Grid-Typografie). **Dark Mode ist Standard**, umschaltbar.

## Tech-Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (Design-Tokens in `src/app/globals.css`)
- **motion** (Framer Motion) für Animationen
- **next-themes** für Dark/Light Mode

## Befehle

```bash
npm run dev      # Entwicklung → http://localhost:3000
npm run build    # Production-Build
npm run start    # Production-Server (nach build)
npm run lint     # Linting
```

## Struktur

```
src/
├─ app/
│  ├─ layout.tsx              # Root: Fonts, ThemeProvider, Nav, Footer, SEO
│  ├─ page.tsx                # Home
│  ├─ leistungen/             # Übersicht + [slug] Detailseiten
│  ├─ referenzen/ ueber-uns/ preise/ insights/ kontakt/
│  ├─ insights/[slug]/        # Blog-Detail
│  ├─ impressum/ datenschutz/ # Rechtliches
│  ├─ not-found.tsx           # 404
│  └─ api/contact/route.ts    # Kontaktformular-Endpunkt (Platzhalter)
├─ components/
│  ├─ site/                   # Nav, Footer, Logo, Karten, Formular …
│  ├─ sections/               # Hero, Testimonials
│  ├─ ui/                     # Container, Button, Reveal, SectionHeading, Marquee
│  ├─ theme-provider.tsx · theme-toggle.tsx
├─ content/                   # Loader (lesen aus /content) + Typen
│  └─ types.ts
└─ lib/                       # cn(), formatDate(), content-Loader (fs)

content/                      # ⇦ ALLE Inhalte (vom CMS verwaltet)
├─ settings/                  # site, pricing, about, process, testimonials
├─ services/ projects/ team/ posts/
public/
├─ admin/                     # Decap CMS (index.html + config.yml)
└─ uploads/                   # Bild-Uploads
```

## Inhalte pflegen

Inhalte liegen als JSON in `content/` und werden über das CMS unter **`/admin`**
bearbeitet (kein Code nötig). Details & Login-Einrichtung: siehe [docs/CMS.md](docs/CMS.md).

Lokal sofort testen: `npm run dev` **und** in einem zweiten Terminal `npx decap-server`,
dann <http://localhost:3000/admin> öffnen.

Platzhalter zum Ersetzen: Firmenadresse/Telefon (`content/settings/site.json`),
UID (`src/app/impressum`), Social-Links, fiktive Referenzen.

## Roadmap

- **Phase 1 — Website** ✅ Design, 7 Seiten, Dark Mode, Animationen, SEO-Grundlagen.
- **Phase 2 — CMS** ✅ Decap CMS unter `/admin`, Inhalte als JSON in `content/`,
  Bild-Uploads, Netlify-konform (git-basiert). Login-Setup: [docs/CMS.md](docs/CMS.md).
- **Phase 3 — Go-Live** ⏳ Repo zu GitHub pushen → Netlify verbinden, CMS-Login
  einrichten, Kontaktformular an E-Mail anbinden, echte Bilder & Referenzen, Analytics.

## Hinweise

- Next.js 16 hat Breaking Changes – Doku liegt unter `node_modules/next/dist/docs/`.
- `params`/`searchParams` sind asynchron (siehe Detailseiten).
