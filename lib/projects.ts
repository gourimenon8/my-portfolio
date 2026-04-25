// lib/projects.ts
// Pure data + types. No React, so this file can be imported from server or client components.

export const FLAVORS = {
  matcha:   { emoji: "🍵", label: "Matcha Latte",   badge: "bg-emerald-100 text-emerald-700", stroke: "#A7DCA9" },
  chai:     { emoji: "🍯", label: "Chai Latte",     badge: "bg-amber-100 text-amber-800",     stroke: "#F5D08A" },
  espresso: { emoji: "🔥", label: "Espresso Shot",  badge: "bg-neutral-200 text-neutral-800", stroke: "#C4C0BA" },
  jasmine:  { emoji: "🌸", label: "Jasmine Tea",    badge: "bg-pink-100 text-pink-700",       stroke: "#F9B7CF" },
  latte:    { emoji: "🫘", label: "Classic Latte",  badge: "bg-rose-100 text-rose-700",       stroke: "#EEC6C0" },
  taro:     { emoji: "💜", label: "Taro Milk Tea",  badge: "bg-brand-200 text-brand-800",     stroke: "#C8B6FF" },
} as const;

export type FlavorKey = keyof typeof FLAVORS;

export type Project = {
  id: string;
  drink: FlavorKey;
  name: string;
  category: "Pipelines" | "Markets" | "Analytics" | "ETL" | "Research";
  description: string;
  tech: string[];
  badges: string[];
  impact: string;
  links: { github: string; writeup?: string; demo?: string };
  long?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "citybike-full",
    drink: "matcha",
    name: "Citybike Forecasting (Full Pipeline)",
    category: "Pipelines",
    description: "End-to-end demand forecasting for NYC Citi Bike with a Streamlit dashboard.",
    tech: ["Python", "scikit-learn", "XGBoost", "Snowflake", "Streamlit"],
    badges: ["timeseries", "mlops", "feature-engineering"],
    impact: "Reduced demand error & improved capacity alignment.",
    links: { github: "https://github.com/gourimenon8/citybike-forecasting" },
    long: "A full end-to-end pipeline for forecasting NYC Citi Bike demand: data ingestion, feature engineering (holidays, weather), modeling, evaluation, and deployment.",
    image: "/cafe/matcha.jpeg",
  },
  {
    id: "taxi-sp25",
    drink: "chai",
    name: "NYC Taxi Ride Forecasting (SP25)",
    category: "Pipelines",
    description: "Short-horizon ride forecasts with disciplined evaluation across rolling windows.",
    tech: ["Python", "Prophet", "XGBoost"],
    badges: ["forecasting", "evaluation", "notebooks"],
    impact: "Consistent predictions across windows.",
    links: { github: "https://github.com/gourimenon8/sp25_taxi" },
    long: "Short-horizon forecasting of NYC taxi rides using clear baselines and disciplined evaluation methods to ensure consistent predictions across different time windows.",
    image: "/cafe/chai.jpeg",
  },
  {
    id: "crypto-flow-5m",
    drink: "espresso",
    name: "Crypto Flow 5M",
    category: "Markets",
    description: "Microstructure & flow signals on 5-minute crypto bars, with regime analysis.",
    tech: ["Python", "pandas", "NumPy"],
    badges: ["quant", "microstructure", "research"],
    impact: "Predictive regimes across volatility states.",
    links: { github: "https://github.com/gourimenon8/cryptoflow-5m" },
    long: "Analyzes flow and microstructure signals on 5-minute bars of cryptocurrency data, incorporating regime analysis to identify predictive patterns across different volatility states.",
    image: "/cafe/espresso.jpeg",
  },
  {
    id: "blockchain-explorer",
    drink: "jasmine",
    name: "Blockchain Explorer & Network Analysis",
    category: "Analytics",
    description: "On-chain transfer graphs: clusters, hubs, and motifs in wallet activity.",
    tech: ["Python", "networkx", "pandas"],
    badges: ["graph", "on-chain", "clustering"],
    impact: "Deeper wallet identity & flow structure.",
    links: { github: "https://github.com/gourimenon8/blockchain-explorer" },
    long: "Explores on-chain transfer graphs to identify clustering, hubs, and motifs, providing deeper insights into wallet identities and transaction flow structures.",
    image: "/cafe/jasmine.jpeg",
  },
  {
    id: "serverless-etl",
    drink: "latte",
    name: "Serverless ETL (AWS + Athena + Power BI)",
    category: "ETL",
    description: "Cost-efficient serverless analytics: S3 → Lambda → Glue → Athena → Power BI.",
    tech: ["AWS Lambda", "S3", "Athena", "Glue", "Power BI"],
    badges: ["serverless", "data-engineering", "bi"],
    impact: "Costs down; scale retained.",
    links: { github: "https://github.com/gourimenon8/aws-lambda-athena-powerbi-nyc-taxi" },
    long: "A serverless ETL pipeline using AWS services such as S3, Lambda, Glue, and Athena, topped with Power BI for scalable analytics with minimal infrastructure costs.",
    image: "/cafe/latte.jpeg",
  },
  {
    id: "landmine-r",
    drink: "taro",
    name: "Landmine Detection (R)",
    category: "Research",
    description: "Signal processing + classification for noisy landmine sensor data.",
    tech: ["R", "tidyverse", "caret"],
    badges: ["signal-processing", "classification", "research"],
    impact: "Improved performance on noisy signals.",
    links: { github: "https://github.com/gourimenon8/landmine-detection-r" },
    long: "Landmine detection using signal processing and classification techniques implemented in R, utilizing tidy pipelines and benchmarks to improve performance on noisy signals.",
    image: "/cafe/taro.jpg",
  },
];
