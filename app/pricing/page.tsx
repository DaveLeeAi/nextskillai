'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import {
  pricingTiers,
  faqItems,
  freeFeatures,
  plusFeatures,
  proFeatures,
} from '@/lib/data/pricing';
import { Check, Shield, Zap, Star, Users, ArrowRight } from 'lucide-react';

const featureListByTier = {
  free: freeFeatures,
  plus: plusFeatures,
  pro: proFeatures,
};

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-50/80 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700 mb-5">
            Simple, honest pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto mb-4">
            Start free.{' '}
            <span className="brand-gradient-text">Upgrade when you are ready.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            No credit card needed to start. No tricks. No hidden fees.
            Just straightforward plans that grow with you.
          </p>

          <div className="inline-flex items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !yearly ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">
                Save 33%
              </span>
            </button>
          </div>
        </Container>
      </section>

      <section className="pb-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            {pricingTiers.map(tier => {
              const price = yearly ? tier.yearlyPrice : tier.monthlyPrice;
              const isFree = price === 0;
              const features = featureListByTier[tier.id];

              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-brand-600 border-2 border-brand-500 shadow-xl shadow-brand-200/50 scale-105 z-10'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold shadow-sm">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={`p-7 ${tier.badge ? 'pt-10' : ''}`}>
                    <h3 className={`font-bold text-xl mb-1 ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm mb-6 leading-relaxed ${tier.highlighted ? 'text-brand-100' : 'text-slate-500'}`}>
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      {isFree ? (
                        <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>Free</span>
                      ) : (
                        <div className="flex items-end gap-1">
                          <span className={`text-lg font-semibold ${tier.highlighted ? 'text-brand-100' : 'text-slate-400'}`}>$</span>
                          <span className={`text-4xl font-bold leading-none ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                          <span className={`text-sm pb-1 ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                            /month{yearly ? ', billed yearly' : ''}
                          </span>
                        </div>
                      )}
                      {!isFree && yearly && (
                        <p className={`text-xs mt-1.5 ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                          Save ${(tier.monthlyPrice - tier.yearlyPrice) * 12} per year
                        </p>
                      )}
                    </div>

                    <Link
                      href="/get-started"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        tier.highlighted
                          ? 'bg-white text-brand-700 hover:bg-brand-50 shadow-sm'
                          : 'bg-brand-600 hover:bg-brand-700 text-white'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`px-7 pb-7 border-t ${tier.highlighted ? 'border-brand-500/40' : 'border-slate-100'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider mt-5 mb-4 ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                      What is included
                    </p>
                    <ul className="space-y-3">
                      {features.map(feature => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-brand-200' : 'text-teal-500'}`} />
                          <span className={`text-sm ${tier.highlighted ? 'text-brand-100' : 'text-slate-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-teal-500" />14-day free trial</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-brand-500" />Cancel any time</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400" />4.8/5 learner rating</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-slate-400" />28,000+ learners</span>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-start max-w-4xl mx-auto">
            <div>
              <SectionHeading
                eyebrow="Common questions"
                title="Everything you need to know"
                description="Simple answers to the questions people ask before they sign up."
                align="left"
              />
              <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
                {[
                  { icon: Shield, color: 'text-teal-500', text: '14-day free trial on Plus and Pro' },
                  { icon: Zap, color: 'text-brand-500', text: 'Cancel any time, no questions asked' },
                  { icon: Star, color: 'text-amber-500', text: '4.8/5 average learner satisfaction' },
                  { icon: Users, color: 'text-slate-500', text: '28,000+ active learners trust us' },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-slate-500">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still deciding? Start free today.
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              Your free account never expires. Try the lessons, see if you like it, and upgrade whenever you are ready.
              No pressure, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-700/50 border border-brand-500/50 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                Read learner stories
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
