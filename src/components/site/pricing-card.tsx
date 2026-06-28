import Link from "next/link";
import type { PricingTier } from "@/content/types";
import { cn } from "@/lib/cn";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500",
        tier.highlight
          ? "border-accent bg-surface shadow-[0_24px_80px_-40px_var(--accent)]"
          : "border-border bg-surface hover:border-border-strong",
      )}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
          Beliebteste Wahl
        </span>
      )}

      <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
      <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight md:text-4xl">
          {tier.price}
        </span>
        <span className="text-sm text-muted">{tier.cadence}</span>
      </div>

      <ul className="mt-8 flex-1 space-y-3.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]",
                tier.highlight
                  ? "bg-accent text-accent-fg"
                  : "bg-accent/10 text-accent",
              )}
            >
              ✓
            </span>
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/kontakt"
        className={cn(
          "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all",
          tier.highlight
            ? "bg-accent text-accent-fg hover:scale-[1.03]"
            : "border border-border-strong hover:border-foreground hover:bg-foreground hover:text-background",
        )}
      >
        {tier.cta}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
