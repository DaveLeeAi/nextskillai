import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ReviewCard } from '@/components/shared/ReviewCard';
import { StatBlock } from '@/components/shared/StatBlock';
import { reviews, outcomeStats } from '@/lib/data/reviews';
import { ArrowRight, Star, CircleCheck as CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

const featuredReviews = reviews.filter((r) => r.featured);
const gridReviews = reviews.filter((r) => !r.featured);

const trustPoints = [
  { icon: Star, label: '4.9/5 average rating', sub: 'Based on 8,400+ reviews' },
  { icon: Award, label: 'Verified learners only', sub: 'All reviewers are enrolled students' },
  { icon: TrendingUp, label: '94% complete their path', sub: 'Above industry average' },
  { icon: Users, label: '50,000+ active learners', sub: 'Across 80+ countries' },
];

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-ns relative text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
            Learner Stories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto mb-5">
            Real people.{' '}
            <span className="brand-gradient bg-clip-text text-transparent">Real results.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12">
            Over 50,000 learners have used NextSkill AI to build practical AI skills. Here is what they have to say.
          </p>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            <span className="text-white font-semibold">4.9 out of 5</span> — based on 8,400+ verified reviews
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container-ns">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="Featured stories"
              title="Outcomes that speak for themselves"
              description="A selection of learners who transformed how they work with AI."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container-ns">
          <StatBlock
            stats={outcomeStats.map((s) => ({ value: s.value, label: s.label, description: s.description }))}
            columns={4}
          />
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container-ns">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="All reviews"
              title="What our community is saying"
              description="Every review is from a verified enrolled learner—no paid endorsements, no fake reviews."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gridReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="container-ns">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="Why learners trust us"
              title="Built on real outcomes"
              description="We measure success by what learners can do after completing a course—not just how many started one."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.label} className="flex flex-col items-center text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <p className="font-semibold text-white text-sm mb-1">{tp.label}</p>
                  <p className="text-xs text-slate-500">{tp.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container-ns text-center">
          <SectionHeading
            eyebrow="Your turn"
            title="Join 50,000+ learners already inside"
            description="Start free today. The only thing between you and real AI fluency is taking the first step."
            align="center"
            titleClassName="text-white"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30"
            >
              Start learning for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Browse the courses
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Free forever plan</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Cancel any time</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
