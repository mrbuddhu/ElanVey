/**
 * Elan Vey waitlist → Google Sheets webhook + automated reply.
 *
 * Sheet setup:
 * 1. Create a sheet named "Waitlist" (or change SHEET_NAME below).
 * 2. Put these headers in row 1: Email | Source | Submitted At | Auto-Reply Sent
 *    (the 4th column "Auto-Reply Sent" is optional but helpful for auditing)
 * 3. Deploy this script as a Web app:
 *    Execute as: Me
 *    Who has access: Anyone
 *    (you will be asked to authorize both Spreadsheet AND Gmail permissions)
 * 4. Copy the /exec URL into GOOGLE_SHEETS_WEBHOOK_URL in your production
 *    hosting environment. Never expose that URL in client-side code.
 *
 * To customize the auto-reply, edit the AUTO_REPLY_* constants below.
 */

// ---------- CONFIG ----------
const SHEET_NAME = "Waitlist";
const ENABLE_AUTO_REPLY = true; // set to false to turn off auto-replies

const AUTO_REPLY_SENDER_NAME = "Elan Vey";
const AUTO_REPLY_SUBJECT = "Fortune Favours the Bold. Welcome to Elan Vey.";
const AUTO_REPLY_PREHEADER = "You're in. Early access secured + 12% founders' perk inside.";

// IMPORTANT: Set AUTO_REPLY_FROM_ADDRESS to the email the user should see
// in their "From" field. For this to work it MUST be either:
//   (a) the exact Google Workspace / Gmail account the Apps Script runs as
//       ("Execute as: Me" in the Web App deployment settings), OR
//   (b) an address you've already added as a verified "Send mail as" alias
//       under that Google account → Gmail Settings → Accounts → Send mail as.
// If neither is true, GmailApp.sendEmail() throws an error and the reply
// fails (column D will show "FAILED — …"). Leave "" to send from the
// default Execute-as account.
const AUTO_REPLY_FROM_ADDRESS = "vision@elanvey.com";
const AUTO_REPLY_REPLY_TO = "vision@elanvey.com"; // optional – leave "" to use the default

// Plain-text fallback (shown if recipient's email client blocks HTML).
// Keep this in sync with the HTML copy so every user sees the same message.
const AUTO_REPLY_PLAIN_TEXT = (() => {
  const year = new Date().getFullYear();
  return (
    "*Fortune Favours the Bold. Welcome to Elan Vey.*\n\n" +
    "Hey,\n\n" +
    "The world rewards the ones who take action.\n\n" +
    "Ideas are everywhere.\n\n" +
    "Everyone has something they want to do. A business they want to build. A song they want to release. A skill they want people to see. An idea they can't stop thinking about.\n\n" +
    "But the difference between \"I could\" and \"I did\" is action.\n\n" +
    "And you just took yours.\n\n" +
    "Being good at what you do doesn't mean you should know how to make the world notice it.\n\n" +
    "Whatever it is you create. We build the path.\n\n" +
    "No endless courses.\n" +
    "No 47-module \"secret formula.\"\n" +
    "No \"now go figure it out yourself.\"\n\n" +
    "With Elan Vey, you get a team behind you. Creators, editors, designers, strategists, marketers, influencers, analysts and more actually working on your vision and who have done this. While you focus on your Craft.\n\n" +
    "And the best part?\n\n" +
    "You don't just watch us do it. You learn while we do it.\n\n" +
    "Because we don't want to hand you a blueprint and wish you luck.\n\n" +
    "We want to build it with you.\n\n" +
    "----------------------------------------------------------------\n" +
    "YOUR FOUNDERS' PERK\n" +
    "You're on the waitlist now — first to know when doors open, plus 12% OFF for life.\n" +
    "----------------------------------------------------------------\n\n" +
    "Until then…\n\n" +
    "Keep creating. In a world of consumers.\n\n" +
    "— The Elan Vey Team\n\n" +
    "P.S. Quick one — where did you hear about Elan Vey? Just reply to this email, we read every one.\n\n" +
    "© " + year + " Elan Vey. All rights reserved."
  );
})();

// ---------- WEBHOOK ENTRYPOINT ----------
function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const email = String(body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ ok: false, error: "Valid email required" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse({ ok: false, error: "Waitlist sheet not found" });

    const rows = sheet.getDataRange().getValues();
    const duplicate = rows.slice(1).some((row) => String(row[0] || "").trim().toLowerCase() === email);

    let replySent = false;
    let replyError = null;

    if (!duplicate) {
      const now = new Date().toISOString();
      sheet.appendRow([
        email,
        String(body.source || "elanvey-waitlist"),
        now,
        "pending",
      ]);

      if (ENABLE_AUTO_REPLY) {
        try {
          sendAutoReply(email);
          replySent = true;
          const lastRow = sheet.getLastRow();
          sheet.getRange(lastRow, 4).setValue("sent — " + new Date().toISOString());
        } catch (err) {
          replyError = String(err);
          const lastRow = sheet.getLastRow();
          sheet.getRange(lastRow, 4).setValue("FAILED — " + replyError);
        }
      } else {
        const lastRow = sheet.getLastRow();
        sheet.getRange(lastRow, 4).setValue("disabled");
      }
    }

    return jsonResponse({ ok: true, duplicate, replySent, replyError });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

// ---------- AUTO-REPLY SENDER ----------
function sendAutoReply(recipientEmail) {
  const htmlBody = buildAutoReplyHtml();

  const options = {
    name: AUTO_REPLY_SENDER_NAME,
    htmlBody: htmlBody,
    noReply: false,
  };
  if (AUTO_REPLY_FROM_ADDRESS && AUTO_REPLY_FROM_ADDRESS.length > 0) {
    options.from = AUTO_REPLY_FROM_ADDRESS;
  }
  if (AUTO_REPLY_REPLY_TO && AUTO_REPLY_REPLY_TO.length > 0) {
    options.replyTo = AUTO_REPLY_REPLY_TO;
  }

  GmailApp.sendEmail(
    recipientEmail,
    AUTO_REPLY_SUBJECT,
    AUTO_REPLY_PLAIN_TEXT,
    options
  );
}

// ---------- BRANDED HTML TEMPLATE (cross-client safe) ----------
// Built with <table> layout because Outlook / Hotmail desktop uses the
// Word rendering engine and ignores div padding, margin, box-shadow,
// border-radius, and CSS gradients. Modern clients (Gmail, Apple Mail,
// Yahoo web, Outlook 365, iOS Mail) render the enhancements just fine;
// older Outlook simply falls back to a clean flat card (still readable).
function buildAutoReplyHtml() {
  const pink = "#FF2E93";
  const cyan = "#00F0FF";
  const yellow = "#FFE600";
  const black = "#0A0A0A";
  const offWhite = "#FAFAF7";
  const bodyFont = "Arial, Helvetica, sans-serif";

  // Hidden preheader (shows under subject in inboxes; 1px/white trick
  // hides it visually but every major mail client still parses it).
  const preheader =
    '<div style="display:none;font-size:1px;color:' + offWhite +
    ';line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">' +
    AUTO_REPLY_PREHEADER +
    // Padding characters prevent mail clients from pulling in the
    // footer text or "Reply" snippets instead of the preheader.
    '&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;' +
    '&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;' +
    '</div>';

  const cardBorder =
    'border:3px solid ' + black + ';' +
    'border-radius:28px;' +
    // Multi-layer brutalist shadow (ignored by Outlook desktop,
    // rendered correctly by Gmail / Apple / Yahoo / iOS / Outlook 365 web).
    'box-shadow:8px 8px 0 ' + yellow + ', 16px 16px 0 ' + pink + ', 24px 24px 0 ' + black + ';';

  // Pill (brand chip). Display:inline-block works everywhere for text,
  // but Outlook flattens border-radius → still a readable solid chip.
  const brandPill =
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center"><tr>' +
    '<td style="padding:10px 22px;border-radius:999px;background:' + black + ';color:' + yellow +
    ';font-weight:700;letter-spacing:2px;font-size:13px;font-family:' + bodyFont + ';">' +
    'ELAN&nbsp;&nbsp;VEY' +
    '</td></tr></table>';

  // Gradient divider. Yahoo / Outlook desktop drop linear-gradient and
  // show a solid pink bar instead (still visually consistent).
  const gradientDivider =
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"><tr>' +
    '<td style="background:linear-gradient(135deg,' + pink + ' 0%,' + cyan + ' 50%,' + yellow + ' 100%);' +
    'background-color:' + pink + ';height:6px;border-radius:999px;font-size:1px;line-height:1px;">' +
    '&nbsp;' +
    '</td></tr></table>';

  // ---- Editorial building blocks (all table-based = Outlook-safe) ----

  // "Eyebrow" kicker line (small uppercase pill, used before the headline)
  const eyebrow =
    '<div style="margin:0 0 16px 0;">' +
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0"><tr>' +
    '<td style="padding:8px 18px;border-radius:999px;background:' + yellow + ';color:' + black +
    ';font-weight:800;letter-spacing:1.5px;font-size:11px;font-family:' + bodyFont + ';">' +
    '✦&nbsp;&nbsp;EARLY ACCESS LOCKED&nbsp;&nbsp;✦' +
    '</td></tr></table>' +
    '</div>';

  // Large headline — Fortune Favours the Bold (editorial size, tight leading)
  const headline =
    '<h1 style="margin:0 0 10px 0;font-size:42px;line-height:0.98;font-weight:900;letter-spacing:-0.5px;color:' + black +
    ';font-family:' + bodyFont + ';">' +
    'Fortune Favours the Bold.' +
    '</h1>';

  // Secondary headline line
  const subHeadline =
    '<h2 style="margin:0 0 32px 0;font-size:28px;line-height:1;font-weight:700;' +
    'background:linear-gradient(135deg,' + pink + ' 0%,' + cyan + ' 50%,' + yellow + ' 100%);' +
    '-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;' +
    'color:' + pink + ';font-family:' + bodyFont + ';">' +
    'Welcome to Elan Vey.' +
    '</h2>';

  // Gradient divider (horizontal rule)
  const divider =
    '<div style="margin:28px 0 28px 0;">' + gradientDivider + '</div>';

  // Helper: a single editorial paragraph with consistent vertical rhythm.
  // margin-top 0, margin-bottom = gap arg (default 22px).
  const p = (text, gap) =>
    '<p style="margin:0 0 ' + (gap || '22px') + ' 0;font-size:17px;line-height:1.55;color:#1a1a1a;' +
    'font-family:' + bodyFont + ';">' + text + '</p>';

  // The "No endless courses" list — short punch lines, each a block,
  // big heavy "NO" prefix in neon pink, left-aligned with body text.
  const noLine = (text) =>
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"><tr>' +
    '<td valign="top" width="58" style="width:58px;padding:0 0 10px 0;">' +
    '<span style="font-size:17px;line-height:1.55;font-weight:900;color:' + pink +
    ';font-family:' + bodyFont + ';">NO&nbsp;</span>' +
    '</td>' +
    '<td valign="top" style="padding:0 0 10px 0;font-size:17px;line-height:1.55;color:#1a1a1a;' +
    'font-family:' + bodyFont + ';">' + text + '</td>' +
    '</tr></table>';

  const noList =
    '<div style="margin:0 0 28px 0;">' +
      noLine('endless courses.') +
      noLine('47-module "secret formula."') +
      noLine('"now go figure it out yourself."') +
    '</div>';

  // Founders' perk highlight card — 12% OFF block.
  // Nested table so Outlook renders every single piece of styling,
  // triple neon border + gradient text on the big number.
  const perkBlock = (() => {
    const labelTable =
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0"><tr>' +
      '<td style="padding:8px 16px;border-radius:999px;background:' + black + ';color:' + yellow +
      ';font-weight:800;letter-spacing:1.5px;font-size:12px;font-family:' + bodyFont + ';">' +
      '★&nbsp;&nbsp;YOUR FOUNDERS\' PERK&nbsp;&nbsp;★' +
      '</td></tr></table>';

    const bigNumber =
      '<div style="margin:14px 0 6px 0;font-size:72px;line-height:0.95;font-weight:900;letter-spacing:-2px;' +
      'background:linear-gradient(135deg,' + pink + ' 0%,' + cyan + ' 50%,' + yellow + ' 100%);' +
      '-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;' +
      'color:' + pink + ';font-family:' + bodyFont + ';">12% OFF</div>';

    const subLine =
      '<p style="margin:0;font-size:17px;line-height:1.55;font-weight:600;color:' + black +
      ';font-family:' + bodyFont + ';">' +
      "First to know when doors open. First to access everything." +
      '</p>';

    return (
      '<div style="margin:32px 0 32px 0;">' +
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"' +
      ' style="border:3px solid ' + black + ';border-radius:20px;' +
      'box-shadow:6px 6px 0 ' + yellow + ', 12px 12px 0 ' + pink + ';' +
      'background:linear-gradient(180deg,#fff 0%,' + offWhite + ' 100%);">' +
      '<tr><td style="padding:28px 26px 26px 26px;">' +
        labelTable +
        bigNumber +
        subLine +
      '</td></tr></table>' +
      '</div>'
    );
  })();

  // Closing kicker line (signature line before signoff)
  const closingKicker =
    '<p style="margin:0 0 26px 0;font-size:19px;line-height:1.35;font-weight:800;color:' + black +
    ';font-family:' + bodyFont + ';">' +
    "Until then…<br />" +
    'Keep creating. <span style="background:linear-gradient(135deg,' + pink + ',' + cyan + ');' +
    '-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;' +
    'color:' + pink + ';">In a world of consumers.</span>' +
    '</p>';

  // Signature
  const signature =
    '<p style="margin:0;font-size:16px;line-height:1.6;color:#1a1a1a;font-weight:600;' +
    'font-family:' + bodyFont + ';">' +
    "— The Elan Vey Team" +
    '</p>';

  // P.S. line (small callout bar at the bottom)
  const psLine =
    '<div style="margin-top:28px;">' +
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"' +
    ' style="background:' + offWhite + ';border-radius:14px;"><tr>' +
    '<td width="6" style="background:' + cyan + ';width:6px;border-radius:14px 0 0 14px;font-size:1px;">&nbsp;</td>' +
    '<td style="padding:16px 18px;font-size:14px;line-height:1.6;color:#1a1a1a;font-family:' + bodyFont + ';">' +
    '<strong style="color:' + black + ';">P.S.</strong> Quick one — where did you hear about Elan Vey? ' +
    'Just reply to this email, we read every one.' +
    '</td></tr></table>' +
    '</div>';

  const year = new Date().getFullYear();

  // ---- Compose the card body ----
  const cardBody =
    eyebrow +
    headline +
    subHeadline +

    p("Hey,") +
    p("The world rewards the ones who take action.") +
    p("Ideas are everywhere.") +
    p("Everyone has something they want to do. A business they want to build. A song they want to release. A skill they want people to see. An idea they can't stop thinking about.") +
    p('But the difference between "I could" and "I did" is action.') +
    p("And you just took yours.") +
    p("Being good at what you do doesn't mean you should know how to make the world notice it.") +
    p("Whatever it is you create. We build the path.") +

    noList +

    p("With Elan Vey, you get a team behind you. Creators, editors, designers, strategists, marketers, influencers, analysts and more actually working on your vision and who have done this. While you focus on your Craft.") +
    p("And the best part?") +
    p("You don't just watch us do it. You learn while we do it.") +
    p("Because we don't want to hand you a blueprint and wish you luck.") +
    p("We want to build it with you.", "0") +

    perkBlock +

    closingKicker +
    signature +
    psLine;

  // ---- Full shell (document) ----
  return (
    // ---- Outer shell (background page color, fallback body font) ----
    '<body style="margin:0;padding:0;background-color:' + offWhite + ';font-family:' + bodyFont + ';">' +

    // ---- Outlook desktop wrapper (Word renderer needs a wrapping table at 100%) ----
    '<!--[if mso]>' +
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="background:' + offWhite + ';"><tr><td>' +
    '<![endif]-->' +

    preheader +

    // ---- Padding wrapper (table, Outlook-safe) ----
    '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"' +
    ' style="background-color:' + offWhite + ';">' +
    '<tr><td align="center" style="padding:40px 20px 40px 20px;">' +

      // ---- Brand pill (above card) ----
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="560" style="width:100%;max-width:560px;">' +
      '<tr><td align="center" style="padding:0 0 28px 0;">' + brandPill + '</td></tr>' +
      '</table>' +

      // ---- Card table (fixed 560px, shrinks on mobile via max-width) ----
      '<!--[if mso]>' +
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="560" align="center"><tr><td>' +
      '<![endif]-->' +
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;max-width:560px;">' +
      '<tr><td align="center">' +

        '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"' +
        ' style="background:#ffffff;' + cardBorder + '">' +
        '<tr><td style="padding:40px 32px 40px 32px;font-family:' + bodyFont + ';">' +

          cardBody +

        '</td></tr></table>' + // end inner card table

      '</td></tr></table>' + // end outer card wrapper
      '<!--[if mso]>' +
      '</td></tr></table>' +
      '<![endif]-->' +

      // ---- Footer ----
      '<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="560" style="width:100%;max-width:560px;">' +
      '<tr><td align="center" style="padding:32px 0 0 0;font-size:12px;line-height:1.6;color:#666;' +
      'font-family:' + bodyFont + ';">' +
      "© " + year + " Elan Vey. All rights reserved." +
      '</td></tr></table>' +

    '</td></tr></table>' + // end padding wrapper

    '<!--[if mso]>' +
    '</td></tr></table>' +
    '<![endif]-->' +

    '</body>'
  );
}

// ---------- HELPERS ----------
function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
