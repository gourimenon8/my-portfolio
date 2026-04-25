"use client";
// components/ui/SkillsSection.tsx

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/AnimateIn";

type SkillGroup = {
  emoji: string;
  title: string;
  subtitle: string;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    emoji: "🫘",
    title: "House Beans",
    subtitle: "Languages I work in daily",
    items: ["Python", "SQL", "TypeScript", "R", "Bash"],
  },
  {
    emoji: "🍵",
    title: "Brewing Methods",
    subtitle: "ML & data science",
    items: ["scikit-learn", "XGBoost", "PyTorch", "Prophet", "pandas", "NumPy"],
  },
  {
    emoji: "🥛",
    title: "The Milk Bar",
    subtitle: "Cloud & data infra",
    items: ["AWS (Lambda, S3, Glue, Athena)", "Snowflake", "GCP", "Airflow", "dbt"],
  },
  {
    emoji: "🍯",
    title: "Sweeteners",
    subtitle: "Visualization & BI",
    items: ["Streamlit", "Power BI", "Tableau", "Plotly", "Matplotlib"],
  },
  {
    emoji: "🌸",
    title: "Latte Art",
    subtitle: "Frontend & design",
    items: ["Next.js", "React", "Tailwind", "Figma"],
  },
  {
    emoji: "📓",
    title: "Recipe Book",
    subtitle: "Practices",
    items: ["Forecasting", "Anomaly detection", "Feature engineering", "MLOps", "Explainable analytics"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
      <FadeUp>
        <div className="mb-6">
          <div className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-1">
            The Pantry
          </div>
          <h2 className="cafe-hand text-3xl sm:text-4xl">What I brew with</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            A peek behind the counter — the languages, frameworks, and tools that show up most often in my projects.
          </p>
        </div>
      </FadeUp>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-3xl border border-black/5 bg-white/75 p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-sm cursor-default"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-xl" aria-hidden>
                {g.emoji}
              </span>
              <div>
                <div className="cafe-hand text-xl leading-none">{g.title}</div>
                <div className="text-xs text-neutral-500">{g.subtitle}</div>
              </div>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-[12px] text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
