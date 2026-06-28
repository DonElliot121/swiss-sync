"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

const easing = [0.16, 1, 0.3, 1] as const;

const lines = ["Digitale Exzellenz.", "Schweizer Präzision."];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />
      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="label !text-foreground/70">
            B2B Digitalstudio · Schweiz
          </span>
        </motion.div>

        {/* Headline with line-by-line clip reveal */}
        <h1
          className="font-semibold tracking-tight"
          style={{
            fontSize: "var(--text-display)",
            lineHeight: "var(--text-display--line-height)",
            letterSpacing: "var(--text-display--letter-spacing)",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: easing, delay: 0.15 + i * 0.12 }}
              >
                {i === 1 ? (
                  <span className="text-muted">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
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
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-fg transition-all hover:shadow-[0_12px_40px_-10px_var(--accent)]"
            >
              Projekt starten
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-base font-medium transition-colors hover:border-foreground"
            >
              Leistungen ansehen
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-24 md:grid-cols-4"
        >
          {site.stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-7">
              <dt className="text-3xl font-semibold tracking-tight md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
