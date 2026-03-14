'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CircleCheck as CheckCircle2, ArrowRight, Star, RefreshCw, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonCheckpointProps {
  lessonTitle: string;
  pathTitle: string;
  pathSlug: string;
  nextLessonSlug: string | null;
  nextLessonTitle: string | null;
  keyPoints: string[];
}

const confidenceLevels = [
  { value: 1, label: "Not sure yet", emoji: "😅" },
  { value: 2, label: "Getting there", emoji: "🙂" },
  { value: 3, label: "I got it!", emoji: "😊" },
  { value: 4, label: "Totally clear", emoji: "🙌" },
];

export function LessonCheckpoint({
  lessonTitle,
  pathTitle,
  pathSlug,
  nextLessonSlug,
  nextLessonTitle,
  keyPoints,
}: LessonCheckpointProps) {
  const [confidence, setConfidence] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-2xl border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-brand-50 p-6 space-y-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl bg-teal-500 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-0.5">Lesson Complete</p>
          <h3 className="text-base font-bold text-slate-900 leading-tight">{lessonTitle}</h3>
          <p className="text-sm text-slate-500">{pathTitle}</p>
        </div>
      </div>

      <div className="bg-white/70 rounded-xl p-4 border border-white">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">What you just learned</p>
        <ul className="space-y-2">
          {keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/70 rounded-xl p-4 border border-white">
        <p className="text-sm font-medium text-slate-700 mb-3">How confident do you feel about this lesson?</p>
        {!submitted ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {confidenceLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setConfidence(level.value)}
                  className={cn(
                    'flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all',
                    confidence === level.value
                      ? 'border-brand-400 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-slate-200 bg-white hover:border-brand-200 hover:bg-brand-50/30'
                  )}
                >
                  <span className="text-lg">{level.emoji}</span>
                  <span className="text-xs font-medium text-slate-600 leading-tight">{level.label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => confidence && setSubmitted(true)}
              disabled={!confidence}
              className="mt-3 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Save
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2 text-sm text-teal-700">
            <CheckCircle2 className="w-4 h-4 text-teal-500" strokeWidth={2.5} />
            Thanks for checking in — keep going!
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5">
        {nextLessonSlug && nextLessonTitle && (
          <Link
            href={`/app/lesson/${nextLessonSlug}`}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
          >
            Next: {nextLessonTitle}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
        <Link
          href={`/app/path/${pathSlug}`}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 bg-white/70 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Back to Path
        </Link>
        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-white/70 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" />
          Practice Again
        </button>
      </div>
    </div>
  );
}
