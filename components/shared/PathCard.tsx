import Link from 'next/link';
import { Sparkles, Heart, Sun, MessageCircle, Briefcase, Zap, PenLine, Star as Stars, BookOpen, Clock, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LearningPath } from '@/lib/data/paths';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Heart, Sun, MessageCircle, Briefcase, Zap, PenLine, Stars, BookOpen,
};

const badgeStyles: Record<string, string> = {
  'Start Here':    'bg-brand-600 text-white',
  'Most Popular':  'bg-emerald-600 text-white',
  'Trending':      'bg-amber-500 text-white',
  'New':           'bg-teal-600 text-white',
};

const levelStyles: Record<string, string> = {
  'Beginner':     'bg-emerald-50 text-emerald-700 border border-emerald-100',
  'Easy Start':   'bg-sky-50 text-sky-700 border border-sky-100',
  'Everyday Use': 'bg-amber-50 text-amber-700 border border-amber-100',
};

interface PathCardProps {
  path: LearningPath;
  className?: string;
}

export function PathCard({ path, className }: PathCardProps) {
  const Icon = iconMap[path.icon] ?? Sparkles;
  const level = levelStyles[path.level] ?? levelStyles['Beginner'];

  return (
    <Link
      href={`/paths/${path.id}`}
      className={cn(
        'group flex flex-col p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br flex-shrink-0',
          path.color,
        )}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {path.badge && (
          <span className={cn('text-[11px] font-semibold px-2.5 py-1 rounded-full leading-none', badgeStyles[path.badge] ?? 'bg-slate-100 text-slate-700')}>
            {path.badge}
          </span>
        )}
      </div>

      <div className="flex-1 mb-3">
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors leading-snug">
          {path.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {path.tagline}
        </p>
      </div>

      <div className="space-y-1.5 mb-4">
        {path.milestones.slice(0, 2).map((milestone) => (
          <div key={milestone} className="flex items-start gap-1.5">
            <CheckCircle className="w-3 h-3 text-teal-500 flex-shrink-0 mt-0.5" />
            <span className="text-xs text-slate-400 leading-snug">{milestone}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {path.courses} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {path.duration}
          </span>
        </div>
        <span className={cn('text-[11px] font-medium px-2 py-0.5 rounded-full', level)}>
          {path.level}
        </span>
      </div>

      <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
        View path <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}
