'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data/homepage';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-slate-900 hover:text-brand-600 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[1.05rem] tracking-tight">
              NextSkill <span className="text-brand-600">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4 pt-1 flex flex-col gap-2 border-t border-slate-100 mt-1">
            <Link
              href="/signin"
              className="block w-full text-center px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
