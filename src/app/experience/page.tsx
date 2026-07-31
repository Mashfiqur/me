import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { getExperience } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description:
    'Career history of MD Mashfiqur Rahman across Axilweb, Shapla, Evident BD and Amin Travels & Tours.',
  path: '/experience',
});

export default function ExperiencePage() {
  const experience = getExperience();
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Full-stack delivery across four teams and five years."
        description="Every role, every responsibility, every stack — the detailed version of my career so far."
      />
      <ExperienceTimeline entries={experience} detailed showHeading={false} />
    </>
  );
}
