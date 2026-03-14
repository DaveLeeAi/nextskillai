import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle2, Sparkles, TrendingUp, BookOpen, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const trustPoints = [
  'No experience needed',
  'Free to start',
  '10 min a day',
];

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 lg:gap-12 items-center">

          <div className="max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700 mb-5">
              <Sparkles className="w-3 h-3" />
              Built for complete beginners
            </div>

            <h1 className="text-4xl sm:text-[2.8rem] lg:text-[2.9rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
              Learn AI one simple{' '}
              <span className="brand-gradient-text">step at a time</span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-7 max-w-md">
              Plain-English lessons for everyday people — not tech experts.
              Build practical AI skills in just 10 minutes a day, no background needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-colors"
              >
                Start Learning Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/paths"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Browse learning paths
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <HeroDashboardMock />
          </div>
        </div>

        <div className="lg:hidden mt-8">
          <HeroDashboardMockMobile />
        </div>
      </Container>
    </section>
  );
}

function HeroDashboardMock() {
  return (
    <div className="relative pt-8 pb-8 pl-3 pr-5">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 to-teal-50/30 rounded-3xl blur-2xl" />

      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-card-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Currently learning</p>
            <p className="text-sm font-semibold text-slate-900 mt-0.5">First Steps with AI · Lesson 4 of 6</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full whitespace-nowrap">
            <Zap className="w-3 h-3" />
            4-day streak
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>Path progress</span>
            <span className="font-semibold text-slate-700">68%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-brand-500 to-teal-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: BookOpen,     label: 'Lessons done', value: '4 / 6'  },
            { icon: CheckCircle2, label: 'Activities',   value: '4 / 6'  },
            { icon: TrendingUp,   label: 'Streak',       value: '4 days' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl text-center">
              <Icon className="w-4 h-4 text-brand-500 mb-1.5" />
              <p className="text-xs font-bold text-slate-900">{value}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -top-3 -right-3 bg-white rounded-2xl border border-slate-200 shadow-card-md p-3.5 w-44">
        <div className="flex items-start gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 flex-shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 leading-tight">Quick tip</p>
            <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
              Ask ChatGPT to explain it simply — it works really well!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl border border-slate-200 shadow-card-md p-3.5 w-44">
        <p className="text-[11px] font-semibold text-slate-700 mb-2.5">Skills growing</p>
        <div className="space-y-2">
          {[
            { label: 'Writing emails', pct: 82 },
            { label: 'Using ChatGPT',  pct: 74 },
            { label: 'Daily planning', pct: 61 },
          ].map(({ label, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                <span>{label}</span><span>{pct}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroDashboardMockMobile() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card-md p-5 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[11px] text-slate-400 font-medium">Currently learning</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">First Steps with AI · Lesson 4</p>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
          <Zap className="w-3 h-3" />
          On a roll!
        </span>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Progress</span><span className="font-semibold text-slate-700">68%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[68%] bg-gradient-to-r from-brand-500 to-teal-500 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-5 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <BookOpen className="w-3.5 h-3.5 text-brand-500" />
          4 of 6 lessons
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <TrendingUp className="w-3.5 h-3.5 text-teal-500" />
          4-day streak
        </div>
      </div>
    </div>
  );
}
