import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function CommunityPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Coming Soon"
        title="The NextSkill Community"
        description="A space to ask questions, share wins, and learn alongside other beginners. Community forums and groups are coming — get early access when you sign up."
      />
    </SiteLayout>
  );
}
