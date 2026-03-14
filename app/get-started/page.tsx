import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowRight, CircleCheck as CheckCircle2, Github, Star, Sparkles, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started Free — NextSkill AI',
  description: 'Create your free NextSkill AI account and start building practical AI skills today.',
};

const benefits = [
  {
    icon: Sparkles,
    title: 'Start learning immediately',
    description: 'Get instant access to 3 full courses and 1 learning path the moment you sign up.',
  },
  {
    icon: Star,
    title: 'Personal AI study assistant',
    description: 'Your own AI tutor that answers questions, explains concepts, and keeps you on track.',
  },
  {
    icon: Award,
    title: 'Earn real certificates',
    description: 'Shareable completion certificates you can post to LinkedIn and include in applications.',
  },
  {
    icon: Users,
    title: 'Join a community of 50,000+',
    description: 'Connect with other learners, share progress, and get support when you need it.',
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 font-bold text-white">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[1.05rem] tracking-tight">
            NextSkill <span className="text-brand-400">AI</span>
          </span>
        </Link>
        <Link href="/signin" className="text-sm text-slate-400 hover:text-white transition-colors">
          Already a member?{' '}
          <span className="font-semibold text-brand-400 hover:text-brand-300">Sign in</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 py-12">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-start">
          <div className="py-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Free to start — no credit card
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Build AI skills that
              <br />
              <span className="brand-gradient bg-clip-text text-transparent">actually get used</span>
            </h1>
            <p className="text-slate-400 leading-relaxed mb-10 text-base">
              Join 50,000+ professionals who have used NextSkill AI to work smarter, move faster, and stay relevant in the AI era.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{benefit.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=60',
                  'https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=60',
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60',
                  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=60',
                ].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Trusted by 50,000+ learners worldwide</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-2">Create your free account</h2>
            <p className="text-sm text-slate-500 mb-6">Takes less than 60 seconds to get started.</p>

            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-medium text-sm transition-colors border border-slate-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                Sign up with GitHub
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-xs text-slate-600">or sign up with email</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">First name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Last name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Work email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25 mt-1"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-800 space-y-2">
              {[
                'No credit card required',
                'Free plan never expires',
                'Upgrade or cancel any time',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-slate-600 mt-4 leading-relaxed">
              By signing up you agree to our{' '}
              <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>{' '}
              and{' '}
              <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
