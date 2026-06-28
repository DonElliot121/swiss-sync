import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/referenzen#${project.slug}`}
      id={project.slug}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:border-border-strong hover:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.4)] md:p-10"
    >
      {/* Accent wash on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 80% at 0% 0%, ${project.accent}1a, transparent 60%)`,
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="label">{project.category}</span>
        <span className="label">{project.year}</span>
      </div>

      <h3 className="relative mt-8 text-2xl font-semibold tracking-tight md:text-3xl">
        {project.client}
      </h3>
      <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      {/* Metrics */}
      <div className="relative mt-8 flex gap-10">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div
              className="text-2xl font-semibold tracking-tight"
              style={{ color: project.accent }}
            >
              {m.value}
            </div>
            <div className="mt-0.5 text-xs text-muted">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="relative mt-8 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
        Fallstudie ansehen
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
