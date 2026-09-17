import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// Auto-reply dispatcher — sends the branded "Welcome to Elan Vey" email
// DIRECTLY FROM the client's vision@elanvey.com inbox via GoDaddy SMTP.
//
// No Google / Gmail / Apps Script SMTP involved in the reply-sending path.
// This means:
//   - From header is 100% vision@elanvey.com (no "via gmail" or "on behalf of")
//   - A copy of every welcome email is placed in vision's GoDaddy "Sent Items"
//   - SPF / DKIM / DMARC all pass for elanvey.com
//   - 0% touch of AryabhaattaJr@gmail.com's mail stream
//
// Configure env vars (Vercel Project Settings → Environment Variables):
//   SMTP_HOST=smtpout.secureserver.net
//   SMTP_PORT=465
//   SMTP_SECURE=true
//   SMTP_USER=vision@elanvey.com
//   SMTP_PASS=<password for vision@elanvey.com (GoDaddy mailbox password)>
//   SMTP_FROM_NAME=Elan Vey
//   SMTP_FROM_ADDRESS=vision@elanvey.com
//   SMTP_REPLY_TO=vision@elanvey.com
//
// Standard GoDaddy / Microsoft 365 for GoDaddy ports:
//   - Legacy GoDaddy Workspace Email  : smtpout.secureserver.net  port 465 (SSL)
//   - GoDaddy Microsoft 365 Email      : smtp.office365.com       port 587 (STARTTLS, SMTP_SECURE=false)
// ---------------------------------------------------------------------------

type SendResult = { sent: boolean; error?: string };

const AUTO_REPLY_SUBJECT = "Fortune Favours the Bold. Welcome to Elan Vey.";
const YEAR = new Date().getFullYear();

function envFlag(v?: string) {
  return v === undefined ? false : ["1", "true", "yes", "on"].includes(String(v).toLowerCase());
}

// ----------------------------------------------------------------------------
// PLAIN TEXT FALLBACK (rendered first — single source of truth for copy)
// ----------------------------------------------------------------------------
function buildPlainText(): string {
  return [
    "✦ EARLY ACCESS LOCKED ✦",
    "",
    "Fortune Favours the Bold. Welcome to Elan Vey.",
    "",
    "Hey,",
    "",
    "The world rewards the ones who take action.",
    "Ideas are everywhere.",
    "Everyone has something they want to do. A business they want to build. A song they want to release. A skill they want people to see. An idea they can't stop thinking about.",
    "But the difference between \"I could\" and \"I did\" is action.",
    "And you just took yours.",
    "",
    "Being good at what you do doesn't mean you should know how to make the world notice it.",
    "Whatever it is you create. We build the path.",
    "",
    "  • NO endless courses.",
    "  • NO 47-module \"secret formula.\"",
    "  • NO \"now go figure it out yourself.\"",
    "",
    "With Elan Vey, you get a team behind you. Creators, editors, designers, strategists, marketers, influencers, analysts and more actually working on your vision and who have done this. While you focus on your Craft.",
    "",
    "And the best part?",
    "You don't just watch us do it. You learn while we do it.",
    "Because we don't want to hand you a blueprint and wish you luck.",
    "We want to build it with you.",
    "",
    "You're on the waitlist now, which means you'll be among the first to hear when Elan Vey goes live. And enjoy a 12% off.",
    "",
    "★ YOUR FOUNDERS' PERK — 12% OFF",
    "First to know when doors open. First to access everything.",
    "",
    "Until then…",
    "Keep creating. In a world of consumers.",
    "",
    "— The Elan Vey Team",
    "",
    "P.S. Quick question — where did you first hear about Elan Vey? Reply to this email and let us know — we read every one.",
    "",
    `© ${YEAR} Elan Vey. All rights reserved.`,
  ].join("\n");
}

// ----------------------------------------------------------------------------
// HTML (brutalist card. table layout for Outlook/GoDaddy/Yahoo/Apple/iOS compat)
// ----------------------------------------------------------------------------
function buildHtmlBody(): string {
  const headline = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 26px 0;"><tr><td style="padding:0;"><h1 style="margin:0 0 14px 0;font-size:42px;line-height:0.98;letter-spacing:-0.01em;font-weight:900;color:#0b0b0b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">Fortune Favours the Bold.</h1></td></tr><tr><td style="padding:0;"><h2 style="margin:0;font-size:28px;line-height:1.05;font-weight:800;background:linear-gradient(90deg,#ff2d7f 0%,#00e0ff 50%,#ffe600 100%);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">Welcome to Elan Vey.</h2></td></tr></table>`;

  const eyebrow = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="padding:0 0 22px 0;"><span style="display:inline-block;border:3px solid #0b0b0b;border-radius:999px;background:#ffe600;color:#0b0b0b;font-size:13px;font-weight:900;letter-spacing:0.05em;padding:6px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">✦ EARLY ACCESS LOCKED ✦</span></td></tr></table>`;

  const p = (t: string) =>
    `<p style="margin:0 0 16px 0;font-size:17px;line-height:1.55;color:#1a1a1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t}</p>`;
  const pBold = (t: string, size = 19) =>
    `<p style="margin:0 0 16px 0;font-size:${size}px;line-height:1.4;color:#111111;font-weight:800;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t}</p>`;
  const pLead = (t: string) =>
    `<p style="margin:0 0 18px 0;font-size:20px;line-height:1.4;color:#111111;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t}</p>`;
  const pSignoff = (t: string, gradient = false) => {
    const gradientStyle = gradient
      ? 'style="margin:0 0 20px 0;font-size:22px;line-height:1.4;font-weight:900;background:linear-gradient(90deg,#ff2d7f 0%,#00e0ff 50%,#ffe600 100%);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Helvetica,Arial,sans-serif;"'
      : 'style="margin:0 0 20px 0;font-size:22px;line-height:1.4;font-weight:900;color:#111111;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Helvetica,Arial,sans-serif;"';
    return `<p ${gradientStyle}>${t}</p>`;
  };

  const bodyCopy =
    pLead("Hey,") +
    p("The world rewards the ones who take action.") +
    p("Ideas are everywhere.") +
    p(
      "Everyone has something they want to do. A business they want to build. A song they want to release. A skill they want people to see. An idea they can't stop thinking about."
    ) +
    p('But the difference between "I could" and "I did" is action.') +
    p("And you just took yours.") +
    p(
      "Being good at what you do doesn't mean you should know how to make the world notice it."
    ) +
    p("Whatever it is you create. We build the path.");

  const noList = [
    "NO endless courses.",
    'NO 47-module "secret formula."',
    'NO "now go figure it out yourself."',
  ];
  let noTable = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 32px 0;">`;
  for (const line of noList) {
    const rest = line.startsWith("NO ") ? line.slice(3) : line;
    noTable += `<tr><td style="padding:6px 0;"><span style="color:#ff2d7f;font-weight:900;font-size:17px;">NO&nbsp;&nbsp;</span><span style="font-size:17px;color:#1a1a1a;">${rest}</span></td></tr>`;
  }
  noTable += `</table>`;

  const restCopy =
    p(
      "With Elan Vey, you get a team behind you. Creators, editors, designers, strategists, marketers, influencers, analysts and more actually working on your vision and who have done this. While you focus on your Craft."
    ) +
    pBold("And the best part?") +
    p("You don't just watch us do it. You learn while we do it.") +
    p("Because we don't want to hand you a blueprint and wish you luck.") +
    pBold("We want to build it with you.") +
    p(
      "You're on the waitlist now, which means you'll be among the first to hear when Elan Vey goes live. And enjoy a 12% off."
    );

  const perk = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 28px 0;border:3px solid #0b0b0b;border-radius:22px;background:#fff9ef;box-shadow:6px 6px 0 #ffe600, 12px 12px 0 #ff2d7f;"><tr><td align="center" style="padding:20px 18px 4px 18px;"><span style="display:inline-block;border:3px solid #0b0b0b;border-radius:999px;background:#0b0b0b;color:#ffe600;font-size:13px;font-weight:900;letter-spacing:0.04em;padding:7px 18px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">★ YOUR FOUNDERS' PERK ★</span></td></tr><tr><td align="center" style="padding:12px 18px 0 18px;"><div style="margin:0;padding:0;font-size:78px;line-height:1;font-weight:900;background:linear-gradient(90deg,#ff2d7f 0%,#00e0ff 50%,#ffe600 100%);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">12% OFF</div></td></tr><tr><td align="center" style="padding:14px 18px 22px 18px;"><p style="margin:0;font-size:16px;line-height:1.5;color:#111111;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">First to know when doors open. First to access everything.</p></td></tr></table>`;

  const kicker =
    pBold("Until then…", 20) +
    `<p style="margin:0 0 24px 0;font-size:22px;line-height:1.4;color:#111111;font-weight:900;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">Keep creating. <span style="background:linear-gradient(90deg,#ff2d7f 0%,#00e0ff 50%,#ffe600 100%);-webkit-background-clip:text;background-clip:text;color:transparent;">In a world of consumers.</span></p>` +
    `<p style="margin:0 0 6px 0;font-size:16px;line-height:1.5;color:#444444;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">— The Elan Vey Team</p>`;

  const divider = `<div style="height:3px;background:#ff2d7f;background:linear-gradient(90deg,#ff2d7f 0%,#00e0ff 50%,#ffe600 100%);border-radius:2px;margin:26px 0;"></div>`;

  const ps = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:26px;"><tr><td width="8" bgcolor="#00e0ff" style="width:8px;background:#00e0ff;border-radius:4px 0 0 4px;"></td><td style="padding:14px 18px;border:2px solid #e5e5e5;border-radius:0 12px 12px 0;background:#f6fffe;"><p style="margin:0;font-size:14.5px;line-height:1.55;color:#1a1a1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;"><strong style="color:#0b0b0b;">P.S.</strong> Quick question — where did you first hear about Elan Vey? Reply to this email and let us know — we read every one.</p></td></tr></table>`;

  const signature = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="padding:24px 0 0 0;"><p style="margin:0;font-size:12px;line-height:1.6;color:#888888;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">© ${YEAR} Elan Vey. All rights reserved.</p></td></tr></table>`;

  const card = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border:3px solid #0b0b0b;border-radius:28px;padding:36px 36px 32px 36px;box-shadow:6px 6px 0 #ffe600, 12px 12px 0 #ff2d7f, 18px 18px 0 #0b0b0b;"><tr><td style="padding:0;">${eyebrow}${headline}${bodyCopy}${noTable}${restCopy}${perk}${kicker}${divider}${ps}</td></tr></table>`;

  const preheader = `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;font-size:1px;line-height:1px;max-width:0;">Early spot locked. Here's what happens next.</div>`;

  const body = `<body style="margin:0;padding:0;background:#f5f4f1;-webkit-font-smoothing:antialiased;">${preheader}<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f4f1;"><tr><td align="center" style="padding:28px 14px 40px 14px;"><table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;"><tr><td style="padding:0;">${card}</td></tr><tr><td>${signature}</td></tr></table></td></tr></table></body>`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>${body}</html>`;
}

// ----------------------------------------------------------------------------
// DISPATCHER
// ----------------------------------------------------------------------------
export async function sendAutoReply(toEmail: string): Promise<SendResult> {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const secure = envFlag(process.env.SMTP_SECURE);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromName = process.env.SMTP_FROM_NAME || "Elan Vey";
  const fromAddress = process.env.SMTP_FROM_ADDRESS || user || "vision@elanvey.com";
  const replyTo = process.env.SMTP_REPLY_TO || fromAddress;

  if (!host || !portRaw || !user || !pass) {
    return {
      sent: false,
      error:
        "SMTP credentials not configured (set SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS env vars",
    };
  }

  const port = Number(portRaw);
  const isPortValid = Number.isFinite(port) && port > 0 && port < 65536;
  if (!isPortValid) return { sent: false, error: `Invalid SMTP_PORT: ${portRaw}` };

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  } catch (err) {
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toEmail,
      replyTo,
      subject: AUTO_REPLY_SUBJECT,
      text: buildPlainText(),
      html: buildHtmlBody(),
      headers: { "X-Mailer": "ElanVey-Waitlist" },
    });
    return { sent: true };
  } catch (err) {
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export { AUTO_REPLY_SUBJECT };
