import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { PageHero } from '@/components/shared/PageHero';
import { PathCardFull } from '@/components/shared/PathCardFull';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { StatBlock } from '@/components/shared/StatBlock';
import { learningPaths } from '@/lib/data/paths';
import { Layers, Target, Clock, Award, CircleCheck as CheckCircle2, ArrowRight, Users } from 'lucide-react';

const pathStats = [
  { value: '7', label: 'Curated paths', description: 'From beginner to advanced' },
  { value: '8–10wks', label: 'Average completion', description: 'At 3–4 hours per week' },
  { value: '94%', label: 'Report skill gains', description: 'Within the first 4 weeks' },
  { value: '50K+', label: 'Active learners', description: 'Across all paths' },
];

const howPathsWork = [
  {
    icon: Layers,
    title: 'Structured progression',
    description: 'Each path is sequenced to build skills in the right order—no confusion about what to learn next.',
  },
  {
    icon: Target,
    title: 'Outcome-focused',
    description: 'Every path ends with clear, tangible skills you can apply immediately in your work.',
  },
  {
    icon: Clock,
    title: 'Flexible pacing',
    description: 'Learn at your own speed. Most learners finish a path in 4–10 weeks at a few hours per week.',
  },
  {
    icon: Award,
    title: 'Certificates included',
    description: 'Complete a path and earn a shareable certificate that verifies your skills.',
  },
];

export default function PathsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Learning Paths"
        title="Your guided route to"
        titleHighlight="AI mastery"
        description="Stop learning at random. Our structured paths take you from where you are to where you want to be—step by step, skill by skill."
        cta={{ label: 'Browse all paths', href: '#paths' }}
        ctaSecondary={{ label: 'View courses', href: '/courses' }}
      />

      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container-ns">
          <StatBlock stats={pathStats} columns={4} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container-ns">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="What is a path?"
                title="A curated curriculum, not a course dump"
                description="A learning path is a hand-sequenced series of courses with a clear beginning, middle, and end. We have done the curriculum thinking so you can focus on the learning."
                align="left"
                titleClassName="text-white"
              />
              <ul className="mt-8 space-y-4">
                {[
                  'Courses chosen by expert instructors in the right order',
                  'Milestones that show your progress clearly',
                  'Quizzes and projects woven throughout',
                  'A certificate when you complete the path',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {howPathsWork.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-brand-600/15 border border-brand-500/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="paths" className="py-20 md:py-28 bg-slate-950">
        <div className="container-ns">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="All paths"
              title="Find the path built for you"
              description="Whether you are brand new to AI or looking to specialise, there is a path designed around your goal."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <PathCardFull key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800">
        <div className="container-ns">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="Path outcomes"
              title="What you will be able to do"
              description="Every path is built backwards from a real outcome. Here is what learners gain across our most popular paths."
              align="center"
              titleClassName="text-white"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                path: 'AI Beginner Path',
                outcomes: ['Use AI tools daily with confidence', 'Write clear, effective prompts', 'Save hours of manual work every week'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                path: 'Prompt Mastery Path',
                outcomes: ['Build reusable prompt libraries', 'Design multi-step AI workflows', 'Produce consistently high-quality AI outputs'],
                color: 'from-teal-500 to-emerald-500',
              },
              {
                path: 'AI Business Operator Path',
                outcomes: ['Automate core business processes', 'Build AI-enhanced marketing systems', 'Cut operational time by 30%+'],
                color: 'from-green-500 to-teal-500',
              },
            ].map((item) => (
              <div key={item.path} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.color} mb-5`} />
                <h4 className="font-bold text-white text-base mb-4">{item.path}</h4>
                <ul className="space-y-3">
                  {item.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container-ns">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Ready to start?"
              title="Pick your path and begin today"
              description="Your first path is free. No credit card, no commitment—just start learning and see the results for yourself."
              align="center"
              titleClassName="text-white"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30"
              >
                Start your first path free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                View Pro plans
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Free forever plan</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />No credit card required</span>
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-teal-600" />50K+ learners</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
