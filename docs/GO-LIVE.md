# Go-Live: GitHub + Netlify

Die Seite ist deploy-fertig. Diese Schritte machst du mit deinen eigenen Accounts.

## 1. Code zu GitHub pushen

Repo auf <https://github.com/new> anlegen: Name `swiss-sync`, **leer** (kein
README/.gitignore). Dann im Projektordner:

```bash
git remote add origin https://github.com/DEIN-USER/swiss-sync.git
git push -u origin main
```

## 2. Netlify verbinden

1. <https://app.netlify.com> → **Add new site → Import an existing project**
2. **GitHub** wählen → Repo `swiss-sync` autorisieren & auswählen
3. Build-Settings werden aus `netlify.toml` erkannt
   (Build: `npm run build`, Plugin: `@netlify/plugin-nextjs`) → **Deploy**
4. Nach ~2 Min ist die Seite unter einer `*.netlify.app`-Adresse live.

## 3. Domain verbinden (swisssync.ch)

Netlify → **Domain management → Add a domain** → `swisssync.ch` eintragen und
den DNS-Anweisungen folgen (A-Record/Nameserver). SSL-Zertifikat kommt automatisch.

## 4. Kontaktformular-Benachrichtigungen

Das Formular nutzt **Netlify Forms** (bereits eingebaut, kein API-Key nötig).
Nach dem ersten Deploy:

1. Netlify → **Forms** → das Formular `contact` erscheint (nach erster echter Absendung)
2. **Form notifications → Add notification → Email notification**
3. Deine E-Mail eintragen → ab jetzt landet jede Anfrage in deinem Postfach.

> Spamschutz (Honeypot) ist aktiv. Optional: reCAPTCHA in Netlify zuschaltbar.

## 5. CMS-Login aktivieren

Damit `/admin` auf der Live-Seite funktioniert → siehe [CMS.md](CMS.md).
Empfehlung: **GitHub-Backend**. Sag mir deinen GitHub-Benutzernamen, dann
trage ich `repo: DEIN-USER/swiss-sync` in `public/admin/config.yml` ein und
beschreibe das OAuth-Setup.

## Danach: Inhalte finalisieren

- Platzhalter ersetzen (Adresse, Telefon, UID, Social-Links, echte Referenzen)
- Echte Bilder/Logo über das CMS hochladen
- Optional: Analytics (z. B. Netlify Analytics oder Plausible)
