import { ArrowUpRight, BrainCircuit, Code2, Layers3 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/content/data";

const focus = [
  { icon: Code2, label: "Software engineering", detail: "Full-stack products & APIs" },
  { icon: BrainCircuit, label: "Applied AI", detail: "ML systems & LLM applications" },
  { icon: Layers3, label: "Product thinking", detail: "From problem to usable software" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <p className="section-heading">About</p>
        <h2 className="mb-12 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Software engineering grounded in real problems.
        </h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
        <div className="space-y-5">
          <Reveal delay={0.05}>
            <p className="text-base leading-8 text-muted sm:text-lg">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-muted sm:text-lg">{profile.bioDetail}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#experience" className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-accent transition hover:gap-3">
              More about my work <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {focus.map(({ icon: Icon, label, detail }, index) => (
            <Reveal key={label} delay={0.1 + index * 0.06}>
              <div className="flex items-center gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{label}</h3>
                  <p className="mt-1 text-sm text-muted">{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
