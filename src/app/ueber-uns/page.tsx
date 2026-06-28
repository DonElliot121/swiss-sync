import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHeader } from "@/components/site/page-header";
import { values, team, timeline } from "@/content/team";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Swiss Sync ist ein Schweizer Digitalstudio für Webdesign, Hosting und KI. Lernen Sie unser Team und unsere Werte kennen.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        label="Über uns"
        title={
          <>
            Schweizer Präzision,
            <br />
            <span className="text-accent">digital</span> gedacht.
          </>
        }
        intro="Wir sind ein Team aus Strateginnen, Designern und Entwicklern mit einer gemeinsamen Überzeugung: gute Technologie ist präzise, verständlich und schafft echten Wert."
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Wir glauben, dass digitale Exzellenz im Detail entsteht.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Swiss Sync wurde 2017 mit einer einfachen Idee gegründet:
                  Unternehmen verdienen digitale Lösungen, die genauso
                  zuverlässig und präzise sind wie ein Schweizer Uhrwerk.
                </p>
                <p>
                  Heute begleiten wir Schweizer Unternehmen über den gesamten
                  digitalen Lebenszyklus – von der ersten Website über
                  zuverlässiges Hosting bis hin zu intelligenten KI-Lösungen.
                </p>
                <p>
                  Was uns antreibt? Der Anspruch, Technologie so einzusetzen,
                  dass sie nicht kompliziert, sondern einfach grossartig ist.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Werte"
            title="Worauf Sie sich verlassen können."
          />
          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <RevealItem
                key={v.title}
                className="bg-background p-8 transition-colors hover:bg-surface-2 md:p-10"
              >
                <div className="label text-accent">0{i + 1}</div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading label="Werdegang" title="Unsere Geschichte." />
          <div className="mt-16 border-t border-border">
            <RevealGroup>
              {timeline.map((t) => (
                <RevealItem
                  key={t.year}
                  className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8"
                >
                  <div className="font-mono text-2xl font-semibold text-accent md:col-span-2 md:text-3xl">
                    {t.year}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight md:col-span-3">
                    {t.title}
                  </h3>
                  <p className="text-muted md:col-span-7">{t.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Team"
            title="Die Menschen hinter Swiss Sync."
          />
          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <RevealItem
                key={m.name}
                className="group rounded-3xl border border-border bg-background p-8 transition-colors hover:border-border-strong"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-accent-fg">
                  {m.initials}
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p className="text-sm text-accent">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {m.bio}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
