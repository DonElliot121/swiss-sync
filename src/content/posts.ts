import { readCollection } from "@/lib/content";
import type { Post } from "./types";

// Neueste zuerst.
export const posts = readCollection<Post>("posts").sort((a, b) =>
  b.date.localeCompare(a.date),
);
