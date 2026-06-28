import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/site/page-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Angaben gemäss Schweizer Recht.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader label="Rechtliches" title="Impressum" />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-base leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Verantwortlich für den Inhalt
              </h2>
              <p>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
                <br />
                {site.address.country}
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Kontakt
              </h2>
              <p>
                E-Mail: {site.email}
                <br />
                Telefon: {site.phone}
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Handelsregister
              </h2>
              <p>
                UID: CHE-XXX.XXX.XXX
                <br />
                Eingetragen im Handelsregister des Kantons Zürich.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>
            <p className="text-sm text-muted-2">
              Platzhalter-Inhalte – im CMS einfach anpassbar.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
