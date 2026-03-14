export interface NavLink {
  label: string;
  href: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  lessonCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  badge?: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  courseCount: number;
  icon: string;
  color: string;
}
