import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCertifications } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Certifications',
  description:
    'Certifications and specialised training earned by MD Mashfiqur Rahman across the full-stack lifecycle.',
  path: '/certifications',
});

export default function CertificationsPage() {
  const items = getCertifications();
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Focused practice, sharpened over time."
        description="Structured deep-dives — from Laravel architecture to Docker deployments and PostgreSQL performance."
      />
      <section className="section">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <Card key={c.id}>
                <CardBody className="flex h-full flex-col gap-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {new Date(c.issueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="text-base font-semibold tracking-tight">{c.name}</h3>
                  <p className="text-sm text-primary">{c.issuer}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <li key={s}>
                        <Badge variant="subtle">{s}</Badge>
                      </li>
                    ))}
                  </ul>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-3 text-sm font-medium text-primary hover:text-primary/80"
                    >
                      View credential →
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
