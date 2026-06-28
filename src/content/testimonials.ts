import type { Testimonial } from "./types";
// Client-sicher (statischer Import), da von der Testimonials-Client-Komponente genutzt.
import data from "../../content/settings/testimonials.json";

export const testimonials = data.items as Testimonial[];
