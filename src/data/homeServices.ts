export interface HomeService {
  id: string;
  name: string;
  icon: "star" | "sun" | "triangle" | "snowflake" | "diamond" | "rocket" | "flame";
}

export const homeServices: HomeService[] = [
  { id: "1", name: "Personal Branding", icon: "star" },
  { id: "2", name: "Competitor Analysis", icon: "sun" },
  { id: "3", name: "Audience Building", icon: "triangle" },
  { id: "4", name: "Content Strategy", icon: "snowflake" },
  { id: "5", name: "Growth Optimisation", icon: "diamond" },
  { id: "6", name: "Content Ideation", icon: "rocket" },
  { id: "7", name: "Paid Growth", icon: "flame" },
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
  { id: "4", type: "pill", label: "Businesses", color: "pink", side: "right" },
  { id: "5", type: "pill", label: "Dreamers", color: "yellow", side: "left" },
  { id: "6", type: "icon", icon: "triangle", side: "right" },
  { id: "7", type: "icon", icon: "sparkle", side: "left" },
  { id: "8", type: "pill", label: "Artists", color: "cyan", side: "right" },
];

export const teamBehindContent = {
  badge: "Get Your Team",
  headline: "The team behind your content.",
  body: "We empower creators, entrepreneurs, and individuals of every age from ambitious teenagers to vibrant seniors. We research what works, build your strategy, find ideas, refine your scripts, edit & design your content, help you publish, analyse the results, and use what we learn to grow the next one.",
  tapePrimary: "Research • Ideas • Scripting • Editing",
  tapeSecondary: "Hooks • Strategy • Growth • Results",
};

export const howWeWorkIntro = {
  title: "How we work.",
  subtitle: "The procedure.",
  body: "You bring the vision. We learn what you're building, build the strategy around it, work with you on every piece of content, and use the results to keep improving and growing.",
};
