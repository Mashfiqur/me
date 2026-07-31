'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/container';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LinkButton } from '@/components/ui/button';
import type { NavigationItem, Profile } from '@/types/content';

interface HeaderProps {
  profile: Profile;
  items: NavigationItem[];
}

export function Header({ profile, items }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-transparent backdrop-blur transition-all duration-300',
        scrolled && 'border-border bg-background/80 shadow-sm shadow-black/[0.02]',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${profile.displayName} — Home`}
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold"
          >
            MR
          </span>
          <span className="hidden sm:inline">{profile.displayName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                    isActive(item.href) && 'text-foreground',
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LinkButton
            href={profile.resumeUrl}
            external
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Resume
          </LinkButton>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur"
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent',
                      isActive(item.href) && 'bg-accent text-foreground',
                    )}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <LinkButton
                  href={profile.resumeUrl}
                  external
                  variant="outline"
                  className="w-full"
                >
                  Download Resume
                </LinkButton>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
