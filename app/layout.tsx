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
    default: 'NextSkill AI — AI-Powered Learning Platform',
    template: '%s · NextSkill AI',
  },
  description:
    'Master practical AI skills through guided learning paths, a personal AI tutor, and bite-sized lessons designed for real career growth.',
  keywords: ['AI learning', 'machine learning courses', 'prompt engineering', 'data science', 'online education'],
  openGraph: {
    title: 'NextSkill AI — AI-Powered Learning Platform',
    description: 'Master practical AI skills through guided learning paths and personalized AI coaching.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextSkill AI — AI-Powered Learning Platform',
    description: 'Master practical AI skills through guided learning paths and personalized AI coaching.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
