'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  GripVertical,
  Plus,
  X,
  CircleCheck as CheckCircle2,
  Lightbulb,
  Pencil,
  BookOpen,
  Zap,
  Info,
  List,
} from 'lucide-react';
import { AdminSectionCard, AdminButton, AdminToggle, StatusBadge } from '@/components/admin/AdminComponents';
import { adminLessons } from '@/lib/data/admin';
import { cn } from '@/lib/utils';

type BlockType = 'text' | 'takeaway' | 'example' | 'tip' | 'practice' | 'recap' | 'checklist' | 'quiz';

interface ContentBlock {
  id: string;
  type: BlockType;
  label: string;
}

const blockTypeConfig: Record<BlockType, { icon: React.ElementType; label: string; color: string }> = {
  text: { icon: Pencil, label: 'Text / Explainer', color: 'text-slate-500 bg-slate-100' },
  takeaway: { icon: Lightbulb, label: 'Key Takeaway', color: 'text-amber-500 bg-amber-50' },
  example: { icon: BookOpen, label: 'Example', color: 'text-teal-600 bg-teal-50' },
  tip: { icon: Info, label: 'Tip / Callout', color: 'text-brand-500 bg-brand-50' },
  practice: { icon: Pencil, label: 'Practice Block', color: 'text-teal-700 bg-teal-50' },
  recap: { icon: List, label: 'Quick Recap', color: 'text-brand-600 bg-brand-50' },
  checklist: { icon: CheckCircle2, label: 'Checklist', color: 'text-slate-500 bg-slate-100' },
  quiz: { icon: Zap, label: 'Quiz / Check-in', color: 'text-amber-600 bg-amber-50' },
};

const initialBlocks: ContentBlock[] = [
  { id: 'b1', type: 'text', label: 'Why your question matters' },
  { id: 'b2', type: 'example', label: 'Weak vs. strong prompt example' },
  { id: 'b3', type: 'text', label: 'The magic of context' },
  { id: 'b4', type: 'tip', label: 'Quick tip on formatting' },
  { id: 'b5', type: 'quiz', label: 'Multiple choice check-in' },
  { id: 'b6', type: 'takeaway', label: 'Key takeaways' },
  { id: 'b7', type: 'recap', label: 'Quick recap' },
];

export default function LessonEditorPage({ params }: { params: { slug: string } }) {
  const lesson = adminLessons.find((l) => l.slug === params.slug) ?? adminLessons[0];

  const [title, setTitle] = useState(lesson.title);
  const [duration, setDuration] = useState(lesson.duration);
  const [lessonType, setLessonType] = useState(lesson.type);
  const [published, setPublished] = useState(lesson.status === 'published');
  const [blocks, setBlocks] = useState<ContentBlock[]>(initialBlocks);
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [saved, setSaved] = useState(false);
  const [practicePrompt, setPracticePrompt] = useState('Try asking ChatGPT to help you write a short email. Start vague, then improve it with more context.');
  const [keyTakeaways, setKeyTakeaways] = useState(['Be specific — vague questions get vague answers', 'Add context to every prompt', 'Refine in the same chat session']);

  const removeBlock = (id: string) => setBlocks((prev) => prev.filter((b) => b.id !== id));

  const addBlock = (type: BlockType) => {
    setBlocks((prev) => [...prev, {
      id: Date.now().toString(),
      type,
      label: `New ${blockTypeConfig[type].label}`,
    }]);
    setShowBlockMenu(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/lessons" className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Edit Lesson</h1>
            <p className="text-sm text-slate-500">{lesson.pathTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={lesson.status} />
          <AdminButton variant="secondary" onClick={handleSave}>Save Draft</AdminButton>
          <AdminButton variant="primary" onClick={handleSave}>
            {saved ? <><CheckCircle2 className="w-4 h-4" /> Saved!</> : 'Publish'}
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <AdminSectionCard title="Lesson Details">
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
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Slug</label>
                <input
                  type="text"
                  defaultValue={lesson.slug}
                  readOnly
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Lesson Summary</label>
                <textarea
                  rows={2}
                  defaultValue="A short summary of what this lesson teaches"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Type</label>
                  <select
                    value={lessonType}
                    onChange={(e) => setLessonType(e.target.value as typeof lessonType)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="lesson">Lesson</option>
                    <option value="practice">Practice</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Est. Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Assign to Path / Module</label>
                <select className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500">
                  <option>{lesson.pathTitle}</option>
                  <option>Everyday AI Basics</option>
                  <option>Start Using AI</option>
                </select>
              </div>
            </div>
          </AdminSectionCard>

          <AdminSectionCard
            title="Content Blocks"
            description="Drag to reorder. Click to edit content."
            actions={
              <div className="relative">
                <AdminButton variant="secondary" size="sm" onClick={() => setShowBlockMenu((v) => !v)}>
                  <Plus className="w-3.5 h-3.5" /> Add Block
                </AdminButton>
                {showBlockMenu && (
                  <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-10">
                    {(Object.entries(blockTypeConfig) as [BlockType, typeof blockTypeConfig[BlockType]][]).map(([type, config]) => {
                      const Icon = config.icon;
                      return (
                        <button
                          key={type}
                          onClick={() => addBlock(type)}
                          className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <div className={cn('w-6 h-6 rounded-lg flex items-center justify-center', config.color)}>
                            <Icon className="w-3 h-3" strokeWidth={2} />
                          </div>
                          {config.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            }
          >
            <div className="space-y-2">
              {blocks.map((block, i) => {
                const config = blockTypeConfig[block.type];
                const Icon = config.icon;
                return (
                  <div
                    key={block.id}
                    className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-white hover:border-slate-200 hover:shadow-sm transition-all group cursor-default"
                  >
                    <GripVertical className="w-4 h-4 text-slate-300 cursor-grab shrink-0" />
                    <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center shrink-0', config.color)}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-700">{block.label}</p>
                      <p className="text-2xs text-slate-400">{config.label}</p>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 rounded text-slate-400 hover:text-brand-600 hover:bg-brand-50">
                        <Pencil className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeBlock(block.id)} className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-50">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
              {blocks.length === 0 && (
                <div className="py-8 text-center border border-dashed border-slate-200 rounded-xl">
                  <p className="text-sm text-slate-400">No blocks yet. Add one above.</p>
                </div>
              )}
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Key Takeaways" description="Shown in the lesson summary section">
            <div className="space-y-2">
              {keyTakeaways.map((kv, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={kv}
                    onChange={(e) => {
                      const updated = [...keyTakeaways];
                      updated[i] = e.target.value;
                      setKeyTakeaways(updated);
                    }}
                    className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <button onClick={() => setKeyTakeaways((prev) => prev.filter((_, j) => j !== i))} className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-50">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setKeyTakeaways((prev) => [...prev, ''])}
                className="flex items-center gap-1.5 text-xs text-brand-600 hover:text-brand-700 font-medium mt-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add takeaway
              </button>
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Practice Prompt" description="Optional hands-on activity at end of lesson">
            <textarea
              rows={3}
              value={practicePrompt}
              onChange={(e) => setPracticePrompt(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
              placeholder="Describe the practice activity..."
            />
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
                label="Has Quiz"
                description="Includes check-in questions"
                checked={blocks.some((b) => b.type === 'quiz')}
                onChange={() => {}}
              />
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400">Last updated: {lesson.updatedAt}</p>
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Lesson Info">
            <div className="space-y-3">
              {[
                { label: 'Order in path', value: `#${lesson.order}` },
                { label: 'Type', value: lessonType },
                { label: 'Duration', value: duration },
                { label: 'Content blocks', value: blocks.length },
                { label: 'Takeaways', value: keyTakeaways.filter((t) => t.length > 0).length },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{s.label}</span>
                  <span className="text-xs font-medium text-slate-800">{s.value}</span>
                </div>
              ))}
            </div>
          </AdminSectionCard>
        </div>
      </div>
    </div>
  );
}
