'use client';

import { useState } from 'react';
import { AdminPageHeader, AdminSectionCard, AdminToggle } from '@/components/admin/AdminComponents';

interface ToggleSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const initialPlatformSettings: ToggleSetting[] = [
  { id: 'ps1', label: 'Enable AI Tutor (placeholder)', description: 'Show the AI Tutor button in lessons', enabled: true },
  { id: 'ps2', label: 'Enable lesson notes', description: 'Allow learners to write notes per lesson', enabled: true },
  { id: 'ps3', label: 'Enable bookmarks', description: 'Allow learners to bookmark lessons', enabled: true },
  { id: 'ps4', label: 'Enable progress streaks', description: 'Track and display daily learning streaks', enabled: true },
  { id: 'ps5', label: 'Show certificates (coming soon)', description: 'Issue certificates on path completion', enabled: false },
];

const initialPricingSettings: ToggleSetting[] = [
  { id: 'pr1', label: 'Show pricing page', description: 'Make pricing publicly visible', enabled: true },
  { id: 'pr2', label: 'Show free tier', description: 'Display free plan on pricing page', enabled: true },
  { id: 'pr3', label: 'Show team plan', description: 'Display team/group pricing', enabled: true },
  { id: 'pr4', label: 'Annual discount badge', description: 'Show "Save X%" on annual plans', enabled: true },
];

export default function AdminSettingsPage() {
  const [platformName, setPlatformName] = useState('NextSkill AI');
  const [platformTagline, setPlatformTagline] = useState('AI skills for everyone. Start here.');
  const [supportEmail, setSupportEmail] = useState('hello@nextskill.ai');
  const [platformSettings, setPlatformSettings] = useState(initialPlatformSettings);
  const [pricingSettings, setPricingSettings] = useState(initialPricingSettings);
  const [saved, setSaved] = useState(false);

  const handlePlatformToggle = (id: string, val: boolean) => {
    setPlatformSettings((prev) => prev.map((s) => s.id === id ? { ...s, enabled: val } : s));
  };

  const handlePricingToggle = (id: string, val: boolean) => {
    setPricingSettings((prev) => prev.map((s) => s.id === id ? { ...s, enabled: val } : s));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <AdminPageHeader
        title="Settings"
        description="Platform-wide configuration and display settings"
        actions={
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
          >
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        }
      />

      <AdminSectionCard title="Branding" description="Basic platform name and identity settings">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Platform Name</label>
            <input
              type="text"
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Tagline</label>
            <input
              type="text"
              value={platformTagline}
              onChange={(e) => setPlatformTagline(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Support Email</label>
            <input
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Platform Features" description="Enable or disable learner-facing features">
        <div className="divide-y divide-slate-100">
          {platformSettings.map((s) => (
            <AdminToggle key={s.id} label={s.label} description={s.description} checked={s.enabled} onChange={(val) => handlePlatformToggle(s.id, val)} />
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Pricing Display" description="Control what is shown on the public pricing page">
        <div className="divide-y divide-slate-100">
          {pricingSettings.map((s) => (
            <AdminToggle key={s.id} label={s.label} description={s.description} checked={s.enabled} onChange={(val) => handlePricingToggle(s.id, val)} />
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Email Notifications" description="Placeholder — not yet connected">
        <div className="space-y-4">
          {['Welcome email', 'Lesson completion email', 'Weekly progress digest', 'Path completion email'].map((label) => (
            <div key={label} className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-medium text-slate-700">{label}</p>
                <p className="text-xs text-slate-400">Template not yet configured</p>
              </div>
              <button className="text-xs text-brand-600 hover:text-brand-700 font-medium">Configure</button>
            </div>
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="AI Tutor Settings" description="Placeholder — real AI integration coming soon">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">AI Model (placeholder)</label>
            <select className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-500">
              <option>GPT-4o (not connected)</option>
              <option>Claude 3 (not connected)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Tutor Persona</label>
            <textarea
              rows={3}
              defaultValue="You are a friendly, encouraging AI tutor helping beginner learners understand AI tools. Keep responses short, clear, and supportive."
              className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <p className="text-xs text-amber-600 bg-amber-50 rounded-xl px-3 py-2">
            AI Tutor is in placeholder mode. Real responses will be enabled once the AI integration is connected.
          </p>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Certificates" description="Placeholder — coming in a future update">
        <div className="flex flex-col items-center py-6 text-center">
          <p className="text-sm text-slate-500 mb-2">Certificate issuance is not yet configured.</p>
          <p className="text-xs text-slate-400 max-w-sm">When enabled, learners will receive a certificate when they complete a full learning path. Design templates and delivery settings will be configured here.</p>
        </div>
      </AdminSectionCard>
    </div>
  );
}
