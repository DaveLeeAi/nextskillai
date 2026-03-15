export type BlockType =
  | 'text'
  | 'takeaway'
  | 'example'
  | 'tip'
  | 'practice'
  | 'recap'
  | 'checklist'
  | 'quiz';

export interface TextBlock {
  type: 'text';
  heading?: string;
  body: string;
}

export interface TakeawayBlock {
  type: 'takeaway';
  items: string[];
}

export interface ExampleBlock {
  type: 'example';
  label?: string;
  weak?: string;
  strong?: string;
  body?: string;
}

export interface TipBlock {
  type: 'tip';
  title?: string;
  body: string;
  variant?: 'tip' | 'warning' | 'note';
}

export interface PracticeBlock {
  type: 'practice';
  title?: string;
  instruction: string;
  prompt?: string;
}

export interface RecapBlock {
  type: 'recap';
  items: string[];
}

export interface ChecklistBlock {
  type: 'checklist';
  title?: string;
  items: string[];
}

export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface QuizBlock {
  type: 'quiz';
  variant: 'multiple-choice' | 'true-false' | 'better-prompt' | 'reflection';
  question: string;
  options?: QuizOption[];
  correctExplanation?: string;
  incorrectExplanation?: string;
  reflectionHint?: string;
}

export type LessonBlock =
  | TextBlock
  | TakeawayBlock
  | ExampleBlock
  | TipBlock
  | PracticeBlock
  | RecapBlock
  | ChecklistBlock
  | QuizBlock;

export interface PathModule {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
  milestoneId?: string;
}

export interface FullLesson {
  slug: string;
  title: string;
  pathTitle: string;
  pathSlug: string;
  duration: string;
  order: number;
  totalInPath: number;
  prevLesson: string | null;
  nextLesson: string | null;
  type: 'lesson' | 'practice' | 'quiz';
  blocks: LessonBlock[];
}

export interface BookmarkedLesson {
  id: string;
  slug: string;
  title: string;
  pathTitle: string;
  pathSlug: string;
  duration: string;
  bookmarkedAt: string;
  note?: string;
}

export const bookmarkedLessons: BookmarkedLesson[] = [
  {
    id: 'b1',
    slug: 'how-to-ask-better-questions',
    title: 'How to Ask Better Questions',
    pathTitle: 'ChatGPT Beginner Path',
    pathSlug: 'chatgpt-beginner-path',
    duration: '8 min',
    bookmarkedAt: '2 hours ago',
    note: 'The context tip was really useful — try on emails',
  },
  {
    id: 'b2',
    slug: 'what-ai-is-good-at',
    title: 'What AI Is Good At',
    pathTitle: 'ChatGPT Beginner Path',
    pathSlug: 'chatgpt-beginner-path',
    duration: '5 min',
    bookmarkedAt: '3 days ago',
  },
  {
    id: 'b3',
    slug: 'writing-emails-with-ai',
    title: 'Writing Emails with AI',
    pathTitle: 'Everyday AI Basics',
    pathSlug: 'everyday-ai-basics',
    duration: '7 min',
    bookmarkedAt: '5 days ago',
    note: 'Come back to this — the tone section was helpful',
  },
];

export const chatgptPathModules: PathModule[] = [
  {
    id: 'mod1',
    title: 'Getting Started',
    description: 'Understand what AI is and get set up',
    lessonIds: ['l1', 'l2', 'l3'],
    milestoneId: 'm1',
  },
  {
    id: 'mod2',
    title: 'Your First Conversations',
    description: 'Try ChatGPT and build your first habits',
    lessonIds: ['l4', 'l5'],
    milestoneId: 'm2',
  },
  {
    id: 'mod3',
    title: 'Asking Better Questions',
    description: 'Learn to get much better answers',
    lessonIds: ['l6', 'l7', 'l8'],
    milestoneId: 'm3',
  },
  {
    id: 'mod4',
    title: 'Real-World Skills',
    description: 'Use ChatGPT for work, writing, and daily life',
    lessonIds: ['l9', 'l10', 'l11', 'l12'],
    milestoneId: 'm4',
  },
];

export const fullLessonData: FullLesson = {
  slug: 'how-to-ask-better-questions',
  title: 'How to Ask Better Questions',
  pathTitle: 'ChatGPT Beginner Path',
  pathSlug: 'chatgpt-beginner-path',
  duration: '8 min',
  order: 6,
  totalInPath: 12,
  prevLesson: 'what-ai-is-good-at',
  nextLesson: 'getting-useful-answers',
  type: 'lesson',
  blocks: [
    {
      type: 'text',
      heading: 'Why your question matters',
      body: "Think of ChatGPT like a very smart assistant who has never met you before. If you walk in and say \"help me with something\" — they will not know where to start. But if you say \"I need to write a short, friendly email to reschedule a dentist appointment\" — they can help you immediately.\n\nThe better your question, the better your answer. It really is that simple.",
    },
    {
      type: 'example',
      label: 'See the difference',
      weak: 'Write me a bio.',
      strong: 'Write a short 3-sentence bio for me. I am a marketing manager with 5 years of experience. Keep it friendly and professional.',
    },
    {
      type: 'text',
      heading: 'The magic of context',
      body: "Context is the most powerful thing you can add to any question. It tells AI who you are, what you are doing, and why you need help.\n\nYou do not need to write an essay. Just one or two extra sentences can completely transform the answer you get back.",
    },
    {
      type: 'tip',
      title: 'Quick tip',
      body: 'You can also tell AI what NOT to do. "Do not use formal language" or "Do not add a bullet list" works just as well.',
      variant: 'tip',
    },
    {
      type: 'text',
      heading: 'Ask for a format',
      body: "AI can respond in many different formats — bullet points, numbered steps, tables, short paragraphs, or a full essay. By default it guesses what you want.\n\nBut you can just tell it. \"Give me a bullet list.\" \"Keep it under 100 words.\" \"Write it as step-by-step instructions.\"\n\nThis one habit saves a huge amount of back-and-forth.",
    },
    {
      type: 'quiz',
      variant: 'multiple-choice',
      question: 'You want to write a professional email. Which prompt is most likely to get a great result?',
      options: [
        { id: 'a', text: 'Write me an email.', correct: false, explanation: 'This is too vague — AI does not know who the email is to, what it is about, or what tone you want.' },
        { id: 'b', text: 'Write a polite, professional email to my manager asking for a day off next Friday. Keep it short and friendly.', correct: true, explanation: 'This gives context (to your manager), a goal (day off), timing (next Friday), and format (short and friendly).' },
        { id: 'c', text: 'Help me with a work email please.', correct: false, explanation: 'Still too vague. What kind of help? What work? What email?' },
        { id: 'd', text: 'Email for manager.', correct: false, explanation: 'Not enough for AI to go on — it cannot guess the purpose, tone, or content.' },
      ],
      correctExplanation: 'Great choice! The more specific you are, the better the result.',
      incorrectExplanation: 'Not quite — try again. Think about what information would help a real assistant write the best possible email.',
    },
    {
      type: 'text',
      heading: 'It is okay to ask again',
      body: "If the first answer is not quite right, do not start over. Just reply and say what to change. \"Make it shorter.\" \"Use a more casual tone.\" \"Add one more point about the deadline.\"\n\nChatGPT remembers your conversation, so you can keep refining until you get exactly what you need.",
    },
    {
      type: 'quiz',
      variant: 'true-false',
      question: 'If you are not happy with ChatGPT\'s first answer, it is best to start a brand new conversation.',
      options: [
        { id: 'true', text: 'True', correct: false, explanation: 'Actually, ChatGPT remembers your conversation. You can just reply with what to change — no need to start over.' },
        { id: 'false', text: 'False', correct: true, explanation: 'Correct! Just reply within the same conversation. Tell it what to change and it will refine its answer.' },
      ],
    },
    {
      type: 'practice',
      title: 'Try it yourself',
      instruction: 'Open ChatGPT and ask it to help you write a short email. Start vague, then rewrite your prompt with more context and a specific format. Notice how much better the second answer is.',
      prompt: 'Example to try: "Write a short, friendly email to a colleague asking if they are free for a 15-minute catch-up this week."',
    },
    {
      type: 'takeaway',
      items: [
        'Be specific — vague questions get vague answers',
        'Add context: who you are, what you need, and why',
        'Ask for a format (bullet list, short paragraph, etc.)',
        'Refine in the same chat — no need to start over',
      ],
    },
    {
      type: 'recap',
      items: [
        'A specific question gets a much better answer',
        'Context turns a weak prompt into a great one',
        'You can always reply to refine the answer',
      ],
    },
  ],
};

export const agentsPathModules: PathModule[] = [
  {
    id: 'agents-mod1',
    title: 'What Agents Are',
    description: 'Understand the nature and purpose of AI agents',
    lessonIds: ['al1', 'al2'],
    milestoneId: 'am1',
  },
  {
    id: 'agents-mod2',
    title: 'Tool-Connected AI',
    description: 'Learn how agents access external tools and data',
    lessonIds: ['al3', 'al4'],
    milestoneId: 'am2',
  },
  {
    id: 'agents-mod3',
    title: 'Building Agent Workflows',
    description: 'Design and run your first agent-assisted workflows',
    lessonIds: ['al5', 'al6', 'al7'],
    milestoneId: 'am3',
  },
  {
    id: 'agents-mod4',
    title: 'Human Oversight and Control',
    description: 'Stay in control and verify agent output reliably',
    lessonIds: ['al8', 'al9', 'al10'],
    milestoneId: 'am4',
  },
];

export const advancedPromptingModules: PathModule[] = [
  {
    id: 'adv-prompt-mod1',
    title: 'Prompt Architecture',
    description: 'Structure prompts as specifications, not questions',
    lessonIds: ['ap1', 'ap2', 'ap3'],
    milestoneId: 'apm1',
  },
  {
    id: 'adv-prompt-mod2',
    title: 'Advanced Techniques',
    description: 'Chain-of-thought, persona design, and constraint engineering',
    lessonIds: ['ap4', 'ap5', 'ap6'],
    milestoneId: 'apm2',
  },
  {
    id: 'adv-prompt-mod3',
    title: 'Building Your Prompt Library',
    description: 'Create and maintain a reusable personal prompt system',
    lessonIds: ['ap7', 'ap8'],
    milestoneId: 'apm3',
  },
];

export const recentLessons = [
  {
    id: 'rl1',
    slug: 'what-is-chatgpt',
    title: 'What Is ChatGPT?',
    pathTitle: 'ChatGPT Beginner Path',
    pathSlug: 'chatgpt-beginner-path',
    completedAt: '2 hours ago',
    duration: '5 min',
  },
  {
    id: 'rl2',
    slug: 'understanding-ai-basics',
    title: 'Understanding AI Basics',
    pathTitle: 'ChatGPT Beginner Path',
    pathSlug: 'chatgpt-beginner-path',
    completedAt: '2 days ago',
    duration: '6 min',
  },
  {
    id: 'rl3',
    slug: 'what-ai-is-good-at',
    title: 'What AI Is Good At',
    pathTitle: 'ChatGPT Beginner Path',
    pathSlug: 'chatgpt-beginner-path',
    completedAt: '3 days ago',
    duration: '5 min',
  },
];
