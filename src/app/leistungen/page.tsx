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
            Geschäft <span className="mark-lime">braucht.</span>
          </>
        }
        intro="Von der ersten Idee bis zum laufenden Betrieb: Wir verbinden Design, Technologie und KI zu Lösungen, die messbar wirken."
      />

      {/* Services */}
      <section className="py-20 md:py-28">
        <Container>
          <ServicesList />
        </Container>
      </section>

      {/* Process — rounded band */}
      <section className="px-3 md:px-6">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-surface-2 py-20 dark:bg-surface md:py-28">
          <Container>
            <SectionHeading
              label="Vorgehen"
              title="Ein Prozess, auf den Sie sich verlassen können."
              intro="Strukturiert, transparent und partnerschaftlich – in jeder Phase."
            />
            <RevealGroup className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <RevealItem
                  key={step.index}
                  className="rounded-3xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong"
                >
                  <div className="label inline-flex items-center rounded-full bg-accent px-3 py-1 !text-accent-fg">
                    {step.index}
                  </div>
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
        </div>
      </section>

      {/* Guarantee band */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-10 rounded-[2rem] bg-green-deep p-10 text-green-fg md:grid-cols-3 md:p-16">
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
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.k}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-green-fg/70">
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
