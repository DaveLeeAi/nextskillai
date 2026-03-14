import {
  Compass, BookOpen, FlaskConical, Trophy,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { howItWorksSteps } from '@/lib/data/homepage';

const iconMap: Record<string, React.ElementType> = {
  Compass, BookOpen, FlaskConical, Trophy,
};

export function HowItWorks() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four simple steps to a real new skill"
          description="No overwhelm, no confusion. Just clear steps and steady progress — one short lesson at a time."
          className="mb-10"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          {howItWorksSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? Compass;
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center px-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-card">
                <div className="relative mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-brand-600 rounded-full border-2 border-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[14rem] mx-auto">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
