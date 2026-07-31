import type { MetadataRoute } from 'next';
import { getSeo } from '@/lib/content';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const seo = getSeo();
  const base = seo.siteUrl.replace(/\/$/, '');
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
