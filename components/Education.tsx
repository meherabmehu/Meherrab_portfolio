import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import { education, certifications, certificatesFolderUrl } from "@/content/data";

export default function Education() {
  return (
    <section id="education" className="border-y border-border bg-surface2/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-heading">Education</p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">University &amp; certifications</h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <div className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-gradient text-white">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{e.degree}</h3>
                    <p className="text-sm text-accent3">{e.school}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6">
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
