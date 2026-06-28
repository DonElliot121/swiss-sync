import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHeader } from "@/components/site/page-header";
import { ServicesList } from "@/components/site/services-list";
import { processSteps } from "@/content/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Webdesign & Entwicklung, Schweizer Hosting und KI-Services – alles aus einer Hand.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        label="Leistungen"
        title={
          <>
            Alles, was Ihr digitales
            <br />
            Geschäft <span className="text-accent">braucht.</span>
          </>
        }
        intro="Von der ersten Idee bis zum laufenden Betrieb: Wir verbinden Design, Technologie und KI zu Lösungen, die messbar wirken."
      />

      {/* Services list */}
      <section className="py-20 md:py-28">
        <Container>
          <ServicesList />
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Vorgehen"
            title="Ein Prozess, auf den Sie sich verlassen können."
            intro="Strukturiert, transparent und partnerschaftlich – in jeder Phase."
          />
          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem
                key={step.index}
                className="bg-background p-8 transition-colors hover:bg-surface-2 md:p-10"
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

      {/* Guarantee band */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-10 rounded-[2rem] border border-border bg-surface p-10 md:grid-cols-3 md:p-16">
              {[
                {
                  k: "Schweizer Qualität",
                  v: "Entwickelt und betreut in der Schweiz – mit dem Anspruch an Präzision, der unser Land auszeichnet.",
                },
                {
                  k: "Faire Festpreise",
                  v: "Klare Angebote ohne versteckte Kosten. Sie wissen von Anfang an, woran Sie sind.",
                },
                {
                  k: "Langfristige Partnerschaft",
                  v: "Wir denken über den Launch hinaus und begleiten Sie auf Ihrem digitalen Weg.",
                },
              ].map((item) => (
                <div key={item.k}>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.k}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
