import Reveal from "./Reveal";
import { profile, projects, achievements, education } from "@/content/data";

const highlightWins = achievements.filter((a) => a.highlight).length;

const stats = [
  { label: "Projects Shipped", value: `${projects.length}+` },
  { label: "National Runner-Up Wins", value: `${highlightWins}` },
  { label: "CGPA", value: education[0]?.note.replace("CGPA ", "") ?? "" },
  { label: "Focus Areas", value: "CV · NLP · MLOps" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">About</p>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Building AI that ships, not just notebooks</h2>
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
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card/50 p-5 text-center">
                <div className="gradient-text text-2xl font-bold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
