import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-48 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[110px]" />
      <Container>
        <Reveal>
          <div className="label mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            {label}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
