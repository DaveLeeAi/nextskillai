import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  note?: string;
}

export function StatCard({ label, value, icon: Icon, iconColor = 'text-brand-600', iconBg = 'bg-brand-50', note }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
      <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center mb-3', iconBg)}>
        <Icon className={cn('w-4.5 h-4.5', iconColor)} strokeWidth={2} />
      </div>
      <p className="text-2xl font-bold text-slate-900 leading-none mb-1">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
      {note && <p className="text-xs text-slate-400 mt-1">{note}</p>}
    </div>
  );
}
