import Link from "next/link";
import type { PricingTier } from "@/content/types";
import { cn } from "@/lib/cn";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500",
        tier.highlight
          ? "border-transparent bg-green-deep text-green-fg shadow-[0_32px_80px_-40px_rgba(0,57,17,0.55)]"
          : "border-border bg-surface hover:-translate-y-1 hover:border-border-strong",
      )}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
          Beliebteste Wahl
        </span>
      )}

      <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
      <p
        className={cn(
          "mt-2 min-h-[40px] text-sm leading-relaxed",
          tier.highlight ? "text-green-fg/70" : "text-muted",
        )}
      >
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          className={cn(
            "text-3xl font-semibold tracking-tight md:text-4xl",
            tier.highlight && "text-accent",
          )}
        >
          {tier.price}
        </span>
        <span
          className={cn(
            "text-sm",
            tier.highlight ? "text-green-fg/60" : "text-muted",
          )}
        >
          {tier.cadence}
        </span>
      </div>

      <ul className="mt-8 flex-1 space-y-3.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]",
                tier.highlight
                  ? "bg-accent text-accent-fg"
                  : "bg-surface-2 text-green-mid dark:text-accent",
              )}
            >
              ✓
            </span>
            <span className={tier.highlight ? "text-green-fg/90" : "text-foreground/90"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/kontakt"
        className={cn(
          "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all",
          tier.highlight
            ? "bg-accent text-accent-fg hover:scale-[1.03]"
            : "border border-border-strong bg-surface hover:border-foreground",
        )}
      >
        {tier.cta}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
