import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'success' | 'warning' | 'info' | 'hot' | 'new';

interface BrandBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-brand-50 text-brand-700 border-brand-100',
  success: 'bg-teal-50 text-teal-700 border-teal-100',
  warning: 'bg-amber-50 text-amber-700 border-amber-100',
  info:    'bg-sky-50 text-sky-700 border-sky-100',
  hot:     'bg-rose-50 text-rose-700 border-rose-100',
  new:     'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export function BrandBadge({ children, variant = 'default', className }: BrandBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
