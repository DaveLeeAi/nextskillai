import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import type { PricingTier } from '@/lib/data/pricing';

interface PricingCardProps {
  tier: PricingTier;
  yearly: boolean;
  features: string[];
}

export function PricingCard({ tier, yearly, features }: PricingCardProps) {
  const price = yearly ? tier.yearlyPrice : tier.monthlyPrice;
  const isFree = price === 0;

  return (
    <div className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
      tier.highlighted
        ? 'bg-brand-600 border-2 border-brand-500 shadow-2xl shadow-brand-600/30 scale-105 z-10'
        : 'bg-slate-900 border border-slate-800 hover:border-slate-600'
    }`}>
      {tier.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}

      <div className={`p-8 ${tier.badge ? 'pt-10' : ''}`}>
        <h3 className="font-bold text-xl text-white mb-1">{tier.name}</h3>
        <p className={`text-sm mb-6 leading-relaxed ${tier.highlighted ? 'text-brand-100' : 'text-slate-400'}`}>
          {tier.description}
        </p>

        <div className="mb-6">
          {isFree ? (
            <span className="text-5xl font-bold text-white">Free</span>
          ) : (
            <div className="flex items-end gap-1">
              <span className={`text-2xl font-semibold ${tier.highlighted ? 'text-brand-100' : 'text-slate-400'}`}>$</span>
              <span className="text-5xl font-bold leading-none text-white">{price}</span>
              <span className={`text-sm pb-1.5 ${tier.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>
                /mo{yearly ? ', billed yearly' : ''}
              </span>
            </div>
          )}
          {!isFree && yearly && (
            <p className={`text-xs mt-1.5 ${tier.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>
              Save ${(tier.monthlyPrice - tier.yearlyPrice) * 12}/year vs monthly
            </p>
          )}
        </div>

        <Link
          href="/get-started"
          className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
            tier.highlighted
              ? 'bg-white text-brand-700 hover:bg-brand-50 shadow-lg'
              : 'bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-600/20'
          }`}
        >
          {tier.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className={`px-8 pb-8 border-t ${tier.highlighted ? 'border-brand-500/40' : 'border-slate-800'}`}>
        <p className={`text-xs font-semibold uppercase tracking-wider mt-6 mb-4 ${tier.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>
          What is included
        </p>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-brand-200' : 'text-teal-500'}`} />
              <span className={`text-sm ${tier.highlighted ? 'text-brand-100' : 'text-slate-300'}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
