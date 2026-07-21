import { Trophy, Star } from "lucide-react";
import Reveal from "./Reveal";
import { achievements } from "@/content/data";

export default function Achievements() {
  const highlights = achievements.filter((a) => a.highlight);
  const rest = achievements.filter((a) => !a.highlight);

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">Achievements</p>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Competitions &amp; Recognition</h2>
      </Reveal>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {highlights.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <div className="card-hover h-full rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card/60 to-card/60 p-5">
              <Trophy className="mb-3 text-accent3" size={22} />
              <p className="text-sm font-semibold leading-snug text-ink">{a.title}</p>
              {a.note && <p className="mt-1 text-xs text-muted">{a.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="rounded-2xl border border-border bg-card/30 p-6">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {rest.map((a) => (
              <li key={a.title} className="flex items-start gap-2 text-sm text-muted">
                <Star size={14} className="mt-0.5 shrink-0 text-accent2" />
                <span>
                  {a.title}
                  {a.note && <span className="text-muted/70"> — {a.note}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
