import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { features } from '@/lib/data/homepage';

export function PlatformFeatures() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why It Works"
          title="Designed to make learning feel easy"
          description="Everything about NextSkill AI is built around one idea: making it as simple as possible for everyday people to learn AI and actually use it in their lives."
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
