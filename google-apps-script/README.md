# Google Sheets waitlist connection + auto-reply

## Setup

1. Open the destination Google Sheet and create a tab named `Waitlist`.
2. Add these first-row headers (column D is optional but recommended for auditing):
   ```
   A: Email   B: Source   C: Submitted At   D: Auto-Reply Sent
   ```
3. Open **Extensions → Apps Script**, replace the editor contents with `Code.gs`, and save the project.
4. Select **Deploy → New deployment → Web app**:
   - **Execute as**: Your account (the one whose Gmail will send the replies)
   - **Who has access**: **Anyone**
   - Click **Deploy** and authorize the script.
   - You will be prompted for **two** permissions:
     1. Access to your Google Sheets (to append rows).
     2. Access to **Gmail** (to send the auto-replies).
   - Approve both.
5. Copy the URL ending in `/exec`.
6. Add this variable to the production hosting environment (for example, Vercel project settings), then redeploy:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

## How it works

- The website server posts signup emails to the Apps Script webhook URL (never exposed to clients).
- Duplicate emails are skipped silently (no duplicate reply sent).
- Every **new** lead is appended to the `Waitlist` tab **and** automatically receives a branded welcome email from your connected Gmail account.
- Column D tracks reply status: `pending` → `sent — <timestamp>` or `FAILED — <error>`.

## Customizing the auto-reply

Edit the constants at the top of `Code.gs`:

| Constant                  | What it does                                                            |
| ------------------------- | ----------------------------------------------------------------------- |
| `ENABLE_AUTO_REPLY`       | `true` to send replies, `false` to just collect emails (no Gmail auth needed). |
| `AUTO_REPLY_SENDER_NAME`  | Friendly "From" name shown to the recipient (e.g. "Elan Vey").          |
| `AUTO_REPLY_SUBJECT`      | Email subject line.                                                     |
| `AUTO_REPLY_PREHEADER`    | Short line shown under the subject in every inbox preview.              |
| `AUTO_REPLY_REPLY_TO`     | Address that receives replies from the user. Leave `""` to use the default account. |
| `AUTO_REPLY_PLAIN_TEXT`   | Plain-text fallback for email clients that block HTML.                  |

The HTML email body is built by `buildAutoReplyHtml()` and uses your brand palette (neon pink / cyan / yellow) with the same brutalist card + multi-layer shadow style as the website. Edit the copy inside that function to change the welcome message.

## Re-deploying after edits

Any time you modify `Code.gs` in the Apps Script editor, click **Deploy → Manage deployments → the pencil icon → New version** and save. Keep the `/exec` URL the same (you do **not** need to update env vars).

---

## Works with every email provider (Gmail, Hotmail/Outlook, Yahoo, Apple, etc.)

The script has **zero** dependency on the recipient's email provider. Replies are sent from your Google account's Gmail SMTP (which is whitelisted by every major provider) and delivered TO any address the user signs up with.

### Cross-client rendering (what each user sees)

| Provider / Client               | Card style                              |
| ------------------------------- | --------------------------------------- |
| Gmail web, iOS Mail, Apple Mail | Full brutalist card (rounded 28px, 3 layers of shadow, gradient divider, neon accents) |
| Outlook 365 / Outlook.com web   | Full style (same as above)              |
| Yahoo web, AOL web              | Full style, gradient divider falls back to solid pink if needed |
| Outlook desktop (2016 / 2019)   | Clean flat white card with solid borders and pink accent bar (shadows + rounded corners not supported by Word engine; message is still identical) |
| Any text-only / slow connection | `AUTO_REPLY_PLAIN_TEXT` fallback (mirrors the HTML copy line-for-line)  |

### Deliverability & spam-avoidance checklist (do this once)

These steps dramatically lower the chance your welcome email lands in the "Junk" folder, **regardless of which provider the user uses:**

1. **Use a Google Workspace custom-domain account** (not a @gmail.com address) as the "Execute as" account. Gmail deliverability is significantly better for custom domains.
2. **Set `AUTO_REPLY_REPLY_TO` to a real, monitored inbox** (e.g. `hello@elanvey.com`) that actually receives replies. Outlook and Yahoo penalize "noreply" senders.
3. **If you have a custom domain, publish these DNS records** for the sending domain (they take ~24h to propagate):
   - **SPF** — add `include:_spf.google.com ~all` in a TXT record on `@`.
   - **DKIM** — generate a key in admin.google.com → Apps → Gmail → Authenticate email, and add the CNAME records.
   - **DMARC** — start with `v=DMARC1; p=none; rua=mailto:postmaster@elanvey.com` on `_dmarc`.
4. **Send a test to yourself at Gmail + Outlook.com + Yahoo.com + iCloud.com** before launch. If any test lands in Junk, the user marking it as "Not Junk" once trains the filter for future recipients on that provider.
5. **Never use "free money / win / guarantee / click here / $$$"** copy in the subject or body (already handled in the current template).
6. **Avoid a noreply@ from-address.** Users can't reply, and providers interpret that as a low-trust signal. `noReply: false` is already set in the script.

### Provider-specific gotchas

- **Outlook / Hotmail / Live / MSN** — their filter is the most aggressive of the big providers. The #1 fix is SPF + DKIM + DMARC (step 3 above). After that, ask early Outlook users to right-click → "Junk → Never block sender" which raises your sender reputation for everyone on Outlook.
- **Yahoo / AOL** — they heavily weight domain age and whether users actually open + reply to your mail. The in-email "quick question" callout (reply and tell us where you heard about us) actively helps here because real replies signal to Yahoo that this is legitimate mail.
- **Apple iCloud / Mail Privacy Protection (MPP)** — open-tracking pixels are stripped by default on Apple Mail. The current template does **not** include tracking pixels, so there's nothing to block; delivery works normally regardless of MPP.
- **Gmail promotions tab** — a transactional "you're on the waitlist" email should land in Primary 99% of the time. If a test lands in Promotions, dragging it into Primary once trains the classifier for other Gmail users.
