import Reveal from "./Reveal";
import { profile, projects, achievements } from "@/content/data";

const stats = [
  { label: "Projects", value: `${projects.length}` },
  { label: "National runner-up finishes", value: `${achievements.filter((a) => a.title.includes("Runner-Up")).length}` },
  { label: "Focus", value: "AI · Software" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">About</p>
        <h2 className="mb-10 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Engineering useful software, with intelligence built in.
        </h2>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{profile.bioDetail}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1 lg:content-start">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.15 + index * 0.05}>
              <div className="flex h-full items-center justify-between gap-4 rounded-xl border border-border bg-card/70 px-4 py-3.5 transition hover:border-accent/30">
                <div className="text-xs text-muted sm:text-sm">{stat.label}</div>
                <div className="shrink-0 text-base font-semibold text-ink sm:text-lg">{stat.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
