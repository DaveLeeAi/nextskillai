import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function CtaBanner() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-16 md:px-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-800 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-blue-100 mb-6">
              <Zap className="w-3.5 h-3.5" />
              Start for free — no credit card needed
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              Ready to accelerate your AI career?
            </h2>

            <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
              Join 50,000+ learners building the skills that matter. Start your first lesson in under two minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
