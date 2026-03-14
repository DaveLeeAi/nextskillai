'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CircleCheck as CheckCircle2, Clock, BookOpen, Lightbulb, ChevronRight, MessageCircle, Sparkles, Lock, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { lessonContent, chatgptPathLessons } from '@/lib/data/learner';

export default function LessonPage({ params }: { params: { slug: string } }) {
  const [marked, setMarked] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const lesson = lessonContent;

  return (
    <div className="-mx-4 -my-6 lg:-mx-8 lg:-my-8">
      <div className="flex min-h-screen">
        <div className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-200 lg:relative lg:translate-x-0 lg:w-64 lg:shrink-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className="flex items-center justify-between px-4 h-14 border-b border-slate-100">
            <span className="text-sm font-semibold text-slate-800">Lesson List</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-y-auto py-2">
            {chatgptPathLessons.map((l, idx) => (
              <Link
                key={l.id}
                href={`/app/lesson/${l.slug}`}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 transition-colors',
                  l.slug === lesson.slug
                    ? 'bg-brand-50'
                    : l.locked
                    ? 'opacity-40 cursor-not-allowed pointer-events-none'
                    : 'hover:bg-slate-50'
                )}
              >
                <div className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                  l.completed ? 'bg-teal-100' : l.slug === lesson.slug ? 'bg-brand-100' : 'bg-slate-100'
                )}>
                  {l.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" strokeWidth={2.5} />
                  ) : l.locked ? (
                    <Lock className="w-3 h-3 text-slate-400" />
                  ) : (
                    <span className={cn('text-2xs font-semibold', l.slug === lesson.slug ? 'text-brand-600' : 'text-slate-500')}>
                      {idx + 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    'text-xs font-medium leading-tight',
                    l.slug === lesson.slug ? 'text-brand-700' : l.completed ? 'text-slate-400' : 'text-slate-700'
                  )}>
                    {l.title}
                  </p>
                  <p className="text-2xs text-slate-400">{l.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-30 bg-white border-b border-slate-100 px-4 lg:px-8 h-14 flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <BookOpen className="w-4.5 h-4.5" />
            </button>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 min-w-0">
              <Link href={`/app/path/${lesson.pathSlug}`} className="hover:text-slate-800 transition-colors truncate">
                {lesson.pathTitle}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-slate-700 font-medium truncate">{lesson.title}</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span className="hidden sm:block text-xs text-slate-400">{lesson.order} / {lesson.totalInPath}</span>
              <div className="hidden sm:block w-24">
                <ProgressBar value={lesson.order} max={lesson.totalInPath} size="sm" />
              </div>
              <button
                onClick={() => setAiPanelOpen((v) => !v)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  aiPanelOpen ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AI Tutor</span>
              </button>
            </div>
          </div>

          <div className={cn('flex flex-1 gap-0 transition-all duration-200')}>
            <div className="flex-1 min-w-0 overflow-y-auto">
              <div className="max-w-2xl mx-auto px-4 lg:px-8 py-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-600">Lesson {lesson.order}</span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    {lesson.duration}
                  </div>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  {lesson.title}
                </h1>

                <div className="space-y-7">
                  {lesson.sections.map((section, i) => (
                    <div key={i}>
                      <h2 className="text-lg font-semibold text-slate-900 mb-3">{section.heading}</h2>
                      <div className="text-slate-600 leading-relaxed space-y-3">
                        {section.body.split('\n\n').map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4.5 h-4.5 text-amber-500" strokeWidth={2} />
                    <span className="text-sm font-semibold text-amber-800">Key Takeaways</span>
                  </div>
                  <ul className="space-y-2">
                    {lesson.keyTakeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    <span className="text-sm font-semibold text-teal-800">Practice Prompt</span>
                  </div>
                  <p className="text-sm text-teal-700 leading-relaxed">{lesson.practicePrompt}</p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 pb-8">
                  <div className="flex gap-2 w-full sm:w-auto">
                    {lesson.prevLesson ? (
                      <Link
                        href={`/app/lesson/${lesson.prevLesson}`}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setMarked(!marked)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border',
                        marked
                          ? 'bg-teal-50 text-teal-700 border-teal-200'
                          : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                      )}
                    >
                      <CheckCircle2 className={cn('w-4 h-4', marked ? 'text-teal-500' : 'text-slate-400')} strokeWidth={2.5} />
                      {marked ? 'Completed' : 'Mark Complete'}
                    </button>
                    {lesson.nextLesson && (
                      <Link
                        href={`/app/lesson/${lesson.nextLesson}`}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                      >
                        Next Lesson
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {aiPanelOpen && (
              <div className="w-72 shrink-0 border-l border-slate-200 bg-white flex flex-col">
                <div className="flex items-center justify-between px-4 h-14 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    <span className="text-sm font-semibold text-slate-800">AI Tutor</span>
                  </div>
                  <button
                    onClick={() => setAiPanelOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  <div className="rounded-xl bg-brand-50 border border-brand-100 p-3">
                    <p className="text-xs text-brand-700 font-medium mb-1">AI Tutor</p>
                    <p className="text-sm text-brand-800 leading-relaxed">
                      Hi! I am here to help. If anything in this lesson feels unclear, just ask me and I will explain it in a different way.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                    <p className="text-xs text-slate-500 font-medium mb-2">Suggested questions</p>
                    {[
                      'What does "context" mean in this lesson?',
                      'Can you give me another example?',
                      'Why does format matter?',
                    ].map((q) => (
                      <button
                        key={q}
                        className="block w-full text-left text-xs text-slate-600 py-1.5 px-2.5 rounded-lg hover:bg-slate-100 transition-colors mb-1"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-3 border-t border-slate-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask anything about this lesson..."
                      className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
                    />
                    <button className="px-3 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-2xs text-slate-400 mt-2 text-center">AI Tutor coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
