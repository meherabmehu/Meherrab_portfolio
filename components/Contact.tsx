"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/content/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-heading">Contact</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let's build something together</h2>
        <p className="mb-12 max-w-2xl text-muted">
          Have an internship, research collaboration, or role in mind? Send a message and I'll get back to you.
        </p>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-5">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card/60 border border-border">
                <Mail size={16} className="text-accent" />
              </span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card/60 border border-border">
                <Phone size={16} className="text-accent" />
              </span>
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card/60 border border-border">
                <MapPin size={16} className="text-accent" />
              </span>
              {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent3/30 bg-card/40 p-10 text-center">
              <CheckCircle2 className="mb-3 text-accent3" size={32} />
              <p className="font-medium text-ink">Message sent — thank you!</p>
              <p className="mt-1 text-sm text-muted">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card/40 p-6">
              {/* Honeypot — hidden from real users, bots tend to fill every field */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-lg border border-border bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject (optional)"
                className="w-full rounded-lg border border-border bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message"
                className="w-full resize-none rounded-lg border border-border bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
              />

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send message"}
                {status !== "loading" && <Send size={15} />}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
