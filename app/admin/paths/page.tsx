'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, BookmarkCheck, Pencil, MoveHorizontal as MoreHorizontal, BookOpen } from 'lucide-react';
import { AdminPageHeader, AdminCard, AdminFilterBar, StatusBadge, AdminButton } from '@/components/admin/AdminComponents';
import { adminPaths } from '@/lib/data/admin';
import { cn } from '@/lib/utils';

const statusFilters = [
  { label: 'All', value: 'all' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
  { label: 'Archived', value: 'archived' },
];

export default function AdminPathsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = adminPaths.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.difficulty.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6 max-w-6xl">
      <AdminPageHeader
        title="Learning Paths"
        description={`${adminPaths.length} total paths · ${adminPaths.filter((p) => p.status === 'published').length} published`}
        actions={
          <AdminButton variant="primary">
            <Plus className="w-4 h-4" />
            New Path
          </AdminButton>
        }
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search paths..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
          />
        </div>
        <AdminFilterBar filters={statusFilters} active={statusFilter} onChange={setStatusFilter} />
      </div>

      <AdminCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Path</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">Difficulty</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Lessons</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Updated</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((path) => (
                <tr key={path.id} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn('w-8 h-8 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0', path.color)}>
                        <BookOpen className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-medium text-slate-900 truncate">{path.title}</p>
                          {path.featured && (
                            <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xs">{path.tagline}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden sm:table-cell">
                    <span className="text-xs text-slate-600 font-medium">{path.difficulty}</span>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <div>
                      <p className="text-sm text-slate-700">{path.lessonCount}</p>
                      <p className="text-xs text-slate-400">{path.moduleCount} modules</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={path.status} />
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-xs text-slate-400">{path.updatedAt}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/admin/paths/${path.slug}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                        title="Edit"
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
              <p className="text-sm text-slate-500">No paths found for that search.</p>
            </div>
          )}
        </div>
      </AdminCard>
    </div>
  );
}
