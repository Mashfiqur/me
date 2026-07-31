import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Achievement } from '@/types/content';

export function AchievementsSection({
  items,
  compact = false,
}: {
  items: Achievement[];
  compact?: boolean;
}) {
  return (
    <section className={compact ? 'section-tight' : 'section'} id="achievements">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones worth marking."
          description="Recognition and outcomes from academic and professional work."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((a) => (
            <Card key={a.id}>
              <CardBody>
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="primary">{a.category}</Badge>
                  <p className="text-xs text-muted-foreground">
                    {new Date(a.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <CardTitle className="mt-3">{a.title}</CardTitle>
                <p className="mt-1 text-sm text-primary">{a.organization}</p>
                <CardDescription className="mt-3">{a.description}</CardDescription>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
