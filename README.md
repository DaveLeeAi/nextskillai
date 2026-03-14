# NextSkill AI

> AI-powered education platform for practical skill building.

NextSkill AI is a modern, production-grade edtech platform that helps learners master in-demand AI skills through guided learning paths, bite-sized lessons, adaptive quizzes, and a personal AI tutor.

---

## Layer 1 — Foundation & Homepage Shell

This is the first layer of a phased build. It establishes the complete design system, global site shell, and fully designed public homepage.

### What's Included

**Design System**
- Custom Tailwind config with brand blue + teal accent color ramps
- Typography scale, spacing system, shadow variants, and gradient utilities
- Global CSS tokens (`--ns-brand`, `--ns-teal`, etc.) for consistent theming
- Inter font via Next.js `next/font/google`

**Global Site Shell**
- Sticky `Navbar` with scroll-aware styling, active route links, and responsive mobile menu
- Dark `Footer` with grouped link columns and social icons
- `Container` layout primitive with consistent max-width and padding
- `SiteLayout` wrapper combining Navbar + Footer

**Reusable Shared Components**
- `BrandBadge` — colored label chips (default, hot, new, success, info, warning)
- `PathCard` — learning path preview card with icon, level badge, and hover state
- `FeatureCard` — icon + title + description card for platform features
- `TestimonialCard` — review card with avatar, rating stars, and featured variant
- `SectionHeading` — centered heading block with label, title, and subtitle
- `PlaceholderPage` — professional "coming soon" shell for future pages

**Homepage Sections**
| Section | Description |
|---|---|
| `HeroSection` | Headline, CTAs, and a styled mock learning dashboard visual |
| `TrustedSection` | Trust stats + company name ticker bar |
| `FeaturedPaths` | Six learning path cards in a responsive grid |
| `HowItWorks` | Four-step numbered process |
| `PlatformFeatures` | Six feature highlights in a 3-column grid |
| `TestimonialsSection` | Three testimonials with a featured center card |
| `CtaBanner` | Full-width brand gradient call-to-action |

**Routes**
| Route | Status |
|---|---|
| `/` | Fully designed homepage |
| `/courses` | Placeholder shell |
| `/paths` | Placeholder shell |
| `/pricing` | Placeholder shell |
| `/reviews` | Placeholder shell |
| `/signin` | Styled sign-in form (no auth yet) |
| `/get-started` | Styled registration form (no auth yet) |

---

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + tailwindcss-animate
- **Icons**: Lucide React
- **UI Primitives**: shadcn/ui (Radix UI base)
- **Font**: Inter via `next/font/google`

---

## Project Structure

```
app/                    Next.js App Router pages
  layout.tsx            Root layout with metadata and font
  page.tsx              Homepage
  courses/              Placeholder
  paths/                Placeholder
  pricing/              Placeholder
  reviews/              Placeholder
  signin/               Sign-in form shell
  get-started/          Registration form shell

components/
  layout/               Navbar, Footer, Container, SiteLayout
  home/                 One file per homepage section
  shared/               Reusable UI primitives
  ui/                   shadcn/ui base components

lib/
  data/homepage.ts      All homepage content (swappable)
  types/index.ts        TypeScript interfaces
  utils.ts              cn() helper
```

---

## Planned Layers

| Layer | Focus |
|---|---|
| Layer 1 | Foundation, design system, homepage (current) |
| Layer 2 | Auth (Supabase), sign-in, registration flows |
| Layer 3 | Course catalog, learning paths, search & filtering |
| Layer 4 | Lesson player, progress tracking, quizzes |
| Layer 5 | Learner dashboard, certificates, streaks |
| Layer 6 | Admin panel, content management |
| Layer 7 | Billing, subscriptions, team plans |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
