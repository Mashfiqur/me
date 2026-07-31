import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { LinkButton } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ProjectCard } from './project-card';
import type { ProjectEntry } from '@/types/content';

export function FeaturedProjects({ projects }: { projects: ProjectEntry[] }) {
  return (
    <section className="section bg-subtle/40" id="projects">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Production platforms I've helped build."
            description="A subset of client and product platforms shipped across the last few years. Each one lives in the real world today."
          />
          <LinkButton href="/projects" variant="outline">
            View all projects
            <Icon name="ArrowRight" className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
