import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextskillai.com'),
  title: {
    default: 'NextSkill AI — Learn AI Without the Overwhelm',
    template: '%s · NextSkill AI',
  },
  description:
    'Plain-English AI lessons for everyday people. Build practical AI skills in just 10 minutes a day — no technical background needed.',
  keywords: ['AI for beginners', 'learn ChatGPT', 'AI lessons', 'everyday AI', 'AI for work', 'beginner AI course'],
  openGraph: {
    title: 'NextSkill AI — Learn AI Without the Overwhelm',
    description: 'Plain-English AI lessons for everyday people. Start using AI in minutes a day, no experience needed.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextSkill AI — Learn AI Without the Overwhelm',
    description: 'Plain-English AI lessons for everyday people. Start using AI in minutes a day, no experience needed.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
