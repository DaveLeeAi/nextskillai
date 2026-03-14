export type PathStatus = 'published' | 'draft' | 'archived';
export type LessonStatus = 'published' | 'draft' | 'review';
export type UserStatus = 'active' | 'inactive' | 'trial';
export type UserPlan = 'Free' | 'Pro' | 'Team';

export interface AdminPath {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: PathStatus;
  difficulty: string;
  duration: string;
  lessonCount: number;
  moduleCount: number;
  featured: boolean;
  updatedAt: string;
  color: string;
  audience: string;
}

export interface AdminLesson {
  id: string;
  slug: string;
  title: string;
  pathSlug: string;
  pathTitle: string;
  type: 'lesson' | 'practice' | 'quiz';
  duration: string;
  status: LessonStatus;
  updatedAt: string;
  order: number;
  hasQuiz: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  plan: UserPlan;
  status: UserStatus;
  pathsInProgress: number;
  lessonsCompleted: number;
  joinedAt: string;
  lastActive: string;
}

export interface AdminReview {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  featured: boolean;
  approved: boolean;
  source: string;
  submittedAt: string;
}

export interface AdminActivity {
  id: string;
  type: 'path_published' | 'lesson_created' | 'user_joined' | 'review_submitted' | 'lesson_published';
  title: string;
  description: string;
  time: string;
}

export const adminPaths: AdminPath[] = [
  {
    id: 'chatgpt-beginner-path',
    slug: 'chatgpt-beginner-path',
    title: 'ChatGPT Beginner Path',
    tagline: "Master the world's most popular AI tool from scratch",
    description: 'A step-by-step path for absolute beginners who want to understand and use ChatGPT in daily life.',
    status: 'published',
    difficulty: 'Beginner',
    duration: '2 weeks',
    lessonCount: 12,
    moduleCount: 4,
    featured: true,
    updatedAt: '2 hours ago',
    color: 'from-sky-500 to-blue-600',
    audience: 'Complete beginners',
  },
  {
    id: 'everyday-ai-basics',
    slug: 'everyday-ai-basics',
    title: 'Everyday AI Basics',
    tagline: 'Learn the AI skills you will actually use every day',
    description: 'Short, practical lessons for using AI in real life — emails, planning, writing, and more.',
    status: 'published',
    difficulty: 'Easy Start',
    duration: '3 weeks',
    lessonCount: 15,
    moduleCount: 5,
    featured: true,
    updatedAt: '1 day ago',
    color: 'from-amber-500 to-orange-500',
    audience: 'Anyone wanting to save time',
  },
  {
    id: 'start-using-ai',
    slug: 'start-using-ai',
    title: 'Start Using AI',
    tagline: 'Your first steps into AI — calm, simple, and practical',
    description: 'The gentlest introduction to AI. No tech background needed. Just curiosity.',
    status: 'published',
    difficulty: 'Beginner',
    duration: '1 week',
    lessonCount: 8,
    moduleCount: 2,
    featured: false,
    updatedAt: '3 days ago',
    color: 'from-teal-500 to-teal-600',
    audience: 'First-time learners',
  },
  {
    id: 'ai-writing-basics',
    slug: 'ai-writing-basics',
    title: 'AI Writing Basics',
    tagline: 'Write better, faster, with a little AI help',
    description: 'Use AI to improve your writing — from quick emails to longer projects.',
    status: 'draft',
    difficulty: 'Beginner',
    duration: '2 weeks',
    lessonCount: 10,
    moduleCount: 3,
    featured: false,
    updatedAt: '5 days ago',
    color: 'from-pink-500 to-rose-500',
    audience: 'Writers, communicators',
  },
  {
    id: 'ai-productivity-starter',
    slug: 'ai-productivity-starter',
    title: 'AI Productivity Starter',
    tagline: 'Small AI habits that create big changes over time',
    description: 'Build simple daily routines using AI tools to save time and stay organised.',
    status: 'draft',
    difficulty: 'Easy Start',
    duration: '3 weeks',
    lessonCount: 14,
    moduleCount: 4,
    featured: false,
    updatedAt: '1 week ago',
    color: 'from-emerald-500 to-teal-500',
    audience: 'Busy professionals',
  },
  {
    id: 'ai-confidence-builder',
    slug: 'ai-confidence-builder',
    title: 'AI Confidence Builder',
    tagline: 'Go from confused to capable, one step at a time',
    description: 'For people who feel overwhelmed or nervous about AI. Build confidence gently.',
    status: 'archived',
    difficulty: 'Beginner',
    duration: '3 weeks',
    lessonCount: 11,
    moduleCount: 3,
    featured: false,
    updatedAt: '2 weeks ago',
    color: 'from-violet-500 to-purple-500',
    audience: 'Low-confidence learners',
  },
];

export const adminLessons: AdminLesson[] = [
  { id: 'al1', slug: 'what-is-chatgpt', title: 'What Is ChatGPT?', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '5 min', status: 'published', updatedAt: '2 hours ago', order: 1, hasQuiz: false },
  { id: 'al2', slug: 'understanding-ai-basics', title: 'Understanding AI Basics', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '6 min', status: 'published', updatedAt: '2 hours ago', order: 2, hasQuiz: true },
  { id: 'al3', slug: 'setting-up-chatgpt', title: 'Setting Up ChatGPT', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '4 min', status: 'published', updatedAt: '1 day ago', order: 3, hasQuiz: false },
  { id: 'al4', slug: 'your-first-conversation', title: 'Your First Conversation', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'practice', duration: '7 min', status: 'published', updatedAt: '1 day ago', order: 4, hasQuiz: false },
  { id: 'al5', slug: 'what-ai-is-good-at', title: 'What AI Is Good At', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '5 min', status: 'published', updatedAt: '3 days ago', order: 5, hasQuiz: true },
  { id: 'al6', slug: 'how-to-ask-better-questions', title: 'How to Ask Better Questions', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '8 min', status: 'published', updatedAt: '3 days ago', order: 6, hasQuiz: true },
  { id: 'al7', slug: 'getting-useful-answers', title: 'Getting Useful Answers', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '6 min', status: 'draft', updatedAt: '4 days ago', order: 7, hasQuiz: false },
  { id: 'al8', slug: 'when-ai-gets-it-wrong', title: 'When AI Gets It Wrong', pathSlug: 'chatgpt-beginner-path', pathTitle: 'ChatGPT Beginner Path', type: 'lesson', duration: '5 min', status: 'draft', updatedAt: '5 days ago', order: 8, hasQuiz: true },
  { id: 'al9', slug: 'what-is-ai-everyday', title: 'What Is AI?', pathSlug: 'everyday-ai-basics', pathTitle: 'Everyday AI Basics', type: 'lesson', duration: '5 min', status: 'published', updatedAt: '1 day ago', order: 1, hasQuiz: false },
  { id: 'al10', slug: 'writing-emails-with-ai', title: 'Writing Emails with AI', pathSlug: 'everyday-ai-basics', pathTitle: 'Everyday AI Basics', type: 'lesson', duration: '7 min', status: 'published', updatedAt: '2 days ago', order: 2, hasQuiz: true },
  { id: 'al11', slug: 'brainstorming-with-ai', title: 'Brainstorming with AI', pathSlug: 'everyday-ai-basics', pathTitle: 'Everyday AI Basics', type: 'practice', duration: '6 min', status: 'draft', updatedAt: '1 week ago', order: 3, hasQuiz: false },
  { id: 'al12', slug: 'staying-safe-with-ai', title: 'Staying Safe and Smart with AI', pathSlug: 'everyday-ai-basics', pathTitle: 'Everyday AI Basics', type: 'lesson', duration: '8 min', status: 'review', updatedAt: '6 days ago', order: 4, hasQuiz: true },
];

export const adminUsers: AdminUser[] = [
  { id: 'u1', name: 'Alex Morgan', email: 'alex@example.com', plan: 'Pro', status: 'active', pathsInProgress: 2, lessonsCompleted: 14, joinedAt: 'Feb 2025', lastActive: '2 hours ago' },
  { id: 'u2', name: 'Jordan Kim', email: 'jordan@example.com', plan: 'Pro', status: 'active', pathsInProgress: 1, lessonsCompleted: 8, joinedAt: 'Feb 2025', lastActive: '1 day ago' },
  { id: 'u3', name: 'Sam Rivera', email: 'sam@example.com', plan: 'Free', status: 'trial', pathsInProgress: 1, lessonsCompleted: 3, joinedAt: 'Mar 2025', lastActive: '3 days ago' },
  { id: 'u4', name: 'Taylor Brooks', email: 'taylor@example.com', plan: 'Pro', status: 'active', pathsInProgress: 3, lessonsCompleted: 22, joinedAt: 'Jan 2025', lastActive: '5 hours ago' },
  { id: 'u5', name: 'Casey Wright', email: 'casey@example.com', plan: 'Free', status: 'inactive', pathsInProgress: 0, lessonsCompleted: 1, joinedAt: 'Mar 2025', lastActive: '2 weeks ago' },
  { id: 'u6', name: 'Drew Patel', email: 'drew@example.com', plan: 'Team', status: 'active', pathsInProgress: 2, lessonsCompleted: 18, joinedAt: 'Jan 2025', lastActive: '1 hour ago' },
  { id: 'u7', name: 'Morgan Chen', email: 'morgan@example.com', plan: 'Pro', status: 'active', pathsInProgress: 1, lessonsCompleted: 5, joinedAt: 'Mar 2025', lastActive: 'Yesterday' },
  { id: 'u8', name: 'Riley Santos', email: 'riley@example.com', plan: 'Free', status: 'trial', pathsInProgress: 1, lessonsCompleted: 2, joinedAt: 'Mar 2025', lastActive: 'Today' },
];

export const adminReviews: AdminReview[] = [
  { id: 'r1', name: 'Sarah M.', role: 'Marketing Manager', quote: 'I went from being completely confused about AI to using ChatGPT every single day. This platform made it feel totally manageable.', rating: 5, featured: true, approved: true, source: 'In-app', submittedAt: '3 days ago' },
  { id: 'r2', name: 'James T.', role: 'Freelancer', quote: 'The lessons are short enough that I can do one during lunch. I have already saved hours on writing tasks.', rating: 5, featured: true, approved: true, source: 'In-app', submittedAt: '1 week ago' },
  { id: 'r3', name: 'Priya K.', role: 'Small Business Owner', quote: 'Finally an AI course that does not assume I have a tech background. Everything is explained in plain English.', rating: 5, featured: false, approved: true, source: 'Email', submittedAt: '2 weeks ago' },
  { id: 'r4', name: 'Tom W.', role: 'Retired Teacher', quote: 'I am 63 years old and this actually made sense to me. The AI tutor feature is a brilliant idea.', rating: 5, featured: true, approved: true, source: 'In-app', submittedAt: '2 weeks ago' },
  { id: 'r5', name: 'Emma L.', role: 'Student', quote: 'Really good content but I would love more examples for academic writing specifically.', rating: 4, featured: false, approved: true, source: 'In-app', submittedAt: '3 weeks ago' },
  { id: 'r6', name: 'Carlos R.', role: 'Project Manager', quote: 'The productivity path changed how I plan my week. AI for task sorting is genuinely useful.', rating: 5, featured: false, approved: false, source: 'Email', submittedAt: '1 month ago' },
];

export const adminActivity: AdminActivity[] = [
  { id: 'a1', type: 'lesson_published', title: 'Lesson Published', description: '"How to Ask Better Questions" went live', time: '2 hours ago' },
  { id: 'a2', type: 'user_joined', title: 'New User', description: 'Riley Santos joined on Free plan', time: '4 hours ago' },
  { id: 'a3', type: 'review_submitted', title: 'Review Submitted', description: 'Carlos R. left a 5-star review', time: '6 hours ago' },
  { id: 'a4', type: 'lesson_created', title: 'Lesson Created', description: '"Staying Safe with AI" added to Everyday AI Basics', time: '1 day ago' },
  { id: 'a5', type: 'user_joined', title: 'New User', description: 'Morgan Chen joined on Pro plan', time: '2 days ago' },
  { id: 'a6', type: 'path_published', title: 'Path Updated', description: 'Everyday AI Basics — 3 lessons added', time: '2 days ago' },
];

export const adminStats = {
  totalPaths: adminPaths.length,
  publishedPaths: adminPaths.filter((p) => p.status === 'published').length,
  totalLessons: adminLessons.length,
  publishedLessons: adminLessons.filter((l) => l.status === 'published').length,
  totalUsers: adminUsers.length,
  activeUsers: adminUsers.filter((u) => u.status === 'active').length,
  totalReviews: adminReviews.length,
  approvedReviews: adminReviews.filter((r) => r.approved).length,
  featuredPaths: adminPaths.filter((p) => p.featured).length,
  draftContent: [...adminPaths.filter((p) => p.status === 'draft'), ...adminLessons.filter((l) => l.status === 'draft')].length,
};
