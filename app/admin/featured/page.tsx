'use client';

import { useState } from 'react';
import {
  GripVertical,
  Eye,
  EyeOff,
  BookOpen,
  Star,
  TrendingUp,
  MessageSquare,
} from 'lucide-react';
import { AdminPageHeader, AdminSectionCard, AdminToggle, AdminCard } from '@/components/admin/AdminComponents';
import { adminPaths } from '@/lib/data/admin';
import { cn } from '@/lib/utils';

interface FeaturedSlot {
  id: string;
  pathId: string;
  visible: boolean;
  order: number;
}

const initialFeatured: FeaturedSlot[] = [
  { id: 'f1', pathId: 'chatgpt-beginner-path', visible: true, order: 1 },
  { id: 'f2', pathId: 'everyday-ai-basics', visible: true, order: 2 },
  { id: 'f3', pathId: 'start-using-ai', visible: false, order: 3 },
];

const beginnerPicks = ['chatgpt-beginner-path', 'start-using-ai'];
const trending = ['chatgpt-beginner-path', 'everyday-ai-basics'];

interface ToggleItem {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const homepageToggles: ToggleItem[] = [
  { id: 't1', label: 'Show hero section', description: 'Display the main hero on the homepage', enabled: true },
  { id: 't2', label: 'Show featured paths', description: 'Display the featured paths section', enabled: true },
  { id: 't3', label: 'Show testimonials', description: 'Show learner review quotes', enabled: true },
  { id: 't4', label: 'Show social proof bar', description: 'Show the trusted logos strip', enabled: true },
  { id: 't5', label: 'Show how it works', description: 'Display the 3-step explainer', enabled: false },
  { id: 't6', label: 'Show platform features', description: 'Display feature grid', enabled: true },
];

export default function AdminFeaturedPage() {
  const [featuredSlots, setFeaturedSlots] = useState(initialFeatured);
  const [toggles, setToggles] = useState(homepageToggles);
  const [saved, setSaved] = useState(false);

  const toggleSlot = (id: string) => {
    setFeaturedSlots((prev) => prev.map((s) => s.id === id ? { ...s, visible: !s.visible } : s));
  };

  const handleToggle = (id: string, val: boolean) => {
    setToggles((prev) => prev.map((t) => t.id === id ? { ...t, enabled: val } : t));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <AdminPageHeader
        title="Featured Content"
        description="Control what appears on the homepage and in recommendations"
        actions={
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
          >
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        }
      />

      <AdminSectionCard
        title="Featured Paths (Homepage)"
        description="These paths appear in the featured section on the homepage"
      >
        <div className="space-y-2">
          {featuredSlots.map((slot, i) => {
            const path = adminPaths.find((p) => p.id === slot.pathId);
            if (!path) return null;
            return (
              <div
                key={slot.id}
                className={cn(
                  'flex items-center gap-3 p-3.5 border rounded-xl transition-all',
                  slot.visible ? 'border-slate-200 bg-white' : 'border-slate-100 bg-slate-50 opacity-60'
                )}
              >
                <GripVertical className="w-4 h-4 text-slate-300 cursor-grab shrink-0" />
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">{i + 1}</div>
                <div className={cn('w-7 h-7 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0', path.color)}>
                  <BookOpen className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800">{path.title}</p>
                  <p className="text-xs text-slate-400">{path.difficulty} · {path.lessonCount} lessons</p>
                </div>
                <button
                  onClick={() => toggleSlot(slot.id)}
                  className={cn('p-1.5 rounded-lg transition-colors', slot.visible ? 'text-teal-600 hover:bg-teal-50' : 'text-slate-400 hover:bg-slate-100')}
                  title={slot.visible ? 'Hide' : 'Show'}
                >
                  {slot.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>
      </AdminSectionCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AdminSectionCard title="Beginner Picks" description="Shown in recommendations for new users">
          <div className="space-y-2">
            {adminPaths.filter((p) => p.status === 'published').map((path) => (
              <div key={path.id} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
                <div className={cn('w-6 h-6 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0', path.color)}>
                  <BookOpen className="w-3 h-3 text-white" strokeWidth={2} />
                </div>
                <p className="text-xs font-medium text-slate-700 flex-1 truncate">{path.title}</p>
                <input
                  type="checkbox"
                  defaultChecked={beginnerPicks.includes(path.id)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
              </div>
            ))}
          </div>
        </AdminSectionCard>

        <AdminSectionCard title="Trending" description="Displayed with trending badge on paths page">
          <div className="space-y-2">
            {adminPaths.filter((p) => p.status === 'published').map((path) => (
              <div key={path.id} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
                <TrendingUp className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <p className="text-xs font-medium text-slate-700 flex-1 truncate">{path.title}</p>
                <input
                  type="checkbox"
                  defaultChecked={trending.includes(path.id)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
              </div>
            ))}
          </div>
        </AdminSectionCard>
      </div>

      <AdminSectionCard
        title="Homepage Sections"
        description="Toggle visibility of each homepage section"
      >
        <div className="divide-y divide-slate-100">
          {toggles.map((t) => (
            <AdminToggle
              key={t.id}
              label={t.label}
              description={t.description}
              checked={t.enabled}
              onChange={(val) => handleToggle(t.id, val)}
            />
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Testimonial Slots" description="Featured quotes shown on the homepage">
        <div className="space-y-2.5">
          {[
            { name: 'Sarah M.', role: 'Marketing Manager', quote: 'I went from being completely confused about AI...', visible: true },
            { name: 'James T.', role: 'Freelancer', quote: 'The lessons are short enough to do during lunch...', visible: true },
            { name: 'Tom W.', role: 'Retired Teacher', quote: 'I am 63 years old and this actually made sense...', visible: true },
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 border border-slate-100 rounded-xl bg-white">
              <GripVertical className="w-4 h-4 text-slate-300 cursor-grab shrink-0 mt-0.5" />
              <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600 shrink-0 mt-0.5">
                {t.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-slate-700">{t.name}</p>
                  <span className="text-2xs text-slate-400">·</span>
                  <p className="text-2xs text-slate-400">{t.role}</p>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 truncate">{t.quote}</p>
              </div>
              <Eye className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            </div>
          ))}
        </div>
      </AdminSectionCard>
    </div>
  );
}
