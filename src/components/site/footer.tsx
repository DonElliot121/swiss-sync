import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-green-deep text-green-fg">
        <Container className="py-16 md:py-20">
          {/* Big CTA */}
          <div className="flex flex-col items-start justify-between gap-8 border-b border-green-fg/15 pb-14 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Bereit, digital{" "}
              <span className="text-accent">vorauszugehen?</span>
            </h2>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-fg transition-transform hover:scale-[1.03]"
            >
              Gespräch vereinbaren
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="inline-flex items-center gap-2.5">
                <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
                  <rect width="32" height="32" rx="10" className="fill-accent" />
                  <rect x="14.4" y="7" width="3.2" height="18" rx="1.6" fill="#003911" />
                  <rect x="7" y="14.4" width="18" height="3.2" rx="1.6" fill="#003911" />
                </svg>
                <span className="text-[17px] font-semibold tracking-tight">
                  Swiss<span className="text-green-fg/60"> Sync</span>
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-green-fg/70">
                {site.description}
              </p>
            </div>

            <div>
              <h3 className="label mb-5 !text-green-fg/50">Leistungen</h3>
              <ul className="space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      className="text-green-fg/80 transition-colors hover:text-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label mb-5 !text-green-fg/50">Unternehmen</h3>
              <ul className="space-y-3 text-sm">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="text-green-fg/80 transition-colors hover:text-accent"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label mb-5 !text-green-fg/50">Kontakt</h3>
              <ul className="space-y-3 text-sm text-green-fg/80">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.phone}</li>
                <li className="pt-2 leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </li>
              </ul>
              <div className="mt-5 flex gap-4 text-sm">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-fg/60 transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-green-fg/15 pt-8 text-xs text-green-fg/60 md:flex-row md:items-center">
            <p>
              © {year} {site.legalName}. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-accent">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-accent">
                Datenschutz
              </Link>
              <span className="text-green-fg/40">Made in Switzerland 🇨🇭</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
