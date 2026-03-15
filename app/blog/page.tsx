import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function BlogPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Coming Soon"
        title="The NextSkill Blog"
        description="Tips, guides, and plain-English explainers on using AI in everyday life. New articles on the way — check back soon."
      />
    </SiteLayout>
  );
}
