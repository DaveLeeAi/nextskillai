'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, ArrowRight, Eye, EyeOff, ArrowLeft, MailCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

type View = 'signin' | 'forgot' | 'sent';

export default function SignInPage() {
  const router = useRouter();
  const [view, setView] = useState<View>('signin');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError('Incorrect email or password. Please try again.');
      setLoading(false);
      return;
    }

    router.push('/app');
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    setResetLoading(true);

    const { error: resetErr } = await supabase.auth.resetPasswordForEmail(resetEmail.trim(), {
      redirectTo: `${window.location.origin}/signin`,
    });

    setResetLoading(false);

    if (resetErr) {
      setResetError('Something went wrong. Please try again.');
      return;
    }

    setView('sent');
  };

  const switchToForgot = () => {
    setResetEmail(email);
    setResetError('');
    setView('forgot');
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
          New here?{' '}
          <Link href="/get-started" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            Create a free account
          </Link>
        </span>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {view === 'signin' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="text-center mb-7">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome back</h1>
                <p className="text-sm text-slate-500">Sign in to continue your learning journey</p>
              </div>

              {error && (
                <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={switchToForgot}
                      className="text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Your password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 pr-11 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
                  {loading ? 'Signing in...' : (
                    <>
                      Sign in to my account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-slate-400">
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-slate-600 hover:underline">Terms</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-slate-600 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          )}

          {view === 'forgot' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <button
                onClick={() => setView('signin')}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </button>

              <div className="mb-7">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Reset your password</h1>
                <p className="text-sm text-slate-500">
                  Enter your email and we will send you a link to reset your password.
                </p>
              </div>

              {resetError && (
                <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  {resetError}
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    value={resetEmail}
                    onChange={e => setResetEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  {resetLoading ? 'Sending...' : (
                    <>
                      Send reset link
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {view === 'sent' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <MailCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Check your inbox</h1>
              <p className="text-sm text-slate-500 mb-1">
                We sent a password reset link to
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-6">{resetEmail}</p>
              <p className="text-xs text-slate-400 mb-6">
                Did not receive it? Check your spam folder, or{' '}
                <button
                  onClick={() => setView('forgot')}
                  className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
                >
                  try again
                </button>
                .
              </p>
              <button
                onClick={() => setView('signin')}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </button>
            </div>
          )}

          <p className="text-center mt-6 text-sm text-slate-500">
            Do not have an account?{' '}
            <Link href="/get-started" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              Start for free — no card needed
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
