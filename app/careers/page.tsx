import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function CareersPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="We are hiring"
        title="Join the NextSkill AI team"
        description="We are a small team with a big mission: making AI accessible for everyone. Open roles will be listed here as we grow."
      />
    </SiteLayout>
  );
}
