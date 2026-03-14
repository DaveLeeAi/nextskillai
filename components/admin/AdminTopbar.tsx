'use client';

import { Bell, Search, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AdminTopbarProps {
  onMenuOpen: () => void;
  title?: string;
}

export function AdminTopbar({ onMenuOpen, title }: AdminTopbarProps) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-14 bg-white border-b border-slate-100 flex items-center gap-3 px-4 lg:px-6 shrink-0">
      <button
        onClick={onMenuOpen}
        className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
      >
        <Menu className="w-4.5 h-4.5" />
      </button>

      {title && (
        <h1 className="text-sm font-semibold text-slate-800 hidden lg:block">{title}</h1>
      )}

      <div className="flex-1 max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search content, users..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfile((v) => !v)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              A
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-slate-800 leading-tight">Admin</p>
              <p className="text-2xs text-slate-400 leading-tight">admin@nextskill.ai</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-xl border border-slate-200 shadow-lg py-1.5 z-50">
              {['Profile', 'Settings', 'Sign out'].map((item) => (
                <button
                  key={item}
                  onClick={() => setShowProfile(false)}
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
