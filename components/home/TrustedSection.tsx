import { Container } from '@/components/layout/Container';
import { trustStats } from '@/lib/data/homepage';

const audiences = ['Office workers', 'Teachers', 'Freelancers', 'Students', 'Retirees', 'Small business owners'];

export function TrustedSection() {
  return (
    <section className="section-padding-sm border-y border-slate-100 bg-slate-50">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6 mb-8">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-7">
          <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
            Loved by people from all walks of life
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
            {audiences.map((name) => (
              <span key={name} className="text-sm font-semibold text-slate-300 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
