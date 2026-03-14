export interface LessonItem {
  id: string;
  slug: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  type: 'lesson' | 'practice' | 'quiz';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

export interface EnrolledPath {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  color: string;
  icon: string;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  level: string;
  lastActivity: string;
  nextLesson: string;
  nextLessonSlug: string;
}

export interface RecentActivity {
  id: string;
  type: 'lesson' | 'milestone' | 'streak';
  title: string;
  description: string;
  time: string;
  icon: string;
}

export interface RecommendedGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  color: string;
}

export interface WeeklyActivity {
  day: string;
  minutes: number;
}

export interface LessonContent {
  slug: string;
  title: string;
  pathTitle: string;
  pathSlug: string;
  duration: string;
  order: number;
  totalInPath: number;
  prevLesson: string | null;
  nextLesson: string | null;
  keyTakeaways: string[];
  practicePrompt: string;
  sections: { heading: string; body: string }[];
}

export const mockUser = {
  name: 'Alex',
  email: 'alex@example.com',
  plan: 'Pro',
  joinDate: 'February 2025',
  avatar: 'A',
  streak: 7,
  totalLessons: 14,
  totalPaths: 2,
  weeklyGoal: 20,
  weeklyMinutes: 34,
};

export const enrolledPaths: EnrolledPath[] = [
  {
    id: 'chatgpt-beginner-path',
    slug: 'chatgpt-beginner-path',
    title: 'ChatGPT Beginner Path',
    tagline: "Master the world's most popular AI tool from scratch",
    color: 'from-sky-500 to-blue-600',
    icon: 'MessageCircle',
    totalLessons: 12,
    completedLessons: 5,
    estimatedTime: '2 weeks',
    level: 'Beginner',
    lastActivity: '2 hours ago',
    nextLesson: 'How to Ask Better Questions',
    nextLessonSlug: 'how-to-ask-better-questions',
  },
  {
    id: 'everyday-ai-basics',
    slug: 'everyday-ai-basics',
    title: 'Everyday AI Basics',
    tagline: 'Learn the AI skills you will actually use every day',
    color: 'from-amber-500 to-orange-500',
    icon: 'Sun',
    totalLessons: 15,
    completedLessons: 2,
    estimatedTime: '3 weeks',
    level: 'Easy Start',
    lastActivity: '3 days ago',
    nextLesson: 'Writing Emails with AI',
    nextLessonSlug: 'writing-emails-with-ai',
  },
];

export const recentActivity: RecentActivity[] = [
  {
    id: '1',
    type: 'lesson',
    title: 'Completed: What Is ChatGPT?',
    description: 'ChatGPT Beginner Path',
    time: '2 hours ago',
    icon: 'CheckCircle',
  },
  {
    id: '2',
    type: 'milestone',
    title: 'Milestone Earned: First Conversation',
    description: 'You had your first real AI conversation',
    time: 'Yesterday',
    icon: 'Award',
  },
  {
    id: '3',
    type: 'lesson',
    title: 'Completed: Understanding AI Basics',
    description: 'ChatGPT Beginner Path',
    time: '2 days ago',
    icon: 'CheckCircle',
  },
  {
    id: '4',
    type: 'streak',
    title: '5-Day Streak!',
    description: 'You learned 5 days in a row',
    time: '3 days ago',
    icon: 'Flame',
  },
];

export const recommendedGuides: RecommendedGuide[] = [
  {
    id: '1',
    slug: 'ai-confidence-builder',
    title: 'AI Confidence Builder',
    description: 'Go from confused to capable, one step at a time',
    duration: '3 weeks',
    level: 'Beginner',
    icon: 'Heart',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    id: '2',
    slug: 'ai-writing-basics',
    title: 'AI Writing Basics',
    description: 'Write better, faster, with a little AI help',
    duration: '2 weeks',
    level: 'Beginner',
    icon: 'PenLine',
    color: 'bg-pink-50 text-pink-700',
  },
  {
    id: '3',
    slug: 'ai-productivity-starter',
    title: 'AI Productivity Starter',
    description: 'Small AI habits that create big changes over time',
    duration: '3 weeks',
    level: 'Easy Start',
    icon: 'Zap',
    color: 'bg-emerald-50 text-emerald-700',
  },
];

export const weeklyActivity: WeeklyActivity[] = [
  { day: 'Mon', minutes: 12 },
  { day: 'Tue', minutes: 0 },
  { day: 'Wed', minutes: 8 },
  { day: 'Thu', minutes: 15 },
  { day: 'Fri', minutes: 10 },
  { day: 'Sat', minutes: 0 },
  { day: 'Sun', minutes: 5 },
];

export const milestones: Milestone[] = [
  {
    id: '1',
    title: 'First Step',
    description: 'Completed your first lesson',
    earned: true,
    icon: 'Star',
  },
  {
    id: '2',
    title: 'First Conversation',
    description: 'Had your first AI chat',
    earned: true,
    icon: 'MessageCircle',
  },
  {
    id: '3',
    title: '5-Day Streak',
    description: 'Learned 5 days in a row',
    earned: true,
    icon: 'Flame',
  },
  {
    id: '4',
    title: 'Halfway There',
    description: 'Reach 50% of your first path',
    earned: false,
    icon: 'Target',
  },
  {
    id: '5',
    title: 'Path Complete',
    description: 'Finish your first learning path',
    earned: false,
    icon: 'Award',
  },
  {
    id: '6',
    title: '10-Day Streak',
    description: 'Learn 10 days in a row',
    earned: false,
    icon: 'Trophy',
  },
];

export const chatgptPathLessons: LessonItem[] = [
  { id: 'l1', slug: 'what-is-chatgpt', title: 'What Is ChatGPT?', duration: '5 min', completed: true, locked: false, type: 'lesson' },
  { id: 'l2', slug: 'understanding-ai-basics', title: 'Understanding AI Basics', duration: '6 min', completed: true, locked: false, type: 'lesson' },
  { id: 'l3', slug: 'setting-up-chatgpt', title: 'Setting Up ChatGPT', duration: '4 min', completed: true, locked: false, type: 'lesson' },
  { id: 'l4', slug: 'your-first-conversation', title: 'Your First Conversation', duration: '7 min', completed: true, locked: false, type: 'practice' },
  { id: 'l5', slug: 'what-ai-is-good-at', title: 'What AI Is Good At', duration: '5 min', completed: true, locked: false, type: 'lesson' },
  { id: 'l6', slug: 'how-to-ask-better-questions', title: 'How to Ask Better Questions', duration: '8 min', completed: false, locked: false, type: 'lesson' },
  { id: 'l7', slug: 'getting-useful-answers', title: 'Getting Useful Answers', duration: '6 min', completed: false, locked: true, type: 'lesson' },
  { id: 'l8', slug: 'when-ai-gets-it-wrong', title: 'When AI Gets It Wrong', duration: '5 min', completed: false, locked: true, type: 'lesson' },
  { id: 'l9', slug: 'chatgpt-for-work', title: 'ChatGPT for Work', duration: '9 min', completed: false, locked: true, type: 'lesson' },
  { id: 'l10', slug: 'chatgpt-for-writing', title: 'ChatGPT for Writing', duration: '7 min', completed: false, locked: true, type: 'practice' },
  { id: 'l11', slug: 'building-a-daily-habit', title: 'Building a Daily Habit', duration: '5 min', completed: false, locked: true, type: 'lesson' },
  { id: 'l12', slug: 'path-quiz', title: 'Path Review Quiz', duration: '8 min', completed: false, locked: true, type: 'quiz' },
];

export const chatgptPathMilestones: Milestone[] = [
  { id: 'm1', title: 'Open & Explore', description: 'Get set up and try ChatGPT for the first time', earned: true, icon: 'Sparkles' },
  { id: 'm2', title: 'First Real Conversation', description: 'Have a real back-and-forth with AI', earned: true, icon: 'MessageCircle' },
  { id: 'm3', title: 'Better Questions', description: 'Learn to ask questions that get great answers', earned: false, icon: 'HelpCircle' },
  { id: 'm4', title: 'Real-World Use', description: 'Apply ChatGPT to a real task or project', earned: false, icon: 'Briefcase' },
];

export const lessonContent: LessonContent = {
  slug: 'how-to-ask-better-questions',
  title: 'How to Ask Better Questions',
  pathTitle: 'ChatGPT Beginner Path',
  pathSlug: 'chatgpt-beginner-path',
  duration: '8 min',
  order: 6,
  totalInPath: 12,
  prevLesson: 'what-ai-is-good-at',
  nextLesson: 'getting-useful-answers',
  keyTakeaways: [
    'Be specific about what you want',
    'Give context about who you are or what you are doing',
    'Tell AI the format you want the answer in',
    'Ask follow-up questions if the first answer misses the mark',
  ],
  practicePrompt: 'Try asking ChatGPT to help you write a short email. Start with a vague request, then improve it by adding context and a specific format. Notice how the answers change.',
  sections: [
    {
      heading: 'Why your question matters',
      body: "Think of ChatGPT like a very smart assistant who has never met you before. If you walk in and say \"help me with something\" — they will not know where to start. But if you say \"I need to write a short, friendly email to reschedule a dentist appointment\" — they can help you immediately.\n\nThe better your question, the better your answer. It is that simple.",
    },
    {
      heading: 'The magic of context',
      body: "Context is the most powerful thing you can add to a question. It tells AI who you are, what you are doing, and why you need help.\n\nFor example:\n\nInstead of: \"Write me a bio\"\n\nTry: \"Write a short 3-sentence bio for me. I am a marketing manager with 5 years of experience. Keep it friendly and professional.\"\n\nSee the difference? The second version gives AI everything it needs to give you something actually useful.",
    },
    {
      heading: 'Ask for a format',
      body: "AI can give you answers in many formats — bullet points, numbered steps, tables, short paragraphs, or a full essay. By default, it will guess what format you want.\n\nBut you can just tell it. \"Give me a bullet list.\" \"Keep it under 100 words.\" \"Write it as step-by-step instructions.\"\n\nThis simple habit will save you a lot of back-and-forth.",
    },
    {
      heading: 'It is okay to ask again',
      body: "If the first answer is not quite right, do not start over. Just reply and tell it what to change. \"Make it shorter.\" \"Use a more casual tone.\" \"Add one more point about deadlines.\"\n\nChatGPT remembers your conversation, so you can keep refining until you get exactly what you need.",
    },
  ],
};

export const savedContent = [
  {
    id: 's1',
    title: 'What Is AI? A Plain English Guide',
    type: 'Guide',
    path: 'Start Using AI',
    savedAt: '2 days ago',
  },
  {
    id: 's2',
    title: '5 Questions to Ask AI Every Morning',
    type: 'Lesson',
    path: 'AI Productivity Starter',
    savedAt: '5 days ago',
  },
  {
    id: 's3',
    title: 'How to Write Any Email with AI',
    type: 'Lesson',
    path: 'Everyday AI Basics',
    savedAt: '1 week ago',
  },
];
