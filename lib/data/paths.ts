export interface LearningPath {
  id: string;
  title: string;
  tagline: string;
  description: string;
  forWho: string;
  courses: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  skills: string[];
  milestones: string[];
  badge?: string;
  color: string;
  icon: string;
  outcomes: string[];
}

export const learningPaths: LearningPath[] = [
  {
    id: 'ai-beginner',
    title: 'AI Beginner Path',
    tagline: 'Your first steps into the world of AI',
    description: "Built for people who are curious about AI but don't know where to start. You'll go from zero to confidently using AI tools in your daily life and work within a month.",
    forWho: 'Complete beginners, non-technical professionals, curious learners',
    courses: 4,
    duration: '4 weeks',
    level: 'Beginner',
    skills: ['AI Basics', 'Prompt Writing', 'AI Tools', 'Practical Workflows'],
    milestones: ['Understand how AI works', 'Use AI daily', 'Write your first prompts', 'Complete your first project'],
    badge: 'Most Popular',
    color: 'from-blue-500 to-cyan-500',
    icon: 'Sparkles',
    outcomes: ['Use 5+ AI tools confidently', 'Write effective prompts from day one', 'Save 5+ hours a week immediately'],
  },
  {
    id: 'prompt-mastery',
    title: 'Prompt Mastery Path',
    tagline: 'Become a precision AI communicator',
    description: "Go from writing basic prompts to engineering complex multi-step instructions. You'll learn the mental models and patterns that separate good AI users from great ones.",
    forWho: 'AI users ready to go deeper, writers, marketers, knowledge workers',
    courses: 5,
    duration: '6 weeks',
    level: 'Intermediate',
    skills: ['Advanced Prompting', 'Chain of Thought', 'Structured Outputs', 'Persona Engineering'],
    milestones: ['Master prompt anatomy', 'Build reusable prompt libraries', 'Design multi-step prompt chains', 'Evaluate and refine outputs'],
    badge: 'Trending',
    color: 'from-teal-500 to-emerald-500',
    icon: 'Zap',
    outcomes: ['Build a personal prompt library', 'Produce consistently high-quality AI outputs', 'Solve complex tasks with structured AI reasoning'],
  },
  {
    id: 'ai-productivity',
    title: 'AI Productivity Path',
    tagline: 'Work smarter with AI-augmented systems',
    description: 'Design your personal AI-enhanced work system from scratch. This path combines mindset, tools, and workflow design to help you reclaim hours every week.',
    forWho: 'Professionals, solopreneurs, remote workers, knowledge workers',
    courses: 5,
    duration: '5 weeks',
    level: 'Beginner',
    skills: ['AI Workflows', 'Knowledge Management', 'Time Efficiency', 'Communication'],
    milestones: ['Audit your current workflow', 'Introduce AI tools strategically', 'Build a second brain with AI', 'Automate your repeatable tasks'],
    color: 'from-amber-500 to-orange-500',
    icon: 'Rocket',
    outcomes: ['Save 8-10 hours per week', 'Eliminate repetitive mental tasks', 'Build a workflow that compounds over time'],
  },
  {
    id: 'ai-career-accelerator',
    title: 'AI Career Accelerator Path',
    tagline: 'Future-proof your career with AI skills',
    description: "A comprehensive path for professionals who want to become indispensable in the AI era. Covers skills that matter across industries and roles.",
    forWho: 'Career changers, ambitious professionals, job seekers, team leads',
    courses: 8,
    duration: '10 weeks',
    level: 'All Levels',
    skills: ['AI Strategy', 'Data Literacy', 'AI Tool Fluency', 'Leadership in AI'],
    milestones: ['Assess your AI readiness', 'Build a visible AI portfolio', 'Lead AI adoption on your team', 'Position yourself as an AI-native professional'],
    badge: 'Featured',
    color: 'from-slate-600 to-slate-800',
    icon: 'TrendingUp',
    outcomes: ['Stand out in any job application', 'Lead AI transformation projects', 'Command higher rates or salaries'],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Path',
    tagline: 'Build systems that run without you',
    description: "Learn to connect AI tools into automated pipelines that handle repetitive work around the clock. No coding required—just smart system design.",
    forWho: 'Operations professionals, founders, freelancers, agency owners',
    courses: 6,
    duration: '7 weeks',
    level: 'Intermediate',
    skills: ['Workflow Automation', 'No-Code Tools', 'API Basics', 'Process Design'],
    milestones: ['Map your automation opportunities', 'Build your first automated workflow', 'Design multi-tool pipelines', 'Monitor and maintain live automations'],
    color: 'from-blue-600 to-cyan-600',
    icon: 'Settings',
    outcomes: ['Automate 3+ business processes', 'Build a personal automation stack', 'Reduce manual work by 70%+'],
  },
  {
    id: 'ai-creator',
    title: 'AI Creator Path',
    tagline: 'Create more, burn out less',
    description: 'The definitive path for content creators, writers, and marketers who want to scale their output using AI without losing their voice or creative edge.',
    forWho: 'Content creators, marketers, writers, social media managers',
    courses: 6,
    duration: '6 weeks',
    level: 'Beginner',
    skills: ['AI Content', 'Brand Voice', 'Creative Workflows', 'Multi-Platform Strategy'],
    milestones: ['Define your AI content strategy', 'Build a repeatable creation workflow', 'Systemise editing and publishing', 'Scale output without team expansion'],
    badge: 'New',
    color: 'from-pink-500 to-rose-500',
    icon: 'PenTool',
    outcomes: ['Publish 3x more content consistently', 'Build a loyal audience faster', 'Monetise your content with AI-powered systems'],
  },
  {
    id: 'ai-business-operator',
    title: 'AI Business Operator Path',
    tagline: 'Run a leaner, smarter business',
    description: 'A practical path for business owners and operators who want to apply AI across the entire business—from hiring to marketing to customer support.',
    forWho: 'Business owners, startup founders, operations managers',
    courses: 7,
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['Business AI', 'Operations', 'Marketing Automation', 'Customer Experience'],
    milestones: ['Identify highest-value AI opportunities', 'Implement AI in operations', 'Build AI marketing systems', 'Create AI-enhanced customer journeys'],
    color: 'from-green-500 to-teal-500',
    icon: 'Briefcase',
    outcomes: ['Cut operational costs by 30%+', 'Build a scalable AI-first business', 'Grow revenue without proportional headcount growth'],
  },
];
