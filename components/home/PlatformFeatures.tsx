import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { features } from '@/lib/data/homepage';

export function PlatformFeatures() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything you need to learn effectively"
          description="NextSkill AI combines the structure of a great curriculum with the personalization of a private tutor — designed to help you actually finish what you start."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
