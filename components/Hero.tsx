"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Trophy, Sparkles } from "lucide-react";
import { profile, projects, achievements } from "@/content/data";

const facts = [
  { icon: <Trophy size={14} />, label: `${achievements.filter((item) => item.highlight).length}× National Runner-Up` },
  { icon: <Sparkles size={14} />, label: `${projects.length}+ AI / software projects` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-hero-glow px-6 pb-20 pt-32 text-center sm:min-h-screen"
    >
      <div className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:block" />
      <div className="pointer-events-none absolute -right-24 bottom-24 hidden h-80 w-80 rounded-full bg-accent3/15 blur-3xl sm:block" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted shadow-sm"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent3" />
        Open to Software Engineering · AI/ML opportunities
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-mono text-xs uppercase tracking-[.24em] text-accent"
      >
        Software Engineer · AI / ML
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-7xl lg:text-8xl"
      >
        Hi, I&apos;m <span className="gradient-text">{profile.name.replace("Md. ", "")}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-muted sm:text-xl"
      >
        {profile.headline} · {profile.subheadline}
      </motion.p>

      <p className="mt-3 font-mono text-xs tracking-wide text-accent3 sm:text-sm">
        “Build with purpose. Ship with intelligence.”
      </p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-5 max-w-2xl text-balance text-base font-medium text-ink/90 sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.38 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-2"
      >
        {facts.map((fact) => (
          <span key={fact.label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted">
            <span className="text-accent3">{fact.icon}</span>
            {fact.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
          Explore my work <ArrowUpRight size={15} />
        </a>
        <a href={profile.resumeFile} download className="rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent/50">
          Download CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-8 flex items-center justify-center gap-5"
      >
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="GitHub"><Github size={20} /></a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a href={`mailto:${profile.email}`} className="text-muted transition hover:text-ink" aria-label="Email"><Mail size={20} /></a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-7 flex animate-float flex-col items-center gap-2 text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
