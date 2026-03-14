import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function CtaBanner() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-14 md:px-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-800 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-14 -left-14 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

          <div className="relative max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-blue-100 mb-5">
              <Zap className="w-3 h-3" />
              Free to start — no credit card needed
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 text-balance">
              Ready to stop feeling left behind on AI?
            </h2>

            <p className="text-base text-blue-100 mb-7 leading-relaxed">
              Join 28,000+ everyday people learning AI one simple step at a time.
              Your first 5 lessons are completely free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm transition-colors"
              >
                Start for Free Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/paths"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-colors"
              >
                Browse Learning Paths
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
