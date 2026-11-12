import { Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/content/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">Projects</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
        <p className="mb-12 max-w-2xl text-muted">
          A mix of competition-winning models, research projects, and full-stack systems — spanning computer
          vision, NLP/LLMs, and time-series forecasting.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.06} className={p.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex shrink-0 items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs text-muted transition hover:border-accent/50 hover:text-ink"
                  >
                    <Github size={13} /> Code <ArrowUpRight size={12} />
                  </a>
                )}
              </div>

              {p.context && <p className="mb-3 text-xs font-medium text-accent3">{p.context}</p>}

              <ul className="mb-4 flex-1 space-y-1.5">
                {p.description.map((d) => (
                  <li key={d} className="text-sm leading-relaxed text-muted">
                    <span className="mr-2 text-accent">▸</span>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface2 px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
