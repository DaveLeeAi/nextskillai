import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function AboutPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Coming Soon"
        title="About NextSkill AI"
        description="We are building the simplest, most human-friendly way to learn AI skills. Our story, mission, and team will be right here soon."
      />
    </SiteLayout>
  );
}
