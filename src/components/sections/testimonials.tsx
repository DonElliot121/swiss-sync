"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <div className="relative">
      <div className="relative min-h-[260px] md:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              <span className="text-accent">“</span>
              {t.quote}
              <span className="text-accent">”</span>
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-medium">{t.author}</div>
                <div className="text-sm text-muted">
                  {t.role}, {t.company}
                </div>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-10 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Stimme ${idx + 1}`}
            onClick={() => setI(idx)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: idx === i ? 32 : 12,
              background: idx === i ? "var(--accent)" : "var(--border-strong)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
