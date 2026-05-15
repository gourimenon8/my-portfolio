"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FLAVORS, type Project, type FlavorKey } from "@/lib/projects";

export default function MenuCard({ p }: { p: Project }) {
  const drinkKey = (p?.drink as FlavorKey) ?? "taro";
  const f = FLAVORS[drinkKey] ?? FLAVORS.taro;
  const [flipped, setFlipped] = useState(false);
  const [broken, setBroken] = useState(false);
  const hasImage = typeof p?.image === "string" && p.image.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => setFlipped((v) => !v)}
      className="cursor-pointer"
      style={{ perspective: "1200px", minHeight: "300px" }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d", position: "relative", minHeight: "300px" }}
      >

        {/* ── FRONT ─────────────────────────────────────────── */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={cn(
            "absolute inset-0 rounded-3xl border shadow-sm p-5",
            "bg-[#fffdf8] text-neutral-800",
            "shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
            "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            "transition-shadow overflow-hidden"
          )}
        >
          {hasImage && (
            <div className={cn(
              "pointer-events-none absolute right-4 -top-3",
              "w-32 h-24 rotate-2 overflow-hidden rounded-xl",
              "ring-1 ring-black/10 shadow-[0_4px_10px_rgba(0,0,0,.12)]",
              "bg-[#fffdf8] z-10"
            )}>
              <div className="absolute -top-2 left-6 w-10 h-3 bg-[#f6e8d9]/80 rounded-[2px] -rotate-3" />
              {!broken ? (
                <Image
                  src={p.image as string}
                  alt={p.name}
                  width={144}
                  height={112}
                  sizes="144px"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={() => setBroken(true)}
                />
              ) : (
                <div className="h-full w-full bg-neutral-100 grid place-items-center text-2xl">
                  {f.emoji}
                </div>
              )}
            </div>
          )}

          <div className="relative z-10 pr-28 sm:pr-32 pt-6">
            <div className="mb-2 flex items-center gap-2 cafe-hand text-[22px]">
              <span aria-hidden>{f.emoji}</span>
              <span>{f.label}</span>
            </div>
            <h3 className="mb-1 font-semibold text-sm leading-snug">{p.name}</h3>
            <p className="mb-3 text-[13px] leading-relaxed text-neutral-700/90">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {p.tech?.map((t) => (
                <span key={t} className="rounded-full bg-neutral-200 px-2 py-0.5 text-[11px]">{t}</span>
              ))}
            </div>
            <p className="text-[11px] text-neutral-400">Tap for the recipe →</p>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
        >
          {/* Drink-color stripe */}
          <div className={`h-2 w-full ${f.badge.split(" ")[0]}`} style={{ opacity: 0.9 }} />

          <div
            className="px-5 pb-5 pt-4 h-full overflow-y-auto"
            style={{
              background: "#fdf6e9",
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 29px, #e6d4b8 29px, #e6d4b8 30px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-dashed border-amber-200/80">
              <span className="text-2xl leading-none">{f.emoji}</span>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                  {f.label}
                </div>
                <h3 className="cafe-hand text-lg leading-tight">{p.name}</h3>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-3">
              <div className="text-[9px] uppercase tracking-[0.14em] text-neutral-400 mb-1.5 font-semibold">
                🫘 Ingredients
              </div>
              <div className="flex flex-wrap gap-1">
                {p.tech?.map((t) => (
                  <span key={t} className="rounded-full bg-amber-100 border border-amber-200 px-2 py-0.5 text-[10px] text-amber-900">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Method */}
            <div className="mb-3">
              <div className="text-[9px] uppercase tracking-[0.14em] text-neutral-400 mb-1.5 font-semibold">
                📋 Method
              </div>
              <p className="text-[12px] leading-relaxed text-neutral-700 bg-white/60 rounded-xl px-3 py-2 border border-white/80">
                {p.long ?? "Case study coming soon — ask me about this one!"}
              </p>
            </div>

            {/* Yield */}
            {p.impact && (
              <div className="mb-3">
                <div className="text-[9px] uppercase tracking-[0.14em] text-neutral-400 mb-1.5 font-semibold">
                  ✨ Yield
                </div>
                <p className="text-[12px] text-neutral-600 italic border-l-2 border-amber-300 pl-2">
                  {p.impact}
                </p>
              </div>
            )}

            {/* Footer: links + flip back */}
            <div className="flex items-center justify-between pt-2 border-t border-dashed border-amber-100/80 mt-2">
              <div className="flex gap-3">
                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    <Github className="h-3 w-3" /> GitHub
                  </a>
                )}
                {p.links?.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" /> Live demo
                  </a>
                )}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                className="text-[10px] text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                ← flip back
              </button>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
