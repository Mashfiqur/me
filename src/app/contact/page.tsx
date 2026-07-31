import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardBody } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { LinkButton } from '@/components/ui/button';
import { getContact, getProfile } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Reach out to MD Mashfiqur Rahman — email, phone, GitHub, LinkedIn, GitLab and more.',
  path: '/contact',
});

export default function ContactPage() {
  const contact = getContact();
  const profile = getProfile();

  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.heading}
        description={contact.subheading}
      />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Availability
                </h2>
                <p className="mt-2 text-lg font-semibold">{contact.availability}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Response time
                </h2>
                <p className="mt-2 text-lg font-semibold">{contact.responseTime}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Preferred contact
                </h2>
                <p className="mt-2 text-lg font-semibold">{contact.preferredContact}</p>
              </div>
              <div className="pt-2">
                <LinkButton href={profile.resumeUrl} external variant="outline">
                  <Icon name="Download" className="h-4 w-4" />
                  Download resume (PDF)
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contact.channels.map((c) => (
                <Card key={c.id}>
                  <CardBody className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.type === 'link' ? '_blank' : undefined}
                          rel={c.type === 'link' ? 'noopener noreferrer' : undefined}
                          className="mt-1 block truncate text-sm font-medium text-foreground hover:text-primary"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-foreground">{c.value}</p>
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
