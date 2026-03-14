import { cn } from '@/lib/utils';
import type { PathStatus, LessonStatus, UserStatus, UserPlan } from '@/lib/data/admin';

export function StatusBadge({ status }: { status: PathStatus | LessonStatus | UserStatus | 'review' }) {
  const styles: Record<string, string> = {
    published: 'bg-teal-50 text-teal-700 border-teal-100',
    draft: 'bg-amber-50 text-amber-700 border-amber-100',
    archived: 'bg-slate-100 text-slate-500 border-slate-200',
    review: 'bg-blue-50 text-blue-700 border-blue-100',
    active: 'bg-teal-50 text-teal-700 border-teal-100',
    inactive: 'bg-slate-100 text-slate-500 border-slate-200',
    trial: 'bg-amber-50 text-amber-700 border-amber-100',
  };
  const labels: Record<string, string> = {
    published: 'Published',
    draft: 'Draft',
    archived: 'Archived',
    review: 'In Review',
    active: 'Active',
    inactive: 'Inactive',
    trial: 'Trial',
  };
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border', styles[status] ?? 'bg-slate-100 text-slate-500 border-slate-200')}>
      <span className={cn('w-1.5 h-1.5 rounded-full mr-1.5', {
        'bg-teal-500': status === 'published' || status === 'active',
        'bg-amber-400': status === 'draft' || status === 'trial',
        'bg-slate-400': status === 'archived' || status === 'inactive',
        'bg-blue-400': status === 'review',
      })} />
      {labels[status] ?? status}
    </span>
  );
}

export function PlanBadge({ plan }: { plan: UserPlan }) {
  const styles: Record<UserPlan, string> = {
    Free: 'bg-slate-100 text-slate-500',
    Pro: 'bg-brand-50 text-brand-700',
    Team: 'bg-teal-50 text-teal-700',
  };
  return (
    <span className={cn('inline-flex px-2 py-0.5 rounded-full text-xs font-semibold', styles[plan])}>
      {plan}
    </span>
  );
}

export function AdminCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('bg-white rounded-2xl border border-slate-200 shadow-sm', className)}>
      {children}
    </div>
  );
}

interface AdminStatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  iconColor?: string;
  iconBg?: string;
  trend?: string;
}

export function AdminStatCard({ label, value, sub, icon: Icon, iconColor = 'text-brand-600', iconBg = 'bg-brand-50', trend }: AdminStatCardProps) {
  return (
    <AdminCard className="p-5">
      <div className="flex items-start justify-between gap-2">
        <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center shrink-0', iconBg)}>
          <Icon className={cn('w-4.5 h-4.5', iconColor)} strokeWidth={2} />
        </div>
        {trend && (
          <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{trend}</span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-sm text-slate-500 mt-0.5">{label}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
    </AdminCard>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function AdminPageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}

export function AdminButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
  onClick?: () => void;
  className?: string;
}) {
  const base = 'inline-flex items-center gap-1.5 font-medium rounded-xl transition-colors';
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm' };
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-100',
    danger: 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100',
  };
  return (
    <button onClick={onClick} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </button>
  );
}

export function AdminEmptyState({
  title,
  description,
  icon: Icon,
  action,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold text-slate-700 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 max-w-xs mb-5">{description}</p>
      {action}
    </div>
  );
}

export function AdminFilterBar({
  filters,
  active,
  onChange,
}: {
  filters: { label: string; value: string }[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={cn(
            'px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap',
            active === f.value ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export function AdminToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-800">{label}</p>
        {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={cn(
          'w-9 h-5 rounded-full transition-colors shrink-0',
          checked ? 'bg-brand-600' : 'bg-slate-200'
        )}
      >
        <div className={cn(
          'w-3.5 h-3.5 rounded-full bg-white shadow-sm transform transition-transform mx-auto',
          checked ? 'translate-x-2' : '-translate-x-2'
        )} />
      </button>
    </div>
  );
}

export function AdminSectionCard({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <AdminCard className="overflow-hidden">
      <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-slate-100">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
      <div className="p-5">{children}</div>
    </AdminCard>
  );
}
