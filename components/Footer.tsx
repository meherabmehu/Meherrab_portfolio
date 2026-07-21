import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted transition hover:text-ink" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
