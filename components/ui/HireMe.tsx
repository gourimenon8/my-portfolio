"use client";
// components/ui/HireMe.tsx

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/components/ui/profile";
import { FadeUp } from "@/components/ui/AnimateIn";

const REASONS = [
  {
    emoji: "🔍",
    label: "I ask the right questions",
    text: "Before I touch any data I want to understand what decision it needs to support. That habit alone has saved more time than any technical trick I know.",
  },
  {
    emoji: "🛠️",
    label: "I build things that last",
    text: "Pipelines documented. Code reviewed. Models monitored. I treat production systems with the same care I'd want from anyone touching something I depend on.",
  },
  {
    emoji: "🗣️",
    label: "I translate both ways",
    text: "I can sit with engineers and talk about schema design, then turn around and walk a non-technical team through exactly what the numbers mean. That's rarer than it should be.",
  },
];

export default function HireMe() {
  return (
    <section id="hire" className="mx-auto max-w-6xl px-4 pb-16">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-[#fffaf3] to-purple-50 border border-black/5 p-8 md:p-12 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border-[20px] border-amber-100/50 opacity-70" />
          <div className="pointer-events-none absolute -left-6 -bottom-6 h-40 w-40 rounded-full border-[14px] border-purple-100/40 opacity-60" />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase text-amber-600 font-semibold mb-3">
              Why hire me
            </p>
            <h2 className="cafe-hand text-4xl sm:text-5xl mb-5 leading-tight">
              The honest pitch ☕
            </h2>
            <p className="max-w-2xl text-[15px] text-neutral-700 leading-relaxed mb-4">
              Most data work fails not because of bad models, but because the question was wrong,
              the pipeline broke quietly, or nobody could explain the output. I've spent a lot of
              time thinking about all three of those problems.
            </p>
            <p className="max-w-2xl text-[15px] text-neutral-700 leading-relaxed mb-10">
              I'm actively looking for a full-time role in data science or ML engineering. I work well
              on small teams, pick up new domains quickly, and genuinely enjoy the unglamorous parts
              of the job — like cleaning data, writing tests, and sitting through stakeholder meetings
              so the rest of the team doesn't have to.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-2xl bg-white/75 backdrop-blur-sm border border-black/5 p-5 shadow-sm cursor-default"
                >
                  <div className="text-2xl mb-2">{r.emoji}</div>
                  <div className="font-semibold text-sm text-neutral-800 mb-1.5">{r.label}</div>
                  <div className="text-xs text-neutral-600 leading-relaxed">{r.text}</div>
                </motion.div>
              ))}
            </div>

            {/* Email options */}
            <p className="text-xs text-neutral-400 mb-3 font-medium uppercase tracking-wide">Reach me at</p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-700 px-6 py-3 text-white font-medium shadow-md transition-colors"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </motion.a>

              <motion.a
                href={`mailto:${PROFILE.emailColumbia}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium shadow-md transition-colors"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.emailColumbia}
              </motion.a>

              <motion.a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white border border-black/10 px-6 py-3 text-neutral-800 font-medium shadow-sm transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>

              <motion.a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white border border-black/10 px-6 py-3 text-neutral-800 font-medium shadow-sm transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
