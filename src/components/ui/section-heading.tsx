import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-3xl',
        align === 'center' && 'mx-auto text-center items-center',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-2 text-balance">{title}</h2>
      {description && <p className="prose-lede text-pretty">{description}</p>}
    </div>
  );
}
