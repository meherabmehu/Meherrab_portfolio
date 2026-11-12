"use client";

import { useMemo, useState } from "react";
import { Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/content/data";

const filters = ["All work", "Full-stack AI", "Research & AI", "Edge AI", "Full-stack"] as const;
const INITIAL_COUNT = 6;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All work");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(
    () => activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const visibleProjects = showAll || activeFilter !== "All work"
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  function changeFilter(filter: (typeof filters)[number]) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  return (
    <section id="projects" className="relative border-y border-border bg-surface/70 px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-heading">Selected projects · 2025—26</p>
              <h2 className="text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Built to solve real problems.</h2>
              <p className="mt-4 max-w-2xl text-muted">
                Recent product work, applied AI and research—from business copilots to TinyML running on an ESP32.
              </p>
            </div>
            <a href="https://github.com/meherabmehu?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition hover:text-white">
              All GitHub repositories <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => changeFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                activeFilter === filter
                  ? "border-accent/60 bg-accent/10 text-accent shadow-[0_0_22px_-12px_rgba(92,225,230,.7)]"
                  : "border-border bg-card/60 text-muted hover:border-accent/35 hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 4) * 0.045}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-card sm:p-7">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent/75">{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px w-7 bg-border" />
                    <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-muted">{project.category}</span>
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/60 hover:text-accent">
                      <Github size={15} />
                    </a>
                  )}
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

        {activeFilter === "All work" && filteredProjects.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition hover:border-accent/50 hover:text-accent">
              {showAll ? <>Show selected <ChevronUp size={15} /></> : <>Explore all {filteredProjects.length} projects <ChevronDown size={15} /></>}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
