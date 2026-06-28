import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesList } from "@/components/site/services-list";
import { ProjectCard } from "@/components/site/project-card";
import { processSteps } from "@/content/services";
import { projects } from "@/content/work";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Schweizer Hosting",
  "KI & LLMs",
  "Headless CMS",
  "Webshops",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust marquee */}
      <section className="border-y border-border py-8">
        <Container className="mb-6">
          <p className="label text-center">
            Technologie, auf die wir bauen
          </p>
        </Container>
        <Marquee items={techStack} />
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              label="01 — Leistungen"
              title={
                <>
                  Drei Disziplinen,
                  <br />
                  ein nahtloses Ganzes.
                </>
              }
            />
            <Reveal delay={0.1}>
              <Button href="/leistungen" variant="outline" arrow>
                Alle Leistungen
              </Button>
            </Reveal>
          </div>
          <ServicesList />
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            label="02 — Vorgehen"
            title="Von der Idee zum Ergebnis – in vier Schritten."
            intro="Ein klarer, transparenter Prozess. Sie wissen jederzeit, woran wir arbeiten und was als Nächstes kommt."
          />

          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem
                key={step.index}
                className="group relative bg-background p-8 transition-colors hover:bg-surface-2 md:p-10"
              >
                <div className="label text-accent">{step.index}</div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              label="03 — Referenzen"
              title="Arbeit, die für sich spricht."
            />
            <Reveal delay={0.1}>
              <Button href="/referenzen" variant="outline" arrow>
                Alle Projekte
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="label mb-10 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              04 — Stimmen
            </p>
          </Reveal>
          <Testimonials />
        </Container>
      </section>

      {/* Mid CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
              <div className="relative max-w-2xl">
                <p className="label !text-background/60">Lassen Sie uns sprechen</p>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Ihr nächstes digitales Projekt beginnt mit einem Gespräch.
                </h2>
                <p className="mt-5 max-w-lg text-background/70">
                  Kostenlos, unverbindlich und auf Augenhöhe. Erzählen Sie uns
                  von Ihrem Vorhaben.
                </p>
                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-fg transition-transform hover:scale-[1.03]"
                  >
                    Projekt starten
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
