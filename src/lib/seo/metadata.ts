import type { Metadata } from 'next';
import { getSeo } from '@/lib/content';
import { withBasePath } from '@/config/site';

const seo = getSeo();

export function buildMetadata(overrides?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = overrides?.title
    ? seo.titleTemplate.replace('%s', overrides.title)
    : seo.title;
  const description = overrides?.description ?? seo.description;
  const canonical = overrides?.path
    ? `${seo.siteUrl.replace(/\/$/, '')}${overrides.path}`
    : seo.siteUrl;

  return {
    title,
    description,
    keywords: seo.keywords,
    authors: [{ name: seo.author }],
    creator: seo.author,
    metadataBase: new URL(seo.siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: seo.locale,
      url: canonical,
      title,
      description,
      siteName: seo.siteName,
      images: [
        {
          url: withBasePath(seo.ogImage),
          width: 1200,
          height: 630,
          alt: seo.author,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [withBasePath(seo.ogImage)],
      creator: seo.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
