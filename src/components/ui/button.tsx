import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "lime" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background px-6 py-3 hover:scale-[1.02] hover:shadow-[0_12px_32px_-12px_rgba(12,12,12,0.45)]",
  lime:
    "bg-accent text-accent-fg px-6 py-3 hover:scale-[1.02] hover:shadow-[0_12px_32px_-10px_var(--accent)]",
  outline:
    "border border-border-strong bg-surface text-foreground px-6 py-3 hover:border-foreground",
  ghost: "text-foreground px-2 py-1 hover:text-green-mid dark:hover:text-accent",
};

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  arrow = false,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
