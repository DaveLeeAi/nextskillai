'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CircleCheck as CheckCircle2,
  Clock,
  BookOpen,
  ChevronRight,
  Sparkles,
  Lock,
  X,
  Bookmark,
  BookmarkCheck,
  StickyNote,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import {
  TextLessonBlock,
  TakeawayLessonBlock,
  ExampleLessonBlock,
  TipLessonBlock,
  PracticeLessonBlock,
  RecapLessonBlock,
  ChecklistLessonBlock,
} from '@/components/lesson/LessonBlocks';
import { QuizLessonBlock } from '@/components/lesson/QuizBlock';
import { LessonCheckpoint } from '@/components/lesson/LessonCheckpoint';
import { AiTutorPanel } from '@/components/lesson/AiTutorPanel';
import { NotesDrawer } from '@/components/lesson/NotesDrawer';
import { chatgptPathLessons } from '@/lib/data/learner';
import { fullLessonData, chatgptPathModules } from '@/lib/data/lessons';
import { lessonMap } from '@/lib/data/lessonContent';
import type { LessonBlock } from '@/lib/data/lessons';

function renderBlock(block: LessonBlock, index: number) {
  switch (block.type) {
    case 'text':      return <TextLessonBlock key={index} block={block} />;
    case 'takeaway':  return <TakeawayLessonBlock key={index} block={block} />;
    case 'example':   return <ExampleLessonBlock key={index} block={block} />;
    case 'tip':       return <TipLessonBlock key={index} block={block} />;
    case 'practice':  return <PracticeLessonBlock key={index} block={block} />;
    case 'recap':     return <RecapLessonBlock key={index} block={block} />;
    case 'checklist': return <ChecklistLessonBlock key={index} block={block} />;
    case 'quiz':      return <QuizLessonBlock key={index} block={block} />;
    default:          return null;
  }
}

type PanelMode = 'none' | 'ai' | 'notes';

export default function LessonPage({ params }: { params: { slug: string } }) {
  const [completed, setCompleted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [panel, setPanel] = useState<PanelMode>('none');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const lesson = lessonMap[params.slug] ?? fullLessonData;

  const togglePanel = (mode: PanelMode) => {
    setPanel((prev) => (prev === mode ? 'none' : mode));
  };

  const keyPoints = lesson.blocks
    .filter((b) => b.type === 'takeaway')
    .flatMap((b) => (b as { type: 'takeaway'; items: string[] }).items)
    .slice(0, 3);

  return (
    <div className="-mx-4 -my-6 lg:-mx-8 lg:-my-8 flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="flex flex-1 overflow-hidden">
        <aside className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-200',
          'lg:relative lg:translate-x-0 lg:w-64 lg:shrink-0 lg:flex',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className="flex items-center justify-between px-4 h-14 border-b border-slate-100 shrink-0">
            <Link href={`/app/path/${lesson.pathSlug}`} className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors truncate pr-2">
              {lesson.pathTitle}
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 py-2">
            {chatgptPathModules.map((mod) => {
              const modLessons = chatgptPathLessons.filter((l) => mod.lessonIds.includes(l.id));
              return (
                <div key={mod.id} className="mb-1">
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-2xs font-bold text-slate-400 uppercase tracking-wider">{mod.title}</p>
                  </div>
                  {modLessons.map((l) => {
                    const globalIdx = chatgptPathLessons.findIndex((x) => x.id === l.id);
                    const isCurrent = l.slug === lesson.slug;
                    return (
                      <Link
                        key={l.id}
                        href={`/app/lesson/${l.slug}`}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 transition-colors',
                          isCurrent ? 'bg-brand-50' :
                          l.locked ? 'opacity-40 pointer-events-none cursor-default' :
                          'hover:bg-slate-50'
                        )}
                      >
                        <div className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                          l.completed ? 'bg-teal-100' :
                          isCurrent ? 'bg-brand-100 ring-2 ring-brand-300' :
                          'bg-slate-100'
                        )}>
                          {l.completed ? (
                            <CheckCircle2 className="w-3 h-3 text-teal-600" strokeWidth={3} />
                          ) : l.locked ? (
                            <Lock className="w-3 h-3 text-slate-400" />
                          ) : (
                            <span className={cn('text-2xs font-bold', isCurrent ? 'text-brand-600' : 'text-slate-500')}>
                              {globalIdx + 1}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={cn(
                            'text-xs leading-tight',
                            isCurrent ? 'font-semibold text-brand-700' :
                            l.completed ? 'text-slate-400' :
                            'font-medium text-slate-700'
                          )}>
                            {l.title}
                          </p>
                          <p className={cn(
                            'text-2xs mt-0.5',
                            l.type === 'quiz' ? 'text-amber-500' :
                            l.type === 'practice' ? 'text-teal-500' :
                            'text-slate-400'
                          )}>
                            {l.type === 'quiz' ? 'Quiz' : l.type === 'practice' ? 'Practice' : l.duration}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-slate-900/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 lg:px-6 h-14 flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-4.5 h-4.5" />
            </button>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 min-w-0 flex-1">
              <Link href={`/app/path/${lesson.pathSlug}`} className="hover:text-slate-800 transition-colors hidden sm:block truncate">
                {lesson.pathTitle}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden sm:block shrink-0" />
              <span className="text-slate-700 font-medium truncate">{lesson.title}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="hidden md:block text-xs text-slate-400">{lesson.order}/{lesson.totalInPath}</span>
              <div className="hidden md:block w-20">
                <ProgressBar value={lesson.order} max={lesson.totalInPath} size="sm" />
              </div>
              <button
                onClick={() => setBookmarked((v) => !v)}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  bookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                )}
                title={bookmarked ? 'Bookmarked' : 'Bookmark lesson'}
              >
                {bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              </button>
              <button
                onClick={() => togglePanel('notes')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  panel === 'notes' ? 'text-amber-600 bg-amber-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                )}
                title="Notes"
              >
                <StickyNote className="w-4 h-4" />
              </button>
              <button
                onClick={() => togglePanel('ai')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all',
                  panel === 'ai'
                    ? 'bg-brand-100 text-brand-700 ring-1 ring-brand-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AI Tutor</span>
              </button>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex-1 overflow-y-auto">
              {!completed ? (
                <div className="max-w-2xl mx-auto px-4 lg:px-8 py-8 pb-16">
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700">
                      Lesson {lesson.order} of {lesson.totalInPath}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.duration}
                    </div>
                    {lesson.type !== 'lesson' && (
                      <span className={cn(
                        'px-2.5 py-1 rounded-full text-xs font-medium',
                        lesson.type === 'quiz' ? 'bg-amber-50 text-amber-700' : 'bg-teal-50 text-teal-700'
                      )}>
                        {lesson.type === 'quiz' ? 'Quiz' : 'Practice'}
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl lg:text-[1.75rem] font-bold text-slate-900 mb-8 leading-tight">
                    {lesson.title}
                  </h1>

                  <div className="space-y-6">
                    {lesson.blocks.map((block, i) => renderBlock(block, i))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      {lesson.prevLesson && (
                        <Link
                          href={`/app/lesson/${lesson.prevLesson}`}
                          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Previous
                        </Link>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCompleted(true)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                        Mark Complete
                      </button>
                      {lesson.nextLesson && (
                        <Link
                          href={`/app/lesson/${lesson.nextLesson}`}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto px-4 lg:px-8 py-8 pb-16">
                  <LessonCheckpoint
                    lessonTitle={lesson.title}
                    pathTitle={lesson.pathTitle}
                    pathSlug={lesson.pathSlug}
                    nextLessonSlug={lesson.nextLesson}
                    nextLessonTitle={
                      lesson.nextLesson
                        ? chatgptPathLessons.find((l) => l.slug === lesson.nextLesson)?.title ?? null
                        : null
                    }
                    keyPoints={keyPoints}
                  />
                  <button
                    onClick={() => setCompleted(false)}
                    className="mt-5 flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to lesson
                  </button>
                </div>
              )}
            </div>

            {panel === 'ai' && (
              <div className="hidden lg:flex w-80 shrink-0 border-l border-slate-200">
                <AiTutorPanel lessonTitle={lesson.title} onClose={() => setPanel('none')} />
              </div>
            )}
            {panel === 'notes' && (
              <div className="hidden lg:flex w-80 shrink-0 border-l border-slate-200">
                <NotesDrawer lessonTitle={lesson.title} onClose={() => setPanel('none')} />
              </div>
            )}
          </div>
        </div>
      </div>

      {panel !== 'none' && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-white border-t border-slate-200 shadow-2xl" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {panel === 'ai' && <AiTutorPanel lessonTitle={lesson.title} onClose={() => setPanel('none')} />}
          {panel === 'notes' && <NotesDrawer lessonTitle={lesson.title} onClose={() => setPanel('none')} />}
        </div>
      )}
    </div>
  );
}
