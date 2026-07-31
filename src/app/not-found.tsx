import { Container } from '@/components/ui/container';
import { LinkButton } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 heading-1">This page slipped through the cracks.</h1>
          <p className="mt-5 prose-lede">
            The page you&rsquo;re looking for doesn&rsquo;t exist — but the rest of the site is
            right where you left it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href="/">
              <Icon name="ArrowRight" className="h-4 w-4 rotate-180" />
              Back home
            </LinkButton>
            <LinkButton href="/projects" variant="outline">
              See projects
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
