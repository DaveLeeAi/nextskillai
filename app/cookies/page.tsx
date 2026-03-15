import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function CookiesPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Legal"
        title="Cookie Policy"
        description="How we use cookies to improve your experience on NextSkill AI. Our full cookie policy will be published here shortly."
      />
    </SiteLayout>
  );
}
