import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { services } from "@/content/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50" />
        <Container>
          <Reveal>
            <Link
              href="/leistungen"
              className="label mb-8 inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              ← Alle Leistungen
            </Link>
          </Reveal>
          <div className="flex items-baseline gap-5">
            <Reveal>
              <span className="font-mono text-2xl text-accent md:text-4xl">
                {service.index}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                {service.title}
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {service.description}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Features + deliverables */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="label mb-8">Das bekommen Sie</h2>
              <RevealGroup className="space-y-px overflow-hidden rounded-2xl border border-border">
                {service.features.map((f) => (
                  <RevealItem
                    key={f}
                    className="flex items-center gap-4 border-b border-border bg-surface px-6 py-5 last:border-b-0"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm text-accent">
                      ✓
                    </span>
                    <span className="font-medium">{f}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="label mb-8">Unser Ablauf</h2>
              <RevealGroup className="space-y-6">
                {service.deliverables.map((d, i) => (
                  <RevealItem key={d} className="flex gap-5">
                    <span className="font-mono text-sm text-muted-2">
                      0{i + 1}
                    </span>
                    <div className="flex-1 border-b border-border pb-6">
                      <span className="text-lg font-medium">{d}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA + next service */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Klingt nach Ihrem Projekt?
              </h2>
              <p className="mt-3 max-w-md text-muted">
                Lassen Sie uns unverbindlich darüber sprechen.
              </p>
              <Link
                href="/kontakt"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-fg transition-transform hover:scale-[1.03]"
              >
                Projekt starten
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <Link
              href={`/leistungen/${next.slug}`}
              className="group w-full rounded-3xl border border-border bg-background p-8 transition-colors hover:border-border-strong md:w-80"
            >
              <span className="label">Nächste Leistung</span>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold tracking-tight">
                  {next.title}
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
