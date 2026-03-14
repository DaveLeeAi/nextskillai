import Link from 'next/link';
import { Flame, BookOpen, CircleCheck as CheckCircle, Award, ArrowRight, Sparkles, Clock, Target, Heart, PenLine, Zap, MessageCircle } from 'lucide-react';
import { ProgressBar } from '@/components/app/ProgressBar';
import { StatCard } from '@/components/app/StatCard';
import { EnrolledPathCard } from '@/components/app/EnrolledPathCard';
import {
  mockUser,
  enrolledPaths,
  recentActivity,
  recommendedGuides,
} from '@/lib/data/learner';

const iconMap: Record<string, React.ElementType> = {
  CheckCircle,
  Award,
  Flame,
  Heart,
  PenLine,
  Zap,
  MessageCircle,
  Sparkles,
  BookOpen,
};

const guideIconMap: Record<string, React.ElementType> = {
  Heart,
  PenLine,
  Zap,
};

export default function AppDashboardPage() {
  const primaryPath = enrolledPaths[0];
  const weeklyPct = Math.round((mockUser.weeklyMinutes / mockUser.weeklyGoal) * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">
            Welcome back, {mockUser.name}
          </h1>
          <p className="text-slate-500 mt-1">
            You are on a {mockUser.streak}-day streak. Keep the momentum going.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-100">
          <Flame className="w-5 h-5 text-amber-500" strokeWidth={2.5} />
          <div>
            <p className="text-sm font-bold text-amber-700 leading-none">{mockUser.streak} days</p>
            <p className="text-2xs text-amber-500">current streak</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard
          label="Lessons done"
          value={mockUser.totalLessons}
          icon={CheckCircle}
          iconColor="text-teal-600"
          iconBg="bg-teal-50"
        />
        <StatCard
          label="Paths started"
          value={mockUser.totalPaths}
          icon={BookOpen}
          iconColor="text-brand-600"
          iconBg="bg-brand-50"
        />
        <StatCard
          label="Day streak"
          value={mockUser.streak}
          icon={Flame}
          iconColor="text-amber-500"
          iconBg="bg-amber-50"
        />
        <StatCard
          label="Mins this week"
          value={mockUser.weeklyMinutes}
          icon={Clock}
          iconColor="text-slate-500"
          iconBg="bg-slate-100"
          note={`Goal: ${mockUser.weeklyGoal} min`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-slate-900">Continue Learning</h2>
            <Link href="/app/my-learning" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
              See all
            </Link>
          </div>
          <EnrolledPathCard path={primaryPath} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 mb-3">Today&apos;s Focus</h2>
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-5 text-white h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Daily Lesson</span>
            </div>
            <h3 className="font-semibold text-white mb-1.5 leading-tight">
              How to Ask Better Questions
            </h3>
            <p className="text-sm text-white/75 mb-4 flex-1">
              Get better answers from AI by changing how you ask. Takes just 8 minutes.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/70 mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>8 min · Lesson 6 of 12</span>
            </div>
            <Link
              href="/app/lesson/how-to-ask-better-questions"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-brand-700 text-sm font-semibold hover:bg-brand-50 transition-colors"
            >
              Start Lesson
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-slate-900">Weekly Goal</h2>
          <span className="text-sm text-slate-500">{mockUser.weeklyMinutes} / {mockUser.weeklyGoal} min</span>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
          <ProgressBar value={mockUser.weeklyMinutes} max={mockUser.weeklyGoal} color="teal" />
          <p className="text-sm text-slate-500 mt-3">
            {weeklyPct >= 100
              ? "You hit your weekly goal! Amazing work."
              : `You are ${Math.round(((mockUser.weeklyGoal - mockUser.weeklyMinutes) / mockUser.weeklyGoal) * 100)}% away from your weekly goal. One short lesson will get you there.`
            }
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-slate-900">Recent Activity</h2>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card divide-y divide-slate-100">
          {recentActivity.map((item) => {
            const Icon = iconMap[item.icon] ?? CheckCircle;
            return (
              <div key={item.id} className="flex items-start gap-3 px-5 py-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  item.type === 'milestone' ? 'bg-amber-50' :
                  item.type === 'streak' ? 'bg-orange-50' :
                  'bg-teal-50'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    item.type === 'milestone' ? 'text-amber-500' :
                    item.type === 'streak' ? 'text-orange-500' :
                    'text-teal-600'
                  }`} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{item.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-slate-900">Recommended for You</h2>
          <Link href="/app/my-learning" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
            Browse all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommendedGuides.map((guide) => {
            const Icon = guideIconMap[guide.icon] ?? Sparkles;
            return (
              <Link
                key={guide.id}
                href={`/app/path/${guide.slug}`}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card hover:shadow-card-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${guide.color}`}>
                  <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors leading-tight">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{guide.description}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{guide.level}</span>
                  <span>·</span>
                  <span>{guide.duration}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-brand-50 rounded-2xl border border-teal-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-teal-500 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">You are doing great!</h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Most learners see real results after just 2 weeks. You are already {Math.round((14 / 12) * 100)}% of the way through your first path.
          </p>
        </div>
        <Link
          href={`/app/lesson/how-to-ask-better-questions`}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm shrink-0"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
