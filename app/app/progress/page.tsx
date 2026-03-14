import Link from 'next/link';
import {
  Flame,
  CircleCheck as CheckCircle2,
  Award,
  ArrowRight,
  Star,
  MessageCircle,
  Target,
  Trophy,
  TrendingUp,
  Calendar,
  Zap,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/app/ProgressBar';
import { StatCard } from '@/components/app/StatCard';
import { mockUser, enrolledPaths, milestones, weeklyActivity } from '@/lib/data/learner';
import { recentLessons } from '@/lib/data/lessons';

const milestoneIcons: Record<string, React.ElementType> = {
  Star, MessageCircle, Flame, Target, Award, Trophy,
};

const quizzesCompleted = 2;
const maxMinutes = Math.max(...weeklyActivity.map((d) => d.minutes), 1);

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Your Progress</h1>
        <p className="text-slate-500 mt-1">Everything you have accomplished so far.</p>
      </div>

      <div className="bg-gradient-to-br from-brand-600 to-teal-600 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-0.5">You are making real progress</h2>
            <p className="text-white/75 text-sm leading-relaxed">
              {mockUser.totalLessons} lessons complete across {mockUser.totalPaths} paths. Most learners see real results within 2 weeks. Keep going.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Lessons done', value: mockUser.totalLessons },
            { label: 'Check-ins done', value: quizzesCompleted },
            { label: 'Day streak', value: `${mockUser.streak}d` },
            { label: 'Mins this week', value: mockUser.weeklyMinutes },
          ].map((s) => (
            <div key={s.label} className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/65 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Lessons complete" value={mockUser.totalLessons} icon={CheckCircle2} iconColor="text-teal-600" iconBg="bg-teal-50" />
        <StatCard label="Check-ins done" value={quizzesCompleted} icon={Zap} iconColor="text-brand-600" iconBg="bg-brand-50" />
        <StatCard label="Day streak" value={mockUser.streak} icon={Flame} iconColor="text-amber-500" iconBg="bg-amber-50" />
        <StatCard label="Milestones earned" value={milestones.filter((m) => m.earned).length} icon={Award} iconColor="text-amber-600" iconBg="bg-amber-50" />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-3">Weekly Activity</h2>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5">
          <div className="flex items-end gap-2 h-24 mb-2">
            {weeklyActivity.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end justify-center" style={{ height: '72px' }}>
                  <div
                    className={cn(
                      'w-full rounded-t-lg transition-all duration-500',
                      day.minutes > 0 ? 'bg-brand-500' : 'bg-slate-100'
                    )}
                    style={{ height: `${Math.max(Math.round((day.minutes / maxMinutes) * 72), day.minutes > 0 ? 6 : 4)}px` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <p className="text-sm text-slate-500">{mockUser.weeklyMinutes} min this week</p>
            <p className="text-sm text-slate-500">Goal: {mockUser.weeklyGoal} min</p>
          </div>
          <ProgressBar value={mockUser.weeklyMinutes} max={mockUser.weeklyGoal} color="brand" className="mt-2" />
          <p className="text-xs text-slate-400 mt-2">
            {mockUser.weeklyMinutes >= mockUser.weeklyGoal
              ? 'Weekly goal reached!'
              : `${mockUser.weeklyGoal - mockUser.weeklyMinutes} more minutes to hit your weekly goal`}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-1">Paths in Progress</h2>
        <p className="text-sm text-slate-500 mb-3">Keep pushing — every lesson counts.</p>
        <div className="space-y-4">
          {enrolledPaths.map((path) => {
            const pct = Math.round((path.completedLessons / path.totalLessons) * 100);
            return (
              <div key={path.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-sm">{path.title}</h3>
                  <span className="text-sm font-bold text-brand-600">{pct}%</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{path.level} · {path.estimatedTime}</p>
                <ProgressBar value={path.completedLessons} max={path.totalLessons} />
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-xs text-slate-400">{path.completedLessons} of {path.totalLessons} lessons done</span>
                  <Link href={`/app/path/${path.slug}`} className="text-xs text-brand-600 font-medium hover:text-brand-700 flex items-center gap-0.5">
                    View <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-1">Recent Lessons</h2>
        <p className="text-sm text-slate-500 mb-3">Your last few completed lessons</p>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card divide-y divide-slate-100">
          {recentLessons.map((lesson) => (
            <div key={lesson.id} className="flex items-center gap-3 px-5 py-3.5">
              <div className="w-7 h-7 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800">{lesson.title}</p>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                  <span>{lesson.pathTitle}</span>
                  <span>·</span>
                  <Clock className="w-3 h-3" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
              <span className="text-xs text-slate-400 shrink-0">{lesson.completedAt}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 mb-1">Milestones</h2>
        <p className="text-sm text-slate-500 mb-3">Small wins that add up to something real.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {milestones.map((milestone) => {
            const Icon = milestoneIcons[milestone.icon] ?? Star;
            return (
              <div
                key={milestone.id}
                className={cn(
                  'rounded-2xl border p-4',
                  milestone.earned ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200 opacity-50'
                )}
              >
                <div className={cn('w-8 h-8 rounded-xl flex items-center justify-center mb-2.5', milestone.earned ? 'bg-amber-100' : 'bg-slate-100')}>
                  <Icon className={cn('w-4 h-4', milestone.earned ? 'text-amber-500' : 'text-slate-400')} strokeWidth={2} />
                </div>
                <p className={cn('text-sm font-semibold leading-tight', milestone.earned ? 'text-amber-800' : 'text-slate-500')}>
                  {milestone.title}
                </p>
                <p className={cn('text-xs mt-0.5 leading-tight', milestone.earned ? 'text-amber-600' : 'text-slate-400')}>
                  {milestone.description}
                </p>
                {milestone.earned && (
                  <span className="inline-flex items-center gap-1 mt-2 text-2xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} /> Earned
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-brand-50 rounded-2xl border border-teal-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-teal-500 flex items-center justify-center shrink-0">
          <Calendar className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">Keep your {mockUser.streak}-day streak going</h3>
          <p className="text-sm text-slate-600 mt-0.5">
            One short lesson today keeps the momentum. Next up: <span className="font-medium">How to Ask Better Questions</span> — just 8 minutes.
          </p>
        </div>
        <Link
          href="/app/lesson/how-to-ask-better-questions"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm shrink-0"
        >
          Learn Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
