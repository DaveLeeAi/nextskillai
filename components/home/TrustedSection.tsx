import { Container } from '@/components/layout/Container';
import { trustStats } from '@/lib/data/homepage';

const backgrounds = ['Office workers', 'Teachers', 'Freelancers', 'Students', 'Retirees', 'Small business owners'];

export function TrustedSection() {
  return (
    <section className="py-14 border-y border-slate-100 bg-slate-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-10">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Loved by people from all walks of life
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {backgrounds.map((name) => (
              <span
                key={name}
                className="text-base font-bold text-slate-300 hover:text-slate-400 transition-colors select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
