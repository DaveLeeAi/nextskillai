'use client';

import { useState } from 'react';
import { User, Bell, Target, CreditCard, Award, CircleCheck as CheckCircle2, ChevronRight, Zap, Flame, BookOpen, Mail, Calendar, CreditCard as Edit2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockUser, milestones } from '@/lib/data/learner';

const interests = [
  { id: 'writing', label: 'Writing & Emails' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'work', label: 'Work Tasks' },
  { id: 'everyday', label: 'Everyday Life' },
  { id: 'research', label: 'Research' },
  { id: 'creativity', label: 'Creativity' },
];

const goals = [
  { id: 'save-time', label: 'Save time at work' },
  { id: 'confidence', label: 'Feel confident with AI' },
  { id: 'stay-current', label: 'Stay current with tech' },
  { id: 'get-better', label: 'Get better at my job' },
];

export default function ProfilePage() {
  const [activeInterests, setActiveInterests] = useState(['writing', 'productivity', 'work']);
  const [activeGoals, setActiveGoals] = useState(['save-time', 'confidence']);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [streakReminders, setStreakReminders] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  const toggle = (id: string, set: React.Dispatch<React.SetStateAction<string[]>>, list: string[]) => {
    set(list.includes(id) ? list.filter((i) => i !== id) : [...list, id]);
  };

  const earnedMilestones = milestones.filter((m) => m.earned);

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
        <p className="text-slate-500 mt-1">Manage your account and learning preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
            {mockUser.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{mockUser.name}</h2>
                <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                  {mockUser.email}
                </p>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                Member since {mockUser.joinDate}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
                <Flame className="w-3.5 h-3.5" />
                {mockUser.streak}-day streak
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
            <span className="text-sm font-semibold text-slate-900">Subscription</span>
          </div>
        </div>
        <div className="px-5 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-xs font-semibold">
                <Zap className="w-3 h-3" strokeWidth={2.5} />
                {mockUser.plan}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">Full access to all paths, lessons, and guides</p>
          </div>
          <button className="text-sm text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1">
            Manage
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <Target className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
          <span className="text-sm font-semibold text-slate-900">My Goals</span>
        </div>
        <div className="px-5 py-4 space-y-3">
          <p className="text-xs text-slate-500">What do you most want to get from learning AI?</p>
          <div className="flex flex-wrap gap-2">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => toggle(goal.id, setActiveGoals, activeGoals)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-medium border transition-all',
                  activeGoals.includes(goal.id)
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                )}
              >
                {goal.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <BookOpen className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
          <span className="text-sm font-semibold text-slate-900">Learning Interests</span>
        </div>
        <div className="px-5 py-4 space-y-3">
          <p className="text-xs text-slate-500">Select topics you want to focus on.</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => toggle(interest.id, setActiveInterests, activeInterests)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-medium border transition-all',
                  activeInterests.includes(interest.id)
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-600'
                )}
              >
                {interest.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <Bell className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
          <span className="text-sm font-semibold text-slate-900">Notifications</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { label: 'Daily lesson reminders', desc: 'Get reminded to keep your streak going', value: streakReminders, setter: setStreakReminders },
            { label: 'Email updates', desc: 'New paths, features, and learning tips', value: emailNotifs, setter: setEmailNotifs },
            { label: 'Weekly progress digest', desc: 'A summary of your week every Sunday', value: weeklyDigest, setter: setWeeklyDigest },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
              <button
                onClick={() => item.setter(!item.value)}
                className={cn(
                  'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200',
                  item.value ? 'bg-brand-600' : 'bg-slate-200'
                )}
              >
                <span
                  className={cn(
                    'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-lg transform transition-transform duration-200',
                    item.value ? 'translate-x-4' : 'translate-x-0'
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <Award className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
          <span className="text-sm font-semibold text-slate-900">Achievements</span>
        </div>
        <div className="px-5 py-4">
          {earnedMilestones.length === 0 ? (
            <p className="text-sm text-slate-500">Complete lessons and paths to earn your first achievement.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {earnedMilestones.map((m) => (
                <div key={m.id} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 border border-amber-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" strokeWidth={2.5} />
                  <span className="text-xs font-medium text-amber-800">{m.title}</span>
                </div>
              ))}
            </div>
          )}
          <p className="text-xs text-slate-400 mt-3">Certificates and full achievement history coming soon.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <User className="w-4.5 h-4.5 text-slate-500" strokeWidth={2} />
          <span className="text-sm font-semibold text-slate-900">Account</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { label: 'Change password', icon: ChevronRight },
            { label: 'Download my data', icon: ChevronRight },
            { label: 'Delete account', icon: ChevronRight, danger: true },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                'flex items-center justify-between w-full px-5 py-3.5 text-sm transition-colors hover:bg-slate-50',
                item.danger ? 'text-red-600' : 'text-slate-700'
              )}
            >
              {item.label}
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
