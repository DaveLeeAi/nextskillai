'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Clock,
  ArrowRight,
  Sparkles,
  CircleCheck as CheckCircle2,
  Heart,
  PenLine,
  Zap,
  Sun,
  MessageCircle,
  StickyNote,
  History,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { enrolledPaths, savedContent } from '@/lib/data/learner';
import { bookmarkedLessons, recentLessons } from '@/lib/data/lessons';
import { learningPaths } from '@/lib/data/paths';

const tabs = ['In Progress', 'Bookmarks', 'Recent', 'Completed', 'Recommended'] as const;
type Tab = typeof tabs[number];

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Sun, Zap, Heart, PenLine, Sparkles, BookOpen,
};

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<Tab>('In Progress');
  const [bookmarks, setBookmarks] = useState(bookmarkedLessons);

  const removeBookmark = (id: string) => setBookmarks((prev) => prev.filter((b) => b.id !== id));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Learning</h1>
        <p className="text-slate-500 mt-1">Your paths, bookmarked lessons, and recent activity.</p>
      </div>

      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'shrink-0 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap',
              activeTab === tab
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'In Progress' && (
        <div className="space-y-4">
          {enrolledPaths.map((path) => {
            const Icon = iconMap[path.icon] ?? BookOpen;
            const pct = Math.round((path.completedLessons / path.totalLessons) * 100);
            return (
              <div key={path.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className={cn('w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br shrink-0', path.color)}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{path.title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{path.tagline}</p>
                      </div>
                      <span className="text-xs text-slate-400 shrink-0">Last: {path.lastActivity}</span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{path.completedLessons} of {path.totalLessons} lessons</span>
                        <span className="font-semibold text-brand-600">{pct}%</span>
                      </div>
                      <ProgressBar value={path.completedLessons} max={path.totalLessons} />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-2 rounded-xl">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Up next: <span className="font-medium text-slate-600">{path.nextLesson}</span></span>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/app/path/${path.slug}`}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          View Path
                        </Link>
                        <Link
                          href={`/app/lesson/${path.nextLessonSlug}`}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors"
                        >
                          Continue
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center bg-white">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Start another path</p>
            <p className="text-xs text-slate-400 mb-3">Browse all beginner-friendly paths</p>
            <Link href="/app/my-learning" onClick={() => setActiveTab('Recommended')} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors">
              Browse Paths
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {activeTab === 'Bookmarks' && (
        <div className="space-y-4">
          {bookmarks.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card flex flex-col items-center py-14 px-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                <Bookmark className="w-7 h-7 text-amber-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-slate-700 mb-2">No bookmarks yet</h3>
              <p className="text-sm text-slate-500 max-w-xs">
                When you find a lesson worth saving, tap the bookmark icon. It will appear here.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-500">{bookmarks.length} saved {bookmarks.length === 1 ? 'lesson' : 'lessons'}</p>
              {bookmarks.map((b) => (
                <div key={b.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <BookmarkCheck className="w-4.5 h-4.5 text-amber-500" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                        <span>{b.pathTitle}</span>
                        <span>·</span>
                        <Clock className="w-3 h-3" />
                        <span>{b.duration}</span>
                        <span>·</span>
                        <span>{b.bookmarkedAt}</span>
                      </div>
                      {b.note && (
                        <div className="flex items-start gap-1.5 mt-2 bg-amber-50 rounded-lg px-2.5 py-1.5">
                          <StickyNote className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-xs text-amber-700 italic">{b.note}</p>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeBookmark(b.id)}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors shrink-0"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Link
                      href={`/app/lesson/${b.slug}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
                    >
                      Open lesson
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {activeTab === 'Recent' && (
        <div className="space-y-3">
          <p className="text-sm text-slate-500">Lessons you recently completed or visited</p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card divide-y divide-slate-100">
            {recentLessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-4 px-5 py-4">
                <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">{lesson.title}</p>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                    <span>{lesson.pathTitle}</span>
                    <span>·</span>
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400">{lesson.completedAt}</span>
                  <Link
                    href={`/app/lesson/${lesson.slug}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <History className="w-4 h-4 text-slate-400" />
              <p className="text-sm font-medium text-slate-700">Saved content</p>
            </div>
            {savedContent.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <div>
                  <p className="text-sm text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.type} · {item.path} · {item.savedAt}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Completed' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
          <div className="flex flex-col items-center py-14 px-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-slate-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-slate-700 mb-2">No completed paths yet</h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Keep going! When you finish a full path, it will show up here. You are already making real progress.
            </p>
            <Link href="/app" className="mt-5 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors">
              Continue Learning
            </Link>
          </div>
        </div>
      )}

      {activeTab === 'Recommended' && (
        <div className="space-y-4">
          <p className="text-sm text-slate-500">Paths chosen for you based on your learning style and goals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningPaths.filter((p) => !enrolledPaths.find((e) => e.slug === p.id)).slice(0, 6).map((path) => {
              const Icon = iconMap[path.icon] ?? Sparkles;
              return (
                <div key={path.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card hover:shadow-card-md hover:-translate-y-0.5 transition-all duration-200 group">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br shrink-0', path.color)}>
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">{path.title}</h3>
                      <p className="text-xs text-slate-500">{path.level} · {path.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">{path.tagline}</p>
                  <Link
                    href={`/app/path/${path.id}`}
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
                  >
                    View Path
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
