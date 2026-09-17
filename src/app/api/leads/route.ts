import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendAutoReply } from "@/lib/autoReply";

const leadsPath = path.join(process.cwd(), ".data", "leads.json");

type LeadEntry = {
  email: string;
  source: string;
  createdAt: string;
  sheetsSaved: boolean;
  sheetsError?: string;
  replySent: boolean;
  replyError?: string;
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const submittedAt = new Date().toISOString();

    // Dedupe FIRST against local JSON so we never double-send auto-replies.
    let leads: LeadEntry[] = [];
    try {
      await fs.mkdir(path.dirname(leadsPath), { recursive: true });
      try { leads = JSON.parse(await fs.readFile(leadsPath, "utf8")); } catch { /* first lead */ }
    } catch { /* fs mkdir fail — proceed without fallback */ }
    if (leads.some((lead) => lead.email === email)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    // Append to Google Sheet via Apps Script webhook (pure storage now — sheet-only)
    let sheetsSaved = false;
    let sheetsError: string | undefined;
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "elanvey-homepage", submittedAt }),
      });
      if (res.ok) sheetsSaved = true;
      else sheetsError = `Sheets responded ${res.status}`;
    } else {
      sheetsError = "GOOGLE_SHEETS_WEBHOOK_URL not set";
    }

    // Auto-reply 100% FROM vision@elanvey.com's SMTP (GoDaddy / M365)
    let replySent = false;
    let replyError: string | undefined;
    try {
      const r = await sendAutoReply(email);
      replySent = r.sent;
      replyError = r.error;
    } catch (err) {
      replyError = err instanceof Error ? err.message : String(err);
    }

    // Local JSON fallback backup
    try {
      leads.push({
        email,
        source: "elanvey-homepage",
        createdAt: submittedAt,
        sheetsSaved,
        sheetsError,
        replySent,
        replyError,
      });
      await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2), "utf8");
    } catch { /* fallback non-fatal if sheets + reply both worked */ }

    if (!sheetsSaved && !replySent) {
      return NextResponse.json(
        {
          ok: false,
          error: sheetsError || replyError || "Unable to save lead or send reply",
          sheetsSaved,
          replySent,
          sheetsError,
          replyError,
        },
        { status: webhook ? 502 : 503 },
      );
    }
    return NextResponse.json({
      ok: true,
      duplicate: false,
      sheetsSaved,
      sheetsError,
      replySent,
      replyError,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unable to save lead" },
      { status: 500 },
    );
  }
}
