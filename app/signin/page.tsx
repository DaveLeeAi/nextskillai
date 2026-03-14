import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowRight, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign In — NextSkill AI',
  description: 'Sign in to your NextSkill AI account and continue your AI learning journey.',
};

export default function SignInPage() {
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
        <Link href="/get-started" className="text-sm text-slate-400 hover:text-white transition-colors">
          No account?{' '}
          <span className="font-semibold text-brand-400 hover:text-brand-300">Sign up free</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white tracking-tight mb-1">Welcome back</h1>
            <p className="text-sm text-slate-500">Sign in to continue your learning journey</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
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
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                Continue with GitHub
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-xs text-slate-600">or sign in with email</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-slate-300">Password</label>
                  <Link href="#" className="text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                />
              </div>

              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-brand-600 focus:ring-brand-500 focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer select-none">
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25 mt-1"
              >
                Sign In
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-xs text-center text-slate-600 mt-5 leading-relaxed">
            By signing in you agree to our{' '}
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>{' '}
            and{' '}
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
