import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { SkillsSection } from '@/components/sections/skills-section';
import { getSkills } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Skills',
  description:
    'Technical skills of MD Mashfiqur Rahman across backend, frontend, database, DevOps, desktop and tools.',
  path: '/skills',
});

export default function SkillsPage() {
  const skills = getSkills();
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The full technical stack."
        description="Grouped by discipline. Levels reflect real production usage, not weekend familiarity."
      />
      <SkillsSection groups={skills} compact />
    </>
  );
}
