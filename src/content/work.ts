import type { Project, Testimonial } from "./types";

export const projects: Project[] = [
  {
    slug: "alpine-logistics",
    client: "Alpine Logistics",
    category: "Webplattform & KI",
    year: "2025",
    summary:
      "Eine Logistik-Plattform mit Echtzeit-Tracking und KI-gestützter Routenoptimierung. Vollständig neu gedacht und entwickelt.",
    tags: ["Next.js", "KI-Integration", "Dashboard"],
    metrics: [
      { value: "−38%", label: "Ladezeit" },
      { value: "+62%", label: "Conversion" },
    ],
    accent: "#e10600",
  },
  {
    slug: "helvetia-finance",
    client: "Helvetia Finance",
    category: "Corporate Website",
    year: "2025",
    summary:
      "Ein vertrauenswürdiger digitaler Auftritt für einen Finanzdienstleister – seriös, schnell und vollständig barrierefrei.",
    tags: ["Webdesign", "CMS", "SEO"],
    metrics: [
      { value: "100", label: "Lighthouse-Score" },
      { value: "+45%", label: "Organischer Traffic" },
    ],
    accent: "#2563eb",
  },
  {
    slug: "meridian-retail",
    client: "Meridian Retail",
    category: "Webshop & Hosting",
    year: "2024",
    summary:
      "Ein skalierbarer B2B-Webshop mit Schweizer Hosting und automatisierter Bestellabwicklung für über 2'000 Artikel.",
    tags: ["E-Commerce", "Hosting", "Automation"],
    metrics: [
      { value: "99.99%", label: "Uptime" },
      { value: "2'000+", label: "Artikel" },
    ],
    accent: "#16a34a",
  },
  {
    slug: "novum-health",
    client: "Novum Health",
    category: "KI-Assistent",
    year: "2024",
    summary:
      "Ein DSG-konformer KI-Assistent für Patientenanfragen, der das Support-Team spürbar entlastet.",
    tags: ["KI-Chatbot", "RAG", "Datenschutz"],
    metrics: [
      { value: "−54%", label: "Support-Tickets" },
      { value: "24/7", label: "Verfügbarkeit" },
    ],
    accent: "#9333ea",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Swiss Sync hat unsere Plattform nicht einfach umgesetzt, sondern verstanden. Das Ergebnis übertrifft alles, was wir erwartet haben.",
    author: "Markus Brunner",
    role: "CEO",
    company: "Alpine Logistics",
  },
  {
    quote:
      "Präzise, zuverlässig und immer einen Schritt voraus. Genau das, was man von einem Schweizer Partner erwartet.",
    author: "Sandra Keller",
    role: "Head of Marketing",
    company: "Helvetia Finance",
  },
  {
    quote:
      "Die KI-Integration hat unser Support-Team transformiert. Professionell von der ersten bis zur letzten Minute.",
    author: "Dr. Thomas Wyss",
    role: "COO",
    company: "Novum Health",
  },
];
