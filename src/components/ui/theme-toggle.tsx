'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const OPTIONS = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'system', label: 'System', icon: Monitor },
  { value: 'dark', label: 'Dark', icon: Moon },
] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const current = mounted ? (theme ?? 'system') : 'system';

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-card p-0.5"
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const active = current === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
              active
                ? 'bg-accent text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </button>
        );
      })}
      <span className="sr-only">
        Current theme: {mounted ? (resolvedTheme ?? current) : 'system'}
      </span>
    </div>
  );
}
