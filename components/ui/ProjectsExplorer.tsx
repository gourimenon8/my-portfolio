"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const flavorEntries = Object.entries(FLAVORS) as [FlavorKey, (typeof FLAVORS)[FlavorKey]][];

  return (
    <>
      {/* Flavor pills */}
      <section className="mx-auto max-w-6xl px-4 pt-4 pb-4">
        <div className="flex flex-wrap gap-3">
          {flavorEntries.map(([k, v]) => {
            const isActive = activeDrink === k;
            return (
              <button
                key={k}
                onClick={() => {
                  setActiveDrink(isActive ? "All" : k);
                  scrollToProjects();
                }}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
                  "border border-black/5 shadow-sm hover:shadow transition",
                  v.badge,
                  isActive && "ring-2 ring-offset-1 ring-brand-500"
                )}
              >
                <span className="text-base" aria-hidden>{v.emoji}</span>
                <span className="menu-heading">{v.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => {
              setActiveDrink("All");
              scrollToProjects();
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
              "border border-black/5 shadow-sm hover:shadow transition bg-white/70",
              activeDrink === "All" && "ring-2 ring-offset-1 ring-brand-500"
            )}
          >
            <span className="menu-heading">All drinks</span>
          </button>
        </div>
      </section>

      {/* Category tabs + search */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <Tabs value={activeCat} onValueChange={(v) => setActiveCat(v)}>
              <TabsList className="flex flex-wrap">
                {CATEGORIES.map((c) => (
                  <TabsTrigger key={c} value={c} className="m-0.5">
                    {c}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
            <Input
              placeholder="Search drinks: project, tech, tag…"
              className="w-72 pl-8"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
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
