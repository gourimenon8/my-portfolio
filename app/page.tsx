// app/page.tsx
// Server component -- client islands are imported where needed.

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
  resumeUrl: "/Gouri_CV_US.pdf",
} as const;

const STATS = [
  { value: "6+", label: "ML projects shipped" },
  { value: "3", label: "Cloud platforms" },
  { value: "M.S.", label: "Data Science, UB" },
  { value: "INF", label: "Coffees consumed" },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative h-[56vh] sm:h-[64vh] w-full flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero.jpeg"
        alt="Cafe welcome"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#fffaf3]/92" />
      <FadeIn className="relative z-10 text-center space-y-3 px-4">
        <h1 className="cafe-hand text-5xl sm:text-6xl text-white drop-shadow-[0_2px_16px_rgba(0,0,0,.55)]">
          Welcome to Gouri's Cafe
        </h1>
        <p className="text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,.55)] text-lg sm:text-xl">
          Fresh data brews, warm models, and cozy analytics.
        </p>
      </FadeIn>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-white/75 backdrop-blur-sm shadow-[0_10px_40px_-20px_rgba(0,0,0,.3)] ring-1 ring-black/5 p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <SlideInLeft className="md:col-span-2">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-2">Meet the Barista</p>
              <h2 className="cafe-hand text-3xl sm:text-4xl mb-4">
                I ship ML that actually works in production.
              </h2>

              <div className="space-y-3 text-[15px] leading-relaxed text-neutral-800">
                <p>
                  <strong>M.S. in Data Science from University at Buffalo (SUNY).</strong>{" "}
                  I build end-to-end data systems -- from raw ingestion to live dashboards -- and I care as much
                  about the last mile as I do about the model accuracy.
                </p>
                <p>
                  I've built serverless ETL on AWS that cut infrastructure costs while retaining scale,
                  trained PyTorch segmentation models for biomedical imaging research, and designed
                  forecasting pipelines for real-time demand prediction. My stack spans Python, SQL,
                  AWS, Snowflake, and a healthy amount of Tailwind.
                </p>
                <p className="text-neutral-600 italic">
                  I thrive at early-stage startups where data is a competitive edge, not an afterthought.
                  If you want someone who can wear multiple hats -- data infrastructure, ML modeling,
                  and clear communication with non-technical teams -- let's talk.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-amber-50/80 border border-amber-100 px-3 py-2 text-center"
                  >
                    <div className="cafe-hand text-2xl text-amber-700">{s.value}</div>
                    <div className="text-[11px] text-neutral-600 leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition-colors"
                >
                  Resume (PDF)
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white transition-colors"
                >
                  Email
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-neutral-800 hover:bg-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </SlideInLeft>

          <FadeUp delay={0.15} className="md:col-span-1">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5]">
              <Image
                src="/about-side.png"
                alt="Welcome to my Cafe poster"
                fill
                sizes="(min-width: 768px) 360px, 80vw"
                className="object-contain rounded-2xl shadow-lg ring-1 ring-black/10"
                loading="lazy"
              />
              <span className="absolute -left-2 -top-2 rotate-[-6deg] rounded bg-amber-200/90 px-2 py-0.5 text-xs text-amber-900 shadow">
                house blend
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
    <section id="menu" className="mx-auto max-w-6xl px-4 pt-6">
      <FadeUp>
        <h2 className="menu-heading mb-3 text-xl font-semibold">Today's Menu</h2>
        <p className="mb-4 text-sm text-neutral-600">
          Drinks map to projects. Pick a flavor, open the recipe to see the case study.
        </p>
      </FadeUp>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200/40 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-600">
        <p className="cafe-hand text-xl mb-2">Thanks for stopping by</p>
        <p>
          Made with love by {PROFILE.name}. Reach out at{" "}
          <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a>.
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
      <div className="mx-auto my-6 h-px max-w-6xl bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent" />
      <HireMe />
      <Footer />
    </>
  );
}
