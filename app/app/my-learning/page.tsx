'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Bookmark, Clock, ArrowRight, Sparkles, CircleCheck as CheckCircle2, Heart, PenLine, Zap, Sun, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { enrolledPaths, savedContent, recommendedGuides } from '@/lib/data/learner';
import { learningPaths } from '@/lib/data/paths';

const tabs = ['In Progress', 'Completed', 'Saved', 'Recommended'] as const;
type Tab = typeof tabs[number];

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Sun, Zap, Heart, PenLine, Sparkles, BookOpen,
};

const guideIconMap: Record<string, React.ElementType> = {
  Heart, PenLine, Zap,
};

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<Tab>('In Progress');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Learning</h1>
        <p className="text-slate-500 mt-1">Track your guides, lessons, and saved content.</p>
      </div>

      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-full sm:w-auto sm:inline-flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150',
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
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Up next: {path.nextLesson}</span>
                      </div>
                      <Link
                        href={`/app/lesson/${path.nextLessonSlug}`}
                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 transition-colors"
                      >
                        Continue
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'Completed' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
          <div className="flex flex-col items-center py-16 px-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-slate-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-slate-700 mb-2">No completed paths yet</h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Keep going! When you finish a path, it will show up here. You are already making great progress.
            </p>
            <Link
              href="/app"
              className="mt-5 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              Continue Learning
            </Link>
          </div>
        </div>
      )}

      {activeTab === 'Saved' && (
        <div className="space-y-3">
          {savedContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                <Bookmark className="w-4.5 h-4.5 text-brand-600" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.type} · {item.path} · Saved {item.savedAt}</p>
              </div>
              <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Recommended' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {learningPaths.filter(p => !enrolledPaths.find(e => e.slug === p.id)).slice(0, 6).map((path) => {
            const Icon = iconMap[path.icon] ?? Sparkles;
            return (
              <div key={path.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card hover:shadow-card-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br shrink-0', path.color)}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{path.title}</h3>
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
      )}
    </div>
  );
}
