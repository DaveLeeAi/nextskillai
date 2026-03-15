import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Container } from '@/components/layout/Container';
import { PathCardFull } from '@/components/shared/PathCardFull';
import { AdvancedPathCard } from '@/components/shared/AdvancedPathCard';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { learningPaths } from '@/lib/data/paths';
import { advancedLearningPaths } from '@/lib/data/advancedPaths';
import { Map, CircleCheck as CheckCircle, Clock, Heart, ArrowRight, Users, Star, Zap, ChevronRight } from 'lucide-react';

const howPathsWork = [
  {
    icon: Map,
    title: 'We plan the journey for you',
    description: "No guessing what to learn next. Every step is chosen and ordered so you make real progress without confusion.",
  },
  {
    icon: Clock,
    title: 'Just 10–15 minutes a day',
    description: "Lessons are short and focused. You do not need big chunks of time — a few minutes each day is enough to build real skills.",
  },
  {
    icon: CheckCircle,
    title: "Know when you are improving",
    description: "Simple check-ins after each lesson show you exactly how far you have come, so you feel the progress as you go.",
  },
  {
    icon: Heart,
    title: "Designed for complete beginners",
    description: "Every path starts gently and explains things in plain English. No jargon, no assumptions about what you already know.",
  },
];

export default function PathsPage() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-700 mb-5">
              <Map className="w-3.5 h-3.5" />
              Guided step-by-step journeys
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Your guided path to{' '}
              <span className="brand-gradient-text">learning AI</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              A path takes you through everything in the right order — one simple step at a time.
              No confusion, no overwhelm, no guessing about what to learn next.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#paths"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-colors"
              >
                Beginner paths
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#advanced-paths"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 border border-slate-200 hover:border-brand-300 hover:bg-brand-50 rounded-xl transition-colors"
              >
                <Zap className="w-4 h-4" />
                Advanced paths
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Browse individual lessons
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '16', label: 'Guided paths', sub: 'Beginner to advanced' },
              { value: '1–4 wks', label: 'Average completion', sub: 'At just 10 min/day' },
              { value: '92%', label: 'Feel more confident', sub: 'After their first path' },
              { value: '28K+', label: 'People learning now', sub: 'Across all paths' },
            ].map(stat => (
              <div key={stat.label} className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-brand-600 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="How paths work"
                title="Your journey is already planned"
                description="A learning path is a hand-picked sequence of short lessons with a clear start and finish. We have done all the planning — you just follow the steps."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Start wherever you are — even zero experience",
                  "Each lesson builds naturally on the last",
                  "Short check-ins after each step to reinforce what you learned",
                  "See your progress clearly as you move through the path",
                  "A certificate when you reach the end",
                ].map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {howPathsWork.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-100 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1.5 leading-snug">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="paths" className="py-16 md:py-24 bg-slate-50/50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Beginner paths"
              title="Find the path that feels right for you"
              description="Whether you have never touched AI or want to build practical daily habits, there is a path designed for exactly where you are."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map(path => (
              <PathCardFull key={path.id} path={path} />
            ))}
          </div>
        </Container>
      </section>

      <section id="advanced-paths" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-5">
              <Zap className="w-3.5 h-3.5" />
              Advanced and intermediate — 2026 relevant
            </div>
            <SectionHeading
              eyebrow="Advanced paths"
              title="Take your AI skills to the next level"
              description="Already comfortable with AI basics? These paths cover advanced workflows, agent-based AI, structured prompting, research synthesis, and team systems — all grounded in practical 2026 use cases."
              align="center"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            {[
              { label: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { label: 'Advanced', color: 'bg-rose-50 text-rose-700 border-rose-200' },
            ].map(tier => (
              <span key={tier.label} className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${tier.color}`}>
                <CheckCircle className="w-3.5 h-3.5" />
                {tier.label} paths available
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedLearningPaths.map(path => (
              <AdvancedPathCard key={path.id} path={path} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Real outcomes"
              title="What learners say they can do after"
              description="These are real results from everyday people who started with zero AI experience."
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                path: 'First Steps with AI',
                color: 'from-blue-500 to-cyan-500',
                outcomes: ["Feel calm and comfortable using AI tools", "Understand what all the AI talk actually means", "Have a simple daily habit that keeps you growing"],
              },
              {
                path: 'AI for Work Essentials',
                color: 'from-slate-600 to-slate-800',
                outcomes: ["Write emails and documents faster every day", "Summarize meetings and long content in seconds", "Impress your manager with how much more you can get done"],
              },
              {
                path: 'AI Confidence Builder',
                color: 'from-teal-500 to-emerald-500',
                outcomes: ["Stop feeling behind on AI and start feeling ahead", "Use ChatGPT properly and get genuinely helpful answers", "Feel proud of a new practical skill you actually use"],
              },
            ].map(item => (
              <div key={item.path} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.color} mb-5`} />
                <h4 className="font-bold text-slate-900 text-base mb-4">{item.path}</h4>
                <ul className="space-y-3">
                  {item.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your first path is completely free
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              No credit card, no commitment. Just pick a path, start the first lesson, and see how it feels.
              You might be surprised how quickly things click.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
              >
                Start your first path free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-700/50 border border-brand-500/50 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                <Star className="w-4 h-4" />
                Read learner stories
              </Link>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-200">
              <Users className="w-3.5 h-3.5" />
              28,000+ people have already started
            </p>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
