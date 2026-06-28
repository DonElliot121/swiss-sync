import type { PricingTier } from "./types";
// Client-sicher (statischer Import), da die FAQ-Client-Komponente daraus liest.
import data from "../../content/settings/pricing.json";

export const pricingTiers = data.tiers as PricingTier[];
export const hostingPlans = data.hostingPlans as PricingTier[];
export const faq = data.faq as { q: string; a: string }[];
