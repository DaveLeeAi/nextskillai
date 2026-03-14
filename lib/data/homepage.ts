import type {
  LearningPath,
  Feature,
  Testimonial,
  HowItWorksStep,
  TrustStat,
  CourseCategory,
  NavLink,
} from '@/lib/types';

export const navLinks: NavLink[] = [
  { label: 'Home',    href: '/'         },
  { label: 'Courses', href: '/courses'  },
  { label: 'Paths',   href: '/paths'    },
  { label: 'Pricing', href: '/pricing'  },
  { label: 'Reviews', href: '/reviews'  },
];

export const trustStats: TrustStat[] = [
  { value: '50,000+', label: 'Active Learners'   },
  { value: '200+',    label: 'Expert-Led Courses' },
  { value: '96%',     label: 'Completion Rate'    },
  { value: '4.9/5',   label: 'Learner Rating'     },
];

export const featuredPaths: LearningPath[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'Build a solid foundation in artificial intelligence — concepts, tools, and hands-on practice from day one.',
    category: 'Artificial Intelligence',
    lessonCount: 24,
    duration: '8 weeks',
    level: 'Beginner',
    badge: 'Most Popular',
    icon: 'Sparkles',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Mastery',
    description: 'Learn to craft precise, effective prompts for LLMs and unlock the full potential of AI language models.',
    category: 'AI Skills',
    lessonCount: 18,
    duration: '5 weeks',
    level: 'Intermediate',
    badge: 'Trending',
    icon: 'MessageSquare',
  },
  {
    id: 'ml-engineering',
    title: 'Machine Learning Engineer',
    description: 'From linear regression to neural networks — a structured path to becoming an ML practitioner.',
    category: 'Machine Learning',
    lessonCount: 40,
    duration: '14 weeks',
    level: 'Advanced',
    icon: 'BrainCircuit',
  },
  {
    id: 'ai-for-business',
    title: 'AI for Business Leaders',
    description: 'Understand and leverage AI to drive business decisions, automate workflows, and stay ahead of the curve.',
    category: 'Business & Strategy',
    lessonCount: 16,
    duration: '4 weeks',
    level: 'Beginner',
    badge: 'New',
    icon: 'LineChart',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Insights',
    description: 'Master Python, pandas, and visualization to turn raw data into clear, compelling business insights.',
    category: 'Data Science',
    lessonCount: 32,
    duration: '10 weeks',
    level: 'Intermediate',
    icon: 'BarChart2',
  },
  {
    id: 'ai-agents',
    title: 'Building AI Agents',
    description: 'Design and deploy autonomous AI agents using the latest frameworks, APIs, and orchestration patterns.',
    category: 'AI Engineering',
    lessonCount: 22,
    duration: '7 weeks',
    level: 'Advanced',
    badge: 'Hot',
    icon: 'Bot',
  },
];

export const courseCategories: CourseCategory[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Core AI concepts, theory, and applied techniques.',
    courseCount: 42,
    icon: 'Sparkles',
    color: 'brand',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Supervised, unsupervised, and reinforcement learning.',
    courseCount: 38,
    icon: 'BrainCircuit',
    color: 'teal',
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'Analytics, visualization, and statistical modeling.',
    courseCount: 29,
    icon: 'BarChart2',
    color: 'sky',
  },
  {
    id: 'llm',
    title: 'LLMs & Prompting',
    description: 'Working with large language models and prompt design.',
    courseCount: 21,
    icon: 'MessageSquare',
    color: 'emerald',
  },
];

export const features: Feature[] = [
  {
    id: 'ai-tutor',
    title: 'Personal AI Tutor',
    description: 'Get instant explanations, hints, and feedback tailored to your learning style — available 24/7.',
    icon: 'Bot',
  },
  {
    id: 'structured-paths',
    title: 'Guided Learning Paths',
    description: 'Follow expert-designed paths that build skills progressively, with clear milestones at every stage.',
    icon: 'Map',
  },
  {
    id: 'bite-sized',
    title: 'Bite-Sized Lessons',
    description: 'Short, focused modules designed for busy schedules. Learn in 15-minute sessions, anytime, anywhere.',
    icon: 'Clock',
  },
  {
    id: 'quizzes',
    title: 'Adaptive Quizzes',
    description: 'Smart quizzes that adapt to your pace and reinforce weak areas — so nothing slips through.',
    icon: 'CheckSquare',
  },
  {
    id: 'certificates',
    title: 'Verified Certificates',
    description: 'Earn recognized certificates upon completion. Share them on LinkedIn and prove your expertise.',
    icon: 'Award',
  },
  {
    id: 'progress',
    title: 'Progress Dashboard',
    description: 'Track streaks, completion rates, and skill growth across all your paths in one clear view.',
    icon: 'TrendingUp',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Choose Your Path',
    description: 'Browse curated learning paths tailored to your goals — from AI fundamentals to advanced engineering tracks.',
    icon: 'Compass',
  },
  {
    step: 2,
    title: 'Learn at Your Pace',
    description: 'Complete short, focused lessons with AI guidance, interactive examples, and hands-on exercises.',
    icon: 'BookOpen',
  },
  {
    step: 3,
    title: 'Test & Reinforce',
    description: 'Solidify your understanding through adaptive quizzes and mini-projects designed for real retention.',
    icon: 'FlaskConical',
  },
  {
    step: 4,
    title: 'Earn & Advance',
    description: 'Receive verified certificates at each milestone. Track your growth and unlock the next level of mastery.',
    icon: 'Trophy',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechNova',
    quote: 'NextSkill AI completely changed how I think about learning. The AI tutor breaks down complex ML concepts in a way that finally clicked for me. I went from zero to confidently shipping AI-powered features in 10 weeks.',
    avatar: 'SC',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Reid',
    role: 'Software Engineer',
    company: 'Meridian Labs',
    quote: "The structured paths are what set this apart. I've tried other platforms but the progression here is thoughtful — each lesson builds on the last. The prompt engineering path alone made me 3x more productive at work.",
    avatar: 'MR',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Aisha Patel',
    role: 'Data Analyst',
    company: 'Clearview Analytics',
    quote: "I needed to upskill quickly. The bite-sized format meant I could learn during my commute and lunch breaks. Three months in, I transitioned into a data science role I had been targeting for two years.",
    avatar: 'AP',
    rating: 5,
  },
];
