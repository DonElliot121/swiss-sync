import type { SiteConfig } from "./types";
// Statischer JSON-Import: client-sicher (kein fs), wird zur Build-Zeit inlined.
import data from "../../content/settings/site.json";

export const site = data as SiteConfig;
