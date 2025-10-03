import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Z-I-V — Social Video Editor | עורך וידאו לרשתות',
  description: 'Eye-catching vertical reels that drive results. עורך וידאו מומחה ברילז אנכיים למדיה חברתית.',
  keywords: ['video editor', 'social media', 'reels', 'vertical video', 'עורך וידאו', 'רילז'],
  authors: [{ name: 'Z-I-V' }],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Z-I-V — Social Video Editor',
    description: 'Eye-catching vertical reels that drive results.',
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z-I-V — Social Video Editor',
    description: 'Eye-catching vertical reels that drive results.',
  },
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const lang = localStorage.getItem('lang') || 'he';
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Z-I-V',
              jobTitle: 'Video Editor',
              description: 'Social media video editor specializing in vertical content',
              knowsAbout: ['Video Editing', 'Social Media', 'Reels', 'Sound Design'],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

