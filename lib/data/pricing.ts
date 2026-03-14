export interface PricingFeature {
  label: string;
  starter: boolean | string;
  pro: boolean | string;
  teams: boolean | string;
}

export interface PricingTier {
  id: 'starter' | 'pro' | 'teams';
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  cta: string;
  highlighted?: boolean;
  badge?: string;
  description: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Begin your AI learning journey',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Get Started Free',
    description: 'Everything you need to explore AI skills and start building real fluency—at no cost.',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Accelerate your AI skills seriously',
    monthlyPrice: 29,
    yearlyPrice: 19,
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
    description: 'Full access to all courses, paths, and AI tools. Built for learners who are serious about results.',
  },
  {
    id: 'teams',
    name: 'Teams',
    tagline: 'Upskill your entire team together',
    monthlyPrice: 79,
    yearlyPrice: 59,
    cta: 'Start Team Trial',
    description: 'Collaborative learning for teams of any size. Includes admin controls, progress reporting, and team-specific paths.',
  },
];

export const pricingFeatures: PricingFeature[] = [
  { label: 'Free courses included', starter: '3 courses', pro: 'All 200+ courses', teams: 'All 200+ courses' },
  { label: 'Learning paths access', starter: '1 path', pro: 'All paths', teams: 'All paths + custom' },
  { label: 'AI study assistant', starter: false, pro: true, teams: true },
  { label: 'Quizzes & knowledge checks', starter: 'Basic', pro: 'Full access', teams: 'Full access' },
  { label: 'Completion certificates', starter: false, pro: true, teams: true },
  { label: 'Progress dashboard', starter: 'Basic', pro: 'Advanced', teams: 'Team + individual' },
  { label: 'Downloadable resources', starter: false, pro: true, teams: true },
  { label: 'New course releases', starter: 'Delayed', pro: 'Immediate', teams: 'Immediate + previews' },
  { label: 'Mobile app access', starter: true, pro: true, teams: true },
  { label: 'Community access', starter: 'Read-only', pro: 'Full access', teams: 'Private channels' },
  { label: 'Priority support', starter: false, pro: 'Email', teams: 'Dedicated manager' },
  { label: 'Team seats', starter: false, pro: false, teams: 'Up to 50 seats' },
  { label: 'Team progress reporting', starter: false, pro: false, teams: true },
  { label: 'Custom learning paths', starter: false, pro: false, teams: true },
  { label: 'SSO & admin controls', starter: false, pro: false, teams: true },
];

export const starterFeatures = [
  '3 full courses, free forever',
  '1 guided learning path',
  'Basic quizzes & knowledge checks',
  'Progress tracking dashboard',
  'Mobile app access',
  'Community read-only access',
];

export const proFeatures = [
  'All 200+ courses, unlimited access',
  'All learning paths, no restrictions',
  'AI study assistant included',
  'Full quizzes & adaptive testing',
  'Verified completion certificates',
  'Advanced progress dashboard',
  'Downloadable resources & templates',
  'Immediate access to new releases',
  'Full community participation',
  'Priority email support',
];

export const teamsFeatures = [
  'Everything in Pro, for your whole team',
  'Up to 50 team seats included',
  'Custom learning paths for your org',
  'Team progress reporting dashboard',
  'Admin controls & seat management',
  'Private team channels',
  'SSO integration',
  'Dedicated account manager',
  'Early access & course previews',
];

export const faqItems = [
  {
    question: 'Is the free plan really free?',
    answer: "Yes. The Starter plan is free forever with no credit card required. You get access to 3 full courses, one learning path, and the core platform experience. No tricks, no hidden fees.",
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time. If you downgrade mid-cycle, you retain access to your current plan until the end of the billing period.',
  },
  {
    question: 'What happens if I cancel?',
    answer: "If you cancel, you'll keep access to your current plan until the end of your billing period. After that, your account reverts to the free Starter tier. You won't lose any progress or certificates.",
  },
  {
    question: 'How does the yearly discount work?',
    answer: 'Choosing yearly billing gives you 2-3 months free compared to monthly billing. The discount is applied upfront and your plan renews annually at the same rate.',
  },
  {
    question: 'Do you offer student or nonprofit discounts?',
    answer: 'Yes. We offer 50% off Pro for verified students and qualifying nonprofit employees. Reach out to our support team with proof of eligibility and we will apply the discount to your account.',
  },
  {
    question: 'What is the Teams plan and who is it for?',
    answer: 'The Teams plan is designed for companies or groups of 5 or more people who want to learn together. It includes an admin dashboard, team progress reports, and the ability to create custom learning paths tailored to your needs.',
  },
  {
    question: 'Is there a free trial for Pro or Teams?',
    answer: 'Yes. Both Pro and Teams come with a 14-day free trial. No credit card required to start. You will be prompted to add payment details only if you choose to continue after the trial.',
  },
  {
    question: 'Are certificates recognised by employers?',
    answer: 'Our certificates are digital credentials you can share on LinkedIn, embed in portfolios, and include in applications. They demonstrate practical AI fluency, which is increasingly valued across industries.',
  },
];
