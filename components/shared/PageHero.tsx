import Link from 'next/link';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

export function PageHero({
  eyebrow,
  title,
  titleHighlight,
  description,
  cta,
  ctaSecondary,
  align = 'center',
  size = 'md',
}: PageHeroProps) {
  const sizeClasses = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-24 md:py-36',
  };

  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <section className={`${sizeClasses[size]} bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-teal-600/8 rounded-full blur-3xl" />
      </div>
      <div className={`container-ns relative flex flex-col ${alignClasses}`}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
            {eyebrow}
          </span>
        )}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {titleHighlight ? (
            <>
              {title}{' '}
              <span className="brand-gradient bg-clip-text text-transparent">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h1>
        {description && (
          <p className={`mt-5 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
        {(cta || ctaSecondary) && (
          <div className={`mt-8 flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5"
              >
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
