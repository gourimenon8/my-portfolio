// components/ui/CafeHeader.tsx
import { Mail, Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/components/ui/profile";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function CafeHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#15110e]/80 backdrop-blur border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="cafe-hand text-2xl text-neutral-800 dark:text-neutral-100">
          Gouri's Cafe
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="hidden sm:inline hover:text-amber-700 dark:hover:text-amber-400 transition-colors dark:text-neutral-300">
            About
          </a>
          <a href="#menu" className="hidden sm:inline hover:text-amber-700 dark:hover:text-amber-400 transition-colors dark:text-neutral-300">
            Menu
          </a>
          <a href="#skills" className="hidden sm:inline hover:text-amber-700 dark:hover:text-amber-400 transition-colors dark:text-neutral-300">
            Pantry
          </a>
          <a href="#hire" className="hidden sm:inline rounded-full bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 transition-colors text-sm">
            Hire Me
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hidden sm:flex items-center gap-1 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
