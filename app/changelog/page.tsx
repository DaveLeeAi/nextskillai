import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function ChangelogPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Updates"
        title="What is new at NextSkill AI"
        description="We are constantly improving the platform. A full release history and changelog will live here — new updates coming regularly."
      />
    </SiteLayout>
  );
}
