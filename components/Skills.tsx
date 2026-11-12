import Reveal from "./Reveal";
import { skills } from "@/content/data";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface2/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-heading">Skills</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Core skills</h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card/40 p-5">
                <h3 className="mb-3 text-sm font-semibold text-accent">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
