import { readCollection } from "@/lib/content";
import type { TeamMember } from "./types";
import about from "../../content/settings/about.json";

// Folder-Collection (auto-discovery) → server-only via fs.
export const team = readCollection<TeamMember>("team");

export const values = about.values as { title: string; description: string }[];
export const timeline = about.timeline as {
  year: string;
  title: string;
  description: string;
}[];
