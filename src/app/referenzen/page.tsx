import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHeader } from "@/components/site/page-header";
import { ProjectCard } from "@/components/site/project-card";
import { Testimonials } from "@/components/sections/testimonials";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/content/work";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Ausgewählte Projekte: Webplattformen, Corporate Websites, Webshops und KI-Lösungen für Schweizer Unternehmen.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        label="Referenzen"
        title={
          <>
            Projekte, die <span className="text-accent">Wirkung</span> zeigen.
          </>
        }
        intro="Ein Auszug aus unserer Arbeit. Jedes Projekt mit einem klaren Ziel – und messbaren Ergebnissen."
      />

      {/* Stats */}
      <section className="border-b border-border py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {site.stats.map((s) => (
              <Reveal key={s.label}>
                <div>
                  <div className="text-3xl font-semibold tracking-tight md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
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
              Kundenstimmen
            </p>
          </Reveal>
          <Testimonials />
        </Container>
      </section>
    </>
  );
}
