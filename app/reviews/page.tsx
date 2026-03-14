import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { reviews, outcomeStats } from '@/lib/data/reviews';
import { Star, Quote, CircleCheck as CheckCircle, ArrowRight, Shield, Users } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  );
}

function AvatarInitials({ initials, featured }: { initials: string; featured?: boolean }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
      featured ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700'
    }`}>
      {initials}
    </div>
  );
}

export default function ReviewsPage() {
  const featuredReviews = reviews.filter(r => r.featured);
  const regularReviews = reviews.filter(r => !r.featured);

  return (
    <SiteLayout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm font-medium text-slate-500 mb-6">4.8 out of 5 — from 18,400+ learners</div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Real people.{' '}
              <span className="brand-gradient-text">Real results.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              From office workers to students to retirees — here is what everyday people say
              after learning AI with NextSkill AI.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomeStats.map(stat => (
              <div key={stat.label} className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-brand-600 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-700">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Learner stories</h2>
            <p className="text-brand-100">Here is what people say in their own words</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredReviews.map(review => (
              <div key={review.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Quote className="w-8 h-8 text-white/30 mb-4" />
                <p className="text-white leading-relaxed mb-5 text-sm">&ldquo;{review.quote}&rdquo;</p>
                {review.outcome && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" />
                    <span className="text-xs font-semibold text-teal-300">{review.outcome}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <AvatarInitials initials={review.avatar} featured />
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-brand-200">{review.role}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="More learner voices"
              title="From all kinds of backgrounds"
              description="Teachers, freelancers, students, retirees, business owners — AI is for everyone and these are their stories."
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularReviews.map(review => (
              <div key={review.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  {(review.path || review.course) && (
                    <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                      {review.path ?? review.course}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{review.quote}&rdquo;</p>
                {review.outcome && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-teal-700">{review.outcome}</span>
                  </div>
                )}
                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                  <AvatarInitials initials={review.avatar} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Why people trust us"
              title="Built for real learners"
              description="We designed this platform specifically for people who are new to AI — not for tech experts."
              align="center"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Star, label: '4.8 / 5 rating', sub: 'From 18,400+ learners', color: 'text-amber-500 bg-amber-50 border-amber-100' },
              { icon: CheckCircle, label: '92% feel more confident', sub: 'After completing a path', color: 'text-teal-600 bg-teal-50 border-teal-100' },
              { icon: Users, label: '28,000+ active learners', sub: 'Learning every day', color: 'text-brand-600 bg-brand-50 border-brand-100' },
              { icon: Shield, label: 'No jargon, ever', sub: 'Plain English throughout', color: 'text-slate-600 bg-slate-100 border-slate-200' },
            ].map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mx-auto mb-3 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900 mb-1">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to write your own story?
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              Join 28,000+ everyday people who are already learning AI — one simple step at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
              >
                Start for free today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/paths"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-700/50 border border-brand-500/50 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                Browse learning paths
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
