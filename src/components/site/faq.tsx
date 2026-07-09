"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/pricing";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-2xl border transition-colors duration-300",
              isOpen ? "border-border-strong bg-surface" : "border-border bg-surface/60",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium tracking-tight md:text-lg">
                {item.q}
              </span>
              <span
                className={cn(
                  "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  isOpen
                    ? "border-transparent bg-accent text-accent-fg"
                    : "border-border",
                )}
              >
                <span
                  className="absolute h-3 w-px bg-current transition-transform duration-300"
                  style={{ transform: isOpen ? "scaleY(0)" : "scaleY(1)" }}
                />
                <span className="h-px w-3 bg-current" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-6 pb-6 text-pretty text-sm leading-relaxed text-muted md:text-base">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
