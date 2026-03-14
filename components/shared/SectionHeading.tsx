import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-balance',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 text-base text-slate-500 leading-relaxed text-balance',
            align === 'center' && 'max-w-xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
