import { Star, Quote } from 'lucide-react';
import type { Review } from '@/lib/data/reviews';

interface ReviewCardProps {
  review: Review;
  variant?: 'default' | 'featured';
}

export function ReviewCard({ review, variant = 'default' }: ReviewCardProps) {
  if (variant === 'featured') {
    return (
      <div className="flex flex-col bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <Quote className="w-8 h-8 text-brand-400/40 mb-5 flex-shrink-0" />
        <p className="text-slate-700 text-lg leading-relaxed font-medium mb-6 flex-1">
          &ldquo;{review.quote}&rdquo;
        </p>
        {review.outcome && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold mb-5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            {review.outcome}
          </div>
        )}
        <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-brand-700">{review.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
            <p className="text-xs text-slate-400 truncate">{review.role}</p>
          </div>
          <div className="flex gap-0.5 flex-shrink-0">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      {(review.course || review.path) && (
        <p className="text-xs text-brand-600 font-medium mb-4">
          {review.path ? `Path: ${review.path}` : `Course: ${review.course}`}
        </p>
      )}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-brand-700">{review.avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-xs">{review.name}</p>
          <p className="text-xs text-slate-400">{review.role}</p>
        </div>
      </div>
    </div>
  );
}
