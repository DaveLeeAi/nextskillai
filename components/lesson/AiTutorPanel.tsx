'use client';

import { useState } from 'react';
import { X, ArrowRight, Sparkles, BookOpen, CircleHelp as HelpCircle, Lightbulb, Dumbbell, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AiTutorPanelProps {
  onClose: () => void;
  lessonTitle: string;
}

const quickActions = [
  { id: 'explain', icon: BookOpen, label: 'Explain this simply', response: "Of course! The main idea of this lesson is that ChatGPT works best when you give it clear, specific instructions. Think of it like texting a friend — if you write \"help\" they will not know what you need. But \"can you help me plan what to cook for dinner this week?\" gives them everything they need." },
  { id: 'example', icon: Lightbulb, label: 'Give me an example', response: 'Here is a practical example: Say you want to write a birthday message for a colleague. Instead of typing "write a birthday message", try "Write a warm and friendly birthday message for my colleague Sarah. Keep it short — around 3 sentences. She is turning 40 and loves travel." See how much more useful that becomes?' },
  { id: 'summary', icon: HelpCircle, label: 'Summarize this lesson', response: 'Here is the short version: A better prompt = a better answer. Add context (who you are, what you need), be specific about what you want, and tell AI the format you prefer. If the first answer is not right, just reply and ask it to adjust — no need to start over.' },
  { id: 'practice', icon: Dumbbell, label: 'Help me practice', response: 'Let\'s practice! Try turning this weak prompt into a strong one:\n\n"Write an email for work."\n\nThink about: Who is it to? What is it about? What tone? How long? Write your improved version and I will give you feedback.' },
  { id: 'quiz', icon: RotateCcw, label: 'Quiz me again', response: 'Okay, quick quiz: You need to ask ChatGPT to help you prepare for a job interview. What is the MOST important thing to include in your prompt?\n\nA) The word "please"\nB) The job title and type of interview\nC) Your name\nD) How nervous you feel\n\nThink about it, then tell me your answer!' },
];

interface Message {
  role: 'tutor' | 'user';
  text: string;
}

export function AiTutorPanel({ onClose, lessonTitle }: AiTutorPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'tutor',
      text: `Hi! I am your AI Tutor for this lesson. If anything about "${lessonTitle}" feels unclear, just ask me and I will explain it in a different way. Or tap one of the options below to get started.`,
    },
  ]);
  const [input, setInput] = useState('');
  const [showActions, setShowActions] = useState(true);

  const handleAction = (action: typeof quickActions[0]) => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: action.label },
      { role: 'tutor', text: action.response },
    ]);
    setShowActions(false);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'tutor', text: "That's a great question! The AI Tutor is coming soon — full interactive support will be available in an upcoming update. For now, try one of the quick actions below, or keep reading the lesson." },
    ]);
    setInput('');
    setShowActions(false);
  };

  return (
    <div className="w-80 shrink-0 border-l border-slate-200 bg-white flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-gradient-to-r from-brand-50 to-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">AI Tutor</p>
            <p className="text-2xs text-slate-400">Ask anything about this lesson</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            {msg.role === 'tutor' && (
              <div className="flex items-start gap-2 max-w-[90%]">
                <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2.5">
                  {msg.text.split('\n\n').map((para, j) => (
                    <p key={j} className={cn('text-sm text-slate-700 leading-relaxed', j > 0 && 'mt-2')}>{para}</p>
                  ))}
                </div>
              </div>
            )}
            {msg.role === 'user' && (
              <div className="rounded-2xl rounded-tr-sm bg-brand-600 px-3.5 py-2.5 max-w-[85%]">
                <p className="text-sm text-white leading-relaxed">{msg.text}</p>
              </div>
            )}
          </div>
        ))}

        {showActions && (
          <div className="space-y-1.5 pt-1">
            <p className="text-xs text-slate-400 font-medium px-1">Quick actions</p>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleAction(action)}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-slate-100 bg-white hover:bg-brand-50 hover:border-brand-200 transition-all text-left group"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-brand-100 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-3 h-3 text-slate-500 group-hover:text-brand-600 transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-brand-700 transition-colors">{action.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {!showActions && (
          <button
            onClick={() => setShowActions(true)}
            className="w-full text-xs text-slate-400 hover:text-slate-600 py-1 transition-colors"
          >
            Show quick actions
          </button>
        )}
      </div>

      <div className="p-3 border-t border-slate-100 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask something about this lesson..."
            className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
          />
          <button
            onClick={handleSend}
            className="px-3 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors shrink-0"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-2xs text-slate-400 mt-1.5 text-center">Full AI responses coming soon</p>
      </div>
    </div>
  );
}
