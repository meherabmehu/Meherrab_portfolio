import { Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/content/data";

export default function Projects() {
  return (
    <section id="projects" className="relative border-y border-border bg-surface/70 px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-heading">Projects</p>
              <h2 className="text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Projects I&apos;ve built</h2>
              <p className="mt-4 max-w-2xl text-muted">
                From full-stack products to applied AI. Explore my public repositories for more work.
              </p>
            </div>
            <a href="https://github.com/meherabmehu?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition hover:text-white">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.05}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-card sm:p-7">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent/75">{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px w-7 bg-border" />
                    <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-muted">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-accent/30 px-3 py-2 text-[11px] font-medium text-accent transition hover:border-accent/60 hover:bg-accent/10">
                        Live demo <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/60 hover:text-accent">
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="max-w-xl text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">{project.title}</h3>
                {project.context && <p className="mt-2 text-xs font-medium text-accent">{project.context}</p>}

                <ul className="mb-7 mt-5 flex-1 space-y-2.5">
                  {project.description.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-6 text-muted">
                      <span className="mt-[.7em] h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {project.tech.map((technology) => (
                    <span key={technology} className="rounded-md border border-border/80 bg-surface2/80 px-2.5 py-1 font-mono text-[10px] text-muted">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
