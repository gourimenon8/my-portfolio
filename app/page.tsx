// app/page.tsx
import Image from "next/image";
import CafeHeader from "@/components/ui/CafeHeader";
import ProjectsExplorer from "@/components/ui/ProjectsExplorer";
import SkillsSection from "@/components/ui/SkillsSection";
import HireMe from "@/components/ui/HireMe";
import { FadeUp, FadeIn, SlideInLeft } from "@/components/ui/AnimateIn";

const PROFILE = {
  name: "Gouri Menon",
  email: "gourimenon8@gmail.com",
  github: "https://github.com/gourimenon8",
  linkedin: "https://www.linkedin.com/in/gouri-menon-646b17b1/",
} as const;

const STATS = [
  { value: "6+", label: "ML projects shipped" },
  { value: "3", label: "Cloud platforms" },
  { value: "M.S.", label: "Data Science, UB" },
  { value: "∞", label: "Coffees consumed" },
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
      <FadeIn className="relative z-10 text-center space-y-4 px-4">
        <p className="text-white/80 text-sm tracking-[0.25em] uppercase font-medium drop-shadow">
          Data Science · ML Engineering · Analytics
        </p>
        <h1 className="cafe-hand text-5xl sm:text-7xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,.6)]">
          Welcome to Gouri's Café
        </h1>
        <p className="text-white/90 drop-shadow text-lg sm:text-xl max-w-xl mx-auto">
          Fresh data brews, warm models, and cozy analytics — served daily.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <a
            href="#hire"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-2.5 text-white font-medium shadow-lg transition-colors text-sm"
          >
            I'm open to work ☕
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
              <p className="text-xs tracking-[0.2em] uppercase text-amber-600 font-semibold mb-2">Meet the Barista</p>
              <h2 className="cafe-hand text-3xl sm:text-4xl mb-5 leading-snug">
                I ship ML that actually works in production.
              </h2>
              <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                <p>
                  <strong className="text-neutral-900">M.S. in Data Science from University at Buffalo (SUNY).</strong>{" "}
                  I build end-to-end data systems — from raw ingestion to live dashboards — and I care as much
                  about the last mile as I do about model accuracy.
                </p>
                <p>
                  I've built serverless ETL on AWS that cut infrastructure costs while retaining scale,
                  trained PyTorch segmentation models for biomedical imaging research, and designed
                  forecasting pipelines for real-time demand prediction. My stack spans Python, SQL,
                  AWS, Snowflake, and a healthy amount of Tailwind.
                </p>
                <p className="text-neutral-500 italic text-sm border-l-2 border-amber-300 pl-3">
                  I thrive at early-stage startups where data is a competitive edge, not an afterthought.
                  Looking for a team that moves fast and wants data to actually drive decisions.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/80 px-3 py-3 text-center"
                  >
                    <div className="cafe-hand text-2xl text-amber-600">{s.value}</div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-700 px-5 py-2.5 text-white text-sm font-medium shadow transition-colors"
                >
                  Email me
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 hover:bg-white px-5 py-2.5 text-neutral-800 text-sm font-medium transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 hover:bg-white px-5 py-2.5 text-neutral-800 text-sm font-medium transition-colors"
                >
                  LinkedIn
                </a>
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
          Built with Next.js & Tailwind by{" "}
          <a href={`mailto:${PROFILE.email}`} className="underline underline-offset-2 hover:text-neutral-800 transition-colors">
            {PROFILE.name}
          </a>
        </p>
      </div>
    </footer>
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
      <ProjectsExplorer />
      <div className="mx-auto my-8 h-px max-w-6xl bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
      <HireMe />
      <Footer />
    </>
  );
}
