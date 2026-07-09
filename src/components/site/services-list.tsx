import Link from "next/link";
import { services } from "@/content/services";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function ServicesList() {
  return (
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {services.map((service) => (
        <RevealItem key={service.slug} className="h-full">
          <Link
            href={`/leistungen/${service.slug}`}
            className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_64px_-32px_rgba(12,12,12,0.25)] md:p-9"
          >
            {/* Index chip */}
            <div className="flex items-center justify-between">
              <span className="label inline-flex items-center rounded-full bg-surface-2 px-3 py-1 !text-foreground/70">
                {service.index}
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-accent group-hover:text-accent-fg">
                →
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-green-mid dark:text-accent">
              {service.tagline}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {service.description}
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 space-y-2 border-t border-border pt-5">
              {service.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent ring-1 ring-border" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
