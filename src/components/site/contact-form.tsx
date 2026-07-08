"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Webdesign & Entwicklung",
  "Hosting & Betrieb",
  "KI-Services",
  "Etwas anderes",
];

const budgets = ["< 5'000", "5'000 – 15'000", "15'000 – 50'000", "> 50'000"];

// Netlify Forms erwartet URL-codierte Daten inkl. form-name.
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {
      "form-name": "contact",
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      service,
      budget,
      message: String(fd.get("message") ?? ""),
      "bot-field": String(fd.get("bot-field") ?? ""),
    };

    try {
      // POST an die statische Datei: bei Next.js auf Netlify wird nur so der
      // Forms-Handler (CDN) getroffen statt der Next-Server-Function.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Senden fehlgeschlagen.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Etwas ist schiefgelaufen.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-surface p-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-accent-fg">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">
          Vielen Dank!
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Ihre Nachricht ist angekommen. Wir melden uns innerhalb eines
          Arbeitstages bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-accent hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </motion.div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-2 focus:border-foreground focus:outline-none";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-surface p-7 md:p-9"
    >
      {/* Netlify Forms: verstecktes Form-Name- und Honeypot-Feld */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Nicht ausfüllen: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label mb-2 block !text-foreground/70">Name *</label>
          <input name="name" required placeholder="Vor- & Nachname" className={fieldClass} />
        </div>
        <div>
          <label className="label mb-2 block !text-foreground/70">E-Mail *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="name@firma.ch"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="label mb-2 block !text-foreground/70">Unternehmen</label>
        <input name="company" placeholder="Firmenname" className={fieldClass} />
      </div>

      {/* Service chips */}
      <div className="mt-6">
        <label className="label mb-3 block !text-foreground/70">
          Worum geht es?
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={
                "rounded-full border px-4 py-2 text-sm transition-colors " +
                (service === s
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border text-muted hover:border-foreground hover:text-foreground")
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Budget chips */}
      <div className="mt-6">
        <label className="label mb-3 block !text-foreground/70">
          Budget (CHF)
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={
                "rounded-full border px-4 py-2 text-sm transition-colors " +
                (budget === b
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border text-muted hover:border-foreground hover:text-foreground")
              }
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="label mb-2 block !text-foreground/70">
          Ihre Nachricht *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Erzählen Sie uns von Ihrem Projekt …"
          className={fieldClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-accent">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-fg transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Wird gesendet …" : "Anfrage senden"}
        {status !== "loading" && (
          <span className="transition-transform group-hover:translate-x-1">→</span>
        )}
      </button>
    </form>
  );
}
