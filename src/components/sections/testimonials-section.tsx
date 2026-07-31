import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardBody } from '@/components/ui/card';
import type { Testimonial } from '@/types/content';

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  return (
    <section className="section bg-subtle/40" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Kind words"
          title="What colleagues have said."
          description="From engineering leaders, peers and cross-functional partners I've worked alongside."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.id}>
              <CardBody className="flex h-full flex-col gap-6">
                <svg
                  aria-hidden
                  className="h-6 w-6 text-primary/60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.14 6C4.9 8.7 3 12.7 3 17.1v.9h5V13H5.6c.5-2.5 2.2-4.7 4.9-6L9.14 6Zm10 0c-4.24 2.7-6.14 6.7-6.14 11.1v.9h5V13h-2.4c.5-2.5 2.2-4.7 4.9-6L19.14 6Z" />
                </svg>
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
