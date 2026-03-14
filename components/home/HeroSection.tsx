import Link from 'next/link';
import { ArrowRight, Play, CircleCheck as CheckCircle2, Sparkles, TrendingUp, BookOpen, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const heroTrustPoints = [
  'No experience needed',
  'Free to start — no credit card',
  'Just 10 minutes a day',
];

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Built for complete beginners
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Learn AI without{' '}
              <span className="brand-gradient-text">feeling lost</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Simple, plain-English lessons for everyday people — not tech experts.
              Start using AI in real life in just 10 minutes a day, no experience needed.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-colors"
              >
                Start Learning Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/paths"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Play className="w-4 h-4 text-slate-400" />
                See learning paths
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {heroTrustPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-6">
            <HeroDashboardMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroDashboardMock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100/30 to-teal-50/40 rounded-3xl blur-2xl" />

      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-card-lg p-5 space-y-3">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-slate-400 font-medium">Currently Learning</p>
            <p className="text-sm font-semibold text-slate-900 mt-0.5">First Steps with AI · Day 4</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            On a roll!
          </span>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>Path Progress</span>
            <span className="font-semibold text-slate-700">68%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-brand-500 to-brand-600 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { icon: BookOpen, label: 'Lessons', value: '4/6' },
            { icon: CheckCircle2, label: 'Activities', value: '4/6' },
            { icon: TrendingUp, label: 'Streak', value: '4 days' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center p-3 bg-slate-50 rounded-xl">
              <Icon className="w-4 h-4 text-brand-500 mb-1.5" />
              <p className="text-xs font-bold text-slate-900">{value}</p>
              <p className="text-2xs text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-white rounded-2xl border border-slate-200 shadow-card-md p-4 w-52">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 flex-shrink-0">
            <Sparkles className="w-4 h-4 text-brand-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 leading-tight">Quick tip</p>
            <p className="text-2xs text-slate-400 mt-0.5 leading-relaxed">
              Try asking ChatGPT to explain something in simple terms. It works great!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl border border-slate-200 shadow-card-md p-4 w-52">
        <p className="text-xs font-semibold text-slate-700 mb-2">Skills Growing</p>
        <div className="space-y-1.5">
          {[
            { label: 'Writing Emails',  pct: 82 },
            { label: 'Using ChatGPT',   pct: 74 },
            { label: 'Daily Planning',  pct: 61 },
          ].map(({ label, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-2xs text-slate-400 mb-0.5">
                <span>{label}</span><span>{pct}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
