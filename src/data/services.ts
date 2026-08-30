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
    id: "strategy",
    index: "01",
    name: "Smart Planning",
    description:
      "We help you figure out the best way to present your ideas so that people actually notice and remember them.",
    benefits: [
      "Clear messaging & positioning",
      "Understanding your audience",
      "Standing out from others",
      "Simple step-by-step roadmap",
    ],
    tag: "Planning",
  },
  {
    id: "creative-direction",
    index: "02",
    name: "Creative Design",
    description:
      "Beautiful, eye-catching visual designs that look professional and make a lasting impression on everyone who sees them.",
    benefits: [
      "Logo & identity design",
      "Art direction & style guide",
      "Campaign & poster designs",
      "All design files you need",
    ],
    tag: "Design",
  },
  {
    id: "digital-growth",
    index: "03",
    name: "Online Growth",
    description:
      "Get noticed on the internet! We help you build your presence online so more people can find and follow what you do.",
    benefits: [
      "Website & social media planning",
      "Content ideas & posting strategy",
      "Making your pages work better",
      "Simple tools to track progress",
    ],
    tag: "Growth",
  },
  {
    id: "marketing-partnership",
    index: "04",
    name: "Marketing Learning",
    description:
      "Get real-world marketing experience and learning opportunities through our connection with Lavent Marketing.",
    benefits: [
      "Industry exposure & mentorship",
      "Practical hands-on experience",
      "Insider tips from professionals",
      "Networking with the right people",
    ],
    tag: "Learning",
  },
];
