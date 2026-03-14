'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, LayoutDashboard, BookOpen, Map, ChartBar as BarChart2, User, ArrowLeft, ChevronDown, Menu, X, Bell, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockUser } from '@/lib/data/learner';

const navItems = [
  { href: '/app', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/my-learning', label: 'My Learning', icon: BookOpen },
  { href: '/app/path/chatgpt-beginner-path', label: 'Paths', icon: Map },
  { href: '/app/progress', label: 'Progress', icon: BarChart2 },
  { href: '/app/profile', label: 'Profile', icon: User },
];

function NavItem({ href, label, icon: Icon, pathname }: { href: string; label: string; icon: React.ElementType; pathname: string }) {
  const isActive = pathname === href || (href !== '/app' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
        isActive
          ? 'bg-brand-600 text-white shadow-sm'
          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
      )}
    >
      <Icon className="w-4.5 h-4.5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
      <span>{label}</span>
    </Link>
  );
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 bg-white border-r border-slate-200">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-slate-100">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600">
          <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-[1.05rem] font-bold tracking-tight text-slate-900">
          NextSkill <span className="text-brand-600">AI</span>
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} pathname={pathname} />
        ))}
      </div>

      <div className="px-3 pb-4 space-y-2 border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-amber-50">
          <Flame className="w-4 h-4 text-amber-500" strokeWidth={2.5} />
          <span className="text-sm font-semibold text-amber-700">{mockUser.streak}-day streak</span>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to site</span>
        </Link>
      </div>
    </aside>
  );
}

export function AppTopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/app" className="flex items-center gap-2 font-bold text-slate-900">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-600">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm tracking-tight">
              NextSkill <span className="text-brand-600">AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50">
              <Flame className="w-3.5 h-3.5 text-amber-500" strokeWidth={2.5} />
              <span className="text-xs font-semibold text-amber-700">{mockUser.streak}</span>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-3 py-3 space-y-1">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} pathname={pathname} />
            ))}
            <div className="pt-1 border-t border-slate-100 mt-2">
              <Link
                href="/"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to site</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function AppHeaderBar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === '/app') return 'Dashboard';
    if (pathname === '/app/my-learning') return 'My Learning';
    if (pathname.startsWith('/app/path/')) return 'Learning Path';
    if (pathname.startsWith('/app/lesson/')) return 'Lesson';
    if (pathname === '/app/progress') return 'Progress';
    if (pathname === '/app/profile') return 'Profile';
    return 'NextSkill AI';
  };

  return (
    <div className="hidden lg:flex items-center justify-between px-6 h-16 border-b border-slate-100 bg-white/95 sticky top-0 z-30">
      <h1 className="text-base font-semibold text-slate-900">{getPageTitle()}</h1>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
          <Bell className="w-4.5 h-4.5" />
        </button>
        <div className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">
            {mockUser.avatar}
          </div>
          <span className="text-sm font-medium text-slate-700">{mockUser.name}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
