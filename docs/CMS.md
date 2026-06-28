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

## Produktion (Netlify) – Login einrichten

Damit das CMS auf der Live-Seite funktioniert, braucht es eine Authentifizierung.
Zwei Wege:

### Option A — GitHub-Backend (empfohlen)

Funktioniert unabhängig von Netlify Identity. In `public/admin/config.yml` den
`backend`-Block ersetzen durch:

```yaml
backend:
  name: github
  repo: DEIN-GITHUB-USER/swiss-sync
  branch: main
```

Dann eine **GitHub OAuth App** + einen kleinen OAuth-Vermittler einrichten
(z. B. das fertige Template „decap-cms-github-oauth-provider" als eigene kleine
Netlify-/Cloudflare-Function deployen) und dessen URL als `base_url`/`auth_endpoint`
in der Config hinterlegen. Anleitung: <https://decapcms.org/docs/github-backend/>.

### Option B — Git Gateway + Netlify Identity (klassisch)

Nur falls dein Netlify-Account **Identity** anbietet (für neue Projekte teils
nicht mehr verfügbar):

1. Netlify → Site → **Identity** aktivieren, Registrierung auf „Invite only".
2. **Services → Git Gateway** aktivieren.
3. In `public/admin/index.html` vor `</body>` das Identity-Widget ergänzen:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
4. Dich selbst unter Identity einladen, Einladung annehmen, Passwort setzen.
5. `/admin` öffnen → „Login with Netlify Identity".

Der aktuelle `config.yml` ist bereits auf `git-gateway` / `branch: main`
eingestellt – für Option A nur den `backend`-Block anpassen.

## Hinweise

- **Texte:** Blog-Absätze werden durch Leerzeilen getrennt.
- **Bilder:** Über das Titelbild-Feld bei Artikeln hochladbar; landen in
  `public/uploads/` und werden ins Repo committet.
- **Neue Einträge:** „New …" in der jeweiligen Sammlung – Datei wird automatisch
  angelegt, die Seite erscheint nach dem Rebuild.
- **Struktur/Design** (Layout, Farben, Seitenüberschriften) bleiben im Code –
  das CMS verwaltet Inhalte, nicht das Design.
