import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { posts } from "@/content/posts";
import { formatDate } from "@/lib/format";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border pt-36 pb-14 md:pt-48 md:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50" />
          <Container className="max-w-3xl">
            <Reveal>
              <Link
                href="/insights"
                className="label mb-8 inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                ← Alle Insights
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-fg">
                  {post.category}
                </span>
                <span className="text-muted">{formatDate(post.date)}</span>
                <span className="text-muted-2">·</span>
                <span className="text-muted">{post.readingTime}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-sm text-muted">von {post.author}</span>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24">
          <Container className="max-w-3xl">
            {post.coverImage && (
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="mb-12 w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            )}
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              {post.body
                .split(/\n\n+/)
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, i) => (
                  <Reveal key={i} delay={i * 0.03}>
                    <p className="text-pretty">{para}</p>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      </article>

      {/* More */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <p className="label mb-10">Weiterlesen</p>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group rounded-3xl border border-border bg-background p-8 transition-colors hover:border-border-strong"
              >
                <span className="label">{p.category}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                  Lesen
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
