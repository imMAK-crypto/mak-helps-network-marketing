import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://makhelps.com'),
  title: {
    default: 'M.A.K Helps Network Marketing',
    template: '%s | M.A.K Helps Network Marketing'
  },
  description:
    'Premium Web Design & Development agency that helps network marketing / MLM businesses build high-converting, luxury websites and funnels.',
  applicationName: 'M.A.K Helps Network Marketing',
  keywords: [
    'Luxury web design',
    'Network marketing',
    'MLM funnel',
    'Kozhikode',
    'Kerala',
    'Web development agency'
  ],
  openGraph: {
    type: 'website',
    siteName: 'M.A.K Helps Network Marketing',
    title: 'M.A.K Helps Network Marketing',
    description:
      'Empowering Network Marketers with Luxury Digital Experiences That Convert',
    url: 'https://makhelps.com',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'M.A.K Helps Network Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.A.K Helps Network Marketing',
    description:
      'Empowering Network Marketers with Luxury Digital Experiences That Convert'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={[
          inter.variable,
          playfair.variable,
          'min-h-dvh bg-[color:var(--bg)] text-[color:var(--fg)] font-sans antialiased'
        ].join(' ')}
      >
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}

