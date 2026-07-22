import { Briefcase, Users } from "lucide-react";
import Reveal from "./Reveal";
import { experience, leadership } from "@/content/data";

type Item = { icon: React.ReactNode; title: string; org: string; period?: string; points: string[] };

export default function Experience() {
  const items: Item[] = [
    ...experience.map((e) => ({ icon: <Briefcase size={16} />, title: e.role, org: e.org, period: e.period, points: e.points })),
    ...leadership.map((l) => ({ icon: <Users size={16} />, title: l.role, org: l.org, points: l.points })),
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">Experience</p>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Work &amp; Leadership</h2>
      </Reveal>

      <ol className="relative space-y-8 border-l border-border pl-6">
        {items.map((item, i) => (
          <Reveal key={item.title + i} delay={i * 0.07}>
            <li className="relative">
              <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-accent-gradient text-white">
                {item.icon}
              </span>
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-accent3">
                {item.org}
                {item.period ? ` · ${item.period}` : ""}
              </p>
              {item.points.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm text-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
