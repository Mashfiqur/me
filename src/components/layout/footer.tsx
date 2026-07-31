import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import type { NavigationItem, Profile, SocialLink } from '@/types/content';

interface FooterProps {
  profile: Profile;
  items: NavigationItem[];
  socials: SocialLink[];
}

export function Footer({ profile, items, socials }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-subtle/40">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-semibold">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold"
              >
                MR
              </span>
              {profile.displayName}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {profile.tagline}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Based in {profile.location}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Sitemap
            </h3>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target={s.platform === 'email' ? undefined : '_blank'}
                    rel={s.platform === 'email' ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind. Deployed on GitHub Pages.
          </p>
        </div>
      </Container>
    </footer>
  );
}
