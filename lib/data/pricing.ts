export interface PricingFeature {
  label: string;
  free: boolean | string;
  plus: boolean | string;
  pro: boolean | string;
}

export interface PricingTier {
  id: 'free' | 'plus' | 'pro';
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
    id: 'free',
    name: 'Free',
    tagline: 'Try it, no strings attached',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Start for Free',
    description: 'A real taste of the platform. Start learning AI today with no credit card, no commitment, no catch.',
  },
  {
    id: 'plus',
    name: 'Plus',
    tagline: 'Everything you need to build real skills',
    monthlyPrice: 12,
    yearlyPrice: 8,
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
    description: 'Full access to all beginner lessons, guided paths, and progress tools. Perfect for everyday learners.',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For people serious about getting results',
    monthlyPrice: 24,
    yearlyPrice: 16,
    cta: 'Start Free Trial',
    description: 'Everything in Plus, plus AI practice tools, certificates, and daily recommendations to keep you moving.',
  },
];

export const freeFeatures = [
  '5 beginner lessons, free forever',
  '1 guided learning path',
  'Simple quizzes and check-ins',
  'Basic progress tracking',
  'Community read access',
];

export const plusFeatures = [
  'All 60+ beginner lessons',
  'All 8 guided learning paths',
  'Full quizzes and knowledge checks',
  'Progress dashboard with streaks',
  'Mobile-friendly learning',
  'Community participation',
  'Email support',
];

export const proFeatures = [
  'Everything in Plus',
  'AI practice tools and exercises',
  'Daily personalized recommendations',
  'Completion certificates',
  'Downloadable lesson guides',
  'Priority email support',
  'Early access to new lessons',
];

export const pricingFeatures: PricingFeature[] = [
  { label: 'Lessons included', free: '5 lessons', plus: 'All 60+ lessons', pro: 'All 60+ lessons' },
  { label: 'Guided learning paths', free: '1 path', plus: 'All 8 paths', pro: 'All 8 paths' },
  { label: 'Quizzes and check-ins', free: 'Basic', plus: 'Full access', pro: 'Full access' },
  { label: 'Progress tracking', free: 'Basic', plus: 'Full dashboard', pro: 'Full dashboard' },
  { label: 'Learning streaks', free: false, plus: true, pro: true },
  { label: 'Mobile-friendly access', free: true, plus: true, pro: true },
  { label: 'Community access', free: 'Read only', plus: 'Full access', pro: 'Full access' },
  { label: 'AI practice tools', free: false, plus: false, pro: true },
  { label: 'Daily recommendations', free: false, plus: false, pro: true },
  { label: 'Completion certificates', free: false, plus: false, pro: true },
  { label: 'Downloadable lesson guides', free: false, plus: false, pro: true },
  { label: 'Email support', free: false, plus: true, pro: 'Priority' },
  { label: 'Early access to new lessons', free: false, plus: false, pro: true },
];

export const faqItems = [
  {
    question: 'Is the free plan really free?',
    answer: 'Yes, completely. The Free plan gives you access to 5 full lessons and one learning path with no credit card required. You can use it for as long as you like with no hidden charges.',
  },
  {
    question: 'Do I need any tech knowledge to start?',
    answer: 'Not at all. NextSkill AI is built specifically for people with little or no tech background. Every lesson is written in plain language and moves at a pace that works for complete beginners.',
  },
  {
    question: 'How long does it take to complete a path?',
    answer: "Most paths take between 1 and 4 weeks depending on the path and how much time you spend each day. Even just 10–15 minutes a day is enough to make steady, noticeable progress.",
  },
  {
    question: 'Can I switch or cancel my plan at any time?',
    answer: "Yes. You can upgrade, downgrade, or cancel whenever you like. If you cancel, you'll keep access until the end of your billing period and then move to the free plan. You never lose your progress.",
  },
  {
    question: 'What is the difference between Plus and Pro?',
    answer: "Both give you full access to all lessons and paths. Pro adds AI practice tools, daily personalized recommendations, and completion certificates — great if you want to go further and prove your skills.",
  },
  {
    question: 'Is there a free trial for Plus or Pro?',
    answer: 'Yes. Both Plus and Pro come with a 14-day free trial and no credit card is required to start. You only need to add payment details if you decide to continue after the trial.',
  },
  {
    question: 'Are the certificates recognised anywhere?',
    answer: "Our certificates are digital credentials you can share on LinkedIn or add to your CV. They show that you have practical, hands-on AI skills — which employers and clients are increasingly looking for.",
  },
  {
    question: 'Do you offer a discount for students?',
    answer: "Yes. We offer 50% off Plus or Pro for verified students. Just reach out to our support team with your student email or ID and we'll apply the discount to your account.",
  },
];
