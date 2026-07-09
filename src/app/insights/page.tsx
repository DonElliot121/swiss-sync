import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHeader } from "@/components/site/page-header";
import { posts } from "@/content/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Gedanken zu Webdesign, Performance, Hosting und KI – aus der Praxis eines Schweizer Digitalstudios.",
};

export default function InsightsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        label="Insights"
        title={
          <>
            Wissen, das <span className="mark-lime">weiterbringt.</span>
          </>
        }
        intro="Praxisnahe Einblicke zu Webdesign, Performance, Hosting und KI – ohne Buzzwords."
      />

      {/* Featured */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid gap-8 rounded-[2rem] border border-border bg-surface p-8 transition-colors hover:border-border-strong md:grid-cols-2 md:p-12"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-fg">
                      {featured.category}
                    </span>
                    <span className="text-muted">{formatDate(featured.date)}</span>
                  </div>
                  <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium">
                  Artikel lesen
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
              <div className="relative hidden overflow-hidden rounded-2xl border border-border bg-background md:block">
                <div className="grid-bg absolute inset-0 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-7xl font-semibold text-accent/20">
                    {featured.category}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <RevealItem key={post.slug} className="h-full">
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-center gap-3 text-xs">
                    <span className="label">{post.category}</span>
                    <span className="text-muted-2">·</span>
                    <span className="text-muted">{post.readingTime}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
