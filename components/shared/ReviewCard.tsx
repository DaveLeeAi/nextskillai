import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import type { Review } from '@/lib/data/reviews';

interface ReviewCardProps {
  review: Review;
  variant?: 'default' | 'featured';
}

export function ReviewCard({ review, variant = 'default' }: ReviewCardProps) {
  if (variant === 'featured') {
    return (
      <div className="flex flex-col bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
        <Quote className="w-8 h-8 text-brand-500/40 mb-5 flex-shrink-0" />
        <p className="text-white text-lg leading-relaxed font-medium mb-6 flex-1">
          &ldquo;{review.quote}&rdquo;
        </p>
        {review.outcome && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            {review.outcome}
          </div>
        )}
        <div className="flex items-center gap-3 pt-5 border-t border-slate-800">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
            <Image src={review.avatar} alt={review.name} width={44} height={44} className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm">{review.name}</p>
            <p className="text-xs text-slate-500 truncate">{review.role}, {review.company}</p>
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
    <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-200">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      {(review.course || review.path) && (
        <p className="text-xs text-brand-400 font-medium mb-4">
          {review.path ? `Path: ${review.path}` : `Course: ${review.course}`}
        </p>
      )}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
          <Image src={review.avatar} alt={review.name} width={32} height={32} className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-white text-xs">{review.name}</p>
          <p className="text-xs text-slate-500">{review.role}, {review.company}</p>
        </div>
      </div>
    </div>
  );
}
