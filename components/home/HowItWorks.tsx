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
          description="We have made the learning process as simple and stress-free as possible. No overwhelm, no confusion — just steady progress one step at a time."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          {howItWorksSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? Compass;
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center p-6">
                <div className="relative mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-card">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-2xs font-bold text-white bg-brand-600 rounded-full border-2 border-slate-50">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
