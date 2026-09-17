import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({
      configured: false,
      error: "GOOGLE_SHEETS_WEBHOOK_URL is not set in environment variables.",
      fix: "Paste your Apps Script /exec URL into .env.local (local) or your hosting env vars (production), then restart/redeploy.",
    });
  }

  const masked = webhook.replace(/\/s\/[^/]+\/exec$/, "/s/***REDACTED***/exec");
  const testEmail = `debug-${Date.now()}@elanvey-debug.test`;
  const payload = {
    email: testEmail,
    source: "elanvey-debug",
    submittedAt: new Date().toISOString(),
  };

  let status: number | null = null;
  let statusText = "";
  let responseText = "";
  let responseJson: unknown = null;
  let fetchError: string | null = null;

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    status = res.status;
    statusText = res.statusText;
    responseText = await res.text();
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      /* not JSON — likely a Google login page HTML */
    }
  } catch (err) {
    fetchError = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
  }

  const diagnosis: string[] = [];
  if (fetchError) diagnosis.push("Network-level error fetching the Apps Script URL. Check the URL is correct and ends with /exec.");
  if (status === 403 || status === 401) diagnosis.push("HTTP 401/403: Webhook is not publicly accessible. In Apps Script → Deploy → Manage deployments → set 'Who has access' to 'Anyone'.");
  if (status === 200 && typeof responseJson === "object" && responseJson !== null) {
    const r = responseJson as Record<string, unknown>;
    if (r.ok === true) diagnosis.push("✅ Webhook works correctly! Email appended (or duplicate skipped).");
    if (r.ok === false && typeof r.error === "string") diagnosis.push(`Apps Script returned an error: "${r.error}".`);
  }
  if (status === 200 && !responseJson && responseText.toLowerCase().includes("<!doctype")) {
    diagnosis.push("Got HTML back instead of JSON — Google is redirecting to a login page. Fix: set 'Who has access' to 'Anyone' (NOT 'Anyone with Google account') and re-deploy with a NEW URL.");
  }
  if (status === 200 && !responseJson && !responseText.toLowerCase().includes("<!doctype")) {
    diagnosis.push(`Got a non-JSON 200 response (unexpected). First 200 chars: ${responseText.slice(0, 200)}`);
  }
  if (status && status >= 500) diagnosis.push("Apps Script threw a runtime exception. Open the Apps Script editor → Executions on the left, find the failed run, and read the error.");

  return NextResponse.json({
    configured: true,
    webhook: masked,
    testPayload: payload,
    fetch: fetchError
      ? { error: fetchError }
      : { status, statusText, body: responseJson ?? responseText },
    diagnosis,
  });
}
