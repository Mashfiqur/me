import { Container } from '@/components/ui/container';

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative border-b border-border bg-subtle/40">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30 grid-noise" />
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 heading-1 text-balance">{title}</h1>
          {description && (
            <p className="mt-5 prose-lede text-pretty">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
