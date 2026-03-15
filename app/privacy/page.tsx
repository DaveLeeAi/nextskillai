import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information. Our full privacy policy is being finalised and will be published here shortly."
      />
    </SiteLayout>
  );
}
