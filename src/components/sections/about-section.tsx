import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import type { About } from '@/types/content';

export function AboutSection({ about }: { about: About }) {
  return (
    <section className="section" id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.heading}
            description={about.paragraphs[0]}
          />
          <div className="flex flex-col gap-5">
            {about.paragraphs.slice(1).map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.strengths.map((s) => (
            <Card key={s.title}>
              <CardBody>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
                <CardDescription className="mt-2">{s.description}</CardDescription>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
