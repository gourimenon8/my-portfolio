"use client";
// components/ui/HireMe.tsx

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { PROFILE } from "@/components/ui/profile";
import { FadeUp } from "@/components/ui/AnimateIn";

const VALUE_PROPS = [
  {
    emoji: "🔩",
    label: "Production ML",
    text: "Models that ship — not just notebooks. End-to-end from raw data to live predictions.",
  },
  {
    emoji: "☁️",
    label: "Cloud Infrastructure",
    text: "Serverless pipelines on AWS, Snowflake data warehousing, and GCP — built to scale.",
  },
  {
    emoji: "📊",
    label: "Data → Decisions",
    text: "Forecasting, anomaly detection, and dashboards that actually move the needle.",
  },
];

export default function HireMe() {
  return (
    <section id="hire" className="mx-auto max-w-6xl px-4 pb-16">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-[#fffaf3] to-purple-50 border border-black/5 p-8 md:p-12 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.15)]">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border-[20px] border-amber-100/50 opacity-70" />
          <div className="pointer-events-none absolute -left-6 -bottom-6 h-40 w-40 rounded-full border-[14px] border-purple-100/40 opacity-60" />
          <div className="pointer-events-none absolute right-32 bottom-4 h-20 w-20 rounded-full border-[8px] border-emerald-100/40 opacity-50" />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-2">
              Now Brewing
            </p>
            <h2 className="cafe-hand text-4xl sm:text-5xl mb-4 leading-tight">
              Let's build something great ☕
            </h2>
            <p className="max-w-2xl text-[15px] text-neutral-700 leading-relaxed mb-8">
              I'm actively looking for{" "}
              <strong>data science and ML engineering roles at startups.</strong>{" "}
              I move fast, care about craft, and want data to be a real competitive edge —
              not just a dashboard no one reads. If that sounds like your team, let's talk.
            </p>

            {/* Value props */}
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {VALUE_PROPS.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15, duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5 p-4 shadow-sm cursor-default"
                >
                  <div className="text-2xl mb-2">{v.emoji}</div>
                  <div className="font-semibold text-sm mb-1">{v.label}</div>
                  <div className="text-xs text-neutral-600 leading-relaxed">{v.text}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 text-white font-medium shadow-md transition-colors"
              >
                <Mail className="h-4 w-4" />
                Say Hello
              </motion.a>

              <motion.a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white border border-black/10 px-6 py-3 text-neutral-800 font-medium shadow-sm transition-colors"
              >
                <FileText className="h-4 w-4" />
                View Résumé
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
