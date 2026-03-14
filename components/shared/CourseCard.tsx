import Image from 'next/image';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import type { Course } from '@/lib/data/courses';

interface CourseCardProps {
  course: Course;
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Advanced: 'bg-red-500/15 text-red-400 border-red-500/30',
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1">
      <div className="relative w-full h-44 overflow-hidden bg-slate-800">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm bg-slate-900/60 ${levelColors[course.level]}`}>
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-slate-300 border border-slate-700/50">
            {course.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-white text-base leading-snug mb-2 group-hover:text-brand-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1.5 ml-auto">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-slate-300 font-medium">{course.rating}</span>
            <span className="text-slate-600">({course.reviewCount.toLocaleString()})</span>
          </span>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] text-white font-bold">{course.instructor.charAt(0)}</span>
          </div>
          <span className="text-xs text-slate-500 flex-1">{course.instructor}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors group/link cursor-pointer">
            View course
            <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
