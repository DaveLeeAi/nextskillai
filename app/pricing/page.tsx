'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PricingCard } from '@/components/shared/PricingCard';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import {
  pricingTiers,
  pricingFeatures,
  faqItems,
  starterFeatures,
  proFeatures,
  teamsFeatures,
} from '@/lib/data/pricing';
import { CircleCheck as CheckCircle2, Minus, Shield, Zap, Star, Users, ArrowRight } from 'lucide-react';

const featureListByTier = {
  starter: starterFeatures,
  pro: proFeatures,
  teams: teamsFeatures,
};

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <SiteLayout>
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-ns relative text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto mb-5">
            Simple pricing,{' '}
            <span className="brand-gradient bg-clip-text text-transparent">no surprises</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Start free, upgrade when you are ready. Cancel any time. No hidden fees.
          </p>

          <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !yearly ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 font-semibold">
                Save 35%
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-slate-950">
        <div className="container-ns">
          <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                yearly={yearly}
                features={featureListByTier[tier.id]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-900/30 border-y border-slate-800">
        <div className="container-ns">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Feature comparison"
              title="See exactly what you get"
              description="A clear breakdown of every feature across all plans."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-slate-400 w-1/2">Feature</th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`py-4 px-4 text-center text-sm font-bold ${tier.highlighted ? 'text-brand-400' : 'text-white'}`}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-slate-800/60 hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 pr-6 text-sm text-slate-300">{feature.label}</td>
                    {(['starter', 'pro', 'teams'] as const).map((tierId) => {
                      const val = feature[tierId];
                      return (
                        <td key={tierId} className="py-3.5 px-4 text-center">
                          {val === true ? (
                            <CheckCircle2 className="w-4 h-4 text-teal-500 mx-auto" />
                          ) : val === false ? (
                            <Minus className="w-4 h-4 text-slate-700 mx-auto" />
                          ) : (
                            <span className="text-xs text-slate-400">{String(val)}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container-ns">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Questions answered"
                description="Everything you need to know about plans, billing, and how it all works."
                align="left"
                titleClassName="text-white"
              />
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Shield className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  14-day free trial on Pro &amp; Teams
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Zap className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  Cancel any time, no questions asked
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  4.9/5 average learner satisfaction
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Users className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  50,000+ active learners trust us
                </div>
              </div>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container-ns text-center">
          <SectionHeading
            eyebrow="Still deciding?"
            title="Start free, upgrade when ready"
            description="No credit card required. Your free account never expires. Upgrade to Pro whenever it makes sense for you."
            align="center"
            titleClassName="text-white"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Read learner stories
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
