"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-500 md:h-16 md:px-5",
          scrolled
            ? "border-border bg-surface/85 shadow-[0_8px_32px_-16px_rgba(12,12,12,0.18)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Projekt starten
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-all duration-300",
                  open && "translate-y-[5.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-all duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-all duration-300",
                  open && "-translate-y-[5.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 -z-10 bg-background pt-24 lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {[{ label: "Start", href: "/" }, ...site.nav].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-border"
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-5 text-2xl font-medium tracking-tight"
                  >
                    {item.label}
                    <span className="text-muted-2">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pt-6">
              <Link
                href="/kontakt"
                className="flex w-full items-center justify-center rounded-full bg-foreground px-6 py-4 text-base font-medium text-background"
              >
                Projekt starten
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
