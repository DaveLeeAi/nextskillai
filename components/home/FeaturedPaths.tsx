import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PathCard } from '@/components/shared/PathCard';
import { featuredPaths } from '@/lib/data/homepage';

export function FeaturedPaths() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Popular Paths"
          title="Start with a path built for beginners"
          description="Each path is a short, guided journey — with simple lessons, plain language, and no prior knowledge required."
          className="mb-10"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/paths"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-600 border border-brand-200 hover:bg-brand-50 rounded-xl transition-colors"
          >
            See all learning paths
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
