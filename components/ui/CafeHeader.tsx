// components/ui/CafeHeader.tsx
// Server component -- no state, no client-only APIs.
import { Mail, Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/components/ui/profile";

export default function CafeHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="cafe-hand text-2xl">Gouri's Cafe</a>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#about" className="hidden sm:inline hover:text-amber-700 transition-colors">About</a>
          <a href="#menu" className="hidden sm:inline hover:text-amber-700 transition-colors">Menu</a>
          <a href="#skills" className="hidden sm:inline hover:text-amber-700 transition-colors">Pantry</a>
          <a href="#hire" className="hidden sm:inline rounded-full bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 transition-colors">Hire Me</a>
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1 underline">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 underline">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 underline">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
