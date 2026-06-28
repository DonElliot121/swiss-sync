import { readCollection } from "@/lib/content";
import type { Project } from "./types";

// Folder-Collection (auto-discovery neuer Projekte) → server-only via fs.
// Neueste Jahre zuerst; bei Gleichstand stabile Dateinamen-Reihenfolge.
export const projects = readCollection<Project>("projects").sort((a, b) =>
  b.year.localeCompare(a.year),
);
