import Link from 'next/link';
import { BookOpen, FileText, Users, Star, MessageSquare, Plus, ArrowRight, TrendingUp, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, BookmarkCheck, Pencil } from 'lucide-react';
import { AdminStatCard, AdminCard, AdminPageHeader } from '@/components/admin/AdminComponents';
import { StatusBadge } from '@/components/admin/AdminComponents';
import { adminStats, adminActivity, adminPaths, adminLessons } from '@/lib/data/admin';

const activityIcons: Record<string, React.ElementType> = {
  lesson_published: CheckCircle2,
  user_joined: Users,
  review_submitted: MessageSquare,
  lesson_created: FileText,
  path_published: BookOpen,
};

const activityColors: Record<string, string> = {
  lesson_published: 'bg-teal-50 text-teal-600',
  user_joined: 'bg-brand-50 text-brand-600',
  review_submitted: 'bg-amber-50 text-amber-600',
  lesson_created: 'bg-slate-100 text-slate-600',
  path_published: 'bg-teal-50 text-teal-600',
};

export default function AdminDashboard() {
  const draftItems = [
    ...adminPaths.filter((p) => p.status === 'draft').map((p) => ({ title: p.title, type: 'Path', slug: p.slug })),
    ...adminLessons.filter((l) => l.status === 'draft').slice(0, 3).map((l) => ({ title: l.title, type: 'Lesson', slug: l.slug })),
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <AdminPageHeader
        title="Dashboard"
        description="Overview of your platform content and activity"
        actions={
          <Link href="/admin/paths" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors">
            <Plus className="w-4 h-4" />
            New Path
          </Link>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard
          label="Learning Paths"
          value={adminStats.totalPaths}
          sub={`${adminStats.publishedPaths} published`}
          icon={BookOpen}
          iconColor="text-brand-600"
          iconBg="bg-brand-50"
        />
        <AdminStatCard
          label="Lessons"
          value={adminStats.totalLessons}
          sub={`${adminStats.publishedLessons} published`}
          icon={FileText}
          iconColor="text-teal-600"
          iconBg="bg-teal-50"
        />
        <AdminStatCard
          label="Total Users"
          value={adminStats.totalUsers}
          sub={`${adminStats.activeUsers} active`}
          icon={Users}
          iconColor="text-sky-600"
          iconBg="bg-sky-50"
          trend="+3 this week"
        />
        <AdminStatCard
          label="Reviews"
          value={adminStats.totalReviews}
          sub={`${adminStats.approvedReviews} approved`}
          icon={MessageSquare}
          iconColor="text-amber-600"
          iconBg="bg-amber-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AdminCard className="lg:col-span-2 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">Recent Activity</h2>
            <span className="text-xs text-slate-400">Last 7 days</span>
          </div>
          <div className="divide-y divide-slate-50">
            {adminActivity.map((item) => {
              const Icon = activityIcons[item.type] ?? CheckCircle2;
              const colorClass = activityColors[item.type] ?? 'bg-slate-100 text-slate-500';
              return (
                <div key={item.id} className="flex items-start gap-3 px-5 py-3.5">
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${colorClass}`}>
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0">{item.time}</span>
                </div>
              );
            })}
          </div>
        </AdminCard>

        <div className="space-y-4">
          <AdminCard className="overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="text-sm font-semibold text-slate-900">Quick Actions</h2>
            </div>
            <div className="p-3 space-y-1">
              {[
                { label: 'Create new lesson', href: '/admin/lessons', icon: FileText },
                { label: 'Create new path', href: '/admin/paths', icon: BookOpen },
                { label: 'Review pending content', href: '/admin/lessons', icon: AlertCircle },
                { label: 'Manage featured slots', href: '/admin/featured', icon: Star },
                { label: 'Moderate reviews', href: '/admin/reviews', icon: MessageSquare },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" strokeWidth={2} />
                    <span>{action.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 ml-auto group-hover:text-brand-400 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </AdminCard>

          <AdminCard className="overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <h2 className="text-sm font-semibold text-slate-900">Drafts</h2>
                <span className="ml-auto text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{adminStats.draftContent}</span>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {draftItems.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-800 truncate">{item.title}</p>
                    <p className="text-2xs text-slate-400">{item.type}</p>
                  </div>
                  <Pencil className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                </div>
              ))}
            </div>
          </AdminCard>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AdminCard className="overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">Published Paths</h2>
            <Link href="/admin/paths" className="text-xs font-medium text-brand-600 hover:text-brand-700">View all</Link>
          </div>
          <div className="divide-y divide-slate-50">
            {adminPaths.filter((p) => p.status === 'published').map((path) => (
              <div key={path.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-slate-800 truncate">{path.title}</p>
                    {path.featured && (
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{path.lessonCount} lessons · {path.difficulty}</p>
                </div>
                <StatusBadge status={path.status} />
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard className="overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">Content Summary</h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { label: 'Published paths', value: adminStats.publishedPaths, total: adminStats.totalPaths, color: 'bg-brand-500' },
              { label: 'Published lessons', value: adminStats.publishedLessons, total: adminStats.totalLessons, color: 'bg-teal-500' },
              { label: 'Active users', value: adminStats.activeUsers, total: adminStats.totalUsers, color: 'bg-sky-500' },
              { label: 'Approved reviews', value: adminStats.approvedReviews, total: adminStats.totalReviews, color: 'bg-amber-500' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-medium text-slate-800">{item.value}/{item.total}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${Math.round((item.value / item.total) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
