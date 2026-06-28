import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        {/* Big CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-14 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Bereit, digital <span className="text-accent">vorauszugehen?</span>
          </h2>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Gespräch vereinbaren
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="label mb-5">Leistungen</h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label mb-5">Unternehmen</h3>
            <ul className="space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label mb-5">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline transition-colors hover:text-foreground"
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
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-foreground">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-foreground">
              Datenschutz
            </Link>
            <span className="text-muted-2">Made in Switzerland 🇨🇭</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
