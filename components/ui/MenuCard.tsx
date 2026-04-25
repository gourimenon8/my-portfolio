"use client";

import { useState } from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FLAVORS, type Project, type FlavorKey } from "@/lib/projects";

function LinkIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-sm underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function MenuCard({ p }: { p: Project }) {
  const drinkKey = (p?.drink as FlavorKey) ?? "taro";
  const f = FLAVORS[drinkKey] ?? FLAVORS.taro;

  const [broken, setBroken] = useState(false);
  const hasImage = typeof p?.image === "string" && p.image.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card
        id={p.id}
        data-drink={p.drink}
        className={cn(
          "relative rounded-3xl border shadow-sm p-5 transition-shadow",
          "bg-[#fffdf8] text-neutral-800",
          "backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
          "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        )}
      >
        {hasImage && (
          <div
            className={cn(
              "pointer-events-none absolute right-4 -top-3",
              "w-32 h-24 rotate-2 overflow-hidden rounded-xl",
              "ring-1 ring-black/10 shadow-[0_4px_10px_rgba(0,0,0,.12)]",
              "bg-[#fffdf8] z-10"
            )}
          >
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

          <p className="mb-3 text-[13px] leading-relaxed text-neutral-700/90">
            {p.description}
          </p>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {p.tech?.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-200 px-2 py-0.5 text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-1 flex items-center gap-3 text-sm">
            {p.links?.github && (
              <LinkIcon href={p.links.github} label="GitHub" icon={Github} />
            )}

            <Dialog>
              <DialogTrigger asChild>
                <button className="underline text-neutral-700 text-sm">Recipe (details)</button>
              </DialogTrigger>
              <DialogContent className="max-w-xl rounded-3xl border bg-[#fffaf3] p-8 shadow-lg">
                <h2 className="cafe-hand mb-4 text-3xl">{p.name} -- Recipe</h2>
                <p className="mb-4 text-sm leading-relaxed text-neutral-700">
                  {p.long ?? "Case study coming soon. Ask me about the recipe details!"}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.badges?.map((b) => (
                    <span key={b} className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] text-amber-800">
                      #{b}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 italic">Impact: {p.impact}</p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
