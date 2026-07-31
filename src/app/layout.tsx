import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getProfile, getNavigation, getSocialLinks } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { personJsonLd } from '@/lib/seo/json-ld';
import { site } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: site.themeColor.light },
    { media: '(prefers-color-scheme: dark)', color: site.themeColor.dark },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = getProfile();
  const navigation = getNavigation();
  const socials = getSocialLinks();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <Header profile={profile} items={navigation.primary} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer profile={profile} items={navigation.footer} socials={socials} />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </body>
    </html>
  );
}
