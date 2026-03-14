import { SiteLayout } from '@/components/layout/SiteLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustedSection } from '@/components/home/TrustedSection';
import { FeaturedPaths } from '@/components/home/FeaturedPaths';
import { HowItWorks } from '@/components/home/HowItWorks';
import { PlatformFeatures } from '@/components/home/PlatformFeatures';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <TrustedSection />
      <FeaturedPaths />
      <HowItWorks />
      <PlatformFeatures />
      <TestimonialsSection />
      <CtaBanner />
    </SiteLayout>
  );
}
