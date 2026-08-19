# Elan Vey Brand Guide

Official visual identity for **Elan Vey**. This site follows **neo-brutalism** — not glassmorphism.

---

## 1. Brand Essence

| Attribute | Direction |
|-----------|-----------|
| **Feel** | Bold, creative, ambitious, unapologetic |
| **Style** | Neo-brutalism / Y2K editorial |
| **Avoid** | Generic SaaS, soft glass UI, WordPress templates |

**Tagline:** Architect your limelight

---

## 2. Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Neon Yellow** | `#FFE600` | Headlines, CTAs, accents |
| **Neon Pink** | `#FF0066` | Headlines, pills, emphasis |
| **Neon Red** | `#FF0033` | Buttons text, icons, gradients |
| **Neon Cyan** | `#00CCFF` | Headlines, pills, links |
| **Blue** | `#0066FF` | Icons, progress fills |
| **Orange** | `#FF8C00` | Icons, warmth accents |
| **Cream** | `#F5F0E1` | Cards on dark sections |
| **Paper** | `#E8E8E4` | Page backgrounds |
| **Black** | `#000000` | Text, borders, shadows, dark sections |
| **White** | `#FFFFFF` | Text on dark, stamp edges |

### Gradients

- **Pill nav:** `#FF0066 → #FF0033 → #CC0000` (horizontal)
- **Progress bar:** `#66FF00 → #0066FF` (horizontal)

Use gradients **only** on the navbar pill and progress elements — not as random page backgrounds.

---

## 3. Typography

| Role | Font | Weight | Style |
|------|------|--------|-------|
| **Display / Headlines** | Archivo Black | 400 | ALL CAPS, brutal shadow |
| **Body / UI** | DM Sans | 400–700 | Sentence case, bold where needed |

### Headline treatment

```css
font-family: Archivo Black;
text-transform: uppercase;
text-shadow: 4px 4px 0 #000, 5px 5px 0 #000;
```

Large heroes use `6px 6px 0 #000` shadow.

### Hierarchy

1. Hero — oversized brutal display (yellow / cyan / pink blocks)
2. Section titles — brutal display, one accent colour
3. Body — DM Sans, bold for emphasis
4. Labels — uppercase, tracked, small

---

## 4. Neo-Brutalist Rules

### Do

- Hard **black borders** (2–3px)
- **Offset shadows** with zero blur (`4px 4px 0 #000`)
- **Solid colour fills** on cards and buttons
- **High contrast** — black on paper, white on black
- **Oversized type** and asymmetric layouts
- **Checkerboard** and **stamp-edge** dividers between sections
- **Paper texture** on light sections

### Don't

- Glassmorphism (blur, transparency, frosted panels)
- Soft gradients as backgrounds
- Rounded-everything UI (use pills only for nav + audience tags)
- Thin elegant shadows
- Muted luxury dark aesthetic (old direction — deprecated)

---

## 5. Components

### Navbar (Pill)

- Full-width capsule on mobile
- Pink-red gradient background
- Yellow **Elan Vey** logo + diamond
- Yellow **Subscribe Now** button, red text

### Buttons

| Variant | Fill | Text | Border | Shadow |
|---------|------|------|--------|--------|
| Primary | Yellow `#FFE600` | Red `#FF0033` | 3px black | 4px brutal |
| Secondary | Cream `#F5F0E1` | Black | 3px black | 4px brutal |
| Outline | Transparent | Black/white | 3px black | none |

### Cards (`.brutal-card`)

- Solid cream or accent fill
- 3px black border
- `box-shadow: 4px 4px 0 0 #000`
- No backdrop-blur, no opacity layers

### Section backgrounds

| Type | Background | Text |
|------|------------|------|
| Light | Paper + texture | Black |
| Dark | Solid black | White |
| Divider | Checkerboard or stamp edge | — |

---

## 6. Patterns & Motifs

| Pattern | Where |
|---------|-------|
| **Checkerboard** | Between hero and services |
| **Stamp edge** | Paper ↔ black section transitions |
| **Progress pill "O"** | Hero "YOUR" typography |
| **Geometric icons** | Stars, triangles, Pac-Man, sparkles |
| **Lantern stamp** | Services section graphic |

---

## 7. Layout

- Mobile-first (mockups designed at ~390px)
- Sections stack vertically with strong visual breaks
- No horizontal scroll
- Generous padding on paper sections
- Tight, punchy spacing on dark sections

---

## 8. Motion

- Subtle hover scale on buttons (`scale-105`)
- Progress bar fill animation on hero "O"
- Scroll fade-in on sections
- Respect `prefers-reduced-motion`

No heavy parallax, no constant animation, no blur transitions.

---

## 9. Voice & Copy

- Confident, direct, creative
- Speak to creators, builders, performers, sellers
- Use placeholders `[LIKE THIS]` for unconfirmed facts
- Never invent clients, awards, pricing, or testimonials

---

## 10. Code Reference

Design tokens live in:

```
src/data/brand.ts       — colour & component tokens
src/app/globals.css     — brutal utility classes
tailwind.config.ts      — Tailwind extensions
```

Key CSS classes:

| Class | Purpose |
|-------|---------|
| `.paper-bg` | Light textured section |
| `.brutal-text` | Display headline with shadow |
| `.brutal-card` | Solid card with border + shadow |
| `.pill-nav` | Gradient navbar capsule |
| `.subscribe-btn` | Yellow CTA button |
| `.checkerboard-divider` | Racing-flag band |
| `.stamp-edge-bottom` / `.stamp-edge-top` | Scalloped dividers |

---

## 11. Homepage Sections (Reference Mockups)

Reference images live in `public/images/sections/` (Section1–4).

| Section | Content | Mobile | Desktop |
|---------|---------|--------|---------|
| **1** | Architect Your Limelight + Who is Elan Vey for? | Stacked | Wider type; audience 2×2 grid |
| **2** | And everyone in between + Team behind content | Stacked | Text + caution tape side-by-side |
| **3** | The Vey Forward + services + lantern | Stacked | Services list + lantern 2-column |
| **4** | How we work + steps 01–02 | Stacked | Pink + black cards side-by-side |

---

## 12. Page Structure

Every page follows:

1. **Paper hero** — brutal headline + subtitle
2. **Content sections** — alternating paper / black
3. **Checkerboard or stamp** — between tone shifts
4. **Brutal CTA** — yellow button, black shadow
5. **Footer** — black, white text, yellow brand mark

---

*Last updated: matches mockup-driven neo-brutalist direction. Glassmorphism is deprecated for this project.*
