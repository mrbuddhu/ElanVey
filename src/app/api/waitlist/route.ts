import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendAutoReply } from "@/lib/autoReply";

const WAITLIST_PATH = path.join(process.cwd(), ".data", "waitlist.json");

type WaitlistEntry = {
  email: string;
  source: string;
  submittedAt: string;
  sheetsSaved: boolean;
  sheetsError?: string;
  replySent: boolean;
  replyError?: string;
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email =
      typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    const source =
      typeof payload.source === "string" ? payload.source : "elanvey-waitlist";
    const submittedAt = new Date().toISOString();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // -------------------------- Dedupe against local JSON ---------------------------
    // (do this FIRST so we never double-send auto-replies on re-signups.)
    let entries: WaitlistEntry[] = [];
    try {
      await fs.mkdir(path.dirname(WAITLIST_PATH), { recursive: true });
      try {
        entries = JSON.parse(await fs.readFile(WAITLIST_PATH, "utf8"));
      } catch {
        /* first entry */
      }
    } catch {
        /* mkfile fail — proceed without fallback */
    }
    const existing = entries.find((e) => e.email === email);
    if (existing) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    // -------------------------- Append to Google Sheet -------------------------
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let sheetsSaved = false;
    let sheetsError: string | undefined;
    if (webhook) {
      try {
        const response = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source, submittedAt }),
          cache: "no-store",
        });
        if (response.ok) sheetsSaved = true;
        else sheetsError = `Sheets responded ${response.status}`;
      } catch (err) {
        sheetsError = err instanceof Error ? err.message : String(err);
      }
    } else {
      sheetsError = "GOOGLE_SHEETS_WEBHOOK_URL not set";
    }

    // -------------------------- Auto-reply via client SMTP ------------------------
    // Sent FROM vision@elanvey.com via GoDaddy / 100% — no Google send via Gmail.
    let replySent = false;
    let replyError: string | undefined;
    try {
      const result = await sendAutoReply(email);
    if (result.sent) replySent = true;
    else replyError = result.error;
    } catch (err) {
      replyError = err instanceof Error ? err.message : String(err);
    }

    // -------------------------- Persist to local fallback JSON -------------------
    try {
      entries.push({
      email,
      source,
      submittedAt,
      sheetsSaved,
      sheetsError,
      replySent,
      replyError,
    });
      await fs.writeFile(
        WAITLIST_PATH,
        JSON.stringify(entries, null, 2),
        "utf8",
      );
    } catch {
      /* local fallback failed — non-fatal if sheets succeeded */
    }

    const allFail = !sheetsSaved && !replySent;

    if (allFail) {
      return NextResponse.json(
        {
          ok: false,
          error: sheetsError || replyError || "Unable to save signup or send reply",
          sheetsSaved,
          replySent,
          sheetsError,
          replyError,
        },
        { status: webhook ? 502 : 503 },
      );
    }

    return NextResponse.json(
      { ok: true, duplicate: false, replySent, replyError, sheetsSaved, sheetsError },
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unable to save signup" },
      { status: 500 },
    );
  }
}
