// lib/projects.ts
// Pure data + types. No React, so this file can be imported from server or client components.

export const FLAVORS = {
  matcha:    { emoji: "🍵", label: "Matcha Latte",   badge: "bg-emerald-100 text-emerald-700", stroke: "#A7DCA9" },
  chai:      { emoji: "🍯", label: "Chai Latte",     badge: "bg-amber-100 text-amber-800",     stroke: "#F5D08A" },
  espresso:  { emoji: "🔥", label: "Espresso Shot",  badge: "bg-neutral-200 text-neutral-800", stroke: "#C4C0BA" },
  jasmine:   { emoji: "🌸", label: "Jasmine Tea",    badge: "bg-pink-100 text-pink-700",       stroke: "#F9B7CF" },
  latte:     { emoji: "🫘", label: "Classic Latte",  badge: "bg-rose-100 text-rose-700",       stroke: "#EEC6C0" },
  taro:      { emoji: "💜", label: "Taro Milk Tea",  badge: "bg-purple-100 text-purple-700",   stroke: "#C8B6FF" },
  cortado:   { emoji: "🧪", label: "Cortado",        badge: "bg-violet-100 text-violet-700",   stroke: "#DDD6FE" },
  cold_brew: { emoji: "🧊", label: "Cold Brew",      badge: "bg-sky-100 text-sky-700",         stroke: "#BAE6FD" },
} as const;

export type FlavorKey = keyof typeof FLAVORS;

export type Project = {
  id: string;
  drink: FlavorKey;
  name: string;
  category: "Pipelines" | "Markets" | "Analytics" | "ETL" | "Research" | "AI";
  description: string;
  tech: string[];
  badges: string[];
  impact: string;
  links: { github?: string; writeup?: string; demo?: string };
  long?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  // ── AI projects (pinned first so they lead the grid) ──────────────────────

  {
    id: "polymarket-pipeline",
    drink: "cold_brew",
    name: "Prediction Market Intelligence Pipeline",
    category: "AI",
    description:
      "Live Polymarket data orchestrated through Mage AI, surfaced in a Streamlit dashboard that tracks crowd forecasts as they shift.",
    tech: ["Python", "Mage AI", "Polymarket API", "Streamlit", "Pandas"],
    badges: ["data-engineering", "prediction-markets", "deployed", "ai"],
    impact:
      "Live at polymarket-mage8.streamlit.app. Built to show Mage AI fluency for a job application, kept running because watching the markets move in real time is genuinely interesting.",
    links: {
      demo: "https://polymarket-mage8.streamlit.app",
    },
    long:
      "Pulls live probability data from Polymarket's API and runs it through a Mage AI orchestration pipeline to clean, normalize, and snapshot market state over time. The Streamlit frontend lets you watch how crowd forecasts shift as events develop. Built this specifically to demonstrate hands-on Mage AI experience for a role. Kept it deployed because it turned out to be a genuinely useful thing to have running.",
  },
  {
    id: "llm-uncertainty",
    drink: "cortado",
    name: "LLM Reasoning and Uncertainty Research",
    category: "AI",
    description:
      "Research on how language models handle uncertainty in their own reasoning, under Prof. Siddhartha Dalal at Columbia.",
    tech: ["Python", "PyTorch", "Transformers", "LLM APIs", "Statistical Analysis"],
    badges: ["llm", "uncertainty", "calibration", "research", "columbia"],
    impact:
      "Findings presented to VCs and institutional stakeholders as part of Columbia's Advanced Analytics research program.",
    links: {},
    long:
      "Working with Prof. Siddhartha Dalal at Columbia on how language models handle uncertainty in their own reasoning. The core question: when a model gives a confident-sounding answer, how do you figure out whether it actually knows? The work involves designing evaluations, analyzing reasoning traces, and building calibration metrics. Presented findings to audiences including VCs and institutional stakeholders.",
  },
 

  // ── Existing projects ─────────────────────────────────────────────────────

  {
    id: "citybike-full",
    drink: "matcha",
    name: "Citybike Forecasting (Full Pipeline)",
    category: "Pipelines",
    description:
      "End-to-end demand forecasting for NYC Citi Bike, from raw trip data to a live Streamlit dashboard.",
    tech: ["Python", "scikit-learn", "XGBoost", "Snowflake", "Streamlit"],
    badges: ["timeseries", "mlops", "feature-engineering"],
    impact: "Reduced demand error and improved capacity alignment across stations.",
    links: { github: "https://github.com/gourimenon8/citybike-forecasting" },
    long:
      "Full pipeline, top to bottom. Pulls historical Citi Bike trip data, engineers features around weather and holidays, trains a gradient boosted model, and serves forecasts through a live Streamlit dashboard. The point was not just the model accuracy. It was making sure every step was reproducible and the output was actually usable by someone who did not build it.",
    image: "/cafe/matcha.jpeg",
  },
  {
    id: "taxi-sp25",
    drink: "chai",
    name: "NYC Taxi Ride Forecasting (SP25)",
    category: "Pipelines",
    description:
      "Short-horizon ride forecasts with disciplined rolling-window evaluation rather than cherry-picked results.",
    tech: ["Python", "Prophet", "XGBoost"],
    badges: ["forecasting", "evaluation", "notebooks"],
    impact: "Consistent predictions across time windows without overfitting to recent data.",
    links: { github: "https://github.com/gourimenon8/sp25_taxi" },
    long:
      "Short-horizon forecasting of NYC taxi demand with an emphasis on honest evaluation. Ran rolling-window backtests and compared Prophet against XGBoost systematically, rather than picking whichever number looked best on the final fold. The lesson was that evaluation methodology matters as much as model choice.",
    image: "/cafe/chai.jpeg",
  },
  {
    id: "crypto-flow-5m",
    drink: "espresso",
    name: "Crypto Flow 5M",
    category: "Markets",
    description:
      "Microstructure and flow signals on 5-minute crypto bars, with regime analysis to find when signals actually hold.",
    tech: ["Python", "pandas", "NumPy"],
    badges: ["quant", "microstructure", "research"],
    impact: "Identified predictive regimes across different volatility states.",
    links: { github: "https://github.com/gourimenon8/cryptoflow-5m" },
    long:
      "Pulls 5-minute bar data for major crypto pairs and builds signals from order flow and microstructure patterns. The kind of fingerprints that only show up at short time scales. Regime analysis on top to figure out when those signals actually hold versus when the market is in a state where they stop working.",
    image: "/cafe/espresso.jpeg",
  },
  {
    id: "blockchain-explorer",
    drink: "jasmine",
    name: "Blockchain Explorer and Network Analysis",
    category: "Analytics",
    description:
      "Treats on-chain transfers as a graph problem: clustering, hub detection, and motif analysis on wallet activity.",
    tech: ["Python", "networkx", "pandas"],
    badges: ["graph", "on-chain", "clustering"],
    impact: "Deeper visibility into wallet identity and transaction flow structure.",
    links: { github: "https://github.com/gourimenon8/blockchain-explorer" },
    long:
      "Treats the blockchain as a graph problem. Builds transaction networks from on-chain transfer data, then runs clustering and motif detection to find patterns in how wallets actually move money. Which addresses are hubs, which ones cluster together, and what that implies about identity and behavior.",
    image: "/cafe/jasmine.jpeg",
  },
  {
    id: "serverless-etl",
    drink: "latte",
    name: "Serverless ETL (AWS + Athena + Power BI)",
    category: "ETL",
    description:
      "Cost-efficient serverless analytics stack: S3 to Lambda to Glue to Athena to Power BI. Zero servers.",
    tech: ["AWS Lambda", "S3", "Athena", "Glue", "Power BI"],
    badges: ["serverless", "data-engineering", "bi"],
    impact: "Infrastructure costs down significantly with no loss of query scale.",
    links: { github: "https://github.com/gourimenon8/aws-lambda-athena-powerbi-nyc-taxi" },
    long:
      "Built to answer a simple question: what is the cheapest way to run analytics on NYC taxi data without standing up a server? The answer was S3 for storage, Lambda for triggers, Glue for cataloging, Athena for querying, and Power BI on the other end. Zero servers, surprisingly low running cost, and a clean enough architecture to actually hand off to someone else.",
    image: "/cafe/latte.jpeg",
  },
  {
    id: "landmine-r",
    drink: "taro",
    name: "Landmine Detection (R)",
    category: "Research",
    description:
      "Signal processing and classification on noisy landmine sensor data, implemented fully in R.",
    tech: ["R", "tidyverse", "caret"],
    badges: ["signal-processing", "classification", "research"],
    impact: "Improved classification performance on the noisiest subsets of the dataset.",
    links: { github: "https://github.com/gourimenon8/landmine-detection-r" },
    long:
      "Landmine detection from sensor data, implemented in R. The challenge was the noise: sensors picked up a lot of interference alongside the actual signal. Used signal processing to clean the data before classification, then ran benchmarks across methods to figure out which approach held up when the data got ugly. Tidy pipelines throughout so the analysis was reproducible.",
    image: "/cafe/taro.jpg",
  },
];
