import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardBody } from '@/components/ui/card';
import { LinkButton } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import type { GithubStatsPlaceholder } from '@/types/content';

export function GithubStatsSection({ stats }: { stats: GithubStatsPlaceholder }) {
  if (!stats.enabled) return null;
  const profileUrl = `https://github.com/${stats.username}`;
  const cards = [
    { label: 'GitHub profile', value: `@${stats.username}` },
    { label: 'Public activity', value: 'Available on GitHub' },
    { label: 'Top languages', value: 'PHP · TypeScript · Vue · Go' },
  ];

  return (
    <section className="section" id="github">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Open source"
            title="Where the code lives."
            description={stats.note}
          />
          <LinkButton href={profileUrl} external variant="outline">
            <Icon name="Github" className="h-4 w-4" />
            View GitHub profile
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.label}>
              <CardBody>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{c.value}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
