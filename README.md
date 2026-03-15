# NextSkill AI

> AI-powered education platform for practical skill building.

NextSkill AI is a modern, production-grade edtech platform that helps beginners master AI tools through guided learning paths, bite-sized lessons, adaptive quizzes, and a personal AI tutor. The platform supports learners across three tiers — Beginner, Intermediate, and Advanced — with a full catalog of 2026-relevant content.

---

## Layer 12 — Advanced Content Pass + Full Beginner Expansion

Two-pass content expansion delivering a complete multi-tier curriculum.

### Pass 1 — Additive Advanced Content Pass

Added a full advanced/intermediate tier alongside the existing beginner platform. All existing content preserved exactly.

| Item | Added |
|---|---|
| New advanced learning paths | **8** |
| New advanced courses | **20** |
| New advanced opening lessons | **8** |
| New UI components | **2** (AdvancedPathCard, AdvancedCourseCard) |

**New Advanced Paths:**

| Path | Level | Slug |
|---|---|---|
| AI Agents and Modern Workflows | Advanced | `ai-agents-modern-workflows` |
| Advanced Prompting for Reliable Output | Advanced | `advanced-prompting-reliable-output` |
| AI Research and Synthesis Workflows | Intermediate | `ai-research-synthesis-workflows` |
| Multimodal AI for Real Work | Intermediate | `multimodal-ai-real-work` |
| Evaluating AI Output and Reducing Mistakes | Advanced | `evaluating-ai-output-reducing-mistakes` |
| AI Automation for Knowledge Workers | Advanced | `ai-automation-knowledge-workers` |
| MCP: Tool-Connected AI Basics | Intermediate | `mcp-tool-connected-ai-basics` |
| Practical AI Systems for Teams | Advanced | `practical-ai-systems-for-teams` |

**UI updates:** `/paths` page gained an Advanced section with anchor navigation and tier badges. `/courses` page gained a Beginner/Advanced toggle.

---

### Pass 2 — Full Content Depth Expansion

Full lesson sets for all 8 advanced paths plus new beginner path content. Every lesson is unique with a distinct learning outcome and no redundancy.

**Advanced path lesson totals (after expansion):**

| Path | Lessons |
|---|---|
| AI Agents | 8 |
| Advanced Prompting | 7 |
| Evaluating AI Output | 5 |
| MCP | 4 |
| Research Synthesis | 4 |
| Multimodal AI | 3 |
| AI Automation | 3 |
| Practical AI for Teams | 3 |

**New beginner path content:**

| Path | New Lessons |
|---|---|
| AI Writing Basics | 6 (intro, emails, tone/style, social posts, editing, quiz) |
| AI for Work Essentials | 6 (intro, work communication, meeting summaries, project planning, research/summaries, quiz) |

**Module definitions added** for all 8 advanced paths in `lessons.ts` (evaluation, MCP, research, multimodal, automation, teams — completing the set started in Pass 1).

---

## Layer 10 — Content Expansion + Lesson Depth Overhaul

The platform content library has been significantly expanded to support launch credibility. The focus of this layer was educational substance: more paths, deeper lessons, stronger checkpoints, and a realistic beginner learning progression.

### Content Inventory (Before → After)

| Item | Before | After |
|---|---|---|
| Learning Paths | 5 | **12** |
| Modules | 7 | **44** |
| Lessons | 16 | **94** |
| Lesson Blocks | 7 | **163** |
| Checkpoints | 2 | **27** |

### New Learning Paths Added

| Path | Audience | Status |
|---|---|---|
| AI Confidence Builder | Total beginners, nervous learners | Published |
| AI for Work Essentials | Working professionals | Published |
| AI for Email and Communication | Anyone who writes emails | Published |
| Safe and Smart AI Use | Anyone using AI tools | Published |
| AI for Study and Learning | Students, self-learners | Published |
| AI for Job Seekers | Job seekers, career changers | Published |
| AI for Small Business Basics | Small business owners, freelancers | Published |

### Flagship Path Expansions

- **Start Using AI** — expanded from 1 to 4 modules (12 lessons total)
- **ChatGPT Beginner Path** — expanded from 4 to 5 modules
- **Everyday AI Basics** — expanded from 2 to 4 modules

### Lesson Depth

Every key lesson now includes structured blocks:
- Short intro / explainer
- Key takeaway
- Practical example (often a before/after or prompt example)
- Checklist of use cases or habits
- Practice task the learner can try immediately
- Recap

### Checkpoint Quality

27 checkpoint questions across flagship lessons covering:
- Multiple choice
- True/false
- Choose the better prompt (side-by-side comparison)
- Reflection prompts

### Learning Progression

Lessons are sequenced from foundational to practical:
- What is AI? → How AI thinks → What a prompt is → Weak vs strong prompts → Writing emails → Summarizing documents → Brainstorming → When AI gets it wrong → Safety and privacy

---

## Previous Layers

### Layer 9 — Lesson Player + Admin Content Tools

Full lesson reading experience with block-based content rendering, progress tracking, AI tutor panel, notes drawer, and checkpoint quizzes. Admin tools for managing lessons, paths, and content.

### Layer 8 — Admin Panel

Admin dashboard with user management, path management, lesson management, review moderation, featured content controls, and platform settings.

### Layer 7 — Learner Dashboard

Full learner app with enrolled path tracking, progress visualization, lesson continuation, profile management, and stat tracking.

### Layer 6 — Pricing + Reviews Pages

Public-facing pricing page with plan comparison, reviews page with filtering and star ratings.

### Layer 5 — Courses + Paths Catalog

Full public catalog pages for learning paths and courses with filtering, sorting, search, and card layouts.

### Layer 4 — Supabase Database Schema

Complete database schema covering users, paths, modules, lessons, lesson blocks, checkpoints, enrollments, progress, and reviews. Full RLS security on every table.

### Layer 3 — Public Pages (Courses, Paths, Pricing, Reviews)

Page shells with real data structures, section components, and realistic placeholder content.

### Layer 2 — Auth (Supabase)

Email/password authentication with sign-in, registration, protected routes, and session management.

### Layer 1 — Foundation + Homepage

Design system, global shell (Navbar, Footer), homepage sections, and base component library.

---

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + tailwindcss-animate
- **Icons**: Lucide React
- **UI Primitives**: shadcn/ui (Radix UI base)
- **Database**: Supabase (PostgreSQL + RLS)
- **Auth**: Supabase Auth (email/password)
- **Font**: Inter via `next/font/google`

---

## Project Structure

```
app/                    Next.js App Router pages
  layout.tsx            Root layout
  page.tsx              Homepage
  admin/                Admin panel and sub-pages
  app/                  Learner dashboard and sub-pages
  courses/              Public course catalog
  paths/                Public paths catalog
  pricing/              Pricing page
  reviews/              Reviews page
  signin/               Sign-in
  get-started/          Registration

components/
  layout/               Navbar, Footer, Container, SiteLayout
  home/                 Homepage sections
  admin/                Admin panel components
  app/                  Learner app components
  lesson/               Lesson player components
  shared/               Reusable UI primitives
  ui/                   shadcn/ui base components

lib/
  data/                 Static content and mock data files
  types/index.ts        TypeScript interfaces
  utils.ts              cn() helper

supabase/
  functions/            Edge functions (if any)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
