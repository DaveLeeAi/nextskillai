'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  GripVertical,
  Plus,
  Pencil,
  CircleCheck as CheckCircle2,
  Award,
} from 'lucide-react';
import {
  AdminSectionCard,
  AdminButton,
  AdminToggle,
  StatusBadge,
} from '@/components/admin/AdminComponents';
import { adminPaths, adminLessons } from '@/lib/data/admin';
import { chatgptPathModules } from '@/lib/data/lessons';

export default function PathEditorPage({ params }: { params: { slug: string } }) {
  const path = adminPaths.find((p) => p.slug === params.slug) ?? adminPaths[0];
  const pathLessons = adminLessons.filter((l) => l.pathSlug === path.slug);

  const [title, setTitle] = useState(path.title);
  const [tagline, setTagline] = useState(path.tagline);
  const [description, setDescription] = useState(path.description);
  const [difficulty, setDifficulty] = useState(path.difficulty);
  const [duration, setDuration] = useState(path.duration);
  const [audience, setAudience] = useState(path.audience);
  const [featured, setFeatured] = useState(path.featured);
  const [published, setPublished] = useState(path.status === 'published');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/paths" className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Edit Path</h1>
            <p className="text-sm text-slate-500">/{path.slug}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={path.status} />
          <AdminButton variant="secondary" onClick={handleSave}>
            Save Draft
          </AdminButton>
          <AdminButton variant="primary" onClick={handleSave}>
            {saved ? (
              <><CheckCircle2 className="w-4 h-4" /> Saved!</>
            ) : (
              'Publish'
            )}
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <AdminSectionCard title="Path Details">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Slug (URL)</label>
                <input
                  type="text"
                  value={path.slug}
                  readOnly
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Short Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Target Audience</label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    {['Beginner', 'Easy Start', 'Intermediate'].map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Est. Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 2 weeks"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Modules & Lessons"
            description={`${pathLessons.length} lessons across ${chatgptPathModules.length} modules`}
            actions={
              <AdminButton variant="secondary" size="sm">
                <Plus className="w-3.5 h-3.5" /> Add Module
              </AdminButton>
            }
          >
            <div className="space-y-3">
              {chatgptPathModules.slice(0, path.moduleCount).map((mod, modIdx) => {
                const modLessons = pathLessons.filter((l) =>
                  mod.lessonIds.includes(l.id.replace('al', 'l'))
                );
                return (
                  <div key={mod.id} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-100">
                      <GripVertical className="w-4 h-4 text-slate-300 cursor-grab shrink-0" />
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-2xs font-bold text-slate-600 shrink-0">
                        {modIdx + 1}
                      </div>
                      <p className="text-sm font-semibold text-slate-800 flex-1">{mod.title}</p>
                      <p className="text-xs text-slate-400">{mod.description}</p>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {pathLessons.slice(modIdx * 2, modIdx * 2 + 3).map((lesson) => (
                        <div key={lesson.id} className="flex items-center gap-3 px-4 py-2.5 group">
                          <GripVertical className="w-4 h-4 text-slate-200 cursor-grab shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-slate-700 truncate">{lesson.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-2xs text-slate-400">{lesson.type}</span>
                              <span className="text-2xs text-slate-300">·</span>
                              <span className="text-2xs text-slate-400">{lesson.duration}</span>
                            </div>
                          </div>
                          <StatusBadge status={lesson.status} />
                          <Link
                            href={`/admin/lessons/${lesson.slug}`}
                            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      ))}
                      <div className="px-4 py-2">
                        <button className="flex items-center gap-1.5 text-xs text-brand-600 hover:text-brand-700 font-medium">
                          <Plus className="w-3 h-3" /> Add Lesson
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Milestones" description="Checkpoint rewards shown to learners">
            <div className="space-y-2">
              {['Open & Explore', 'First Real Conversation', 'Better Questions', 'Real-World Use'].slice(0, path.moduleCount).map((m, i) => (
                <div key={m} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-amber-500" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-slate-700">{m}</p>
                    <p className="text-2xs text-slate-400">After module {i + 1}</p>
                  </div>
                  <button className="text-2xs text-slate-400 hover:text-slate-600">Edit</button>
                </div>
              ))}
            </div>
          </AdminSectionCard>
        </div>

        <div className="space-y-5">
          <AdminSectionCard title="Publish Settings">
            <div className="divide-y divide-slate-100">
              <AdminToggle
                label="Published"
                description="Visible to learners"
                checked={published}
                onChange={setPublished}
              />
              <AdminToggle
                label="Featured"
                description="Show on homepage"
                checked={featured}
                onChange={setFeatured}
              />
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400">Last updated: {path.updatedAt}</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Path Stats">
            <div className="space-y-3">
              {[
                { label: 'Lessons', value: path.lessonCount },
                { label: 'Modules', value: path.moduleCount },
                { label: 'Est. time', value: path.duration },
                { label: 'Difficulty', value: path.difficulty },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{s.label}</span>
                  <span className="text-xs font-medium text-slate-800">{s.value}</span>
                </div>
              ))}
            </div>
          </AdminSectionCard>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-xs font-semibold text-amber-800 mb-1">Publishing checklist</p>
                <ul className="space-y-1">
                  {[
                    { label: 'Title & description', done: title.length > 5 },
                    { label: 'At least one lesson', done: pathLessons.length > 0 },
                    { label: 'Difficulty set', done: difficulty.length > 0 },
                    { label: 'Duration set', done: duration.length > 0 },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-1.5 text-2xs">
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.done ? 'bg-amber-500' : 'bg-amber-200'}`} />
                      <span className={item.done ? 'text-amber-700' : 'text-amber-500'}>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
