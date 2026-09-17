import { NextResponse } from "next/server";
import { sendAutoReply } from "@/lib/autoReply";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TEST_SECRET = "TEST";

type Check = {
  key: string;
  ok: boolean;
  value: string;
  docs: string;
};

function mask(prefix: string, v: string): string {
  if (!v) return "";
  if (v.length <= 8) return prefix + "•".repeat(v.length);
  return prefix + v.slice(0, 4) + "•••••••" + v.slice(-4);
}

function buildChecks(): Check[] {
  const resendKey = process.env.RESEND_API_KEY || "";
  const host = process.env.SMTP_HOST || "";
  const port = process.env.SMTP_PORT || "";
  const user = process.env.SMTP_USER || "";
  const fromAddress = process.env.SMTP_FROM_ADDRESS || user || "";
  const replyTo = process.env.SMTP_REPLY_TO || fromAddress || "";
  const fromName = process.env.SMTP_FROM_NAME || "Elan Vey";
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const emailOk =
    Boolean(resendKey) || (Boolean(host) && Boolean(port) && Boolean(user) && Boolean(process.env.SMTP_PASS));

  return [
    {
      key: "NEXT_PUBLIC_SITE_URL",
      ok: Boolean(siteUrl) && siteUrl.startsWith("http"),
      value: siteUrl,
      docs: "Canonical site URL, e.g. https://elanvey.com — used in sitemap + canonicals.",
    },
    {
      key: "GOOGLE_SHEETS_WEBHOOK_URL",
      ok: Boolean(webhook) && webhook.includes("script.google.com"),
      value: webhook ? webhook.replace(/AKfycb[^\s'&?"]+/g, "***") : "",
      docs: "Apps Script webhook that appends waitlist / lead rows to your Google Sheet.",
    },
    {
      key: "RESEND_API_KEY 🥇 PRIMARY",
      ok: Boolean(resendKey) && resendKey.startsWith("re_") && resendKey.length >= 12,
      value: mask("re_", resendKey.replace(/^re_/, "")),
      docs: "RECOMMENDED. 1 secret replaces 8 SMTP vars. Create at https://resend.com/api-keys — starts with re_ . Free tier = 3,000 emails / month.",
    },
    {
      key: "SMTP_HOST  🥈 fallback",
      ok: emailOk ? true : /^[a-z0-9.\-]+$/i.test(host),
      value: host,
      docs: "SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS are ONLY used when RESEND_API_KEY is blank. smtpout.secureserver.net or smtp.office365.com or smtp.gmail.com.",
    },
    {
      key: "SMTP_PORT",
      ok: emailOk ? true : ["465", "587", "25"].includes(String(port)),
      value: String(port),
      docs: "465 for SSL, 587 for STARTTLS. Match your host.",
    },
    {
      key: "SMTP_SECURE",
      ok: true,
      value: String(process.env.SMTP_SECURE ?? ""),
      docs: "true when PORT=465 (SSL), false when PORT=587 (STARTTLS).",
    },
    {
      key: "SMTP_USER",
      ok: emailOk ? true : Boolean(user) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user),
      value: user,
      docs: "Full mailbox login, e.g. vision@elanvey.com.",
    },
    {
      key: "SMTP_PASS",
      ok: emailOk ? true : Boolean(process.env.SMTP_PASS) && process.env.SMTP_PASS!.length >= 4,
      value: process.env.SMTP_PASS ? "••••••••" : "",
      docs: "⚠️ Stale if you ever change your mailbox password! Prefer RESEND_API_KEY instead.",
    },
    {
      key: "SMTP_FROM_NAME",
      ok: true,
      value: fromName,
      docs: "Displayed sender name. Defaults to 'Elan Vey' if blank.",
    },
    {
      key: "SMTP_FROM_ADDRESS",
      ok: !fromAddress || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromAddress),
      value: fromAddress,
      docs: "Defaults to SMTP_USER if blank. Must match the mailbox you authenticated as.",
    },
    {
      key: "SMTP_REPLY_TO",
      ok: !replyTo || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo),
      value: replyTo,
      docs: "Defaults to SMTP_FROM_ADDRESS if blank. Where user replies actually land — typically vision@elanvey.com.",
    },
  ];
}

export async function GET() {
  const checks = buildChecks();
  const resendOk = checks.find((c) => c.key.startsWith("RESEND_API_KEY"))?.ok;
  const smtpOk =
    checks.find((c) => c.key === "SMTP_HOST")?.ok &&
    checks.find((c) => c.key === "SMTP_PORT")?.ok &&
    checks.find((c) => c.key === "SMTP_USER")?.ok &&
    checks.find((c) => c.key === "SMTP_PASS")?.ok;
  const transport = resendOk ? "RESEND 🥇" : smtpOk ? "SMTP fallback" : "❌ none";
  const transportClass = resendOk ? "ok" : smtpOk ? "ok" : "bad";

  const rows = checks
    .map(
      (c) => `
        <div class="row">
          <div class="k">${c.key}</div>
          <div class="v">${c.value || "<span style='color:#999'>— not set —</span>"}</div>
          <div class="dot ${c.ok ? "ok" : "bad"}" title="${c.ok ? "OK" : "Missing or invalid"}"></div>
          <div class="docs">${c.docs}</div>
        </div>`,
    )
    .join("");

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Elan Vey · Email Setup</title><style>
    *{box-sizing:border-box}body{margin:0;background:#f5f4f1;color:#0b0b0b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;padding:28px 16px 80px}
    .wrap{max-width:780px;margin:0 auto}
    h1{margin:0 0 6px 0;font-size:34px;line-height:1;font-weight:900;letter-spacing:-.01em}
    h1 .tag{background:#22d3ee;color:#0b0b0b;padding:4px 10px;border:2px solid #0b0b0b;border-radius:999px;font-size:12px;letter-spacing:.05em;margin-left:10px;vertical-align:middle}
    .sub{margin:0 0 28px 0;color:#333;font-size:15px}
    .card{background:#fff;border:3px solid #0b0b0b;border-radius:20px;padding:22px 22px 10px 22px;box-shadow:6px 6px 0 #ffe600, 12px 12px 0 #ff2d7f, 18px 18px 0 #0b0b0b}
    .row{display:grid;grid-template-columns:220px 1fr 80px;gap:12px;align-items:center;padding:12px 0;border-bottom:1px dashed #ddd}
    .row:last-child{border-bottom:0}
    .k{font-weight:900;font-size:13px;letter-spacing:.02em;color:#0b0b0b}
    .v{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;color:#222;word-break:break-all}
    .docs{font-size:11px;color:#666;grid-column:1 / -1;margin-top:-6px;padding-left:232px}
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
    <h1>Email Setup<span class="tag">WIZARD</span></h1>
    <p class="sub">Transport in use: <b>${transport}</b></p>
    <div class="card">
      ${rows}
      <div class="summary ${transportClass}">
        ${
          resendOk
            ? "🥇 RESEND is configured — this is the most reliable option. Test-send below."
            : smtpOk
            ? "🥈 SMTP fallback is configured. (WARNING: will break if you change your mailbox password.)"
            : "🛑 No email transport configured yet. Scroll up → set RESEND_API_KEY first."
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
        <b>Resend common fails:</b><br/>
        · <b>401 Unauthorized</b> — wrong API key, check it starts with <b>re_</b><br/>
        · <b>403 Forbidden</b> — domain not verified yet in Resend dashboard → go https://resend.com/domains → add elanvey.com → finish 3 DNS records (SPF/DKIM/CNAME)<br/>
        · <b>550 From_address domain not verified</b> — you're sending From <b>vision@elanvey.com</b> but haven't added elanvey.com as a verified sender domain in Resend.<br/>
        <br/><b>Success check:</b> inbox receives <i>"Fortune Favours the Bold. Welcome to Elan Vey."</i> from <b>Elan Vey &lt;vision@elanvey.com&gt;</b>.
      </div>
    </form>
  </div>
  <script>
    async function sendTest(f){
      const btn=document.getElementById('btn');const r=document.getElementById('r');
      btn.disabled=true;r.style.display='block';r.textContent='⏳ Sending… (Resend handshake is usually 1–3s)';
      try{
        const res=await fetch('/api/debug-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({to:f.to.value,secret:f.secret.value})});
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

    if (secret !== TEST_SECRET) {
      return NextResponse.json(
        {
          ok: false,
          error: `Invalid secret — unlock with "${TEST_SECRET}" so nobody else can spam send test emails.`,
        },
        { status: 401 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return NextResponse.json(
        { ok: false, error: "Valid 'to' email required." },
        { status: 400 },
      );
    }

    const result = await sendAutoReply(to);
    return NextResponse.json({
      ok: result.sent,
      to,
      transport: result.transport ?? "none",
      sent: result.sent,
      id: result.id,
      error: result.error,
      hint: result.sent
        ? undefined
        : !process.env.RESEND_API_KEY
        ? "Set RESEND_API_KEY in Vercel env vars, then Redeploy."
        : "Check the JSON error above. Most common: add elanvey.com as a verified sender domain at https://resend.com/domains.",
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
