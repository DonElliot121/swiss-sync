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
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none absolute -top-28 left-1/3 -z-10 h-72 w-[480px] rounded-full bg-accent/20 blur-[130px] dark:bg-accent/10" />
      <Container>
        <Reveal>
          <div className="label mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-accent ring-1 ring-border" />
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
