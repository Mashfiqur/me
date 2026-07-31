import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getEducation, getReferences } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Education',
  description:
    'Academic background of MD Mashfiqur Rahman — BSc Cum Laude in CSE from North South University.',
  path: '/education',
});

export default function EducationPage() {
  const education = getEducation();
  const references = getReferences();
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Where the foundation was laid."
        description="Formal academic background — with a Cum Laude finish in Computer Science & Engineering."
      />
      <section className="section">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((e) => (
              <Card key={e.id}>
                <CardBody className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {e.startYear} — {e.endYear}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight">{e.degree}</h3>
                  {e.field && (
                    <p className="text-sm text-primary">{e.field}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{e.institution}</p>
                  <p className="text-sm">
                    <span className="font-medium">{e.score}</span>{' '}
                    <span className="text-muted-foreground">{e.scoreScale}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {e.distinction && <Badge variant="primary">{e.distinction}</Badge>}
                    {e.department && <Badge variant="subtle">{e.department}</Badge>}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {references.length > 0 && (
            <div className="mt-20">
              <h2 className="heading-3">Reference</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {references.map((r) => (
                  <Card key={r.id}>
                    <CardBody>
                      <p className="text-base font-semibold">{r.name}</p>
                      <p className="mt-1 text-sm text-primary">{r.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{r.organization}</p>
                      <dl className="mt-4 space-y-1 text-sm">
                        <div className="flex gap-2">
                          <dt className="text-muted-foreground">Email:</dt>
                          <dd>
                            <a
                              href={`mailto:${r.email}`}
                              className="text-foreground hover:text-primary"
                            >
                              {r.email}
                            </a>
                          </dd>
                        </div>
                        {r.phone && (
                          <div className="flex gap-2">
                            <dt className="text-muted-foreground">Phone:</dt>
                            <dd>{r.phone}</dd>
                          </div>
                        )}
                      </dl>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
