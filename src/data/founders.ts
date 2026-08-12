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
    name: "[FOUNDER NAME]",
    role: "[FOUNDER ROLE]",
    bio: "[FOUNDER BIO — Replace with actual founder biography when available.]",
    quote: "[FOUNDER QUOTE — Optional quote to be replaced.]",
  },
  {
    id: "founder-2",
    name: "[FOUNDER NAME]",
    role: "[FOUNDER ROLE]",
    bio: "[FOUNDER BIO — Replace with actual founder biography when available.]",
    quote: "[FOUNDER QUOTE — Optional quote to be replaced.]",
  },
];
