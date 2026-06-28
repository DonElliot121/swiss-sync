import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Lassen Sie uns über Ihr Projekt sprechen. Kostenlos und unverbindlich.",
};

export default function KontaktPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-24 right-1/4 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[110px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info */}
          <div>
            <Reveal>
              <div className="label mb-6 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-accent" />
                Kontakt
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                Lassen Sie uns
                <br />
                <span className="text-accent">sprechen.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted">
                Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns innerhalb
                eines Arbeitstages – kostenlos und unverbindlich.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 space-y-8">
                <div>
                  <div className="label mb-2">E-Mail</div>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline text-lg font-medium"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <div className="label mb-2">Telefon</div>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-lg font-medium">
                    {site.phone}
                  </a>
                </div>
                <div>
                  <div className="label mb-2">Adresse</div>
                  <p className="text-lg font-medium leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}, {site.address.country}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 flex gap-3">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
