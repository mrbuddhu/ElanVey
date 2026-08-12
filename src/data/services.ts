export interface Service {
  id: string;
  index: string;
  name: string;
  description: string;
  benefits: string[];
  tag?: string;
}

export const services: Service[] = [
  {
    id: "brand-strategy",
    index: "01",
    name: "Brand Strategy",
    description:
      "Define a clear, distinctive positioning that resonates with your audience and sets you apart in a crowded market.",
    benefits: [
      "Brand positioning & messaging",
      "Market analysis & audience insights",
      "Competitive differentiation",
      "Strategic roadmap development",
    ],
    tag: "Strategy",
  },
  {
    id: "creative-direction",
    index: "02",
    name: "Creative Direction",
    description:
      "Art-directed visual identity and creative systems that communicate premium quality and memorable brand presence.",
    benefits: [
      "Visual identity development",
      "Art direction & design systems",
      "Campaign creative concepts",
      "Brand asset production",
    ],
    tag: "Creative",
  },
  {
    id: "digital-growth",
    index: "03",
    name: "Digital Growth",
    description:
      "Strategic digital presence and growth initiatives designed to expand reach, engagement, and measurable impact.",
    benefits: [
      "Digital strategy & planning",
      "Content & channel strategy",
      "Performance optimization",
      "Growth framework implementation",
    ],
    tag: "Growth",
  },
  {
    id: "marketing-partnership",
    index: "04",
    name: "Marketing Partnership",
    description:
      "Access to real-world marketing exposure and learning opportunities connected with Lavent Marketing.",
    benefits: [
      "Industry exposure & mentorship",
      "Practical marketing experience",
      "Agency-level insights",
      "Professional network access",
    ],
    tag: "Partnership",
  },
];
