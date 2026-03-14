import { Bot, Map, Clock, SquareCheck as CheckSquare, Award, TrendingUp, Sparkles, BrainCircuit, ChartBar as BarChart2, MessageSquare, ChartLine as LineChart, Trophy, Compass, BookOpen, FlaskConical, Star, CircleCheck as CheckCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Feature } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  Bot, Map, Clock, CheckSquare, Award, TrendingUp,
  Sparkles, BrainCircuit, BarChart2, MessageSquare,
  LineChart, Trophy, Compass, BookOpen, FlaskConical,
  Star, CheckCircle, Zap,
};

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] ?? Sparkles;

  return (
    <div
      className={cn(
        'group p-6 bg-white rounded-2xl border border-slate-100 shadow-card card-hover',
        className
      )}
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 mb-4 group-hover:bg-brand-100 transition-colors">
        <Icon className="w-5 h-5 text-brand-600" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
    </div>
  );
}
