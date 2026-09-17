import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const WAITLIST_PATH = path.join(process.cwd(), ".data", "waitlist.json");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    const source = typeof payload.source === "string" ? payload.source : "elanvey-waitlist";
    const submittedAt = new Date().toISOString();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Valid email required" }, { status: 400 });

    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let sheetsOk = false;
    let sheetsError: string | undefined;
    if (webhook) {
      try {
        const response = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source, submittedAt }),
          cache: "no-store",
        });
        if (response.ok) sheetsOk = true;
        else sheetsError = `Sheets responded ${response.status}`;
      } catch (err) {
        sheetsError = err instanceof Error ? err.message : String(err);
      }
    } else {
      sheetsError = "GOOGLE_SHEETS_WEBHOOK_URL not set";
    }

    try {
      await fs.mkdir(path.dirname(WAITLIST_PATH), { recursive: true });
      let entries: Array<{ email: string; source: string; submittedAt: string; sheetsSaved: boolean; sheetsError?: string }> = [];
      try {
        entries = JSON.parse(await fs.readFile(WAITLIST_PATH, "utf8"));
      } catch {
        /* first entry */
      }
      if (!entries.some((e) => e.email === email)) {
        entries.push({ email, source, submittedAt, sheetsSaved: sheetsOk, sheetsError });
        await fs.writeFile(WAITLIST_PATH, JSON.stringify(entries, null, 2), "utf8");
      }
    } catch {
      /* local fallback failed — non-fatal if sheets succeeded */
    }

    if (!sheetsOk) {
      return NextResponse.json(
        { ok: false, error: sheetsError || "Unable to save signup" },
        { status: webhook ? 502 : 503 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save signup" }, { status: 500 });
  }
}
