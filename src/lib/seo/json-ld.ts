import { getProfile, getSeo, getSocialLinks, getExperience, getEducation } from '@/lib/content';

export function personJsonLd() {
  const profile = getProfile();
  const seo = getSeo();
  const social = getSocialLinks();
  const experience = getExperience();
  const education = getEducation();

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.displayName,
    jobTitle: profile.title,
    description: seo.description,
    url: seo.siteUrl,
    image: `${seo.siteUrl.replace(/\/$/, '')}${profile.avatar}`,
    email: 'mailto:mashfiqurrr@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
    },
    sameAs: social.filter((s) => s.platform !== 'email').map((s) => s.url),
    worksFor: experience[0]
      ? {
          '@type': 'Organization',
          name: experience[0].company,
        }
      : undefined,
    alumniOf: education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e.institution,
    })),
    knowsAbout: [
      'Software Engineering',
      'Full-stack Development',
      'Laravel',
      'Vue.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Docker',
    ],
  };
}
