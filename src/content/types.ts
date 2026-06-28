// Zentrale Typen für den Content-Layer.
// Alle Inhalte sind bewusst vom Code getrennt und serialisierbar gehalten,
// damit das CMS (Phase 2) sie direkt lesen & schreiben kann.

export type NavItem = { label: string; href: string };

export type SiteConfig = {
  name: string;
  legalName: string;
  domain: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: { street: string; zip: string; city: string; country: string };
  social: { label: string; href: string }[];
  nav: NavItem[];
  stats: { value: string; label: string }[];
};

export type Service = {
  slug: string;
  index: string; // "01"
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export type Project = {
  slug: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  accent: string; // hsl/hex for the card gradient
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  author: string;
  coverImage?: string; // optionaler Pfad, z.B. /uploads/foo.jpg
  body: string; // Absätze durch Leerzeilen getrennt
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};
