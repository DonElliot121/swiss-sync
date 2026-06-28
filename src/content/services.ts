import type { Service, ProcessStep } from "./types";

export const services: Service[] = [
  {
    slug: "webdesign",
    index: "01",
    title: "Webdesign & Entwicklung",
    tagline: "Massgeschneiderte Websites & Webshops.",
    description:
      "Wir gestalten und entwickeln Websites, die nicht nur gut aussehen, sondern messbar performen. Von der Strategie über das Design bis zur technischen Umsetzung – alles aus einer Hand, präzise umgesetzt.",
    features: [
      "Individuelles UI/UX-Design",
      "Performance- & SEO-optimiert",
      "Barrierefrei & responsiv",
      "Headless & CMS-gestützt",
    ],
    deliverables: [
      "Discovery & Konzept",
      "Design-System & Prototyp",
      "Frontend- & Backend-Entwicklung",
      "Launch & Schulung",
    ],
  },
  {
    slug: "hosting",
    index: "02",
    title: "Hosting & Betrieb",
    tagline: "Schweizer Hosting, das nie schläft.",
    description:
      "Zuverlässiges, sicheres Hosting auf Servern in der Schweiz. Wir kümmern uns um Verfügbarkeit, Backups, Sicherheit und Updates – damit Sie sich auf Ihr Geschäft konzentrieren können.",
    features: [
      "Server-Standort Schweiz",
      "Tägliche Backups & Monitoring",
      "SSL, Firewall & DDoS-Schutz",
      "99.98% Verfügbarkeits-SLA",
    ],
    deliverables: [
      "Setup & Migration",
      "Monitoring rund um die Uhr",
      "Sicherheits- & Software-Updates",
      "Persönlicher Support",
    ],
  },
  {
    slug: "ki-services",
    index: "03",
    title: "KI-Services",
    tagline: "Intelligente Automatisierung, die wirkt.",
    description:
      "Wir integrieren KI dort, wo sie echten Mehrwert schafft: Chatbots, Content-Automatisierung, intelligente Suche und massgeschneiderte Workflows – datenschutzkonform und auf Ihr Unternehmen zugeschnitten.",
    features: [
      "KI-Chatbots & Assistenten",
      "Content- & Prozess-Automation",
      "Intelligente Suche & RAG",
      "Schweizer Datenschutz (revDSG)",
    ],
    deliverables: [
      "Use-Case-Analyse",
      "Prototyp & Integration",
      "Anbindung an Ihre Systeme",
      "Training & Optimierung",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "Wir verstehen Ihr Geschäft, Ihre Ziele und Ihre Nutzer. Daraus entsteht eine klare digitale Strategie.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Präzise Konzepte und Designs, die Ihre Marke stärken und intuitiv zu bedienen sind.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "Sauberer, performanter Code. Skalierbar gebaut und gründlich getestet – ohne Kompromisse.",
  },
  {
    index: "04",
    title: "Launch & Care",
    description:
      "Wir bringen Sie live und bleiben an Bord: Hosting, Wartung und kontinuierliche Optimierung.",
  },
];
