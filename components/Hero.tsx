"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/content/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-hero-glow bg-grid-pattern bg-[length:36px_36px] px-6 pt-24 text-center"
    >
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
        className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-muted sm:text-base"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projects"
          className="rounded-lg bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
        >
          View Projects
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
        transition={{ duration: 0.7, delay: 0.5 }}
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
