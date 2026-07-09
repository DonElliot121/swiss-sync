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
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
        <Container>
          <Reveal>
            <Link
              href="/leistungen"
              className="label mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 transition-colors hover:text-foreground"
            >
              ← Alle Leistungen
            </Link>
          </Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <Reveal>
              <span className="label inline-flex items-center rounded-full bg-accent px-3.5 py-1.5 font-mono !text-accent-fg">
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
              <RevealGroup className="space-y-3">
                {service.features.map((f) => (
                  <RevealItem
                    key={f}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm text-accent-fg">
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
                    <span className="font-mono text-sm text-green-mid dark:text-accent">
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
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-6 rounded-[2rem] bg-green-deep p-10 text-green-fg md:grid-cols-[1.4fr_1fr] md:items-center md:p-14">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Klingt nach Ihrem Projekt?
              </h2>
              <p className="mt-3 max-w-md text-green-fg/70">
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
              className="group rounded-3xl border border-green-fg/15 bg-green-mid/40 p-8 transition-colors hover:border-accent/50"
            >
              <span className="label !text-green-fg/50">Nächste Leistung</span>
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
