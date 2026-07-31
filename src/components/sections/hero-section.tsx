import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { LinkButton } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import { withBasePath } from '@/config/site';
import type { Hero, Profile } from '@/types/content';

interface HeroSectionProps {
  hero: Hero;
  profile: Profile;
}

export function HeroSection({ hero, profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] grid-noise"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="pt-14 pb-20 md:pt-24 md:pb-28 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="primary" className="w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </Badge>

            <p className="text-sm font-medium text-muted-foreground">{hero.greeting}</p>

            <h1 className="heading-1 text-balance">{hero.headline}</h1>

            <p className="prose-lede max-w-2xl text-pretty">{hero.subheadline}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <LinkButton href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <Icon name="ArrowRight" className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={hero.secondaryCta.href} size="lg" variant="outline">
                {hero.secondaryCta.label}
              </LinkButton>
              <LinkButton
                href={profile.resumeUrl}
                external
                size="lg"
                variant="ghost"
                aria-label="Download resume as PDF"
              >
                <Icon name="Download" className="h-4 w-4" />
                Resume
              </LinkButton>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {hero.highlights.map((h) => (
                <li key={h}>
                  <Badge variant="subtle">{h}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src={withBasePath(profile.avatar)}
                  alt={`Portrait of ${profile.fullName}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-black/[0.03]">
                <p className="text-xs font-medium text-muted-foreground">Currently at</p>
                <p className="text-sm font-semibold">Axilweb Ltd.</p>
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-black/[0.03]">
                <p className="text-xs font-medium text-muted-foreground">Based in</p>
                <p className="text-sm font-semibold">Dhaka, BD</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
