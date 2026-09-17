# Google Sheets waitlist store (SHEET-ONLY) + 100% client-owned auto-reply (SMTP via vision@elanvey.com)

## Architecture

The system now has two **separate** concerns, intentionally split so the auto-reply comes 100% FROM the client's real email address (vision@elanvey.com) with 0% involvement of any personal Gmail / Google SMTP.

### 1) Google Apps Script (Code.gs) → PURE STORAGE ONLY

The Apps Script at [Code.gs](file:///c:/Users/msbuddhu/Desktop/ElanVey_Final_Build/ElanVey_Final_Build/google-apps-script/Code.gs) does **one thing only**:
- Receives a POST `{ email, source, submittedAt }` from your Next.js site.
- Validates the email format.
- Checks for duplicates in the Waitlist sheet (skips duplicates).
- Appends **one row** to the `Waitlist` sheet tab.
- Returns:
  - `{ ok: true, duplicate: true }` → already existed
  - `{ ok: true, duplicate: false }` → appended successfully
  - `{ ok: false, error: "..." }` → failed

It **does NOT send emails, does NOT call GmailApp, does NOT need Gmail permissions.** This is a huge win:
- No `gmail.send` OAuth scope to authorize or debug (old issue of "Required permissions: mail.google.com" is gone forever).
- The Sheet owner's personal Gmail is never part of the mail pipeline.
- You only authorize ONE permission: `spreadsheets` (read/write to the sheet).

### 2) Next.js API + `src/lib/autoReply.ts` → CLIENT-OWNED AUTO-REPLY

Auto-reply dispatch lives entirely in Next.js server-side code at [autoReply.ts](file:///c:/Users/msbuddhu/Desktop/ElanVey_Final_Build/ElanVey_Final_Build/src/lib/autoReply.ts).

It connects **directly to vision@elanvey.com's SMTP server on GoDaddy / Microsoft 365 for GoDaddy** using `nodemailer`, and sends the branded welcome email FROM `vision@elanvey.com`.

This guarantees:
- **From header:** `Elan Vey <vision@elanvey.com>` — 100% client. No "via google", no "on behalf of", no personal Gmail fingerprints anywhere.
- **Replies (Reply-To):** `vision@elanvey.com` automatically.
- **Sent copy:** a copy of every welcome email is placed in **vision@elanvey.com's own GoDaddy Sent Items** folder (because it's sent through the actual SMTP server of that mailbox, not through Google).
- **Deliverability:** SPF / DKIM / DMARC all pass for elanvey.com because the mail is actually sent through elanvey.com's real email host.
- Zero touches of AryabhaattaJr@gmail.com or any personal account.

---

## Set up the Apps Script (SHEET-STORE ONLY)

1. In the Google Sheet, create the tab named `Waitlist` (case-sensitive).
2. Add these first-row headers in columns A–C (Column D is no longer used for reply status; reply status now lives in the Next.js local JSON + the API response):
   ```
   A1 = Email        B1 = Source        C1 = Submitted At
   ```
3. From the Sheet → **Extensions → Apps Script.**
4. Delete the default empty `Code.gs` in the Apps Script editor. Paste in the full contents of your local file [Code.gs](file:///c:/Users/msbuddhu/Desktop/ElanVey_Final_Build/ElanVey_Final_Build/google-apps-script/Code.gs). **Save (Ctrl+S).**
5. (Optional but recommended to lock the scopes) In Apps Script editor left sidebar → **⚙️ Project Settings → ☑️ Show "appsscript.json" manifest in editor.** Go back to Editor, open `appsscript.json`, delete contents, paste [appsscript.json](file:///c:/Users/msbuddhu/Desktop/ElanVey_Final_Build/ElanVey_Final_Build/google-apps-script/appsscript.json). **Save.** This forces oauthScopes = only `spreadsheets`; you will NEVER be asked for Gmail permission again.
6. **Deploy → New deployment → Web app:**
   - **Execute as:** `Me` (the account you created the Sheet with — works even for AryabhaattaJr@gmail.com because it only needs Sheets access).
   - **Who has access:** `Anyone` (NOT "Anyone with a Google account" — that would make the webhook private and break the site POSTs).
   - Click **Deploy** → authorize only the single `Spreadsheets` permission when prompted.
7. Copy the resulting `/exec` URL.
8. Set this env var in Vercel (Settings → Environment Variables) and redeploy:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
   ```

---

## Set up the CLIENT'S AUTO-REPLY (SMTP via vision@elanvey.com GoDaddy inbox)

You need **the actual SMTP credentials for vision@elanvey.com's mailbox.** These are NOT Google credentials — they are what you type into Outlook / Thunderbird / Apple Mail when you want to send email FROM vision@elanvey.com. These depend on which type of GoDaddy email it is:

### If vision@elanvey.com is on **Legacy GoDaddy Workspace Email** (older, smtpout.secureserver.net):

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=vision@elanvey.com
SMTP_PASS=<mailbox-password-for-vision>
SMTP_FROM_NAME=Elan Vey
SMTP_FROM_ADDRESS=vision@elanvey.com
SMTP_REPLY_TO=vision@elanvey.com
```

### If vision@elanvey.com is on **GoDaddy Microsoft 365 Email** (newer, email.office365.com / outlook.office365.com):

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false   # STARTTLS on port 587, not SSL on 465
SMTP_USER=vision@elanvey.com
SMTP_PASS=<mailbox-password-for-vision>
SMTP_FROM_NAME=Elan Vey
SMTP_FROM_ADDRESS=vision@elanvey.com
SMTP_REPLY_TO=vision@elanvey.com
```

Copy-paste these exact variables into Vercel Project → **Settings → Environment Variables** (all scopes: Production + Preview + Development), click **Save**, then go to **Deployments → 3 dots on latest Ready deployment → Redeploy**.

---

## How to verify everything works

Open `/api/debug-webhook` on your production site. The new diagnostic returns:

```json
{
  "configured": true,
  "webhook": "https://script.google.com/macros/s/***REDACTED***/exec",
  "testPayload": { "...": "..." },
  "fetch": {
    "status": 200,
    "statusText": "OK",
    "body": { "ok": true, "duplicate": false }
  },
  "smtp": {
    "configured": true,
    "sendTest": { "sent": true }
  },
  "diagnosis": [
    "✅ Webhook works correctly! Email appended (or duplicate skipped).",
    "✅ SMTP auto-reply configured correctly — test send succeeded. Welcome emails will arrive FROM vision@elanvey.com."
  ]
}
```

Both `✅` lines need to appear. If either says "⚠️ … failed", follow the error text inside `diagnosis`:

- Webhook error → fix Apps Script deploy "Who has access = Anyone".
- SMTP error → `SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS` don't match vision's real GoDaddy credentials. Double-check Workspace vs Microsoft 365 (the PORT + SECURE values change).

---

## End-to-end behavior

When a user signs up through `/waitlist` page OR the homepage "SAVE MY SPOT" modal:

1. Next.js API (`/api/waitlist` or `/api/leads`) validates the email, dedupes against local JSON, then:
   - **(a)** POSTs to Apps Script webhook → 1 row appended to the Google Sheet.
   - **(b)** Calls `sendAutoReply(email)` → connects to vision@elanvey.com's GoDaddy SMTP → sends branded welcome email FROM vision@elanvey.com TO the new user.
   - **(c)** Saves a local JSON backup (`.data/waitlist.json` or `.data/leads.json`) recording:
     `sheetsSaved / sheetsError / replySent / replyError`.
2. User receives the welcome email in their inbox → "From" shows `Elan Vey <vision@elanvey.com>`, "Reply" routes to `vision@elanvey.com`, and a copy is in vision's GoDaddy "Sent Items".

Duplicates (same email signed up twice) are skipped completely — no duplicate row added, no duplicate reply sent.

---

## Troubleshooting

**`smtp.sendTest.sent = false, error = "Invalid login: 535 Authentication failed"`**
  → `SMTP_USER` or `SMTP_PASS` are wrong for vision@elanvey.com's mailbox. Try resetting the mailbox password through GoDaddy → Workspace Email → Manage → Reset password, then paste the new one into Vercel.

**`error = "Connection closed / ETIMEDOUT / connection timeout"`**
  → Wrong SMTP_PORT / SMTP_SECURE combination. Rule of thumb:
    - Port 465 → `SMTP_SECURE=true` (SSL).
    - Port 587 → `SMTP_SECURE=false` (STARTTLS).
    - Port 25 is usually blocked by cloud hosts (Vercel) — never use it.

**Webhook 401/403 / HTML back instead of JSON**
  → Apps Script deploy "Who has access" was set to "Anyone with a Google account". Go to Deploy → Manage deployments → pencil → set to **Anyone → Deploy as NEW VERSION.**

---

## Re-deploying after edits

- **Apps Script (Code.gs changes):** Deploy → Manage deployments → pencil → Version = New version → Deploy. Same `/exec` URL. No changes to Vercel env vars.
- **Next.js auto-reply copy (autoReply.ts or the APIs):** Commit + push to git. Vercel auto-redeploys from GitHub.
- **SMTP env var changes:** After saving env vars in Vercel, remember to **Redeploy the latest successful deployment** (the env var change alone does NOT retroactively apply to running builds).
