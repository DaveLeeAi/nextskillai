import Link from 'next/link';
import { ArrowLeft, Clock, CircleCheck as CheckCircle2, Lock, MessageCircle, Play, Award, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { chatgptPathLessons, chatgptPathMilestones } from '@/lib/data/learner';
import { chatgptPathModules } from '@/lib/data/lessons';

const typeLabel: Record<string, string> = { lesson: 'Lesson', practice: 'Practice', quiz: 'Quiz' };

const typeBadge: Record<string, string> = {
  lesson: '',
  practice: 'text-teal-600 bg-teal-50',
  quiz: 'text-amber-600 bg-amber-50',
};

export default function LearningPathPage({ params }: { params: { slug: string } }) {
  const completedCount = chatgptPathLessons.filter((l) => l.completed).length;
  const totalCount = chatgptPathLessons.length;
  const pct = Math.round((completedCount / totalCount) * 100);
  const nextLesson = chatgptPathLessons.find((l) => !l.completed && !l.locked);

  return (
    <div className="space-y-8">
      <Link href="/app/my-learning" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors">
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
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-300/30 text-white">Trending</span>
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight mb-2">ChatGPT Beginner Path</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              Master the world&apos;s most popular AI tool from scratch. Learn what to ask, how to get better answers, and practical ways to make it useful in your daily life.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-white/15 rounded-xl p-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-white/80">{completedCount} of {totalCount} lessons complete</span>
            <span className="font-bold text-white">{pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { label: 'Lessons done', value: completedCount },
              { label: 'Remaining', value: totalCount - completedCount },
              { label: 'Milestones', value: `${chatgptPathMilestones.filter((m) => m.earned).length}/${chatgptPathMilestones.length}` },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-base font-bold text-white">{s.value}</p>
                <p className="text-2xs text-white/60">{s.label}</p>
              </div>
            ))}
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
                milestone.earned ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200 opacity-55'
              )}
            >
              <div className={cn('w-8 h-8 rounded-xl flex items-center justify-center mb-2.5', milestone.earned ? 'bg-amber-100' : 'bg-slate-100')}>
                <Award className={cn('w-4 h-4', milestone.earned ? 'text-amber-500' : 'text-slate-400')} strokeWidth={2} />
              </div>
              <p className={cn('text-sm font-semibold leading-tight', milestone.earned ? 'text-amber-800' : 'text-slate-600')}>
                {milestone.title}
              </p>
              <p className={cn('text-xs mt-0.5 leading-tight', milestone.earned ? 'text-amber-600' : 'text-slate-400')}>
                {milestone.description}
              </p>
              {milestone.earned && (
                <span className="inline-flex items-center gap-1 mt-2 text-2xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} /> Earned
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-3">Lessons</h2>
        <div className="space-y-3">
          {chatgptPathModules.map((mod) => {
            const modLessons = chatgptPathLessons.filter((l) => mod.lessonIds.includes(l.id));
            const modCompleted = modLessons.filter((l) => l.completed).length;
            const modDone = modCompleted === modLessons.length;

            return (
              <div key={mod.id} className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                <div className={cn(
                  'flex items-center justify-between px-5 py-3.5 border-b',
                  modDone ? 'bg-teal-50 border-teal-100' : 'bg-slate-50 border-slate-100'
                )}>
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      modDone ? 'bg-teal-500' : 'bg-slate-200'
                    )}>
                      {modDone
                        ? <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        : <span className="text-2xs font-bold text-slate-500">{mod.id.replace('mod', '')}</span>
                      }
                    </div>
                    <div>
                      <p className={cn('text-sm font-semibold', modDone ? 'text-teal-800' : 'text-slate-800')}>{mod.title}</p>
                      <p className={cn('text-xs', modDone ? 'text-teal-600' : 'text-slate-400')}>{mod.description}</p>
                    </div>
                  </div>
                  <span className={cn('text-xs font-medium', modDone ? 'text-teal-600' : 'text-slate-400')}>
                    {modCompleted}/{modLessons.length}
                  </span>
                </div>

                <div className="divide-y divide-slate-50">
                  {modLessons.map((lesson) => {
                    const globalIdx = chatgptPathLessons.findIndex((x) => x.id === lesson.id);
                    const isNext = lesson.id === nextLesson?.id;

                    return (
                      <div
                        key={lesson.id}
                        className={cn(
                          'flex items-center gap-4 px-5 py-3.5 transition-colors group',
                          lesson.locked ? 'opacity-45' : lesson.completed ? 'hover:bg-slate-50' : 'hover:bg-brand-50/30 cursor-pointer'
                        )}
                      >
                        <div className={cn(
                          'w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold transition-all',
                          lesson.completed ? 'bg-teal-100' :
                          isNext ? 'bg-brand-100 ring-2 ring-brand-300' :
                          lesson.locked ? 'bg-slate-100' :
                          'bg-slate-100'
                        )}>
                          {lesson.completed
                            ? <CheckCircle2 className="w-4 h-4 text-teal-600" strokeWidth={2.5} />
                            : lesson.locked
                            ? <Lock className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
                            : <span className={cn(isNext ? 'text-brand-600' : 'text-slate-500')}>{globalIdx + 1}</span>
                          }
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className={cn(
                              'text-sm font-medium leading-tight',
                              lesson.completed ? 'text-slate-400' :
                              isNext ? 'text-brand-700' :
                              lesson.locked ? 'text-slate-400' :
                              'text-slate-900'
                            )}>
                              {lesson.title}
                            </p>
                            {isNext && (
                              <span className="px-2 py-0.5 rounded-full text-2xs font-semibold bg-brand-100 text-brand-700 shrink-0">Up next</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            {lesson.type !== 'lesson' && (
                              <span className={cn('text-2xs font-medium px-1.5 py-0.5 rounded', typeBadge[lesson.type])}>
                                {typeLabel[lesson.type]}
                              </span>
                            )}
                            <div className="flex items-center gap-1 text-2xs text-slate-400">
                              <Clock className="w-3 h-3" />
                              {lesson.duration}
                            </div>
                          </div>
                        </div>

                        {!lesson.locked && !lesson.completed && (
                          <Link
                            href={`/app/lesson/${lesson.slug}`}
                            className={cn(
                              'flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors',
                              isNext
                                ? 'text-white bg-brand-600 hover:bg-brand-700'
                                : 'text-brand-600 bg-brand-50 hover:bg-brand-100'
                            )}
                          >
                            {isNext ? 'Continue' : 'Start'}
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        )}
                        {lesson.completed && (
                          <Link
                            href={`/app/lesson/${lesson.slug}`}
                            className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
                          >
                            Review
                          </Link>
                        )}
                        {lesson.locked && (
                          <span className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 shrink-0">Locked</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
        <h3 className="font-semibold text-slate-900 mb-3">What you will be able to do</h3>
        <ul className="space-y-2.5">
          {[
            'Use ChatGPT confidently every day',
            'Know how to get better answers from any AI tool',
            'Apply AI to real work, writing, and life tasks',
            'Build a simple daily habit that saves you time',
          ].map((outcome) => (
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
