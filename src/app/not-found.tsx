import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <Container className="text-center">
        <p className="font-mono text-7xl font-semibold text-green-deep dark:text-accent md:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Die gesuchte Seite wurde verschoben oder existiert nicht mehr.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Zurück zur Startseite
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </Container>
    </section>
  );
}
