import Link from 'next/link';
import {
  MessageCircle, Sun, Zap, Heart, PenLine, Star, Sparkles, BookOpen, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';
import type { EnrolledPath } from '@/lib/data/learner';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Sun,
  Zap,
  Heart,
  PenLine,
  Star,
  Sparkles,
  BookOpen,
};

interface EnrolledPathCardProps {
  path: EnrolledPath;
  variant?: 'default' | 'compact';
}

export function EnrolledPathCard({ path, variant = 'default' }: EnrolledPathCardProps) {
  const Icon = iconMap[path.icon] ?? BookOpen;
  const pct = Math.round((path.completedLessons / path.totalLessons) * 100);

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card hover:shadow-card-md transition-all duration-200">
        <div className="flex items-start gap-3 mb-4">
          <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br shrink-0', path.color)}>
            <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-900 leading-tight">{path.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{path.level} · {path.estimatedTime}</p>
          </div>
        </div>
        <ProgressBar value={path.completedLessons} max={path.totalLessons} size="sm" />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-500">{path.completedLessons}/{path.totalLessons} lessons</span>
          <span className="text-xs font-semibold text-brand-600">{pct}%</span>
        </div>
        <Link
          href={`/app/path/${path.slug}`}
          className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
        >
          Continue
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-card-md transition-all duration-200">
      <div className="flex items-start gap-4 mb-5">
        <div className={cn('w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br shrink-0', path.color)}>
          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 leading-tight">{path.title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{path.tagline}</p>
        </div>
      </div>

      <div className="space-y-1.5 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">{path.completedLessons} of {path.totalLessons} lessons</span>
          <span className="font-semibold text-brand-600">{pct}% done</span>
        </div>
        <ProgressBar value={path.completedLessons} max={path.totalLessons} />
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
        <span>{path.level}</span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span>{path.estimatedTime}</span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span>Last visited {path.lastActivity}</span>
      </div>

      <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 mb-4">
        <p className="text-xs text-slate-500 mb-0.5">Up next</p>
        <p className="text-sm font-medium text-slate-800">{path.nextLesson}</p>
      </div>

      <Link
        href={`/app/lesson/${path.nextLessonSlug}`}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
      >
        Continue Learning
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
