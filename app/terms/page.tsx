import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function TermsPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Legal"
        title="Terms of Use"
        description="The terms and conditions that govern your use of NextSkill AI. Our full terms are being finalised and will be published here shortly."
      />
    </SiteLayout>
  );
}
