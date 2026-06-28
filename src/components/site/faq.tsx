"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/pricing";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium tracking-tight md:text-xl">
                {item.q}
              </span>
              <span
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors"
                style={{
                  borderColor: isOpen ? "var(--accent)" : undefined,
                  color: isOpen ? "var(--accent)" : undefined,
                }}
              >
                <span className="absolute h-3 w-px bg-current transition-transform duration-300" style={{ transform: isOpen ? "scaleY(0)" : "scaleY(1)" }} />
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
                  <p className="max-w-2xl pb-7 text-pretty leading-relaxed text-muted">
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
