import fs from "node:fs";
import path from "node:path";

// Liest CMS-Inhalte aus dem repo-root `content/`-Verzeichnis.
// Wird zur Build-Zeit ausgeführt (Seiten sind statisch generiert),
// daher ist fs-Zugriff sicher und das CMS (Decap) editiert dieselben Dateien.

const CONTENT_DIR = path.join(process.cwd(), "content");

/** Liest eine einzelne JSON-Datei, z.B. readDoc("settings/site"). */
export function readDoc<T>(relPath: string): T {
  const file = path.join(CONTENT_DIR, `${relPath}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

/** Liest alle JSON-Dateien eines Ordners (alphabetisch nach Dateiname). */
export function readCollection<T>(dir: string): T[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(full, f), "utf8")) as T);
}
