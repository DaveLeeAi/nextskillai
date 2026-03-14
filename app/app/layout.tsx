import type { Metadata } from 'next';
import { AppSidebar, AppTopBar, AppHeaderBar } from '@/components/app/AppSidebar';

export const metadata: Metadata = {
  title: {
    default: 'My Learning · NextSkill AI',
    template: '%s · NextSkill AI',
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppTopBar />
        <AppHeaderBar />
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
