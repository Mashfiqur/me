import seo from '@/content/seo.json';

export const site = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  url: seo.siteUrl,
  name: seo.siteName,
  description: seo.description,
  author: seo.author,
  locale: seo.locale,
  ogImage: seo.ogImage,
  themeColor: seo.themeColor,
} as const;

export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http')) return path;
  const bp = site.basePath.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${bp}${p}`;
}
