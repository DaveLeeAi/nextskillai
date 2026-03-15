import { SiteLayout } from '@/components/layout/SiteLayout';
import { PlaceholderPage } from '@/components/shared/PlaceholderPage';

export default function ContactPage() {
  return (
    <SiteLayout>
      <PlaceholderPage
        badge="Get in touch"
        title="Contact us"
        description="Have a question, feedback, or need help? A full contact form is coming soon. In the meantime, start with your free account and explore the platform."
      />
    </SiteLayout>
  );
}
