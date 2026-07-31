import { Container } from '@/components/ui/container';
import { LinkButton } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export function ContactCta() {
  return (
    <section className="section-tight" id="contact-cta">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-14 md:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-40 grid-noise"
          />
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -z-10 h-64 w-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          />
          <p className="eyebrow justify-center">Let&rsquo;s talk</p>
          <h2 className="mt-4 heading-2 text-balance">
            Have a project or role in mind? Let&rsquo;s build it together.
          </h2>
          <p className="mt-4 mx-auto max-w-xl prose-lede text-pretty">
            I&rsquo;m always up for a good engineering problem. Reach out and I&rsquo;ll
            get back within a business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              Get in touch
              <Icon name="ArrowRight" className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="mailto:mashfiqurrr@gmail.com"
              external
              size="lg"
              variant="outline"
            >
              <Icon name="Mail" className="h-4 w-4" />
              mashfiqurrr@gmail.com
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
