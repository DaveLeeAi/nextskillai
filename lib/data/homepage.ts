import type {
  Feature,
  Testimonial,
  HowItWorksStep,
  TrustStat,
  NavLink,
} from '@/lib/types';
import type { LearningPath } from '@/lib/data/paths';

export const navLinks: NavLink[] = [
  { label: 'Home',    href: '/'         },
  { label: 'Courses', href: '/courses'  },
  { label: 'Paths',   href: '/paths'    },
  { label: 'Pricing', href: '/pricing'  },
  { label: 'Reviews', href: '/reviews'  },
];

export const trustStats: TrustStat[] = [
  { value: '28,000+', label: 'Everyday Learners'    },
  { value: '60+',     label: 'Plain-English Lessons' },
  { value: '92%',     label: 'Feel More Confident'   },
  { value: '4.8/5',   label: 'Learner Rating'        },
];

export const featuredPaths: LearningPath[] = [
  {
    id: 'first-steps',
    title: 'First Steps with AI',
    tagline: 'The gentlest way to get started',
    description: 'Never touched AI before? This path starts at the very beginning and walks you through everything in plain English — no jargon, no stress.',
    forWho: 'Complete beginners',
    courses: 6,
    duration: '1 week',
    level: 'Beginner',
    badge: 'Start Here',
    icon: 'Heart',
    color: 'from-rose-400 to-pink-500',
    skills: ['What AI is', 'ChatGPT basics', 'Asking good questions'],
    milestones: ['Try your first AI tool', 'Have a helpful conversation with ChatGPT', 'Complete your first lesson'],
    outcomes: ['Feel calm and comfortable using AI', 'Understand what all the AI talk actually means'],
  },
  {
    id: 'ai-for-work',
    title: 'AI for Work Essentials',
    tagline: 'Save time at work starting this week',
    description: 'Learn how to use AI to write faster, summarize meetings, handle emails, and get more done in less time — no tech skills needed.',
    forWho: 'Office workers and professionals',
    courses: 8,
    duration: '2 weeks',
    level: 'Easy Start',
    badge: 'Most Popular',
    icon: 'Briefcase',
    color: 'from-brand-500 to-brand-600',
    skills: ['Writing with AI', 'Email & summaries', 'Saving time daily'],
    milestones: ['Write your first AI-assisted email', 'Summarize a document in seconds', 'Build a daily AI habit'],
    outcomes: ['Write emails and documents faster', 'Impress your manager with productivity'],
  },
  {
    id: 'chatgpt-beginner',
    title: 'ChatGPT Beginner Path',
    tagline: 'Learn ChatGPT properly, from scratch',
    description: 'Start from zero and learn how to use ChatGPT well — how to ask better questions, avoid common mistakes, and get answers that actually help you.',
    forWho: 'Anyone new to ChatGPT',
    courses: 7,
    duration: '1–2 weeks',
    level: 'Beginner',
    badge: 'Trending',
    icon: 'MessageCircle',
    color: 'from-teal-500 to-emerald-500',
    skills: ['Using ChatGPT', 'Better prompts', 'Practical tasks'],
    milestones: ['Set up and use ChatGPT', 'Get a genuinely useful answer', 'Use AI for a real task'],
    outcomes: ['Use ChatGPT properly and confidently', 'Get genuinely helpful answers every time'],
  },
];

export const features: Feature[] = [
  {
    id: 'plain-english',
    title: 'Plain English, Always',
    description: 'No jargon, no tech-speak. Every lesson is written for regular people, not engineers. If you can read this, you can learn here.',
    icon: 'BookOpen',
  },
  {
    id: 'short-lessons',
    title: 'Just 10 Minutes a Day',
    description: 'Short, focused lessons designed for real life. You do not need a big chunk of time — a few minutes each day adds up fast.',
    icon: 'Clock',
  },
  {
    id: 'guided-paths',
    title: 'We Plan It For You',
    description: 'No guessing what to learn next. Every path is a step-by-step journey with a clear start, middle, and finish.',
    icon: 'Map',
  },
  {
    id: 'confidence',
    title: 'Built to Build Confidence',
    description: 'We start gently and build from there. You will feel capable after your very first lesson, not overwhelmed.',
    icon: 'Star',
  },
  {
    id: 'progress',
    title: 'See Your Progress Clearly',
    description: 'Simple check-ins after each lesson show exactly how far you have come. Feel good about every step you complete.',
    icon: 'CheckCircle',
  },
  {
    id: 'free-start',
    title: 'Free to Start, No Card Needed',
    description: 'Your first 5 lessons are completely free. No credit card, no catch. Just create an account and start learning.',
    icon: 'Zap',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Pick a path or lesson',
    description: 'Browse our beginner-friendly paths and lessons. Not sure where to start? We will recommend the right one for you.',
    icon: 'Compass',
  },
  {
    step: 2,
    title: 'Read at your own pace',
    description: 'Short lessons in plain English. No video required, no downloads. Read when you have 10 minutes and you are done.',
    icon: 'BookOpen',
  },
  {
    step: 3,
    title: 'Try it out yourself',
    description: 'Each lesson ends with a simple activity so you actually use what you learned — not just read about it.',
    icon: 'FlaskConical',
  },
  {
    step: 4,
    title: 'Build a real skill',
    description: 'Finish a path and walk away with a skill you actually use. Most learners notice a difference within their first week.',
    icon: 'Trophy',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sandra Mitchell',
    role: 'Office Administrator',
    company: '',
    quote: 'I was nervous to try anything to do with AI — it always felt like something for tech people. But after my first lesson I felt completely at ease. Now I use it every single day at work.',
    avatar: 'SM',
    rating: 5,
  },
  {
    id: 't2',
    name: 'David Park',
    role: 'High School Teacher',
    company: '',
    quote: "I did not think I was a tech person at all. But the lessons here are so clear and calm — I finished the whole first path in a week. I genuinely enjoy it. It feels nothing like I expected.",
    avatar: 'DP',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Rosemary Hughes',
    role: 'Retired Nurse',
    company: '',
    quote: "I am 63 and worried I was too old for this. But every single lesson makes sense. I am so glad I gave it a try. My grandchildren can not believe I know how to use ChatGPT now.",
    avatar: 'RH',
    rating: 5,
  },
];
