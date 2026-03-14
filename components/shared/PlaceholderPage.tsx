import Link from 'next/link';
import { ArrowRight, Construction } from 'lucide-react';
import { Container } from '@/components/layout/Container';

interface PlaceholderPageProps {
  title: string;
  description: string;
  badge?: string;
}

export function PlaceholderPage({ title, description, badge }: PlaceholderPageProps) {
  return (
    <section className="pt-32 pb-24 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 mb-6">
            <Construction className="w-6 h-6 text-brand-600" />
          </div>

          {badge && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-full uppercase tracking-widest mb-4">
              {badge}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
