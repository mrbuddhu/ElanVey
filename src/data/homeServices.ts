export interface HomeService {
  id: string;
  name: string;
  description: string;
  icon:
    | "star"
    | "sun"
    | "triangle"
    | "snowflake"
    | "diamond"
    | "rocket"
    | "flame"
    | "sparkle"
    | "bolt"
    | "target"
    | "megaphone";
}

export const homeServices: HomeService[] = [
  {
    id: "s1",
    name: "Content Strategy",
    description:
      "What to create, where to post & why.",
    icon: "star",
  },
  {
    id: "s2",
    name: "Content Ideation",
    description:
      "Hooks, concepts, formats & creative direction.",
    icon: "sun",
  },
  {
    id: "s3",
    name: "Content Creation",
    description:
      "Reels, carousels, creatives & visual content.",
    icon: "triangle",
  },
  {
    id: "s4",
    name: "Social Media Management",
    description:
      "Posting, scheduling & platform optimization.",
    icon: "snowflake",
  },
  {
    id: "s5",
    name: "Trend & Competitor Intelligence",
    description:
      "What&apos;s working in your niche and why.",
    icon: "diamond",
  },
  {
    id: "s6",
    name: "Analytics & Performance",
    description:
      "Track, decode & improve what actually performs.",
    icon: "rocket",
  },
  {
    id: "s7",
    name: "Audience Building",
    description:
      "Positioning, engagement & community growth.",
    icon: "flame",
  },
  {
    id: "s8",
    name: "Personal Branding",
    description:
      "Build a recognizable digital identity around you.",
    icon: "sparkle",
  },
  {
    id: "s9",
    name: "Paid Growth",
    description:
      "Meta/Instagram ads, targeting, budgets & ROAS optimization.",
    icon: "bolt",
  },
  {
    id: "s10",
    name: "Monetization Strategy",
    description:
      "Turn your audience into revenue.",
    icon: "target",
  },
  {
    id: "s11",
    name: "Growth Optimization",
    description:
      "Continuously test, refine & scale what works.",
    icon: "megaphone",
  },
];

export interface DesktopRow1 {
  id: string;
  name: string;
  description: string;
  icon: HomeService["icon"];
}

export const desktopRow1: DesktopRow1[] = [
  { ...homeServices[0], id: "d1a" },
  { ...homeServices[1], id: "d1b" },
  { ...homeServices[2], id: "d1c" },
];

export interface DesktopRow2 {
  id: string;
  name: string;
  description: string;
  icon: HomeService["icon"];
}

export const desktopRow2: DesktopRow2[] = [
  { ...homeServices[3], id: "d2a" },
  { ...homeServices[4], id: "d2b" },
  { ...homeServices[5], id: "d2c" },
];

export interface DesktopRow3 {
  id: string;
  name: string;
  description: string;
  icon: HomeService["icon"];
}

export const desktopRow3: DesktopRow3[] = [
  { ...homeServices[6], id: "d3a" },
  { ...homeServices[7], id: "d3b" },
  { ...homeServices[8], id: "d3c" },
  { ...homeServices[9], id: "d3d" },
  { ...homeServices[10], id: "d3e" },
];

type AudiencePill = {
  id: string;
  type: "pill";
  label: string;
  color: "cream" | "pink" | "yellow" | "cyan";
  side: "left" | "right";
};

type AudienceIcon = {
  id: string;
  type: "icon";
  icon: "pacman" | "star" | "triangle" | "sparkle";
  side: "left" | "right";
};

export type AudienceItem = AudiencePill | AudienceIcon;

export const audienceCategories: AudienceItem[] = [
  { id: "1", type: "pill", label: "Creators", color: "cream", side: "left" },
  { id: "2", type: "icon", icon: "pacman", side: "right" },
  { id: "3", type: "icon", icon: "star", side: "left" },
  { id: "4", type: "pill", label: "Shops & Stores", color: "pink", side: "right" },
  { id: "5", type: "pill", label: "Dreamers", color: "yellow", side: "left" },
  { id: "6", type: "icon", icon: "triangle", side: "right" },
  { id: "7", type: "icon", icon: "sparkle", side: "left" },
  { id: "8", type: "pill", label: "Artists", color: "cyan", side: "right" },
];

export const teamBehindContent = {
  badge: "Get Your Team",
  headline: "The team behind your content.",
  body: "We help creators, go-getters, and people of every age from energetic teens to lively seniors. We see what works, make a simple plan, find fun ideas, help with your writing, edit & design your posts, help you share them, check how they did, and use what we learn to make the next ones even better.",
  tapePrimary: "Research • Ideas • Writing • Editing",
  tapeSecondary: "Good Hooks • Simple Plan • Growth • Results",
};

export const howWeWorkIntro = {
  title: "How we work.",
  subtitle: "The procedure.",
  body: "You bring the vision. We learn what you&apos;re building, make a simple plan around it, work with you on every piece, and use the results to keep improving and growing with you.",
};
