import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './styles/globals.css';

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Admix Digital | AI Automation & Digital Marketing for Temecula Businesses',
  description: 'Premium AI automation and digital marketing services for small, service-based businesses in Temecula and surrounding cities. Smart automation & digital marketing that works while you sleep.',
  keywords: 'AI automation, digital marketing, Temecula, small business, service businesses, AI chatbots, lead automation, SEO',
  openGraph: {
    title: 'Admix Digital | AI Automation & Digital Marketing',
    description: 'Helping Temecula\'s service pros grow faster through AI-powered marketing that works while you sleep.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#111827] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
