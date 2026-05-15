"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import MenuCard from "@/components/ui/MenuCard";
import { FLAVORS, PROJECTS, type FlavorKey } from "@/lib/projects";

export default function ProjectsExplorer() {
  const [activeDrink, setActiveDrink] = useState<FlavorKey | "All">("All");
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const CATEGORIES = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter(
      (p) =>
        (activeCat === "All" || p.category === activeCat) &&
        (activeDrink === "All" || p.drink === activeDrink) &&
        (!q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.join(" ").toLowerCase().includes(q) ||
          p.badges.join(" ").toLowerCase().includes(q))
    );
  }, [query, activeCat, activeDrink]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const flavorEntries = Object.entries(FLAVORS) as [FlavorKey, (typeof FLAVORS)[FlavorKey]][];

  return (
    <>
      {/* ── Chalkboard filter bar ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-2 pb-5">
        <div className="rounded-3xl bg-[#1e1a17] px-5 pt-5 pb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.18)]">

          {/* Chalk label */}
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 mb-3 font-medium">
            ☕ filter by drink
          </div>

          {/* Flavor pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {flavorEntries.map(([k, v]) => {
              const isActive = activeDrink === k;
              return (
                <button
                  key={k}
                  onClick={() => { setActiveDrink(isActive ? "All" : k); scrollToProjects(); }}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all",
                    "border",
                    isActive
                      ? "bg-stone-100 text-stone-900 border-stone-100 shadow-sm"
                      : "bg-stone-800/60 text-stone-300 border-stone-700 hover:bg-stone-700 hover:text-stone-100"
                  )}
                >
                  <span className="text-base leading-none" aria-hidden>{v.emoji}</span>
                  <span className="cafe-hand text-[15px] leading-none">{v.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => { setActiveDrink("All"); scrollToProjects(); }}
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-all",
                "border",
                activeDrink === "All"
                  ? "bg-stone-100 text-stone-900 border-stone-100 shadow-sm"
                  : "bg-stone-800/60 text-stone-300 border-stone-700 hover:bg-stone-700 hover:text-stone-100"
              )}
            >
              <span className="cafe-hand text-[15px] leading-none">All drinks</span>
            </button>
          </div>

          {/* Chalk divider */}
          <div className="h-px bg-stone-700/50 mb-4" />

          {/* Category tabs + search */}
          <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row">
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={cn(
                    "rounded-lg px-3 py-1 text-xs font-medium transition-all",
                    activeCat === c
                      ? "bg-amber-500 text-white shadow-sm"
                      : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-stone-500" />
              <input
                placeholder="search the menu..."
                className={cn(
                  "w-56 rounded-full pl-8 pr-4 py-1.5 text-sm",
                  "bg-stone-800/80 border border-stone-700",
                  "text-stone-200 placeholder:text-stone-500",
                  "outline-none focus:border-amber-500/50 focus:bg-stone-800",
                  "transition-colors"
                )}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────── */}
      <section id="projects" className="relative z-[1] mx-auto max-w-6xl px-4 pb-14">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-neutral-500 py-10">
            No drinks on the menu match that order. Try clearing filters.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <MenuCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
