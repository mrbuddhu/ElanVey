export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We begin by understanding your brand, goals, audience, and the landscape you operate in.",
  },
  {
    index: "02",
    title: "Strategy",
    description:
      "We develop a clear strategic foundation — positioning, messaging, and a roadmap for growth.",
  },
  {
    index: "03",
    title: "Execute",
    description:
      "We bring the strategy to life through creative direction, digital presence, and tactical execution.",
  },
  {
    index: "04",
    title: "Grow",
    description:
      "We refine, optimize, and scale — ensuring your brand continues to evolve and perform.",
  },
];
