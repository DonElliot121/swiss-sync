// Konsistente, locale-stabile Datumsformatierung (server-seitig genutzt).
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("de-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}
