'use client';

import { useState } from 'react';
import { CircleCheck as CheckCircle2, Circle as XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuizBlock, QuizOption } from '@/lib/data/lessons';

type QuizState = 'unanswered' | 'selected' | 'submitted';

function OptionButton({
  option,
  selected,
  submitted,
  onSelect,
}: {
  option: QuizOption;
  selected: boolean;
  submitted: boolean;
  onSelect: () => void;
}) {
  const showResult = submitted;
  const isCorrect = option.correct;

  const baseClass = 'w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm';

  let stateClass = 'border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50/50 cursor-pointer';

  if (selected && !submitted) {
    stateClass = 'border-brand-500 bg-brand-50 text-brand-800 cursor-pointer ring-2 ring-brand-200';
  }

  if (showResult) {
    if (isCorrect) {
      stateClass = 'border-teal-400 bg-teal-50 text-teal-800 cursor-default';
    } else if (selected && !isCorrect) {
      stateClass = 'border-red-300 bg-red-50 text-red-700 cursor-default';
    } else {
      stateClass = 'border-slate-100 bg-slate-50/50 text-slate-400 cursor-default opacity-60';
    }
  }

  return (
    <button
      className={cn(baseClass, stateClass)}
      onClick={!submitted ? onSelect : undefined}
      disabled={submitted}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all',
          selected && !submitted ? 'border-brand-500 bg-brand-500' :
          showResult && isCorrect ? 'border-teal-500 bg-teal-500' :
          showResult && selected && !isCorrect ? 'border-red-400 bg-red-400' :
          'border-slate-300 bg-white'
        )}>
          {selected && !submitted && <div className="w-2 h-2 rounded-full bg-white" />}
          {showResult && isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
          {showResult && selected && !isCorrect && <XCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className="leading-snug">{option.text}</span>
      </div>
    </button>
  );
}

export function QuizLessonBlock({ block }: { block: QuizBlock }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [state, setState] = useState<QuizState>('unanswered');
  const [reflectionText, setReflectionText] = useState('');

  const selectedOption = block.options?.find((o) => o.id === selectedId);
  const isCorrect = selectedOption?.correct ?? false;

  const handleSubmit = () => {
    if (!selectedId && block.variant !== 'reflection') return;
    setState('submitted');
  };

  const handleReset = () => {
    setSelectedId(null);
    setState('unanswered');
    setReflectionText('');
  };

  if (block.variant === 'reflection') {
    return (
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-600">?</span>
          </div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Reflection</span>
        </div>
        <p className="text-sm font-medium text-slate-800 mb-3 leading-relaxed">{block.question}</p>
        {state === 'unanswered' ? (
          <>
            <textarea
              className="w-full text-sm text-slate-700 px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400 resize-none"
              rows={3}
              placeholder={block.reflectionHint ?? 'Write your thoughts here...'}
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
            />
            <button
              onClick={() => setState('submitted')}
              disabled={reflectionText.trim().length < 5}
              className="mt-2 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Save reflection
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <div className="rounded-xl bg-teal-50 border border-teal-100 p-3">
            <p className="text-xs text-teal-600 font-medium mb-1">Your reflection</p>
            <p className="text-sm text-teal-800 leading-relaxed">{reflectionText}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-brand-100 flex items-center justify-center">
          <span className="text-xs font-bold text-brand-600">Q</span>
        </div>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {block.variant === 'true-false' ? 'True or False' :
           block.variant === 'better-prompt' ? 'Choose the Better Prompt' :
           'Quick Check'}
        </span>
      </div>

      <p className="text-sm font-medium text-slate-800 mb-4 leading-relaxed">{block.question}</p>

      <div className="space-y-2 mb-4">
        {block.options?.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            selected={selectedId === option.id}
            submitted={state === 'submitted'}
            onSelect={() => setSelectedId(option.id)}
          />
        ))}
      </div>

      {state !== 'submitted' && (
        <button
          onClick={handleSubmit}
          disabled={!selectedId}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Check answer
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}

      {state === 'submitted' && (
        <div className={cn(
          'rounded-xl p-4 mt-2',
          isCorrect ? 'bg-teal-50 border border-teal-100' : 'bg-red-50 border border-red-100'
        )}>
          <div className="flex items-start gap-2">
            {isCorrect
              ? <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" strokeWidth={2.5} />
              : <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
            }
            <div className="flex-1">
              <p className={cn('text-sm font-semibold mb-1', isCorrect ? 'text-teal-700' : 'text-red-600')}>
                {isCorrect ? 'Correct!' : 'Not quite'}
              </p>
              <p className={cn('text-sm leading-relaxed', isCorrect ? 'text-teal-700' : 'text-red-600')}>
                {selectedOption?.explanation ??
                  (isCorrect ? block.correctExplanation : block.incorrectExplanation)}
              </p>
            </div>
          </div>
          {!isCorrect && (
            <button
              onClick={handleReset}
              className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
