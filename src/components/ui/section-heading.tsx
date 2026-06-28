import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  className,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <Reveal>
          <div
            className={cn(
              "label mb-5 flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            <span className="inline-block h-px w-8 bg-accent" />
            {label}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
