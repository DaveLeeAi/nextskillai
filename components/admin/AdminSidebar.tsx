'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  Star,
  MessageSquare,
  Settings,
  ChevronRight,
  Sparkles,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
  { label: 'Paths', href: '/admin/paths', icon: BookOpen, exact: false },
  { label: 'Lessons', href: '/admin/lessons', icon: FileText, exact: false },
  { label: 'Users', href: '/admin/users', icon: Users, exact: false },
  { label: 'Featured', href: '/admin/featured', icon: Star, exact: false },
  { label: 'Reviews', href: '/admin/reviews', icon: MessageSquare, exact: false },
  { label: 'Settings', href: '/admin/settings', icon: Settings, exact: false },
];

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-60 bg-white border-r border-slate-100 flex flex-col transition-transform duration-200',
        'lg:relative lg:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex items-center justify-between h-14 px-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900">NextSkill</span>
              <span className="ml-1.5 text-xs font-medium text-slate-400">Admin</span>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 space-y-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group',
                    active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <Icon className={cn('w-4 h-4 shrink-0', active ? 'text-brand-600' : 'text-slate-400 group-hover:text-slate-600')} strokeWidth={2} />
                  <span className="flex-1">{item.label}</span>
                  {active && <ChevronRight className="w-3.5 h-3.5 text-brand-400" />}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-3 border-t border-slate-100">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5 rotate-180" />
            Back to Site
          </Link>
        </div>
      </aside>
    </>
  );
}
