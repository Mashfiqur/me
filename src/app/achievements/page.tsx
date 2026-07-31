import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { getAchievements } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Achievements',
  description:
    'Recognition and career milestones earned by MD Mashfiqur Rahman across academic and professional work.',
  path: '/achievements',
});

export default function AchievementsPage() {
  const items = getAchievements();
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Recognition and moments that mattered."
        description="A record of academic distinction and professional impact — the outcomes worth noting."
      />
      <AchievementsSection items={items} compact />
    </>
  );
}
