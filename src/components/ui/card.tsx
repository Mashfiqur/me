import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export function Card({
  className,
  children,
  as: Tag = 'div',
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        'group relative rounded-2xl border border-border bg-card text-card-foreground transition-colors duration-300 hover:border-primary/30',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('p-6 md:p-7', className)}>{children}</div>;
}

export function CardTitle({
  className,
  children,
  as: Tag = 'h3',
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn('text-lg font-semibold tracking-tight', className)}>{children}</Tag>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn('text-sm text-muted-foreground leading-relaxed', className)}>{children}</p>;
}
