export interface HomeService {
  id: string;
  name: string;
  icon: "star" | "sun" | "triangle" | "snowflake" | "diamond" | "rocket" | "flame";
}

export const homeServices: HomeService[] = [
  { id: "1", name: "Personal Look & Style", icon: "star" },
  { id: "2", name: "See What Others Do", icon: "sun" },
  { id: "3", name: "Growing Your Followers", icon: "triangle" },
  { id: "4", name: "Post Ideas Planning", icon: "snowflake" },
  { id: "5", name: "Getting Better Results", icon: "diamond" },
  { id: "6", name: "Fun Post Ideas", icon: "rocket" },
  { id: "7", name: "Reaching More People", icon: "flame" },
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
