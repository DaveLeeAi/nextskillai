'use client';

import Link from 'next/link';
import { Star, Clock, BookOpen, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AdvancedCourse } from '@/lib/data/advancedCourses';

interface AdvancedCourseCardProps {
  course: AdvancedCourse;
  className?: string;
}

const levelStyles: Record<string, { bg: string; text: string; dot: string }> = {
  'Intermediate': { bg: 'bg-blue-50',  text: 'text-blue-700',  dot: 'bg-blue-400'  },
  'Advanced':     { bg: 'bg-rose-50',  text: 'text-rose-700',  dot: 'bg-rose-400'  },
};

const colorAccents: Record<string, string> = {
  blue:    'from-blue-50 to-blue-100/50 border-blue-100',
  teal:    'from-teal-50 to-teal-100/50 border-teal-100',
  emerald: 'from-emerald-50 to-emerald-100/50 border-emerald-100',
  amber:   'from-amber-50 to-amber-100/50 border-amber-100',
  cyan:    'from-cyan-50 to-cyan-100/50 border-cyan-100',
  orange:  'from-orange-50 to-orange-100/50 border-orange-100',
  rose:    'from-rose-50 to-rose-100/50 border-rose-100',
  pink:    'from-pink-50 to-pink-100/50 border-pink-100',
  slate:   'from-slate-50 to-slate-100/50 border-slate-100',
  green:   'from-green-50 to-green-100/50 border-green-100',
  violet:  'from-violet-50 to-violet-100/50 border-violet-100',
};

const iconColors: Record<string, string> = {
  blue:    'text-blue-500',
  teal:    'text-teal-500',
  emerald: 'text-emerald-500',
  amber:   'text-amber-500',
  cyan:    'text-cyan-500',
  orange:  'text-orange-500',
  rose:    'text-rose-500',
  pink:    'text-pink-500',
  slate:   'text-slate-500',
  green:   'text-green-500',
  violet:  'text-violet-500',
};

export function AdvancedCourseCard({ course, className }: AdvancedCourseCardProps) {
  const level = levelStyles[course.level] ?? levelStyles['Intermediate'];
  const accent = colorAccents[course.color] ?? colorAccents['blue'];
  const iconColor = iconColors[course.color] ?? iconColors['blue'];

  return (
    <div className={cn(
      'group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200',
      className
    )}>
      <div className={cn('relative h-36 rounded-t-2xl bg-gradient-to-br overflow-hidden border-b', accent)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className={cn('w-12 h-12 opacity-20', iconColor)} />
        </div>
        <div className="absolute top-3 left-3">
          <span className={cn('inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full', level.bg, level.text)}>
            <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', level.dot)} />
            {course.level}
          </span>
        </div>
        {course.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-white shadow-sm">
              Featured
            </span>
          </div>
        )}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-700">
            <Zap className="w-3 h-3" />
            Advanced
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="mb-1">
          <span className="text-xs font-medium text-slate-400 capitalize">
            {course.category.replace(/-/g, ' ')}
          </span>
        </div>

        <h3 className="font-semibold text-slate-900 text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-slate-600 font-medium">{course.rating}</span>
          </span>
        </div>

        <Link
          href={`/get-started`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group/btn"
        >
          <span>Start lesson</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
