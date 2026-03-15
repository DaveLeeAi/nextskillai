import { Sparkles, Heart, Sun, MessageCircle, Briefcase, Zap, PenLine, Star as Stars, BookOpen, Clock, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { LearningPath } from '@/lib/data/paths';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Heart, Sun, MessageCircle, Briefcase, Zap, PenLine, Stars, BookOpen,
};

const levelStyles: Record<string, string> = {
  'Beginner':     'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Easy Start':   'bg-sky-50 text-sky-700 border-sky-200',
  'Everyday Use': 'bg-amber-50 text-amber-700 border-amber-200',
};

const badgeColors: Record<string, string> = {
  'Start Here':    'bg-brand-600 text-white',
  'Most Popular':  'bg-emerald-600 text-white',
  'Trending':      'bg-amber-500 text-white',
  'New':           'bg-teal-600 text-white',
};

interface PathCardFullProps {
  path: LearningPath;
}

export function PathCardFull({ path }: PathCardFullProps) {
  const Icon = iconMap[path.icon] ?? Sparkles;
  const level = levelStyles[path.level] ?? levelStyles['Beginner'];

  return (
    <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className={`h-1.5 w-full bg-gradient-to-r ${path.color}`} />

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-end gap-2">
            {path.badge && (
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[path.badge] ?? 'bg-slate-100 text-slate-700'}`}>
                {path.badge}
              </span>
            )}
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${level}`}>
              {path.level}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1 group-hover:text-brand-600 transition-colors">
          {path.title}
        </h3>
        <p className="text-sm text-brand-600 font-medium mb-3">{path.tagline}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
          {path.description}
        </p>

        <div className="flex items-center gap-4 mb-5 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {path.courses} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {path.duration}
          </span>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">What you will learn</p>
          <div className="flex flex-wrap gap-1.5">
            {path.skills.map(skill => (
              <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">What you will be able to do</p>
          <ul className="space-y-1.5">
            {path.outcomes.map(outcome => (
              <li key={outcome} className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 mb-3">Best for: {path.forWho}</p>
          <Link
            href={`/get-started`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-50 hover:bg-brand-600 text-sm font-semibold text-brand-600 hover:text-white transition-all duration-200"
          >
            Start this path
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
