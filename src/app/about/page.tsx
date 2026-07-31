import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAbout } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'About MD Mashfiqur Rahman — software engineer with 5+ years shipping web platforms across Laravel, Vue, NestJS and modern TypeScript stacks.',
  path: '/about',
});

export default function AboutPage() {
  const about = getAbout();

  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.heading}
        description={about.paragraphs[0]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
              <h2 className="heading-3">The short version</h2>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack engineer, five years in production, based in Dhaka. I ship reliable
                systems and I care about the people using them.
              </p>
            </div>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Personality
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {about.personality.map((p) => (
                  <li key={p}>
                    <Badge>{p}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Interests
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {about.interests.map((p) => (
                  <li key={p}>
                    <Badge>{p}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Languages
              </h3>
              <ul className="mt-4 space-y-2">
                {about.languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground">{l.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.strengths.map((s) => (
              <Card key={s.title}>
                <CardBody>
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
