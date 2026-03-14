export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  path?: string;
  course?: string;
  featured?: boolean;
  outcome?: string;
}

export interface OutcomeStat {
  value: string;
  label: string;
  description: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Diane Hartwell',
    role: 'Office Administrator',
    avatar: 'DH',
    rating: 5,
    quote: 'I was genuinely scared to try AI. I thought it was for tech people and I was going to get confused. But the first path was so clear and gentle that I was using ChatGPT properly by the end of the first week. I actually feel proud of myself.',
    path: 'First Steps with AI',
    featured: true,
    outcome: 'Using AI daily after just one week',
  },
  {
    id: '2',
    name: 'Marcus Webb',
    role: 'Primary School Teacher',
    avatar: 'MW',
    rating: 5,
    quote: 'I use AI to plan lessons, write parent emails, and create quiz questions now. It saves me probably 90 minutes a day. The writing path was so easy to follow — and I am not a tech person at all.',
    path: 'AI Writing Basics',
    featured: true,
    outcome: 'Saving 90 minutes every day',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Freelance Translator',
    avatar: 'PS',
    rating: 5,
    quote: 'I kept hearing about AI but never tried it because I did not know where to start. This platform made it so approachable. Within two weeks I was using AI to help with research, emails, and client replies. It felt like I finally caught up.',
    path: 'AI Confidence Builder',
    featured: true,
    outcome: 'Caught up in just 2 weeks',
  },
  {
    id: '4',
    name: 'James Okonkwo',
    role: 'Sales Executive',
    avatar: 'JO',
    rating: 5,
    quote: "The work essentials path was exactly what I needed. I'm writing follow-up emails twice as fast, summarizing call notes in seconds, and using ChatGPT to prep for meetings. My manager actually asked me how I'm getting so much done.",
    path: 'AI for Work Essentials',
    featured: false,
    outcome: 'Manager noticed the improvement',
  },
  {
    id: '5',
    name: 'Sophie Lamont',
    role: 'University Student',
    avatar: 'SL',
    rating: 5,
    quote: "I was falling behind on assignments and feeling overwhelmed. The study habits lesson helped me use ChatGPT as a study partner and it genuinely changed how I approach everything. My grades have improved and I'm less stressed.",
    course: 'AI for Better Study Habits',
    featured: false,
    outcome: 'Better grades, less stress',
  },
  {
    id: '6',
    name: 'Robert Tan',
    role: 'Small Business Owner',
    avatar: 'RT',
    rating: 5,
    quote: "I run a small café and honestly didn't think AI was for me. But the small business lesson showed me how to use it for customer replies, social media posts, and even menu descriptions. It's like having an extra pair of hands.",
    course: 'AI for Small Business Owners',
    featured: false,
    outcome: 'Feels like having extra help',
  },
  {
    id: '7',
    name: 'Anita Patel',
    role: 'HR Coordinator',
    avatar: 'AP',
    rating: 5,
    quote: "I kept putting off learning AI because everything I found felt too complicated. NextSkill AI is different — it explains things in a way that actually makes sense. I finally feel like I understand what everyone is talking about.",
    path: 'Start Using AI',
    featured: false,
    outcome: 'Finally understands AI',
  },
  {
    id: '8',
    name: 'Daniel Frisch',
    role: 'Retired Engineer',
    avatar: 'DF',
    rating: 4,
    quote: "At 62, I was not sure this kind of learning was for me. But the lessons are short, clear, and never make you feel stupid. I'm now using AI to help write letters, plan trips, and research topics. Genuinely impressive.",
    path: 'First Steps with AI',
    featured: false,
    outcome: 'Learning AI at 62',
  },
  {
    id: '9',
    name: 'Chloe Nguyen',
    role: 'Marketing Assistant',
    avatar: 'CN',
    rating: 5,
    quote: "The productivity path helped me structure my day so much better. I now use AI for planning, writing, and research every day. My boss has noticed I'm producing more output and with fewer mistakes.",
    path: 'AI Productivity Starter',
    featured: false,
    outcome: 'More output, fewer mistakes',
  },
  {
    id: '10',
    name: 'Tom Bridgeman',
    role: 'Account Manager',
    avatar: 'TB',
    rating: 5,
    quote: "The email writing lesson alone was worth it. I used to spend ages crafting client emails. Now I have a draft in 30 seconds and I just tweak it. Probably saving me an hour a day on communication alone.",
    course: 'Write Emails Faster with AI',
    featured: false,
    outcome: 'Saving 1 hour per day on emails',
  },
  {
    id: '11',
    name: 'Fatima Al-Rashid',
    role: 'Healthcare Admin',
    avatar: 'FA',
    rating: 5,
    quote: "I work in a busy hospital admin team and everyone is stretched thin. Learning to use AI for documentation and summaries has genuinely helped. This platform explains everything in plain English, which is exactly what I needed.",
    path: 'Everyday AI Basics',
    featured: true,
    outcome: 'Helping an overstretched team',
  },
  {
    id: '12',
    name: 'Liam Crawford',
    role: 'Recent Graduate',
    avatar: 'LC',
    rating: 5,
    quote: "I graduated and felt like I was already behind on AI skills. After 3 weeks on this platform I feel genuinely confident using AI in job applications, interviews, and my new role. The ChatGPT path was incredibly practical.",
    path: 'ChatGPT Beginner Path',
    featured: false,
    outcome: 'Job-ready AI skills in 3 weeks',
  },
];

export const outcomeStats: OutcomeStat[] = [
  {
    value: '92%',
    label: 'Feel more confident with AI',
    description: 'After completing their first path',
  },
  {
    value: '2–3 hrs',
    label: 'Average time saved each week',
    description: 'Reported by learners in their first month',
  },
  {
    value: '96%',
    label: 'Would recommend to a friend',
    description: 'Based on post-lesson satisfaction surveys',
  },
  {
    value: '1 week',
    label: 'Average time to feel the difference',
    description: 'From starting to noticing real results',
  },
];
