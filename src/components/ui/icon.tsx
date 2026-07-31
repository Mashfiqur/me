import * as React from 'react';
import {
  Rocket,
  Database,
  Layers,
  Users,
  Server,
  LayoutGrid,
  Cloud,
  Monitor,
  Wrench,
  Github,
  Linkedin,
  GitBranch,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  Download,
  Code,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

const REGISTRY: Record<string, LucideIcon> = {
  Rocket,
  Database,
  Layers,
  Users,
  Server,
  LayoutGrid,
  Cloud,
  Monitor,
  Wrench,
  Github,
  Linkedin,
  GitBranch,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  Download,
  Code,
  Sparkles,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
  'aria-hidden': ariaHidden = true,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
}) {
  const Component = REGISTRY[name] ?? Code;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden={ariaHidden} />;
}
