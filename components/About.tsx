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
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Building AI that ships, not just notebooks</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.1 + i * 0.05}>
            <div className="card-hover rounded-2xl border border-border bg-card/50 p-5 text-center">
              <div className="gradient-text text-2xl font-bold sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
