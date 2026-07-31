import type { MetadataRoute } from 'next';
import { getSeo, getNavigation } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const seo = getSeo();
  const navigation = getNavigation();
  const base = seo.siteUrl.replace(/\/$/, '');
  const now = new Date();

  const routes = new Set<string>(['/']);
  for (const item of navigation.primary) routes.add(item.href);
  for (const item of navigation.footer) routes.add(item.href);

  return Array.from(routes).map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));
}
