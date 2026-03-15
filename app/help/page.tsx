import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function HelpPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Coming Soon"
        title="Help Center"
        description="Answers to the most common questions about using NextSkill AI. Full documentation and guides are being built — coming soon."
      />
    </SiteLayout>
  );
}
