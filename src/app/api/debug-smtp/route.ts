import { NextResponse } from "next/server";
import { sendAutoReply } from "@/lib/autoReply";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const host = process.env.SMTP_HOST || "";
  const port = process.env.SMTP_PORT || "";
  const user = process.env.SMTP_USER || "";
  const fromAddress = process.env.SMTP_FROM_ADDRESS || user || "";
  const replyTo = process.env.SMTP_REPLY_TO || fromAddress || "";
  const fromName = process.env.SMTP_FROM_NAME || "Elan Vey";
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const checklist = [
    {
      key: "NEXT_PUBLIC_SITE_URL",
      ok: Boolean(siteUrl) && siteUrl.startsWith("http"),
      value: siteUrl,
      docs: "Canonical site URL (e.g. https://elanvey.com)",
    },
    {
      key: "GOOGLE_SHEETS_WEBHOOK_URL",
      ok: Boolean(webhook) && webhook.includes("script.google.com"),
      value: webhook ? webhook.replace(/AKfycbw[\w-]+/g, "***") : "",
      docs: "Apps Script webhook that appends rows to your sheet",
    },
    {
      key: "SMTP_HOST",
      ok: Boolean(host) && /^[a-z0-9.\-]+$/i.test(host),
      value: host,
      docs: "smtpout.secureserver.net (GoDaddy WS)  |  smtp.office365.com (GoDaddy M365)  |  smtp.gmail.com (Gmail)",
    },
    {
      key: "SMTP_PORT",
      ok: ["465", "587", "25"].includes(String(port)),
      value: String(port),
      docs: "465 for SSL / 587 for STARTTLS (match your host)",
    },
    {
      key: "SMTP_SECURE",
      ok: ["true", "false", "1", "0", ""].includes(
        String(process.env.SMTP_SECURE || "").toLowerCase(),
      ),
      value: String(process.env.SMTP_SECURE ?? ""),
      docs: "true when PORT=465 (SSL), false when PORT=587 (STARTTLS)",
    },
    {
      key: "SMTP_USER",
      ok: Boolean(user) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user),
      value: user,
      docs: "Full mailbox login, e.g. vision@elanvey.com",
    },
    {
      key: "SMTP_PASS",
      ok: Boolean(process.env.SMTP_PASS) && process.env.SMTP_PASS!.length >= 4,
      value: process.env.SMTP_PASS ? "••••••••" : "",
      docs: "Mailbox password. For M365/Gmail with 2FA use an App Password.",
    },
    {
      key: "SMTP_FROM_NAME",
      ok: true,
      value: fromName,
      docs: "Human-readable sender — typically just 'Elan Vey'",
    },
    {
      key: "SMTP_FROM_ADDRESS",
      ok:
        !fromAddress || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromAddress),
      value: fromAddress,
      docs: "Defaults to SMTP_USER if blank.  Must match your mailbox.",
    },
    {
      key: "SMTP_REPLY_TO",
      ok: !replyTo || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo),
      value: replyTo,
      docs: "Defaults to SMTP_FROM_ADDRESS if blank.",
    },
  ];

  const smtpConfigured = checklist
    .filter((c) => ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"].includes(c.key))
    .every((c) => c.ok);

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Elan Vey · Auto-reply Setup</title><style>
    *{box-sizing:border-box}body{margin:0;background:#f5f4f1;color:#0b0b0b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;padding:28px 16px 80px}
    .wrap{max-width:780px;margin:0 auto}
    h1{margin:0 0 6px 0;font-size:34px;line-height:1;font-weight:900;letter-spacing:-.01em}
    h1 .tag{background:#ff2d7f;color:#ffe600;padding:4px 10px;border:2px solid #0b0b0b;border-radius:999px;font-size:12px;letter-spacing:.05em;margin-left:10px;vertical-align:middle}
    .sub{margin:0 0 28px 0;color:#333;font-size:15px}
    .card{background:#fff;border:3px solid #0b0b0b;border-radius:20px;padding:22px 22px 10px 22px;box-shadow:6px 6px 0 #ffe600, 12px 12px 0 #ff2d7f, 18px 18px 0 #0b0b0b}
    .row{display:grid;grid-template-columns:200px 1fr 80px;gap:12px;align-items:center;padding:12px 0;border-bottom:1px dashed #ddd}
    .row:last-child{border-bottom:0}
    .k{font-weight:900;font-size:13px;letter-spacing:.02em;color:#0b0b0b}
    .v{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;color:#222;word-break:break-all}
    .docs{font-size:11px;color:#666;grid-column:1 / -1;margin-top:-6px;padding-left:212px}
    .dot{width:14px;height:14px;border-radius:999px;border:2px solid #0b0b0b;justify-self:center}
    .ok{background:#22c55e}.bad{background:#ef4444}
    .summary{margin:20px -22px -10px -22px;padding:16px 22px;border-top:3px solid #0b0b0b;background:#fff9ef;border-radius:0 0 17px 17px;font-weight:800}
    .summary.ok{background:#ecfdf5;color:#064e3b}.summary.bad{background:#fef2f2;color:#7f1d1d}
    form{margin-top:32px;background:#fff;border:3px solid #0b0b0b;border-radius:20px;padding:22px;box-shadow:6px 6px 0 #22d3ee, 12px 12px 0 #0b0b0b}
    label{display:block;font-size:13px;font-weight:800;margin:0 0 6px 0}
    input{width:100%;padding:12px 14px;border:2px solid #0b0b0b;border-radius:10px;font-size:15px;font-family:inherit}
    .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    button{margin-top:16px;width:100%;padding:14px 18px;border:3px solid #0b0b0b;border-radius:12px;background:#ffe600;color:#0b0b0b;font-weight:900;font-size:16px;letter-spacing:.02em;cursor:pointer;box-shadow:4px 4px 0 #ff2d7f, 8px 8px 0 #0b0b0b}
    button:hover{transform:translate(-1px,-1px)}button:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #ff2d7f, 4px 4px 0 #0b0b0b}
    button:disabled{opacity:.6;cursor:not-allowed}
    .result{margin-top:16px;padding:14px 16px;border:2px dashed #0b0b0b;border-radius:12px;background:#0b0b0b;color:#fff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;white-space:pre-wrap}
    .hint{margin-top:16px;background:#111;color:#eee;padding:14px 16px;border-radius:12px;font-size:12px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
    .hint b{color:#ffe600}
    @media(max-width:640px){.row{grid-template-columns:1fr auto}.docs{padding-left:0}.row2{grid-template-columns:1fr}h1{font-size:26px}}
  </style></head><body><div class="wrap">
    <h1>Auto-reply Setup<span class="tag">WIZARD</span></h1>
    <p class="sub">Paste the 10 env vars into Vercel → Project Settings → Environment Variables, then send a test email below.</p>
    <div class="card">
      ${checklist
        .map(
          (c) => `
        <div class="row">
          <div class="k">${c.key}</div>
          <div class="v">${c.value || "<span style='color:#999'>— not set —</span>"}</div>
          <div class="dot ${c.ok ? "ok" : "bad"}" title="${c.ok ? "OK" : "Missing or invalid"}"></div>
          <div class="docs">${c.docs}</div>
        </div>`,
        )
        .join("")}
      <div class="summary ${smtpConfigured ? "ok" : "bad"}">
        ${
          smtpConfigured
            ? "✅ SMTP looks configured — send a test email below to confirm."
            : "🛑 SMTP is NOT fully configured yet — fill in the missing env vars above and redeploy."
        }
      </div>
    </div>
    <form onsubmit="event.preventDefault();sendTest(this);">
      <div class="row2">
        <div><label for="to">Send test to (your email)</label>
        <input id="to" name="to" type="email" required placeholder="you@example.com" /></div>
        <div><label for="secret">Protect this endpoint</label>
        <input id="secret" name="secret" type="password" autocomplete="off" placeholder="Type TEST to unlock" required /></div>
      </div>
      <button type="submit" id="btn">🚀  Send welcome email now</button>
      <div class="result" id="r" style="display:none"></div>
      <div class="hint">
        <b>Expected success:</b> Inbox receives <i>"Fortune Favours the Bold. Welcome to Elan Vey."</i> from <b>vision@elanvey.com</b>.<br/>
        <b>Common fails:</b> 535 Auth failed (wrong pass / needs App Password with M365 2FA) · Connection timeout (wrong host/port) · 550 From mismatch (SMTP_FROM_ADDRESS ≠ mailbox).
      </div>
    </form>
  </div>
  <script>
    async function sendTest(f){
      const btn=document.getElementById('btn');const r=document.getElementById('r');
      btn.disabled=true;r.style.display='block';r.textContent='⏳ Sending… (SMTP handshake usually 2–6s)';
      try{
        const res=await fetch('/api/debug-smtp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({to:f.to.value,secret:f.secret.value})});
        const data=await res.json().catch(()=>({error:'Non-JSON response from server'}));
        r.textContent=(data.ok?'✅ SENT  —— ':'❌ FAILED —— ')+JSON.stringify(data,null,2);
      }catch(e){r.textContent='Network error: '+e.message;}finally{btn.disabled=false;}
    }
  </script></body></html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const to = typeof body?.to === "string" ? body.to.trim() : "";
    const secret = String(body?.secret ?? "");

    if (secret !== "TEST") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Invalid secret. This endpoint is unlocked with secret=TEST to prevent random sends.",
        },
        { status: 401 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return NextResponse.json(
        { ok: false, error: "Valid 'to' email required" },
        { status: 400 },
      );
    }

    const result = await sendAutoReply(to);
    return NextResponse.json({
      ok: result.sent,
      to,
      sent: result.sent,
      error: result.error,
      envSmtpHost: process.env.SMTP_HOST || "",
      envSmtpPort: process.env.SMTP_PORT || "",
      envSmtpUser: process.env.SMTP_USER || "",
      envFromAddress: process.env.SMTP_FROM_ADDRESS || "",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
