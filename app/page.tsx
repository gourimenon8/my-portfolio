"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Filter, Search, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

// CafeHeader: import via project alias so the module resolver finds it
import CafeHeader from "@/components/ui/CafeHeader";



/* ---------------------------
   tiny utilities / tokens
---------------------------- */

const PROFILE = {
  name: "Gouri Menon",
  email: "gourimenon8@gmail.com",
  github: "https://github.com/gourimenon8",
  linkedin: "https://www.linkedin.com/in/gouri-menon-646b17b1/",
  resumeUrl: "/Gouri_CV_US.pdf",
} as const;

// ---------- New: small helpers ----------
function SectionTitle({ overline, title }: { overline?: string; title: string }) {
  return (
    <div className="mb-6">
      {overline ? (
        <div className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-1">
          {overline}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

// ---- Inline Hero (temporary) ----
function Hero() {
  return (
    <section className="relative h-[56vh] sm:h-[64vh] w-full flex items-center justify-center overflow-hidden">
      <Image src="/hero.jpeg" alt="Café welcome" fill className="object-cover" priority />
      
      {/* darker glaze to boost contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#fffaf3]/92" />

      <div className="relative z-10 text-center space-y-3">
        <h1 className="cafe-hand text-5xl sm:text-6xl text-white drop-shadow-[0_2px_16px_rgba(0,0,0,.55)]">
          Welcome to Gouri’s Café
        </h1>
        <p className="text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,.55)] text-lg sm:text-xl">
          Fresh data brews, warm models, and cozy analytics.
        </p>
      </div>
    </section>
  );
}



// ---- Inline AboutSection (temporary) ----
function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-white/75 backdrop-blur-sm shadow-[0_10px_40px_-20px_rgba(0,0,0,.3)] ring-1 ring-black/5 p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* LEFT: text */}
          <div className="md:col-span-2">
            <h2 className="heading-serif text-[28px] sm:text-[32px] font-semibold mb-3">
              Meet the Barista
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-neutral-800">
              <p>
                <strong>
                  I am an M.S. in Data Science graduate from the University at Buffalo (SUNY),
                </strong>{" "}
                focused on reliable pipelines, forecasting, and analytical systems. I love turning
                messy data into elegant products and serving insights with clean UI and thoughtful design.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Built serverless ETL on AWS; integrated Snowflake dashboards; deployed APIs for
                  ROI-based decisions.
                </li>
                <li>
                  Researched biomedical imaging; shipped PyTorch segmentation models & supporting services.
                </li>
                <li>
                  Background: Python, SQL, AWS/GCP/Snowflake, Tableau/Power BI.
                </li>
                <li>
                  Bridge technical & business teams: forecasting, anomaly detection, and explainable analytics.
                </li>
              </ol>
            </div>

            {/* Buttons row */}
            <div className="mt-5 flex flex-wrap gap-3">
              {/* Résumé button */}
              <a
                href="/Gouri_CV_US.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
              >
                {/* if you use lucide-react: <FileText className="h-4 w-4" /> */}
                <span>Résumé (PDF)</span>
              </a>

              {/* Optional: Contact/GitHub/LinkedIn quick links */}
              <a
                href="mailto:gourimenon8@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white"
              >
                Email
              </a>
              <a
                href="https://github.com/gourimenon8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gouri-menon-646b17b1/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: the poster image (resized & tidy) */}
          <div className="md:col-span-1">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5]">
              <Image
                src="/about-side.png"   // <-- your image path
                alt="Welcome to my Café poster"
                fill
                sizes="(min-width: 768px) 360px, 80vw"
                className="object-contain rounded-2xl shadow-lg ring-1 ring-black/10"
                priority={false}
              />
              {/* small label effect (optional) */}
              <span className="absolute -left-2 -top-2 rotate-[-6deg] rounded bg-amber-200/90 px-2 py-0.5 text-xs text-amber-900 shadow">
                house blend
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




type FlavorKey = keyof typeof FLAVORS;
// keep your existing FLAVORS but swap colors to pastels
const FLAVORS = {
  matcha:  { emoji:"🍵", label:"Matcha Latte",  badge:"bg-emerald-100 text-emerald-700", stroke:"#A7DCA9" },
  chai:    { emoji:"🍯", label:"Chai Latte",    badge:"bg-amber-100 text-amber-800",   stroke:"#F5D08A" },
  espresso:{ emoji:"🔥", label:"Espresso Shot", badge:"bg-neutral-200 text-neutral-800",stroke:"#C4C0BA" },
  jasmine: { emoji:"🌸", label:"Jasmine Tea",   badge:"bg-pink-100 text-pink-700",     stroke:"#F9B7CF" },
  latte:   { emoji:"🫘", label:"Classic Latte",  badge:"bg-rose-100 text-rose-700",     stroke:"#EEC6C0" },
  taro:    { emoji:"💜", label:"Taro Milk Tea",  badge:"bg-brand-200 text-brand-800",   stroke:"#C8B6FF" },
} as const;




/* ---------------------------
   small SVG corner garnishes
---------------------------- */
function BeanCorner({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="absolute -top-2 -right-2 h-10 w-10 opacity-30"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M30 10c-8 0-12 7-12 13 0 6 4 11 12 11s16-5 16-11-5-13-16-13Z"
        stroke={color}
        strokeWidth="2"
        fill={color}
        opacity=".25"
      />
      <path d="M46 24c-1 7-7 11-16 11" stroke={color} strokeWidth="2" opacity=".6" />
    </svg>
  );
}

function PearlsCorner({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="absolute -bottom-2 -left-1 h-10 w-10 opacity-40"
      viewBox="0 0 64 64"
      fill={color}
    >
      <circle cx="14" cy="50" r="6" />
      <circle cx="30" cy="54" r="5" />
      <circle cx="22" cy="40" r="4" />
    </svg>
  );
}

/* ---------------------------
   pills, tags, links
---------------------------- */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] leading-5 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
      {children}
    </span>
  );
}
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] leading-5 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </span>
  );
}

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
      className="inline-flex items-center gap-1 text-sm underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:decoration-neutral-700"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

/* ---------------------------
   project data
---------------------------- */
type Project = {
  id: string;
  drink: FlavorKey;
  name: string;
  category: "Pipelines" | "Markets" | "Analytics" | "ETL" | "Research";
  description: string;
  tech: string[];
  badges: string[];
  impact: string;
  links: { github: string; writeup?: string; demo?: string };
  overview?: string;
  architecture?: string[];
  insights?: string[];
  challenges?: string[];
  outcomes?: string[];
  long?: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    id: "citybike-full",
    drink: "matcha",
    name: "Citybike Forecasting (Full Pipeline)",
    category: "Pipelines",
    description:"Citybike Forecasting (Full Pipeline)",
    tech: ["Python", "scikit-learn", "XGBoost", "Snowflake", "Streamlit"],
    badges: ["timeseries", "mlops", "feature-engineering"],
    impact: "Reduced demand error & improved capacity alignment.",
    links: { github: "https://github.com/gourimenon8/citybike-forecasting" },
    long: "This project is a full end-to-end pipeline for forecasting NYC Citi Bike demand. It includes data ingestion, feature engineering (holidays, weather), modeling, evaluation, and deployment.",
    
    image:"/cafe/matcha.jpeg"
  },
  {
    id: "taxi-sp25",
    drink: "chai",
    name: "NYC Taxi Ride Forecasting (SP25)",
    category: "Pipelines",
    description:"NYC Taxi Ride Forecasting (SP25)",
    tech: ["Python", "Prophet", "XGBoost"],
    badges: ["forecasting", "evaluation", "notebooks"],
    impact: "Consistent predictions across windows.",
    links: { github: "https://github.com/gourimenon8/sp25_taxi" },
    long: "This project focuses on short-horizon forecasting of NYC taxi rides using clear baselines and disciplined evaluation methods to ensure consistent predictions across different time windows.",
    image:"/cafe/chai.jpeg"
  },
  {
    id: "crypto-flow-5m",
    drink: "espresso",
    name: "Crypto Flow 5M",
    category: "Markets",
    description:"Crypto Flow 5M.",
    tech: ["Python", "pandas", "NumPy"],
    badges: ["quant", "microstructure", "research"],
    impact: "Predictive regimes across volatility states.",
    links: { github: "https://github.com/gourimenon8/cryptoflow-5m" },
    long: "This project analyzes flow and microstructure signals on 5-minute bars of cryptocurrency data, incorporating regime analysis to identify predictive patterns across different volatility states.",
    image: "/cafe/espresso.jpeg"
  },
  {
    id: "blockchain-explorer",
    drink: "jasmine",
    name: "Blockchain Explorer & Network Analysis",
    category: "Analytics",
    description: "Blockchain Explorer & Network Analysis.",
    tech: ["Python", "networkx", "pandas"],
    badges: ["graph", "on-chain", "clustering"],
    impact: "Deeper wallet identity & flow structure.",
    links: { github: "https://github.com/gourimenon8/blockchain-explorer" },
    long: "This project explores on-chain transfer graphs to identify clustering, hubs, and motifs, providing deeper insights into wallet identities and transaction flow structures.",
    image: "/cafe/jasmine.jpeg"
  },
  {
    id: "serverless-etl",
    drink: "latte",
    name: "Serverless ETL (AWS + Athena + Power BI)",
    category: "ETL",
    description:"Serverless ETL (AWS + Athena + Power BI)",
    tech: ["AWS Lambda", "S3", "Athena", "Glue", "Power BI"],
    badges: ["serverless", "data-engineering", "bi"],
    impact: "Costs down; scale retained.",
    links: { github:"https://github.com/gourimenon8/aws-lambda-athena-powerbi-nyc-taxi"},
    long: "This project implements a serverless ETL pipeline using AWS services such as S3, Lambda, Glue, and Athena, topped with Power BI for scalable analytics with minimal infrastructure costs.",
    image: "/cafe/latte.jpeg"
  },
  
  {
    id: "landmine-r",
    drink: "taro",
    name: "Landmine Detection (R)",
    category: "Research",
    description:"Landmine Detection (R)",
    tech: ["R", "tidyverse", "caret"],
    badges: ["signal-processing", "classification", "research"],
    impact: "Improved performance on noisy signals.",
    links: { github: "https://github.com/gourimenon8/landmine-detection-r" },
    long: "This research project focuses on landmine detection using signal processing and classification techniques implemented in R, utilizing tidy pipelines and benchmarks to improve performance on noisy signals.",
    image: "/cafe/taro.jpg"
  },
];

<section className="relative h-[260px] rounded-b-[28px] overflow-hidden shadow-sm">
  <Image
    src="/hero.jpeg"
    alt="Café mural"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  {/* fade into page background so content below is readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/65 to-cream" />
  {/* optional title over the mural */}
  <div className="absolute inset-x-0 bottom-6 mx-auto max-w-6xl px-4">
    <h1 className="cafe-hand text-4xl md:text-5xl">Gouri’s Café</h1>
    <p className="mt-1 text-sm opacity-80">Drinks map to projects. Pick a flavor ☕</p>
  </div>
</section>

/* ---------------------------
   MenuCard (drink → project)
---------------------------- */

function MenuCard({ p }: { p: (typeof PROJECTS)[number] }) {
  // Guards for optional props on p
  const drinkKey = ((p?.drink as FlavorKey) ?? "taro") as FlavorKey;
  const f = FLAVORS[drinkKey] ?? FLAVORS.taro;

  const [broken, setBroken] = useState(false);
  const hasImage = typeof p?.image === "string" && p.image.length > 0;

  return (
    <Card
      id={p.id}
      data-drink={p.drink}
      className={cn(
        "relative rounded-3xl border shadow-sm p-5 transition-all",
        "bg-[#fffdf8] text-neutral-800",
        "backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
        "hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)] hover:-translate-y-[2px]"
      )}
    >
      {/* Polaroid drink image (doesn't block clicks) */}
      {hasImage && (
        <div
          className={cn(
            "pointer-events-none absolute right-4 -top-3",
            "w-32 h-24 rotate-2 overflow-hidden rounded-xl",
            "ring-1 ring-black/10 shadow-[0_4px_10px_rgba(0,0,0,.12)]",
            "bg-[#fffdf8] z-10"
          )}
        >
          {/* masking tape */}
          <div
            className="absolute -top-2 left-6 w-10 h-3 bg-[#f6e8d9]/80 rounded-[2px] -rotate-3"
          />
          {!broken ? (
            <Image
              src={p.image as string}
              alt={p.name}
              width={144}
              height={112}
              className="h-full w-full object-cover"
              onError={() => setBroken(true)}
            />
          ) : (
            <img
              src={p.image as string}
              alt={p.name}
              width={144}
              height={112}
              className="h-full w-full object-cover opacity-40"
            />
          )}
        </div>
      )}

      {/* CONTENT: reserve space on the right so the photo never overlaps */}
      <div className="relative z-10 pr-28 sm:pr-32 pt-6">
        {/* Drink label */}
        <div className="mb-2 flex items-center gap-2 cafe-hand text-[22px]">
          <span>{f.emoji}</span> <span>{f.label}</span>
        </div>

        {/* Description */}
        <p className="mb-3 text-[13px] leading-relaxed text-neutral-700/90">
          {p.description}
        </p>

        {/* Tech tags */}
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

        {/* Links */}
        <div className="mt-1 flex items-center gap-3 text-sm">
          {p.links?.github && (
            <LinkIcon href={p.links.github} label="GitHub" icon={Github} />
          )}

          <Dialog>
            <DialogTrigger asChild>
              <button className="underline text-neutral-700">
                Recipe (details)
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl rounded-3xl border bg-[#fffaf3] p-8 shadow-lg">
              <h2 className="cafe-hand mb-4 text-3xl">{p.name} — Recipe</h2>
              <p className="mb-4 text-sm leading-relaxed text-neutral-700">
                {p.long ?? "Case study coming soon. Ask me about the recipe details!"}
              </p>
              <p className="text-xs text-neutral-500">Served warm with ❤️</p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

// Jump to the first rendered card with this flavor (data-drink="<key>")
function jumpToProjectByDrink(drinkKey: string) {
  const card = document.querySelector<HTMLElement>(`[data-drink="${drinkKey}"]`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    // optional: a quick highlight so the eye catches it
    card.animate(
      [
        { boxShadow: "0 0 0 0 rgba(139,100,198,0)" },
        { boxShadow: "0 0 0 12px rgba(139,100,198,0.18)" },
        { boxShadow: "0 0 0 0 rgba(139,100,198,0)" },
      ],
      { duration: 900 }
    );
  }
}


// --------------------
// PAGE (single default export only)
// --------------------
function FlavorButtons({
  onPick,
}: {
  onPick: (k: FlavorKey | "All") => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-4 pb-4">
      <div className="flex flex-wrap gap-3">
        {(Object.entries(FLAVORS) as [FlavorKey, typeof FLAVORS.taro][])
          .map(([k, v]) => (
          <button
            key={k}
            onClick={() => {
              onPick(k);
              // smooth scroll to grid
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
              "border border-black/5 shadow-sm hover:shadow transition",
              v.badge
            )}
          >
            <span className="text-base">{v.emoji}</span>
            <span className="menu-heading">{v.label}</span>
          </button>
        ))}

        {/* Optional 'All' button */}
        <button
          onClick={() => {
            onPick("All");
            document.querySelector("#projects")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border border-black/5 shadow-sm hover:shadow transition bg-white/70"
        >
          <span className="menu-heading">All drinks</span>
        </button>
      </div>
    </section>
  );
}
function MenuHeading() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 pt-6">
      <h2 className="menu-heading mb-3 text-xl font-semibold">Today’s Menu</h2>
      <p className="mb-4 text-sm text-neutral-600">
        Drinks map to projects. Pick a flavor, open the recipe to see the case study.
      </p>
    </section>
  );
}

export default function Page() {
  const [activeDrink, setActiveDrink] = useState<FlavorKey | "All">("All");

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const CATEGORIES = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();
  return PROJECTS.filter((p) =>
    (activeCat === "All" || p.category === activeCat) &&
    (activeDrink === "All" || p.drink === activeDrink) &&
    (!q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(" ").toLowerCase().includes(q) ||
      p.badges.join(" ").toLowerCase().includes(q))
  );
}, [query, activeCat, activeDrink]);


  return (
  <>
    <CafeHeader />
    <Hero />
    <AboutSection />

    {/* 1) ONE menu heading ONLY */}
    <MenuHeading />

    {/* 2) ONE flavor buttons row ONLY */}
    <FlavorButtons onPick={(k) => setActiveDrink(k)} />

    {/* 3) ONE controls (tabs + search) block ONLY */}
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

    {/* 4) ONE projects grid ONLY (and one id="projects") */}
    <div className="relative">
      {/* Optional side mural on desktop */}
      <div className="pointer-events-none absolute inset-y-0 right-[-100px] hidden w-[520px] opacity-[0.35] lg:block">
        <Image
          src="/hero.jpeg"
          alt=""
          fill
          className="rounded-l-3xl object-cover blur-[1px]"
          sizes="520px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#fffaf3] via-[#fffaf3]/70 to-transparent" />
      </div>

      <section id="projects" className="relative z-[1] mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <MenuCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>

    <div className="mx-auto my-6 h-px max-w-6xl bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent dark:via-neutral-700/70" />

    {/* Footer */}
    <footer id="about" className="border-t border-neutral-200/40 py-10 dark:border-neutral-800">
      {/* …your footer content… */}
    </footer>
  </>
);
}
