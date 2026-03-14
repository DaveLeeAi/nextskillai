import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  featured?: boolean;
}

export function TestimonialCard({ testimonial, className, featured }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col p-6 rounded-2xl border transition-all duration-200',
        featured
          ? 'bg-brand-600 border-brand-500 shadow-card-lg'
          : 'bg-white border-slate-100 shadow-card hover:shadow-card-md hover:-translate-y-0.5',
        className
      )}
    >
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className={cn('w-3.5 h-3.5 fill-current', featured ? 'text-yellow-300' : 'text-amber-400')}
          />
        ))}
      </div>

      <p className={cn('text-sm leading-relaxed flex-1 mb-5', featured ? 'text-blue-100' : 'text-slate-600')}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold flex-shrink-0',
            featured ? 'bg-blue-500 text-white' : 'bg-brand-100 text-brand-700'
          )}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className={cn('text-sm font-semibold', featured ? 'text-white' : 'text-slate-900')}>
            {testimonial.name}
          </p>
          <p className={cn('text-xs', featured ? 'text-blue-200' : 'text-slate-400')}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
