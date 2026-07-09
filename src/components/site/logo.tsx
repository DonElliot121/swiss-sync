import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Swiss Sync – Startseite"
      className={cn(
        "group inline-flex items-center gap-2.5 text-foreground",
        className,
      )}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <rect width="32" height="32" rx="10" className="fill-green-deep dark:fill-green-mid" />
          {/* Swiss-cross-inspired sync mark */}
          <rect x="14.4" y="7" width="3.2" height="18" rx="1.6" className="fill-accent" />
          <rect x="7" y="14.4" width="18" height="3.2" rx="1.6" className="fill-accent" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">
        Swiss<span className="text-muted-2 transition-colors group-hover:text-green-mid dark:group-hover:text-accent"> Sync</span>
      </span>
    </Link>
  );
}
