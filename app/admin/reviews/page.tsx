'use client';

import { useState } from 'react';
import { Star, CircleCheck as CheckCircle2, X, BookmarkCheck, Search } from 'lucide-react';
import { AdminPageHeader, AdminCard, AdminFilterBar } from '@/components/admin/AdminComponents';
import { adminReviews } from '@/lib/data/admin';
import { cn } from '@/lib/utils';

const statusFilters = [
  { label: 'All', value: 'all' },
  { label: 'Approved', value: 'approved' },
  { label: 'Pending', value: 'pending' },
];

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(adminReviews);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const approve = (id: string) => setReviews((prev) => prev.map((r) => r.id === id ? { ...r, approved: true } : r));
  const reject = (id: string) => setReviews((prev) => prev.filter((r) => r.id !== id));
  const toggleFeatured = (id: string) => setReviews((prev) => prev.map((r) => r.id === id ? { ...r, featured: !r.featured } : r));

  const filtered = reviews.filter((r) => {
    const matchFilter = filter === 'all' || (filter === 'approved' ? r.approved : !r.approved);
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.quote.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="space-y-6 max-w-4xl">
      <AdminPageHeader
        title="Reviews & Testimonials"
        description={`${reviews.filter((r) => r.approved).length} approved · ${reviews.filter((r) => !r.approved).length} pending`}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search reviews..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 placeholder:text-slate-400"
          />
        </div>
        <AdminFilterBar filters={statusFilters} active={filter} onChange={setFilter} />
      </div>

      <div className="space-y-3">
        {filtered.map((review) => (
          <AdminCard key={review.id} className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                {review.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                      {review.featured && (
                        <span className="flex items-center gap-0.5 text-2xs text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                          <BookmarkCheck className="w-2.5 h-2.5" /> Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{review.role} · {review.source} · {review.submittedAt}</p>
                  </div>
                  <div className="flex shrink-0">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <div className="flex items-center gap-2 mt-3">
                  {!review.approved ? (
                    <>
                      <button
                        onClick={() => approve(review.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                      </button>
                      <button
                        onClick={() => reject(review.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" /> Reject
                      </button>
                    </>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-teal-600">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                    </span>
                  )}
                  <button
                    onClick={() => toggleFeatured(review.id)}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ml-auto',
                      review.featured
                        ? 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-500 bg-slate-100 hover:bg-slate-200'
                    )}
                  >
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    {review.featured ? 'Unfeature' : 'Feature'}
                  </button>
                </div>
              </div>
            </div>
          </AdminCard>
        ))}

        {filtered.length === 0 && (
          <AdminCard className="py-12 text-center">
            <p className="text-sm text-slate-500">No reviews found.</p>
          </AdminCard>
        )}
      </div>
    </div>
  );
}
