import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import type { SkillGroup } from '@/types/content';

const LEVEL_STYLES: Record<string, string> = {
  expert: 'bg-primary/10 text-primary border border-primary/20',
  advanced: 'bg-accent text-accent-foreground',
  proficient: 'border border-border text-foreground',
  familiar: 'border border-border/60 text-muted-foreground',
};

export function SkillsSection({
  groups,
  compact = false,
}: {
  groups: SkillGroup[];
  compact?: boolean;
}) {
  return (
    <section className={compact ? 'section-tight' : 'section'} id="skills">
      <Container>
        <SectionHeading
          eyebrow="Technical toolkit"
          title="The stack I reach for."
          description="Grouped by discipline. Proficiency reflects real production experience — not a checklist."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Card key={g.id}>
              <CardBody>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={g.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{g.label}</h3>
                    <p className="text-xs text-muted-foreground">{g.description}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <li key={s.name}>
                      <Badge
                        className={s.level ? LEVEL_STYLES[s.level] : undefined}
                      >
                        {s.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
