'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Pencil, MoveHorizontal as MoreHorizontal, Zap } from 'lucide-react';
import { AdminPageHeader, AdminCard, AdminFilterBar, StatusBadge, AdminButton } from '@/components/admin/AdminComponents';
import { adminLessons } from '@/lib/data/admin';
import { cn } from '@/lib/utils';

const statusFilters = [
  { label: 'All', value: 'all' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
  { label: 'In Review', value: 'review' },
];

const typeLabel: Record<string, string> = { lesson: 'Lesson', practice: 'Practice', quiz: 'Quiz' };
const typeBadge: Record<string, string> = {
  lesson: 'text-slate-500 bg-slate-100',
  practice: 'text-teal-600 bg-teal-50',
  quiz: 'text-amber-600 bg-amber-50',
};

export default function AdminLessonsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pathFilter, setPathFilter] = useState('all');

  const paths = Array.from(new Set(adminLessons.map((l) => l.pathTitle)));

  const filtered = adminLessons.filter((l) => {
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || l.status === statusFilter;
    const matchPath = pathFilter === 'all' || l.pathTitle === pathFilter;
    return matchSearch && matchStatus && matchPath;
  });

  return (
    <div className="space-y-6 max-w-6xl">
      <AdminPageHeader
        title="Lessons"
        description={`${adminLessons.length} total lessons · ${adminLessons.filter((l) => l.status === 'published').length} published`}
        actions={
          <AdminButton variant="primary">
            <Plus className="w-4 h-4" />
            New Lesson
          </AdminButton>
        }
      />

      <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search lessons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
          />
        </div>
        <AdminFilterBar filters={statusFilters} active={statusFilter} onChange={setStatusFilter} />
        <select
          value={pathFilter}
          onChange={(e) => setPathFilter(e.target.value)}
          className="px-3.5 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-600"
        >
          <option value="all">All Paths</option>
          {paths.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>

      <AdminCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Lesson</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Path</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Time</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Updated</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="px-5 py-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-900">{lesson.title}</p>
                        {lesson.hasQuiz && (
                          <span className="flex items-center gap-0.5 text-2xs text-brand-500 bg-brand-50 px-1.5 py-0.5 rounded font-medium">
                            <Zap className="w-2.5 h-2.5" /> Quiz
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Order #{lesson.order}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <p className="text-xs text-slate-600 max-w-[160px] truncate">{lesson.pathTitle}</p>
                  </td>
                  <td className="px-4 py-4 hidden sm:table-cell">
                    <span className={cn('text-2xs font-medium px-2 py-0.5 rounded-full', typeBadge[lesson.type])}>
                      {typeLabel[lesson.type]}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-xs text-slate-500">{lesson.duration}</span>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={lesson.status} />
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-xs text-slate-400">{lesson.updatedAt}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/admin/lessons/${lesson.slug}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-500">No lessons found.</p>
            </div>
          )}
        </div>
      </AdminCard>
    </div>
  );
}
