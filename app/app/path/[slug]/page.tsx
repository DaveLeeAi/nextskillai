import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, CircleCheck as CheckCircle2, Lock, MessageCircle, BookOpen, Play, Target, Award, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { chatgptPathLessons, chatgptPathMilestones } from '@/lib/data/learner';

const lessonTypeLabel: Record<string, string> = {
  lesson: 'Lesson',
  practice: 'Practice',
  quiz: 'Quiz',
};

const milestoneIconMap: Record<string, React.ElementType> = {
  Sparkles,
  MessageCircle,
  HelpCircle: Target,
  Briefcase: BookOpen,
};

export default function LearningPathPage({ params }: { params: { slug: string } }) {
  const completedCount = chatgptPathLessons.filter((l) => l.completed).length;
  const totalCount = chatgptPathLessons.length;
  const pct = Math.round((completedCount / totalCount) * 100);
  const nextLesson = chatgptPathLessons.find((l) => !l.completed && !l.locked);

  return (
    <div className="space-y-8">
      <Link
        href="/app/my-learning"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        My Learning
      </Link>

      <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-6 lg:p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">Beginner</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">2 weeks</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-400/30 text-white">Trending</span>
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight mb-2">ChatGPT Beginner Path</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              Master the world&apos;s most popular AI tool from scratch. Learn what to ask, how to get better answers, and practical ways to make it useful in your daily life.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">{completedCount} of {totalCount} lessons complete</span>
            <span className="font-semibold text-white">{pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {nextLesson && (
          <div className="mt-5">
            <Link
              href={`/app/lesson/${nextLesson.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors shadow-sm"
            >
              <Play className="w-4 h-4" />
              Continue: {nextLesson.title}
            </Link>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-3">Milestones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {chatgptPathMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className={cn(
                'rounded-2xl border p-4 transition-all',
                milestone.earned
                  ? 'bg-amber-50 border-amber-200'
                  : 'bg-white border-slate-200 opacity-60'
              )}
            >
              <div className={cn(
                'w-8 h-8 rounded-xl flex items-center justify-center mb-2.5',
                milestone.earned ? 'bg-amber-100' : 'bg-slate-100'
              )}>
                <Award className={cn('w-4 h-4', milestone.earned ? 'text-amber-500' : 'text-slate-400')} strokeWidth={2} />
              </div>
              <p className={cn('text-sm font-semibold leading-tight', milestone.earned ? 'text-amber-800' : 'text-slate-600')}>
                {milestone.title}
              </p>
              <p className={cn('text-xs mt-0.5 leading-tight', milestone.earned ? 'text-amber-600' : 'text-slate-400')}>
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-3">Lessons</h2>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card divide-y divide-slate-100">
          {chatgptPathLessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className={cn(
                'flex items-center gap-4 px-5 py-4 transition-colors',
                lesson.locked ? 'opacity-50' : 'hover:bg-slate-50'
              )}
            >
              <div className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold',
                lesson.completed
                  ? 'bg-teal-100 text-teal-600'
                  : lesson.locked
                  ? 'bg-slate-100 text-slate-400'
                  : 'bg-brand-50 text-brand-600 ring-2 ring-brand-200'
              )}>
                {lesson.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-teal-600" strokeWidth={2.5} />
                ) : lesson.locked ? (
                  <Lock className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
                ) : (
                  idx + 1
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className={cn(
                  'text-sm font-medium',
                  lesson.completed ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-900'
                )}>
                  {lesson.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{lessonTypeLabel[lesson.type]}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lesson.duration}
                  </span>
                </div>
              </div>

              {!lesson.locked && !lesson.completed && (
                <Link
                  href={`/app/lesson/${lesson.slug}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors shrink-0"
                >
                  Start
                </Link>
              )}
              {lesson.completed && (
                <Link
                  href={`/app/lesson/${lesson.slug}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
                >
                  Review
                </Link>
              )}
              {lesson.locked && (
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 shrink-0">
                  Locked
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
        <h3 className="font-semibold text-slate-900 mb-2">What you will be able to do</h3>
        <ul className="space-y-2">
          {['Use ChatGPT confidently every day', 'Know how to get better answers', 'Apply AI to real work and life tasks', 'Feel ahead of most people around you'].map((outcome) => (
            <li key={outcome} className="flex items-center gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" strokeWidth={2.5} />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
