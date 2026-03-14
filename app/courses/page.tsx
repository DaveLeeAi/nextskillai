'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { PageHero } from '@/components/shared/PageHero';
import { CourseCard } from '@/components/shared/CourseCard';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { courses, courseCategories } from '@/lib/data/courses';
import type { CourseLevel } from '@/lib/data/courses';

const levels: CourseLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
const sortOptions = ['Most Popular', 'Highest Rated', 'Shortest'];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState<CourseLevel | 'All'>('All');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...courses];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeCategory !== 'All') result = result.filter((c) => c.category === activeCategory);
    if (activeLevel !== 'All') result = result.filter((c) => c.level === activeLevel);
    if (sortBy === 'Highest Rated') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'Shortest') result.sort((a, b) => a.lessons - b.lessons);
    else result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [search, activeCategory, activeLevel, sortBy]);

  const hasFilters = search || activeCategory !== 'All' || activeLevel !== 'All';

  return (
    <SiteLayout>
      <PageHero
        eyebrow="200+ Courses"
        title="Learn the AI skills"
        titleHighlight="the world needs now"
        description="Practical, structured courses built around real workplace outcomes. No filler—every lesson moves you forward."
        size="sm"
      />

      <section className="py-16 md:py-20 bg-slate-950">
        <div className="container-ns">
          <div className="flex flex-col gap-5 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search courses, topics, or skills..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-brand-500 transition-colors cursor-pointer"
                  >
                    {sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                    showFilters ? 'bg-brand-600/20 border-brand-500 text-brand-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Level</p>
                <div className="flex flex-wrap gap-2">
                  {(['All', ...levels] as (CourseLevel | 'All')[]).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveLevel(lvl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                        activeLevel === lvl ? 'bg-brand-600 border-brand-600 text-white' : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      {lvl === 'All' ? 'All Levels' : lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {courseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-600/20'
                      : 'bg-transparent border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              {filtered.length === courses.length
                ? `${courses.length} courses available`
                : `${filtered.length} of ${courses.length} courses`}
            </p>
            {hasFilters && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveLevel('All'); }}
                className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1.5 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                <Search className="w-7 h-7 text-slate-600" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">No courses found</h3>
              <p className="text-slate-500 text-sm max-w-xs">Try adjusting your search or filters.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveLevel('All'); }}
                className="mt-5 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-20 py-16 border-t border-slate-800 flex flex-col items-center text-center">
              <SectionHeading
                eyebrow="More coming soon"
                title="New courses every month"
                description="We ship new AI courses regularly. Pro members get early access to every release."
                align="center"
                titleClassName="text-white"
              />
              <a
                href="/get-started"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30"
              >
                Get notified of new releases
              </a>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
