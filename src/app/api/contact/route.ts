import { NextResponse } from "next/server";

// Platzhalter-Handler. Phase 2 (CMS/Backend): hier E-Mail-Versand
// (z.B. Resend/SMTP) oder Speicherung anbinden.
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 },
      );
    }

    // TODO (Phase 2): E-Mail versenden / in CRM speichern.
    console.log("[Kontaktanfrage]", { name, email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }
}
