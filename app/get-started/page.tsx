import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowRight, CircleCheck as CheckCircle, BookOpen, Clock, Star, Eye, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started Free — NextSkill AI',
  description: 'Create your free NextSkill AI account and start learning AI today. No credit card required.',
};

const benefits = [
  {
    icon: BookOpen,
    title: 'Start with 5 free lessons',
    description: 'No credit card needed. Just create an account and start learning right away.',
  },
  {
    icon: Clock,
    title: 'Just 10 minutes a day',
    description: 'Short lessons designed to fit into your real life — no big time commitment required.',
  },
  {
    icon: CheckCircle,
    title: 'Track your progress',
    description: "See exactly how far you have come and feel good about every lesson you complete.",
  },
  {
    icon: Star,
    title: 'No experience needed',
    description: "We start from scratch. You do not need to know anything about AI to get started.",
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-900">NextSkill AI</span>
        </Link>
        <span className="text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/signin" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            Sign in
          </Link>
        </span>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-start">

          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-4">
                <CheckCircle className="w-3.5 h-3.5" />
                Free forever plan — no credit card
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
                Start learning AI today
              </h1>
              <p className="text-slate-500 leading-relaxed">
                Join 28,000+ everyday people who are building real AI skills with NextSkill AI.
                No experience needed — we start at the very beginning.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map(benefit => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-0.5">{benefit.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {['DH', 'MW', 'PS', 'JO'].map(initials => (
                    <div key={initials} className="w-8 h-8 rounded-full bg-brand-100 border-2 border-white flex items-center justify-center text-xs font-bold text-brand-700">
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;I was scared to try AI. But after the first lesson I felt completely at ease. Now I use it every day.&rdquo;
              </p>
              <p className="text-xs text-slate-400 mt-1.5">— Diane H., Office Administrator</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Create your free account</h2>
              <p className="text-sm text-slate-500">Takes less than 60 seconds</p>
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign up with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-900 rounded-xl text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                <Github className="w-4 h-4" />
                Sign up with GitHub
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-400">or use your email</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Sarah"
                    className="w-full px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Johnson"
                    className="w-full px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Create a password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="At least 8 characters"
                    className="w-full px-3.5 py-3 pr-11 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                Create my free account
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                Free plan, no credit card needed
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                Cancel or change your plan any time
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                Your progress is saved automatically
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              By signing up, you agree to our{' '}
              <Link href="#" className="text-slate-600 hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="#" className="text-slate-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
