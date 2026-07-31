import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/layout/page-header';
import { ProjectCard } from '@/components/sections/project-card';
import { getProjects } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'Selected production platforms built by MD Mashfiqur Rahman — SaaS, e-commerce, HR, inventory and desktop applications.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Everything I've helped ship."
        description="From multi-service SaaS platforms to lean SMB tools — the full catalogue of production work."
      />
      <section className="section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
