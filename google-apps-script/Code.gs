/**
 * Elan Vey waitlist → Google Sheets webhook (SHEET-STORE ONLY).
 *
 * This script ONLY appends rows to the sheet. It NEVER sends emails.
 * Auto-reply dispatch lives in the Next.js API at src/lib/autoReply.ts and
 * connects to vision@elanvey.com's SMTP server directly, so replies are 100%
 * sent FROM the client's own address (vision@elanvey.com) via GoDaddy / M365,
 * with no involvement from any personal Gmail or Google SMTP.
 *
 * Sheet setup:
 *   1. Create a sheet named "Waitlist" (or change SHEET_NAME below).
 *   2. Put these headers in Row 1 (A1..C1):
 *        A1 = Email         B1 = Source         C1 = Submitted At
 *   3. Deploy as a Web app:
 *        Execute as:    Me (owner of the Sheet)
 *        Who has access: Anyone (NOT "Anyone with a Google account")
 *   4. Copy the /exec URL and paste it into GOOGLE_SHEETS_WEBHOOK_URL in
 *      your Vercel env vars (or .env.local for local dev).
 *
 *  The API returns:
 *    { ok: true, duplicate: true }  → email already existed; row not added.
 *    { ok: true, duplicate: false } → row appended successfully.
 *    { ok: false, error: "..."    } → validation or runtime error.
 */

const SHEET_NAME = "Waitlist";

function isEmailValid(email: unknown): email is string {
  return (
    typeof email === "string" &&
    email.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
  );
}

function isDuplicate(sheet: GoogleAppsScript.Spreadsheet.Sheet, email: string): boolean {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false; // header-only
  const values = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    if (row && row[0] && String(row[0]).trim().toLowerCase() === email) {
      return true;
    }
  }
  return false;
}

function jsonResponse(status: number, payload: unknown) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "no-store",
    });
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
  let payload: { email?: unknown; source?: unknown; submittedAt?: unknown } = {};
  try {
    if (e && e.postData && typeof e.postData.contents === "string") {
      payload = JSON.parse(e.postData.contents) || {};
    }
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON body" });
  }

  if (!isEmailValid(payload.email)) {
    return jsonResponse(400, { ok: false, error: "Valid email required" });
  }

  const email = String(payload.email).trim().toLowerCase();
  const source = typeof payload.source === "string" ? payload.source : "elanvey-waitlist";
  const submittedAt =
    typeof payload.submittedAt === "string" ? payload.submittedAt : new Date().toISOString();

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse(500, {
        ok: false,
        error: `Sheet tab "${SHEET_NAME}" not found in the spreadsheet.`,
      });
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Email", "Source", "Submitted At"]);
    }

    if (isDuplicate(sheet, email)) {
      return jsonResponse(200, { ok: true, duplicate: true });
    }

    sheet.appendRow([email, source, submittedAt]);
    return jsonResponse(200, { ok: true, duplicate: false });
  } catch (err) {
    return jsonResponse(500, {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}

function doGet() {
  return jsonResponse(200, {
    status: "ok",
    description: "Elan Vey waitlist sheet-store endpoint. POST with { email, source, submittedAt }.",
  });
}

// Expose for tests / manual runs inside the editor if ever needed.
// (Do NOT delete — Apps Script will complain if this file has only do* handlers.)
const __UNUSED__ = SHEET_NAME;
