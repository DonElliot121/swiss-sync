"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
      {/* Dot-grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      {/* Soft lime glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px] dark:bg-accent/10" />

      <Container>
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-mid opacity-60 dark:bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-mid dark:bg-accent" />
          </span>
          <span className="label !text-foreground/70">
            B2B Digitalstudio · Schweiz
          </span>
        </motion.div>

        {/* Headline with line-by-line clip reveal */}
        <h1
          className="max-w-5xl font-semibold tracking-tight"
          style={{
            fontSize: "var(--text-display)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
            >
              Digitale Exzellenz.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: easing, delay: 0.27 }}
            >
              <span className="mark-lime">Schweizer</span> Präzision.
            </motion.span>
          </span>
        </h1>

        {/* Subline + CTAs */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.5 }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
          >
            Wir bauen professionelle Websites, betreiben zuverlässiges Hosting
            und integrieren KI – damit Ihr Unternehmen digital vorausgeht.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.62 }}
            className="flex flex-wrap items-center gap-3 md:justify-end"
          >
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-all hover:scale-[1.02] hover:shadow-[0_16px_40px_-16px_rgba(12,12,12,0.5)]"
            >
              Projekt starten
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-7 py-4 text-base font-medium transition-colors hover:border-foreground"
            >
              Leistungen ansehen
            </Link>
          </motion.div>
        </div>

        {/* Stats row — rounded cards */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-4 md:gap-4"
        >
          {site.stats.map((s, i) => (
            <div
              key={s.label}
              className={
                "rounded-3xl border px-6 py-7 " +
                (i === 0
                  ? "border-transparent bg-green-deep text-green-fg"
                  : "border-border bg-surface")
              }
            >
              <dt
                className={
                  "text-3xl font-semibold tracking-tight md:text-4xl " +
                  (i === 0 ? "text-accent" : "")
                }
              >
                {s.value}
              </dt>
              <dd
                className={
                  "mt-1 text-sm " + (i === 0 ? "text-green-fg/70" : "text-muted")
                }
              >
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
