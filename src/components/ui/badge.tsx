import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'default' | 'primary' | 'outline' | 'subtle';

const variants: Record<Variant, string> = {
  default: 'bg-accent text-accent-foreground',
  primary: 'bg-primary/10 text-primary border border-primary/20',
  outline: 'border border-border text-foreground',
  subtle: 'bg-subtle text-muted-foreground border border-border/60',
};

export function Badge({
  variant = 'default',
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
