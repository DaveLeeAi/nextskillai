'use client';

import Link from 'next/link';
import { Star, Clock, BookOpen, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Course } from '@/lib/data/courses';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const levelStyles: Record<string, { bg: string; text: string; dot: string }> = {
  'Beginner':     { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-400' },
  'Easy Start':   { bg: 'bg-sky-50',     text: 'text-sky-700',     dot: 'bg-sky-400'     },
  'Everyday Use': { bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-400'   },
};

const colorAccents: Record<string, string> = {
  blue:    'from-blue-50 to-blue-100/50 border-blue-100',
  teal:    'from-teal-50 to-teal-100/50 border-teal-100',
  emerald: 'from-emerald-50 to-emerald-100/50 border-emerald-100',
  amber:   'from-amber-50 to-amber-100/50 border-amber-100',
};

const iconColors: Record<string, string> = {
  blue:    'text-blue-500',
  teal:    'text-teal-500',
  emerald: 'text-emerald-500',
  amber:   'text-amber-500',
};

export function CourseCard({ course, className }: CourseCardProps) {
  const level = levelStyles[course.level] ?? levelStyles['Beginner'];
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
        {(course.featured || course.popular) && (
          <div className="absolute top-3 right-3">
            {course.featured && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-white shadow-sm">
                Featured
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="mb-1">
          <span className="text-xs font-medium text-slate-400 capitalize">
            {course.category.replace(/-/g, ' ')}
          </span>
        </div>

        <h3 className="font-semibold text-slate-900 text-base leading-snug mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
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
          className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors group/btn"
        >
          <span>Start lesson</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export function CourseCardCompact({ course, className }: CourseCardProps) {
  const level = levelStyles[course.level] ?? levelStyles['Beginner'];

  return (
    <Link
      href={`/get-started`}
      className={cn(
        'group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all',
        className
      )}
    >
      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br', colorAccents[course.color])}>
        <BookOpen className={cn('w-5 h-5', iconColors[course.color])} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
          {course.title}
        </h4>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={cn('text-xs font-medium', level.text)}>{course.level}</span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-400">{course.duration}</span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 flex-shrink-0 transition-colors" />
    </Link>
  );
}
