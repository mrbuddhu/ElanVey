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
  { id: "4", type: "pill", label: "Performers", color: "pink", side: "right" },
  { id: "5", type: "pill", label: "Builders", color: "yellow", side: "left" },
  { id: "6", type: "icon", icon: "triangle", side: "right" },
  { id: "7", type: "icon", icon: "sparkle", side: "left" },
  { id: "8", type: "pill", label: "Sellers", color: "cyan", side: "right" },
];
