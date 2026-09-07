export interface HomeService {
  id: string;
  name: string;
  icon: "star" | "sun" | "triangle" | "snowflake" | "diamond" | "rocket" | "flame";
}

export const homeServices: HomeService[] = [
  { id: "m1", name: "Personal Branding", icon: "star" },
  { id: "m2", name: "Competitor Analysis", icon: "sun" },
  { id: "m3", name: "Audience Building", icon: "triangle" },
  { id: "m4", name: "Content Strategy", icon: "snowflake" },
  { id: "m5", name: "Growth Optimisation", icon: "diamond" },
  { id: "m6", name: "Content Ideation", icon: "rocket" },
  { id: "m7", name: "Paid Growth", icon: "flame" },
];

export interface DesktopRow1 {
  id: string;
  name: string;
  icon: "diamond" | "triangle" | "sun";
}

export const desktopRow1: DesktopRow1[] = [
  { id: "d1a", name: "Content Ideation", icon: "diamond" },
  { id: "d1b", name: "Paid Growth", icon: "triangle" },
  { id: "d1c", name: "Audience Building", icon: "sun" },
];

export interface DesktopRow2 {
  id: string;
  name: string;
  icon: "star" | "snowflake";
}

export const desktopRow2: DesktopRow2[] = [
  { id: "d2a", name: "Competitor Analysis", icon: "star" },
  { id: "d2b", name: "Content Strategy", icon: "snowflake" },
];

export interface DesktopRow3 {
  id: string;
  name: string;
  icon: "rocket" | "flame";
}

export const desktopRow3: DesktopRow3[] = [
  { id: "d3a", name: "Growth Optimisation", icon: "rocket" },
  { id: "d3b", name: "Editing/Designing", icon: "flame" },
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
  body: "You bring the vision. We learn what you're building, make a simple plan around it, work with you on every piece, and use the results to keep improving and growing with you.",
};
