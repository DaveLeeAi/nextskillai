export type AdvancedLevel = 'Intermediate' | 'Advanced';

export interface AdvancedLearningPath {
  id: string;
  title: string;
  tagline: string;
  description: string;
  forWho: string;
  courses: number;
  duration: string;
  level: AdvancedLevel;
  skills: string[];
  milestones: string[];
  badge?: string;
  color: string;
  icon: string;
  outcomes: string[];
  tier: 'advanced';
}

export const advancedLearningPaths: AdvancedLearningPath[] = [
  {
    id: 'ai-agents-modern-workflows',
    title: 'AI Agents and Modern Workflows',
    tagline: 'Understand and use autonomous AI agents in real work',
    description: "AI agents are changing how work gets done in 2026. This path takes you from understanding what agents actually are to using them in practical, real workflows — without needing a technical background. Learn when agents are the right tool, how to set them up, and how to stay in control.",
    forWho: 'Knowledge workers, managers, freelancers, and anyone who wants to work smarter with AI tools',
    courses: 6,
    duration: '3 weeks',
    level: 'Intermediate',
    skills: ['AI agent basics', 'Workflow automation', 'Tool-connected AI', 'Human oversight'],
    milestones: ['Understand what AI agents actually are', 'Identify when to use an agent vs a simple prompt', 'Set up your first agent-assisted workflow', 'Review and verify agent output reliably'],
    badge: 'New in 2026',
    color: 'from-blue-600 to-cyan-600',
    icon: 'Bot',
    outcomes: ['Use AI agents to handle multi-step tasks', 'Build repeatable agent-assisted workflows', 'Stay in control while automating real work'],
    tier: 'advanced',
  },
  {
    id: 'advanced-prompting-reliable-output',
    title: 'Advanced Prompting for Reliable Output',
    tagline: 'Engineer prompts that consistently deliver what you need',
    description: "Good prompting gets you decent results. Advanced prompting gets you reliable, consistent results at scale. This path covers structured prompting techniques, chain-of-thought methods, role and persona design, and how to build reusable prompt systems — all grounded in real use cases.",
    forWho: 'Anyone already using AI regularly who wants dramatically better and more consistent output',
    courses: 5,
    duration: '2 weeks',
    level: 'Intermediate',
    skills: ['Structured prompting', 'Chain-of-thought', 'Prompt templates', 'Output control'],
    milestones: ['Master structured prompt architecture', 'Build a personal prompt library', 'Use chain-of-thought for complex tasks', 'Reduce AI mistakes through prompt design'],
    badge: 'Most Popular',
    color: 'from-amber-500 to-orange-500',
    icon: 'SlidersHorizontal',
    outcomes: ['Get consistently reliable AI output', 'Build a reusable personal prompt library', 'Dramatically reduce the need for follow-up corrections'],
    tier: 'advanced',
  },
  {
    id: 'ai-research-synthesis-workflows',
    title: 'AI Research and Synthesis Workflows',
    tagline: 'Use AI to research, analyze, and synthesize faster than ever',
    description: "Research used to mean hours of reading and note-taking. This path shows you how to use AI to gather, process, and synthesize information from multiple sources — documents, articles, data, and more — while maintaining accuracy and avoiding the trap of trusting AI too blindly.",
    forWho: 'Analysts, writers, consultants, students, and anyone who regularly works with large amounts of information',
    courses: 5,
    duration: '3 weeks',
    level: 'Intermediate',
    skills: ['Document analysis', 'Source synthesis', 'Output verification', 'Research workflows'],
    milestones: ['Process documents with AI reliably', 'Build a multi-source synthesis workflow', 'Verify AI-generated research claims', 'Create structured research outputs'],
    color: 'from-teal-600 to-emerald-600',
    icon: 'Search',
    outcomes: ['Cut research time by 60% or more', 'Produce higher-quality synthesized work', 'Know exactly when to trust AI and when to verify'],
    tier: 'advanced',
  },
  {
    id: 'multimodal-ai-real-work',
    title: 'Multimodal AI for Real Work',
    tagline: 'Work with AI across text, images, files, and documents',
    description: "The most capable AI tools in 2026 handle more than just text — they understand images, analyze documents, interpret charts, and work across file types. This path shows you how to use these multimodal capabilities in practical work tasks, from document review to visual content analysis.",
    forWho: 'Professionals working with documents, reports, visual content, or mixed-media materials',
    courses: 5,
    duration: '2 weeks',
    level: 'Intermediate',
    skills: ['Document AI', 'Image analysis', 'File workflows', 'Multimodal prompting'],
    milestones: ['Use AI to analyze documents and PDFs', 'Work with images and visual content', 'Build a multimodal review workflow', 'Handle mixed-format tasks efficiently'],
    color: 'from-rose-500 to-pink-600',
    icon: 'Layers',
    outcomes: ['Process documents, images, and files with AI', 'Build cross-format AI workflows', 'Handle more complex work tasks than text-only AI allows'],
    tier: 'advanced',
  },
  {
    id: 'evaluating-ai-output-reducing-mistakes',
    title: 'Evaluating AI Output and Reducing Mistakes',
    tagline: 'Build the critical skills to catch AI errors before they cost you',
    description: "Knowing how to use AI is only half the skill. The other half is knowing how to evaluate, verify, and trust the output — especially when stakes are higher. This path teaches practical verification methods, red flags to watch for, and how to build quality control into any AI-assisted workflow.",
    forWho: 'Anyone who uses AI for work, content, analysis, or decisions — especially in professional contexts',
    courses: 4,
    duration: '2 weeks',
    level: 'Advanced',
    skills: ['Output evaluation', 'Hallucination detection', 'Quality control', 'Verification workflows'],
    milestones: ['Identify the most common AI error types', 'Build a personal verification checklist', 'Reduce costly AI mistakes in real work', 'Create quality-controlled AI workflows'],
    badge: 'Critical Skill',
    color: 'from-slate-600 to-slate-800',
    icon: 'ShieldCheck',
    outcomes: ['Catch AI mistakes before they cause problems', 'Build reliable quality-controlled workflows', 'Use AI confidently in high-stakes professional contexts'],
    tier: 'advanced',
  },
  {
    id: 'ai-automation-knowledge-workers',
    title: 'AI Automation for Knowledge Workers',
    tagline: 'Automate repetitive knowledge work without writing code',
    description: "Knowledge workers spend a surprising percentage of their day on repetitive tasks: formatting, summarizing, routing, updating, and communicating. This path shows you how to identify automation opportunities and use AI tools to handle them — no technical skills required.",
    forWho: 'Office workers, project managers, analysts, consultants, and anyone with high-volume repetitive tasks',
    courses: 6,
    duration: '4 weeks',
    level: 'Advanced',
    skills: ['Workflow mapping', 'Task automation', 'AI tool chains', 'Productivity systems'],
    milestones: ['Map your current repetitive task patterns', 'Automate your first high-volume task', 'Build a connected multi-step workflow', 'Track and measure time saved'],
    color: 'from-cyan-600 to-blue-600',
    icon: 'Workflow',
    outcomes: ['Reclaim 5–10 hours per week through automation', 'Build a personal AI automation stack', 'Handle more without working more'],
    tier: 'advanced',
  },
  {
    id: 'mcp-tool-connected-ai-basics',
    title: 'MCP and Tool-Connected AI Basics',
    tagline: 'Connect AI to real tools, data, and external systems',
    description: "MCP (Model Context Protocol) represents a shift in how AI connects to the world. This path demystifies tool-connected AI for non-technical users — explaining what it is, why it matters, and how to use it to connect AI with calendars, documents, databases, and more.",
    forWho: 'Power users and professionals who want AI that connects to real tools and data sources',
    courses: 5,
    duration: '3 weeks',
    level: 'Advanced',
    skills: ['MCP fundamentals', 'Tool-connected AI', 'Data integration', 'Practical automation'],
    milestones: ['Understand what MCP is and why it matters', 'Connect AI to a real data source', 'Build a tool-connected workflow', 'Evaluate which connections add real value'],
    badge: 'Trending',
    color: 'from-green-600 to-teal-600',
    icon: 'Plug',
    outcomes: ['Use AI that connects to real tools and data', 'Build practical MCP-based workflows', 'Move beyond text-only AI interactions'],
    tier: 'advanced',
  },
  {
    id: 'practical-ai-systems-for-teams',
    title: 'Practical AI Systems for Teams',
    tagline: 'Build shared AI practices that make your whole team more effective',
    description: "Individual AI skills are powerful. Team AI systems are transformative. This path covers how to introduce AI practices across a team, build shared prompt libraries, establish quality standards, and create workflows that multiple people can rely on — without chaos.",
    forWho: 'Team leads, managers, and senior professionals who want to bring AI into team workflows',
    courses: 5,
    duration: '3 weeks',
    level: 'Advanced',
    skills: ['Team AI practices', 'Shared systems', 'Workflow standards', 'Change management'],
    milestones: ['Map team workflows that benefit from AI', 'Build a shared team prompt library', 'Set quality and verification standards', 'Roll out an AI practice your team will actually use'],
    color: 'from-violet-600 to-blue-600',
    icon: 'Users',
    outcomes: ['Build team-wide AI practices that stick', 'Create shared systems your whole team benefits from', 'Become the AI champion your team needs'],
    tier: 'advanced',
  },
];
