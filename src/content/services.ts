import { readCollection } from "@/lib/content";
import type { Service, ProcessStep } from "./types";
import processData from "../../content/settings/process.json";

// Folder-Collection (auto-discovery) → server-only via fs. Sortiert nach index.
export const services = readCollection<Service>("services").sort((a, b) =>
  a.index.localeCompare(b.index),
);

export const processSteps = processData.steps as ProcessStep[];
