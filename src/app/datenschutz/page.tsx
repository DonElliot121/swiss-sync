import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/site/page-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäss revidiertem Datenschutzgesetz (revDSG).",
};

const sections = [
  {
    h: "1. Verantwortliche Stelle",
    p: "Verantwortlich für die Bearbeitung Ihrer Personendaten ist die im Impressum genannte Stelle, sofern nichts anderes angegeben ist.",
  },
  {
    h: "2. Erhebung und Bearbeitung von Daten",
    p: "Wir bearbeiten Personendaten nur, soweit dies für die Bereitstellung unserer Leistungen erforderlich ist oder Sie eingewilligt haben. Dazu gehören insbesondere Angaben, die Sie über unser Kontaktformular übermitteln.",
  },
  {
    h: "3. Zweck der Bearbeitung",
    p: "Ihre Daten werden ausschliesslich zur Beantwortung Ihrer Anfrage, zur Vertragsabwicklung sowie zur Verbesserung unserer Angebote verwendet.",
  },
  {
    h: "4. Datenspeicherung in der Schweiz",
    p: "Sämtliche Daten werden auf Servern in der Schweiz gespeichert. Wir erfüllen damit die Anforderungen des revidierten Datenschutzgesetzes (revDSG).",
  },
  {
    h: "5. Ihre Rechte",
    p: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer Personendaten. Kontaktieren Sie uns dazu unter der angegebenen E-Mail-Adresse.",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Datenschutz"
        intro="Ihre Daten sind bei uns sicher. Diese Erklärung informiert Sie über die Bearbeitung Ihrer Personendaten."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="mb-3 text-lg font-semibold text-foreground">
                  {s.h}
                </h2>
                <p className="leading-relaxed text-muted">{s.p}</p>
              </div>
            ))}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                6. Kontakt
              </h2>
              <p className="leading-relaxed text-muted">
                Bei Fragen zum Datenschutz erreichen Sie uns unter {site.email}.
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
