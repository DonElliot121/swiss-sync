import type { TeamMember } from "./types";

export const values: { title: string; description: string }[] = [
  {
    title: "Präzision",
    description:
      "Schweizer Genauigkeit in jedem Detail – vom Pixel bis zur Server-Konfiguration.",
  },
  {
    title: "Transparenz",
    description:
      "Klare Kommunikation, faire Preise und keine versteckten Kosten. Sie wissen immer, woran Sie sind.",
  },
  {
    title: "Verlässlichkeit",
    description:
      "Wir halten, was wir versprechen. Termine, Qualität und Verfügbarkeit – darauf können Sie zählen.",
  },
  {
    title: "Innovation",
    description:
      "Wir setzen auf moderne Technologie und KI, um Ihnen einen echten Vorsprung zu verschaffen.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Lena Frei",
    role: "Gründerin & Strategie",
    initials: "LF",
    bio: "Verbindet Geschäftsstrategie mit digitaler Umsetzung. Über 10 Jahre Erfahrung in der Schweizer Digitalbranche.",
  },
  {
    name: "Marco Steiner",
    role: "Lead Developer",
    initials: "MS",
    bio: "Full-Stack-Entwickler mit Fokus auf Performance, Skalierbarkeit und sauberen Code.",
  },
  {
    name: "Nadia Berger",
    role: "Design & UX",
    initials: "NB",
    bio: "Gestaltet Erlebnisse, die Marken stärken und Nutzer begeistern. Mit einem Auge für jedes Detail.",
  },
  {
    name: "Jonas Hofer",
    role: "KI & Automation",
    initials: "JH",
    bio: "Bringt KI dorthin, wo sie echten Mehrwert schafft – datenschutzkonform und praxisnah.",
  },
];

export const timeline: { year: string; title: string; description: string }[] = [
  {
    year: "2017",
    title: "Gründung",
    description: "Swiss Sync startet als kleines Webdesign-Studio in Zürich.",
  },
  {
    year: "2020",
    title: "Eigenes Hosting",
    description:
      "Aufbau einer eigenen Hosting-Infrastruktur mit Servern in der Schweiz.",
  },
  {
    year: "2023",
    title: "KI-Division",
    description:
      "Wir erweitern unser Angebot um massgeschneiderte KI-Services.",
  },
  {
    year: "2025",
    title: "120+ Projekte",
    description:
      "Über 120 erfolgreiche Projekte für Schweizer Unternehmen umgesetzt.",
  },
];
