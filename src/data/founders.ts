export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
}

export const founders: Founder[] = [
  {
    id: "founder-1",
    name: "Founder One",
    role: "Creative Lead",
    bio: "Passionate about making ideas look great. With years of hands-on design experience, Founder One loves turning simple thoughts into visuals that catch eyes and start conversations. Every project gets personal attention and creative energy from start to finish.",
    quote: "If you can dream it, we can design it.",
  },
  {
    id: "founder-2",
    name: "Founder Two",
    role: "Strategy & Growth",
    bio: "The planner who makes sure everything makes sense. Founder Two knows how to get your work in front of the right people — from social media to real-world connections through Lavent Marketing. Friendly, honest, and always ready to help you take the next step.",
    quote: "Small steps every day lead to big things.",
  },
];
