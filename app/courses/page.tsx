'use client';

import { useState, useMemo } from 'react';
import { Search, X, ChevronDown, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Container } from '@/components/layout/Container';
import { CourseCard } from '@/components/shared/CourseCard';
import { courses, courseCategories } from '@/lib/data/courses';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const sortOptions = [
  { id: 'popular', label: 'Most Popular' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'shortest', label: 'Shortest First' },
];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showSort, setShowSort] = useState(false);

  const featuredCourses = useMemo(() => courses.filter(c => c.featured), []);
  const popularCourses = useMemo(() => courses.filter(c => c.popular && !c.featured).slice(0, 4), []);

  const filteredCourses = useMemo(() => {
    let result = [...courses];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (activeCategory !== 'all') {
      result = result.filter(c => c.category === activeCategory);
    }
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'shortest') result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    else result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [search, activeCategory, sortBy]);

  const activeSortLabel = sortOptions.find(s => s.id === sortBy)?.label ?? 'Sort';
  const isFiltered = search.trim() !== '' || activeCategory !== 'all';

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700 mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Free to start — no experience needed
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Learn AI at your own pace
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Short, simple lessons for everyday people — not tech experts.
              Pick something that interests you and start right now.
            </p>
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search lessons, topics, or skills..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3.5 text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {!isFiltered && (
        <>
          <section className="py-10 bg-white border-b border-slate-100">
            <Container>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <h2 className="text-lg font-semibold text-slate-900">Recommended for Beginners</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </Container>
          </section>

          <section className="py-10 bg-slate-50/60 border-b border-slate-100">
            <Container>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-slate-900">Popular This Week</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {popularCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <section className="py-12">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              {courseCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    activeCategory === cat.id
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowSort(!showSort)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition"
              >
                {activeSortLabel}
                <ChevronDown className={cn('w-4 h-4 text-slate-400 transition-transform', showSort && 'rotate-180')} />
              </button>
              {showSort && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-10">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setSortBy(opt.id); setShowSort(false); }}
                      className={cn(
                        'w-full text-left px-4 py-2 text-sm transition-colors',
                        sortBy === opt.id ? 'text-brand-600 font-semibold bg-brand-50' : 'text-slate-600 hover:bg-slate-50'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <>
              <p className="text-sm text-slate-400 mb-6">
                {filteredCourses.length} lesson{filteredCourses.length !== 1 ? 's' : ''}
                {activeCategory !== 'all' && ` in ${courseCategories.find(c => c.id === activeCategory)?.label}`}
                {search && ` matching "${search}"`}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No lessons found</h3>
              <p className="text-slate-500 mb-6">Try different keywords or browse all lessons</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors"
              >
                <X className="w-4 h-4" />
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-600 to-brand-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure where to start?
            </h2>
            <p className="text-brand-100 mb-8 text-lg leading-relaxed">
              Our guided paths walk you through everything in the right order — no guessing, no overwhelm.
            </p>
            <Link
              href="/paths"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              Explore Learning Paths
            </Link>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
