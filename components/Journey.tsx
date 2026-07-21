import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import Reveal from "./Reveal";
import { experience, education, leadership, certifications, certificatesFolderUrl } from "@/content/data";

type Item = { icon: React.ReactNode; title: string; org: string; period?: string; points: string[] };

export default function Journey() {
  const items: Item[] = [
    ...experience.map((e) => ({ icon: <Briefcase size={16} />, title: e.role, org: e.org, period: e.period, points: e.points })),
    ...education.map((e) => ({ icon: <GraduationCap size={16} />, title: e.degree, org: e.school, period: `${e.period} · ${e.note}`, points: [] })),
    ...leadership.map((l) => ({ icon: <Users size={16} />, title: l.role, org: l.org, points: l.points })),
  ];

  return (
    <section id="journey" className="border-y border-border bg-surface2/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-heading">Journey</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Experience &amp; Education</h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ol className="relative space-y-8 border-l border-border pl-6">
              {items.map((item, i) => (
                <Reveal key={item.title + i} delay={i * 0.06}>
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
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award size={18} className="text-accent" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <p className="text-sm font-medium text-ink">{c.title}</p>
                    <p className="text-xs text-muted">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href={certificatesFolderUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-xs font-medium text-accent hover:underline"
              >
                View all certificates →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
