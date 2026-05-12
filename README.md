# MissionaryDoctors

A Next.js 14 + TypeScript + Tailwind conversion of the prototype HTML pages
(`home`, `hospitals`, `hospital`, `needs`, `project`).

## What's inside

- **App Router** with five routes:
  - `/` — home (calling / fund / serve)
  - `/hospitals` — hospital tours index (search + region filters + sort)
  - `/hospitals/[slug]` — hospital detail (Tenwek is fully built out; other
    slugs render a graceful fallback)
  - `/needs` — missionary needs index (category filter + sort)
  - `/needs/[slug]` — full project/donation page (Solar power for the
    maternity ward + Cholera response are fully built out)
- **Reusable, prop-driven components** under `components/`:
  - `Header`, `Footer`
  - `HospitalCard`, `NeedCard` (no hard-coded values; everything via props)
  - `ProgressBar` — animates from `0` to the computed `raised / goal` on
    mount; supports a `variant` of `"default" | "urgent"`.
  - `DonationAside` — sticky donation widget with preset amounts, custom
    input, dynamic Give button label, an `onSelect` callback, and a demo
    `console.log` handler. Completely prop-driven (raised, goal, donors,
    estimatedClose, presets, defaultAmount, onSelect, onGive).
  - `FAQ` — accordion using the modern `grid-template-rows: 0fr → 1fr`
    technique for smooth, natural-height open/close animations.
  - `FilterChips` — generic chip group with controlled active state.
  - `Button`, `Eyebrow`, `RichText` (lightweight `**bold**` formatter).
- **Centralized data** in `lib/data.ts`. The two demo projects
  (`solar-power-maternity` at 85%, `cholera-response-drc` at ~62%) are
  fully fleshed out so you can compare the requested 40%/90% style states.
- **Tailwind** configured with the paper / bone / ink / terra / moss palette
  and the three site fonts (`Fraunces` + `JetBrains Mono` via `next/font`,
  `Geist` via Google Fonts CSS).

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Demonstrating the requirements

| Requirement                                | Where to see it                                                   |
| ------------------------------------------ | ----------------------------------------------------------------- |
| Prop-driven components, no hard-coded vals | `components/*` — every card/aside/progress takes data via props   |
| Funding progress @ 40% / 90% via props     | Visit `/needs` (12 cards across many states); detail pages too    |
| Preset + custom donation amount            | `/needs/solar-power-maternity` aside (preset, then type a number) |
| Dynamic Give button label                  | Same — the button text updates as you click/type                  |
| `onSelect` demo handler                    | Open DevTools console — every change logs to console              |
| Animated progress bar on load              | Reload `/needs/solar-power-maternity` and watch the bar fill      |
| Sticky donation aside w/ mobile behavior   | Resize from desktop → 375px; the aside drops below the content    |
| FAQ accordion                              | Bottom of any detail page                                         |
| Responsive 375px                           | Verified across all five routes                                   |

## File layout

```
app/
  layout.tsx
  page.tsx                          (home)
  globals.css
  not-found.tsx
  hospitals/
    page.tsx                        (server)
    HospitalsClient.tsx             (filter + search + sort)
    [slug]/page.tsx                 (hospital detail)
  needs/
    page.tsx                        (server)
    NeedsClient.tsx                 (filter + sort)
    [slug]/page.tsx                 (project / donation)
components/
  Button.tsx
  DonationAside.tsx
  Eyebrow.tsx
  FAQ.tsx
  FilterChips.tsx
  Footer.tsx
  Header.tsx
  HospitalCard.tsx
  NeedCard.tsx
  ProgressBar.tsx
  RichText.tsx
lib/
  data.ts        (all hospitals/needs/copy)
  format.ts      (money + percent helpers)
  types.ts       (TS interfaces)
```

## Notes

- This phase is frontend-only — clicking **Give** logs to the console
  rather than initiating a payment.
- Images are loaded directly from Unsplash for the prototype. Replace with
  your own hosted assets before production.
