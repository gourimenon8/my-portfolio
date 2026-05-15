// app/page.tsx
import Image from "next/image";
import CafeHeader from "@/components/ui/CafeHeader";
import ProjectsExplorer from "@/components/ui/ProjectsExplorer";
import SkillsSection from "@/components/ui/SkillsSection";
import HireMe from "@/components/ui/HireMe";
import { FadeUp, FadeIn, SlideInLeft } from "@/components/ui/AnimateIn";
import AskBarista from "@/components/ui/AskBarista";
import { PROJECTS, FLAVORS } from "@/lib/projects";
import { Github, ExternalLink } from "lucide-react";

const PROFILE = {
  name: "Gouri Menon",
  email: "gourimenon8@gmail.com",
  emailColumbia: "gm3293@columbia.edu",
  github: "https://github.com/gourimenon8",
  linkedin: "https://www.linkedin.com/in/gouri-menon-646b17b1/",
} as const;

const STATS = [
  { value: "9+", label: "recipes in production", hint: "shipped at a startup, a research lab, and solo" },
  { value: "3 ☁️", label: "cloud kitchens", hint: "AWS, GCP, and Snowflake" },
  { value: "M.S.", label: "trained at UB, class of '25", hint: "Data Science, University at Buffalo" },
  { value: "NYC", label: "brewing daily", hint: "open to remote and relocation anywhere" },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative h-[60vh] sm:h-[68vh] w-full flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero.jpeg"
        alt="Cafe welcome"
        fill
        sizes="100vw"
        className="object-cover scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#fffaf3]/95" />

      {/* Steam particles */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-[2]"
        aria-hidden="true"
      >
        <div className="steam-particle" style={{ left: "-20px", animationDelay: "0s" }} />
        <div className="steam-particle" style={{ left: "0px", animationDelay: "0.9s" }} />
        <div className="steam-particle" style={{ left: "20px", animationDelay: "1.8s" }} />
      </div>

      <FadeIn className="relative z-10 text-center space-y-4 px-4">
        <p className="text-white/80 text-sm tracking-[0.25em] uppercase font-medium drop-shadow">
          Data Science · ML Engineering · AI Research
        </p>
        <h1 className="cafe-hand text-5xl sm:text-7xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,.6)]">
          Welcome to Gouri's Café
        </h1>
        <p className="text-white/90 drop-shadow text-lg sm:text-xl max-w-xl mx-auto">
          Fresh data brews, warm models, and cozy analytics. Served daily.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <a
            href="#hire"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-2.5 text-white font-medium shadow-lg transition-colors text-sm"
          >
            Open to work ☕
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-2.5 text-white font-medium transition-colors text-sm border border-white/30"
          >
            See my work
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_-20px_rgba(0,0,0,.25)] ring-1 ring-black/5 p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <SlideInLeft className="md:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-xs font-medium text-blue-700">
                  Currently: Course Associate, Advanced Analytics @ Columbia University
                </span>
              </div>

              <p className="text-xs tracking-[0.2em] uppercase text-amber-600 font-semibold mb-2">
                Meet the Barista
              </p>
              <h2 className="cafe-hand text-3xl sm:text-4xl mb-5 leading-snug">
                I care about the full picture, not just the model.
              </h2>

              <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                <p>
                  M.S. in Data Science from Buffalo, currently in New York City. I work as a
                  Course Associate for Columbia's Advanced Analytics program under Prof. Dalal,
                  where I contribute to LLM reasoning and uncertainty research.
                </p>
                <p>
                  Before that I built PySpark pipelines and FastAPI services in production,
                  trained PyTorch segmentation models for biomedical imaging, and designed
                  forecasting systems people actually relied on. I write clean code and{" "}
                  <strong className="text-neutral-900">don't consider something done until
                  the next person can pick it up without calling me.</strong>
                </p>
                <p className="text-neutral-500 text-sm border-l-2 border-amber-300 pl-3">
                  Best when the problem is hard, the data is messy, and someone needs a clear
                  answer before Friday. If that sounds like your team, let's talk.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="relative group rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/80 px-3 py-3 text-center cursor-default"
                  >
                    <div className="cafe-hand text-2xl text-amber-600">{s.value}</div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5 font-medium">
                      {s.label}
                    </div>
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg bg-neutral-900 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {s.hint}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideInLeft>

          <FadeUp delay={0.15} className="md:col-span-1">
            <div className="relative mx-auto w-full max-w-[340px] aspect-[4/5]">
              <Image
                src="/about-side.png"
                alt="Welcome to my Cafe poster"
                fill
                sizes="(min-width: 768px) 340px, 80vw"
                className="object-contain rounded-2xl shadow-xl ring-1 ring-black/8"
                loading="lazy"
              />
              <span className="absolute -left-2 -top-2 rotate-[-6deg] rounded-lg bg-amber-200/90 px-2.5 py-1 text-xs text-amber-900 shadow font-medium">
                house blend ☕
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function MenuHeading() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 pt-8">
      <FadeUp>
        <div className="flex items-end justify-between mb-1">
          <h2 className="menu-heading text-xl font-semibold">Today's Menu</h2>
          <span className="text-xs text-neutral-400 pb-0.5">Click any drink to filter</span>
        </div>
        <p className="mb-5 text-sm text-neutral-500">
          Each drink is a project. Open the recipe card for the full case study.
        </p>
      </FadeUp>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200/50 py-10 mt-4">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-500">
        <p className="cafe-hand text-2xl mb-1 text-neutral-700">Thanks for stopping by ☕</p>
        <p>
          Built with Next.js and Tailwind by{" "}
          <a
            href={`mailto:${PROFILE.email}`}
            className="underline underline-offset-2 hover:text-neutral-800 transition-colors"
          >
            {PROFILE.name}
          </a>{" "}
          &middot; New York City
        </p>
      </div>
    </footer>
  );
}

function TodaysSpecial() {
  const p = PROJECTS.find((p) => p.id === "llm-uncertainty");
  if (!p) return null;
  const f = FLAVORS[p.drink];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-4">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-[#fffaf3] to-violet-50 p-6 shadow-[0_8px_32px_-8px_rgba(245,158,11,0.2)]">
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border-[16px] border-amber-100/40" />

          <div className="flex items-start justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-white text-[11px] font-semibold uppercase tracking-wider shadow-sm">
              ✨ Today's Special
            </div>
            <span className="text-[11px] text-neutral-400 italic">featured research</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2 cafe-hand text-2xl">
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </div>
              <h3 className="font-semibold text-lg text-neutral-800 mb-2 leading-snug">{p.name}</h3>
              <p className="text-[14px] text-neutral-700 leading-relaxed mb-4">{p.long}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/80 border border-amber-200 px-2.5 py-1 text-[11px] text-amber-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 border border-amber-100 p-4 shadow-sm">
              <div className="text-[9px] uppercase tracking-[0.16em] text-neutral-400 mb-2 font-semibold">✨ What it yields</div>
              <p className="text-sm text-neutral-600 italic leading-relaxed border-l-2 border-amber-300 pl-3">{p.impact}</p>
              <div className="mt-3 flex gap-3">
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 transition-colors">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                )}
                {p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800 transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" /> Live demo
                  </a>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.badges.map((b) => (
                  <span key={b} className="rounded-full bg-violet-50 border border-violet-200 px-2.5 py-0.5 text-[11px] text-violet-700">
                    #{b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <CafeHeader />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <MenuHeading />
      <TodaysSpecial />
      <ProjectsExplorer />
      <div className="mx-auto my-8 h-px max-w-6xl bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
      <HireMe />
      <Footer />
      <AskBarista />
    </>
  );
}
