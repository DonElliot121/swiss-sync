# CMS – Inhalte verwalten

Die Website nutzt **Decap CMS** (git-basiert). Alle Inhalte liegen als JSON in
`content/` und werden über `/admin` im Browser bearbeitet. Jede Änderung wird
als Commit ins Git-Repo geschrieben – Netlify baut die Seite automatisch neu.

```
content/
├─ settings/   site.json · pricing.json · about.json · process.json · testimonials.json
├─ services/   eine Datei pro Leistung
├─ projects/   eine Datei pro Referenz
├─ team/       eine Datei pro Teammitglied
└─ posts/      eine Datei pro Blog-Artikel
Bilder: public/uploads/  (Pfad in den Inhalten: /uploads/...)
```

## Lokal bearbeiten (sofort, ohne Login)

Zwei Terminals im Projektordner:

```bash
# Terminal 1 – Website
npm run dev

# Terminal 2 – lokaler CMS-Proxy
npx decap-server
```

Dann **http://localhost:3000/admin** öffnen. Änderungen werden direkt in die
Dateien unter `content/` geschrieben (kein Login nötig – `local_backend: true`).

## Produktion – Login einrichten (GitHub via Netlify-OAuth)

Die Config ist bereits auf das **GitHub-Backend** (`DonElliot121/swiss-sync`)
eingestellt. Der Login läuft über GitHub-OAuth, vermittelt von Netlify – du
musst keinen eigenen Server betreiben.

**Einmalige Einrichtung:**

1. **GitHub OAuth App** erstellen:
   GitHub → Settings → Developer settings → **OAuth Apps → New OAuth App**
   - Application name: `Swiss Sync CMS`
   - Homepage URL: deine Netlify-URL (z. B. `https://swiss-sync.netlify.app`)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   - „Register" → **Client ID** kopieren, **Client Secret** generieren & kopieren.

2. **In Netlify hinterlegen:**
   Netlify → deine Site → **Site configuration → Access & security → OAuth →
   Install provider → GitHub** → Client ID + Secret einfügen → speichern.

3. **Fertig:** `https://DEINE-SITE/admin` öffnen → **„Login with GitHub"** →
   Inhalte bearbeiten. Speichern = Commit ins Repo → Netlify rebuildet automatisch.

## Hinweise

- **Texte:** Blog-Absätze werden durch Leerzeilen getrennt.
- **Bilder:** Über das Titelbild-Feld bei Artikeln hochladbar; landen in
  `public/uploads/` und werden ins Repo committet.
- **Neue Einträge:** „New …" in der jeweiligen Sammlung – Datei wird automatisch
  angelegt, die Seite erscheint nach dem Rebuild.
- **Struktur/Design** (Layout, Farben, Seitenüberschriften) bleiben im Code –
  das CMS verwaltet Inhalte, nicht das Design.
