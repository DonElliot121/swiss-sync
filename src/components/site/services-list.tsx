import Link from "next/link";
import { services } from "@/content/services";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function ServicesList() {
  return (
    <RevealGroup className="border-t border-border">
      {services.map((service) => (
        <RevealItem key={service.slug}>
          <Link
            href={`/leistungen/${service.slug}`}
            className="group grid grid-cols-1 items-start gap-6 border-b border-border py-10 transition-colors hover:bg-surface/60 md:grid-cols-12 md:gap-8 md:px-6 md:py-12"
          >
            {/* Index */}
            <div className="label flex items-center gap-3 md:col-span-2">
              <span className="text-accent">{service.index}</span>
            </div>

            {/* Title + tagline */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted md:col-span-4">
              {service.description}
            </p>

            {/* Arrow */}
            <div className="hidden items-center justify-end md:col-span-2 md:flex">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                →
              </span>
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
