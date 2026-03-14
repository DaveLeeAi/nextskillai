'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen ? 'border-slate-600 bg-slate-800/50' : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-400' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
