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
├─ content/                   # ⇦ ALLE Texte & Daten (CMS-Anbindung Phase 2)
│  ├─ site.ts services.ts work.ts pricing.ts team.ts posts.ts
│  └─ types.ts
└─ lib/                       # cn(), formatDate()
```

## Inhalte pflegen (heute)

Alle Texte, Kennzahlen, Projekte, Preise und Blog-Artikel liegen in `src/content/*.ts`.
Anpassungen dort wirken sofort auf der ganzen Website. Platzhalter sind u. a.:
Firmenadresse/Telefon (`site.ts`), UID (`impressum`), Social-Links.

## Roadmap

- **Phase 1 — Website** ✅ Design, 7 Seiten, Dark Mode, Animationen, SEO-Grundlagen.
- **Phase 2 — CMS** ⏳ Eigenes `/admin`-Panel zum Editieren von Texten & Bildern
  (file-/git-basiert, ohne Datenbank) – greift direkt auf den `content/`-Layer zu.
- **Phase 3 — Go-Live** ⏳ Kontaktformular an E-Mail/CRM anbinden, Domain & Hosting,
  Bilder/OG-Images, Analytics.

## Hinweise

- Next.js 16 hat Breaking Changes – Doku liegt unter `node_modules/next/dist/docs/`.
- `params`/`searchParams` sind asynchron (siehe Detailseiten).
