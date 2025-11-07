// components/ui/CafeHeader.tsx
"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/components/ui/profile";

export default function CafeHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="cafe-hand text-2xl">Gouri’s Café</div>
        <nav className="flex items-center gap-5 text-sm">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1 underline">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={PROFILE.github} target="_blank" className="flex items-center gap-1 underline">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" className="flex items-center gap-1 underline">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
