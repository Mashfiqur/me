import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import type { ProjectEntry } from '@/types/content';

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardBody className="flex flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.year} · {project.role}
            </p>
            <CardTitle className="mt-1.5">{project.name}</CardTitle>
          </div>
          <Badge
            variant={project.status === 'live' ? 'primary' : 'outline'}
            className="capitalize"
          >
            {project.status}
          </Badge>
        </div>

        <CardDescription>{project.summary}</CardDescription>

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <li key={t}>
              <Badge variant="subtle">{t}</Badge>
            </li>
          ))}
          {project.technologies.length > 6 && (
            <li>
              <Badge variant="subtle">+{project.technologies.length - 6}</Badge>
            </li>
          )}
        </ul>

        {project.url && (
          <div className="mt-auto pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
              aria-label={`Open ${project.name} in a new tab`}
            >
              Visit live site
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
