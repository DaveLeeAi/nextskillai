export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  course?: string;
  path?: string;
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
    name: 'Jordan Matthews',
    role: 'Marketing Manager',
    company: 'Brightline Agency',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: 'I went from being intimidated by AI to using it every single day at work. The Beginner Path made everything click. My team now asks me for AI advice, which still surprises me.',
    path: 'AI Beginner Path',
    featured: true,
    outcome: 'Saved 6 hours per week',
  },
  {
    id: '2',
    name: 'Priya Kaur',
    role: 'Freelance Copywriter',
    company: 'Self-employed',
    avatar: 'https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: "The AI Content Systems course changed how I work completely. I tripled my output without sacrificing quality. My clients can't tell I'm using AI — they just notice I'm better and faster.",
    course: 'AI Content Systems',
    featured: true,
    outcome: 'Tripled content output',
  },
  {
    id: '3',
    name: 'Thomas Wade',
    role: 'Operations Director',
    company: 'Vantage Logistics',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: 'We put our entire operations team through the Business Operator Path. The ROI was clear within 3 weeks. We automated 4 manual processes that used to eat 15 hours per week.',
    path: 'AI Business Operator Path',
    featured: true,
    outcome: '15 hours/week saved in ops',
  },
  {
    id: '4',
    name: 'Amara Osei',
    role: 'Junior Product Manager',
    company: 'Fintek Labs',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: "What I appreciate most is that the courses don't just teach you tools — they teach you how to think. The Prompt Mastery Path gave me frameworks I use in every part of my job now.",
    path: 'Prompt Mastery Path',
  },
  {
    id: '5',
    name: 'Lucas Fernandez',
    role: 'Startup Founder',
    company: 'Orbit Studio',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: "I'm a non-technical founder and always felt behind on the AI curve. NextSkill AI finally made it practical and accessible. I built my first AI-powered workflow in week two.",
    course: 'AI Automation Basics',
  },
  {
    id: '6',
    name: 'Sofia Reinholt',
    role: 'Content Strategist',
    company: 'Nordik Media',
    avatar: 'https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: 'The AI Creator Path was exactly what I needed. Not generic advice — real systems I could implement immediately. My newsletter went from bi-weekly to weekly without extra stress.',
    path: 'AI Creator Path',
    outcome: 'Consistent weekly publishing',
  },
  {
    id: '7',
    name: 'Kwame Asante',
    role: 'Senior Consultant',
    company: 'Meridian Advisory',
    avatar: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    quote: 'Good breadth and depth. The Research Workflows course genuinely improved my deliverable quality. My clients have noticed the difference in the reports I produce.',
    course: 'AI Research Workflows',
  },
  {
    id: '8',
    name: 'Rachel Kim',
    role: 'HR Business Partner',
    company: 'Crestfield Group',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: 'The AI for Hiring course is one of the most practical things I have ever taken online. Immediately applied it to our next hiring cycle and cut screening time by more than half.',
    course: 'AI for Hiring & HR',
    outcome: '50% faster hiring process',
  },
  {
    id: '9',
    name: 'Ethan Cho',
    role: 'Growth Manager',
    company: 'Nuvelo Health',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: 'I had tried other AI courses and found them either too surface-level or too technical. NextSkill hits the right balance. I went from curious to competent in six weeks.',
    path: 'AI Career Accelerator Path',
  },
  {
    id: '10',
    name: 'Nina Hartley',
    role: 'Independent Researcher',
    company: 'Oxford Centre for AI Policy',
    avatar: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: "The AI Research Workflows course is exceptional. It's rare to find material that respects academic rigour while still being genuinely applicable. I now use AI at every stage of my research.",
    course: 'AI Research Workflows',
  },
  {
    id: '11',
    name: 'Dan Okonkwo',
    role: 'E-commerce Owner',
    company: 'Palmtree Goods',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    quote: "The AI for Business Operators path was a game-changer. I'm running a 7-figure store with a tiny team, and AI has become our force multiplier. Well worth every penny.",
    path: 'AI Business Operator Path',
    featured: true,
    outcome: 'Running 7-figure store with 2-person team',
  },
  {
    id: '12',
    name: 'Isabel Torres',
    role: 'Digital Marketer',
    company: 'Bravo Creative',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    quote: "Clear, practical, and well-paced. The Productivity Path is unlike anything else out there. It doesn't overwhelm you with tools — it teaches you how to think about using them together.",
    path: 'AI Productivity Path',
  },
];

export const outcomeStats: OutcomeStat[] = [
  {
    value: '94%',
    label: 'Report real workflow improvements',
    description: 'Within the first 4 weeks of completing a course',
  },
  {
    value: '7.5hrs',
    label: 'Average time saved per week',
    description: 'Reported by Pro learners after completing their first path',
  },
  {
    value: '89%',
    label: 'Would recommend to a colleague',
    description: 'Based on post-course satisfaction surveys',
  },
  {
    value: '3.2x',
    label: 'Average output increase',
    description: 'Among creators and content professionals',
  },
];
