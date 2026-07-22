"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Trophy, Sparkles } from "lucide-react";
import { profile, projects, achievements } from "@/content/data";

const highlightWins = achievements.filter((a) => a.highlight).length;

const facts = [
  { icon: <Trophy size={13} />, label: `${highlightWins}× National Runner-Up` },
  { icon: <Sparkles size={13} />, label: `${projects.length}+ AI/ML Projects` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-hero-glow bg-grid-pattern bg-[length:36px_36px] px-6 pt-24 text-center"
    >
      {/* Decorative floating gradient orbs — purely visual, hidden on small screens to stay clean */}
      <div className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-float sm:block" />
      <div
        className="pointer-events-none absolute -right-24 bottom-24 hidden h-80 w-80 rounded-full bg-accent3/20 blur-3xl animate-float sm:block"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating terminal-style chip — reinforces the AI/engineer identity visually */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pointer-events-none absolute right-10 top-32 hidden w-56 rotate-6 rounded-xl border border-border bg-card/70 p-3 text-left font-mono text-[11px] text-muted shadow-glow backdrop-blur lg:block"
      >
        <p className="text-accent3">$ whoami</p>
        <p className="mt-1">meherab — ai/ml engineer</p>
        <p className="mt-2 text-accent3">$ status</p>
        <p className="mt-1">shipping models, not just notebooks</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent3 animate-pulse" />
        Open to AI/ML Engineer &amp; Research Engineer roles
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl"
      >
        Hi, I'm <span className="gradient-text">{profile.name.replace("Md. ", "")}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 max-w-2xl text-lg text-muted sm:text-xl"
      >
        {profile.headline} · {profile.subheadline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-5 max-w-xl text-balance text-base font-medium text-ink/90 sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-2"
      >
        {facts.map((f) => (
          <span
            key={f.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted"
          >
            <span className="text-accent3">{f.icon}</span>
            {f.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projects"
          className="rounded-lg bg-accent-gradient px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
        >
          View My Work
        </a>
        <a
          href={profile.resumeFile}
          download
          className="rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/50"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-8 flex items-center justify-center gap-5"
      >
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href={`mailto:${profile.email}`} className="text-muted transition hover:text-ink" aria-label="Email">
          <Mail size={20} />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
