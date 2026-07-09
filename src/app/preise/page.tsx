import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHeader } from "@/components/site/page-header";
import { PricingCard } from "@/components/site/pricing-card";
import { Faq } from "@/components/site/faq";
import { pricingTiers, hostingPlans } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Pakete für Webprojekte und Hosting. Faire Festpreise ohne versteckte Kosten.",
};

export default function PreisePage() {
  return (
    <>
      <PageHeader
        label="Preise"
        title={
          <>
            Transparent. Fair.
            <br />
            <span className="mark-lime">Ohne</span> Überraschungen.
          </>
        }
        intro="Klare Pakete für jedes Vorhaben. Sie wissen von Anfang an, was Sie bekommen – und was es kostet."
      />

      {/* Web projects */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Webprojekte"
            title="Pakete für Ihre Website."
            intro="Einmalige Projektpreise. Jedes Paket inklusive Design, Entwicklung und CMS."
          />
          <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <RevealItem key={tier.name} className="h-full">
                <PricingCard tier={tier} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Hosting — rounded band */}
      <section className="px-3 md:px-6">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-surface-2 py-20 dark:bg-surface md:py-28">
          <Container>
            <SectionHeading
              label="Hosting"
              title="Laufender Betrieb & Hosting."
              intro="Monatliche Pakete für zuverlässiges Hosting auf Schweizer Servern."
            />
            <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
              {hostingPlans.map((tier) => (
                <RevealItem key={tier.name} className="h-full">
                  <PricingCard tier={tier} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="label mb-10 flex items-center gap-2.5">
              <span className="inline-block h-2 w-2 rounded-full bg-accent ring-1 ring-border" />
              Häufige Fragen
            </p>
          </Reveal>
          <Faq />
        </Container>
      </section>
    </>
  );
}
