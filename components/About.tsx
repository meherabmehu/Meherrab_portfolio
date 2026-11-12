import Reveal from "./Reveal";
import { profile, projects, achievements, education } from "@/content/data";

const stats = [
  { label: "Projects Shipped", value: `${projects.length}+` },
  { label: "National Runner-Up Wins", value: `${achievements.filter((a) => a.highlight).length}` },
  { label: "CGPA", value: education[0]?.note.replace("CGPA ", "") ?? "" },
  { label: "Focus Areas", value: "AI · Product" },
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

        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:content-start">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.15 + index * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                <div className="gradient-text text-2xl font-bold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
