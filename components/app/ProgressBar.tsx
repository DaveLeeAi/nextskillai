import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md';
  color?: 'brand' | 'teal' | 'amber' | 'emerald';
  className?: string;
}

export function ProgressBar({ value, max = 100, size = 'md', color = 'brand', className }: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));

  const trackClass = cn('w-full rounded-full bg-slate-100', {
    'h-1.5': size === 'sm',
    'h-2': size === 'md',
  });

  const fillClass = cn('h-full rounded-full transition-all duration-500', {
    'bg-brand-600': color === 'brand',
    'bg-teal-500': color === 'teal',
    'bg-amber-500': color === 'amber',
    'bg-emerald-500': color === 'emerald',
  });

  return (
    <div className={cn(trackClass, className)}>
      <div className={fillClass} style={{ width: `${pct}%` }} />
    </div>
  );
}
