import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './styles/globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

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
  title: 'Admix Digital | AI Automation & Digital Marketing for Temecula Businesses | #1 Local Agency',
  description: 'Transform your Temecula business with AI automation & data-driven digital marketing. Get 3x more leads with smart chatbots, SEO, and local ads. Free strategy session for qualified businesses. Trusted by 50+ local service providers.',
  keywords: [
    'AI automation Temecula',
    'digital marketing Temecula',
    'AI chatbots for business',
    'local SEO Temecula',
    'lead automation service',
    'Temecula marketing agency',
    'small business AI solutions',
    'automated marketing Temecula',
    'Google Ads Temecula',
    'conversion optimization',
    'CRM integration',
    'workflow automation',
    'service business marketing',
    'Temecula Valley marketing'
  ].join(', '),
  authors: [{ name: 'Admix Digital' }],
  creator: 'Admix Digital',
  publisher: 'Admix Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://admix.digital'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Admix Digital | AI-Powered Marketing That Works While You Sleep',
    description: 'Helping Temecula service businesses grow 3x faster with AI automation, smart chatbots & data-driven ads. 50+ successful projects. Free strategy call.',
    type: 'website',
    locale: 'en_US',
    url: 'https://admix.digital',
    siteName: 'Admix Digital',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Admix Digital - AI Automation & Digital Marketing for Temecula',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admix Digital | AI Marketing for Temecula Businesses',
    description: 'Transform your business with AI automation & smart marketing. 3x more leads, zero manual work.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Admix Digital',
    image: 'https://admix.digital/AMXDIG.png',
    '@id': 'https://admix.digital',
    url: 'https://admix.digital',
    telephone: '(951) 555-0123',
    email: 'hello@admixdigital.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Old Town Temecula',
      addressLocality: 'Temecula',
      addressRegion: 'CA',
      postalCode: '92590',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.4936,
      longitude: -117.1484
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '18:00'
    },
    sameAs: [
      'https://facebook.com/admixdigital',
      'https://twitter.com/admixdigital',
      'https://linkedin.com/company/admixdigital',
      'https://instagram.com/admixdigital'
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Temecula',
      '@id': 'https://en.wikipedia.org/wiki/Temecula,_California'
    },
    serviceType: [
      'AI Automation',
      'Digital Marketing',
      'SEO Services',
      'Google Ads Management',
      'AI Chatbot Development',
      'Lead Automation',
      'CRM Integration'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50'
    }
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06B6D4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen bg-[#0F172A] overflow-x-hidden relative" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}