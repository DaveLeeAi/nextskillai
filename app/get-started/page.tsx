'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, ArrowRight, CircleCheck as CheckCircle, BookOpen, Clock, Star, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

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
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim()) { setError('Please enter your first name.'); return; }
    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }

    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          full_name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    router.push('/app');
  };

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

            {error && (
              <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Sarah"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
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
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-3.5 py-3 pr-11 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                {loading ? 'Creating account...' : (
                  <>
                    Create my free account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
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
              <Link href="/terms" className="text-slate-600 hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-slate-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
