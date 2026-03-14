import Link from 'next/link';
import { Sparkles, MessageSquare, BrainCircuit, ChartLine as LineChart, ChartBar as BarChart2, Bot, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrandBadge } from './BrandBadge';
import type { LearningPath } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, MessageSquare, BrainCircuit, LineChart,
  BarChart2, Bot, Clock, BookOpen,
};

const levelColors = {
  Beginner:     'success',
  Intermediate: 'info',
  Advanced:     'warning',
} as const;

const badgeVariantMap: Record<string, 'default' | 'hot' | 'new' | 'warning'> = {
  'Most Popular': 'default',
  'Trending':     'hot',
  'New':          'new',
  'Hot':          'hot',
};

interface PathCardProps {
  path: LearningPath;
  className?: string;
}

export function PathCard({ path, className }: PathCardProps) {
  const Icon = iconMap[path.icon] ?? Sparkles;

  return (
    <Link
      href={`/paths/${path.id}`}
      className={cn(
        'group flex flex-col p-6 bg-white rounded-2xl border border-slate-100 shadow-card card-hover',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 group-hover:bg-brand-100 transition-colors">
          <Icon className="w-5 h-5 text-brand-600" />
        </div>
        {path.badge && (
          <BrandBadge variant={badgeVariantMap[path.badge] ?? 'default'}>
            {path.badge}
          </BrandBadge>
        )}
      </div>

      <div className="flex-1">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
          {path.category}
        </p>
        <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {path.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
          {path.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {path.lessonCount} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {path.duration}
          </span>
        </div>
        <BrandBadge variant={levelColors[path.level]}>{path.level}</BrandBadge>
      </div>

      <div className="flex items-center gap-1 mt-4 text-xs font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
        View Path <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}
