"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      aria-label={
        !mounted
          ? "Theme wechseln"
          : isDark
            ? "Hellen Modus aktivieren"
            : "Dunklen Modus aktivieren"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
    >
      {/* Avoid hydration mismatch: render neutral until mounted */}
      <span className="sr-only">Theme wechseln</span>
      {mounted && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform duration-500 group-hover:rotate-45"
        >
          {isDark ? (
            // Sun
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
            </g>
          ) : (
            // Moon
            <path
              d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}
    </button>
  );
}
