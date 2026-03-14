import { Lightbulb, TriangleAlert as AlertTriangle, Info, CircleCheck as CheckCircle2, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TextBlock, TakeawayBlock, ExampleBlock, TipBlock, PracticeBlock, RecapBlock, ChecklistBlock } from '@/lib/data/lessons';

export function TextLessonBlock({ block }: { block: TextBlock }) {
  return (
    <div>
      {block.heading && (
        <h2 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">{block.heading}</h2>
      )}
      <div className="space-y-3">
        {block.body.split('\n\n').map((para, i) => (
          <p key={i} className="text-slate-600 leading-relaxed text-[0.95rem]">{para}</p>
        ))}
      </div>
    </div>
  );
}

export function TakeawayLessonBlock({ block }: { block: TakeawayBlock }) {
  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" strokeWidth={2.5} />
        </div>
        <span className="text-sm font-semibold text-amber-800">Key Takeaways</span>
      </div>
      <ul className="space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-amber-800 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExampleLessonBlock({ block }: { block: ExampleBlock }) {
  if (block.weak && block.strong) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 bg-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{block.label ?? 'Example'}</span>
        </div>
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <div className="p-4">
            <p className="text-2xs font-semibold text-red-500 uppercase tracking-wide mb-2">Weak prompt</p>
            <p className="text-sm text-slate-700 leading-relaxed italic">&ldquo;{block.weak}&rdquo;</p>
          </div>
          <div className="p-4 bg-teal-50/50">
            <p className="text-2xs font-semibold text-teal-600 uppercase tracking-wide mb-2">Strong prompt</p>
            <p className="text-sm text-slate-800 leading-relaxed italic">&ldquo;{block.strong}&rdquo;</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{block.label ?? 'Example'}</p>
      <p className="text-sm text-slate-700 leading-relaxed">{block.body}</p>
    </div>
  );
}

export function TipLessonBlock({ block }: { block: TipBlock }) {
  const variant = block.variant ?? 'tip';
  const styles = {
    tip: { bg: 'bg-brand-50 border-brand-100', icon: Info, iconColor: 'text-brand-500', title: 'text-brand-800', body: 'text-brand-700', iconBg: 'bg-brand-100' },
    warning: { bg: 'bg-orange-50 border-orange-100', icon: AlertTriangle, iconColor: 'text-orange-500', title: 'text-orange-800', body: 'text-orange-700', iconBg: 'bg-orange-100' },
    note: { bg: 'bg-slate-50 border-slate-200', icon: Info, iconColor: 'text-slate-500', title: 'text-slate-700', body: 'text-slate-600', iconBg: 'bg-slate-100' },
  }[variant];

  const Icon = styles.icon;

  return (
    <div className={cn('rounded-2xl border p-4 flex gap-3', styles.bg)}>
      <div className={cn('w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5', styles.iconBg)}>
        <Icon className={cn('w-3.5 h-3.5', styles.iconColor)} strokeWidth={2} />
      </div>
      <div>
        {block.title && (
          <p className={cn('text-sm font-semibold mb-1', styles.title)}>{block.title}</p>
        )}
        <p className={cn('text-sm leading-relaxed', styles.body)}>{block.body}</p>
      </div>
    </div>
  );
}

export function PracticeLessonBlock({ block }: { block: PracticeBlock }) {
  return (
    <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-xl bg-teal-500 flex items-center justify-center">
          <Pencil className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-sm font-semibold text-teal-800">{block.title ?? 'Practice'}</span>
      </div>
      <p className="text-sm text-teal-700 leading-relaxed mb-3">{block.instruction}</p>
      {block.prompt && (
        <div className="bg-white/60 rounded-xl p-3 border border-teal-100">
          <p className="text-xs text-teal-600 font-medium mb-1">Try this prompt</p>
          <p className="text-sm text-teal-800 italic leading-relaxed">{block.prompt}</p>
        </div>
      )}
    </div>
  );
}

export function RecapLessonBlock({ block }: { block: RecapBlock }) {
  return (
    <div className="rounded-2xl bg-brand-50 border border-brand-100 p-5">
      <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-3">Quick Recap</p>
      <ul className="space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-brand-800">
            <div className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-2xs font-bold text-brand-700">{i + 1}</span>
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChecklistLessonBlock({ block }: { block: ChecklistBlock }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-card">
      {block.title && <p className="text-sm font-semibold text-slate-800 mb-3">{block.title}</p>}
      <ul className="space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded border-2 border-slate-200 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
