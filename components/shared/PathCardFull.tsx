import { Sparkles, Zap, Rocket, TrendingUp, Settings, PenTool, Briefcase, BookOpen, Clock, ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import type { LearningPath } from '@/lib/data/paths';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Zap, Rocket, TrendingUp, Settings, PenTool, Briefcase,
};

const levelColors: Record<string, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Advanced: 'bg-red-500/15 text-red-400 border-red-500/30',
  'All Levels': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
};

const badgeColors: Record<string, string> = {
  'Most Popular': 'bg-brand-600 text-white',
  'Trending': 'bg-teal-600 text-white',
  'Featured': 'bg-amber-600 text-white',
  'New': 'bg-emerald-600 text-white',
};

interface PathCardFullProps {
  path: LearningPath;
}

export function PathCardFull({ path }: PathCardFullProps) {
  const Icon = iconMap[path.icon] || Sparkles;

  return (
    <div className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1">
      <div className={`h-1.5 w-full bg-gradient-to-r ${path.color}`} />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-end gap-2">
            {path.badge && (
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[path.badge] || 'bg-slate-700 text-slate-300'}`}>
                {path.badge}
              </span>
            )}
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[path.level]}`}>
              {path.level}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-white text-lg leading-snug mb-1 group-hover:text-brand-400 transition-colors">
          {path.title}
        </h3>
        <p className="text-sm text-brand-400 font-medium mb-3">{path.tagline}</p>
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
          {path.description}
        </p>

        <div className="flex items-center gap-4 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {path.courses} courses
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {path.duration}
          </span>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Skills you will gain</p>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((skill) => (
              <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5 pt-4 border-t border-slate-800">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">What you will achieve</p>
          <ul className="space-y-1.5">
            {path.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-600 mb-3">Best for: {path.forWho}</p>
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-brand-600 border border-slate-700 hover:border-brand-600 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200">
            Explore path
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
