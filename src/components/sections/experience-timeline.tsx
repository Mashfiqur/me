import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { formatDateRange, durationBetween } from '@/lib/utils/format';
import type { ExperienceEntry } from '@/types/content';

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  detailed?: boolean;
  showHeading?: boolean;
}

export function ExperienceTimeline({
  entries,
  detailed = false,
  showHeading = true,
}: ExperienceTimelineProps) {
  return (
    <section className="section" id="experience">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Experience"
            title="Five years shipping to production."
            description="A track record of end-to-end delivery — requirements, architecture, code, review, deployment — across agencies and product companies."
          />
        )}

        <ol className="mt-12 relative">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-[19px]"
          />
          {entries.map((e) => (
            <li key={e.id} className="relative pl-12 pb-12 last:pb-0 md:pl-16">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background md:h-10 md:w-10"
              >
                <span className="h-2 w-2 rounded-full bg-primary md:h-2.5 md:w-2.5" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {e.position}
                </h3>
                {e.current && <Badge variant="primary">Current</Badge>}
              </div>
              <p className="mt-0.5 text-primary">{e.company}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatDateRange(e.startDate, e.endDate)} · {durationBetween(e.startDate, e.endDate)}
                {e.location && <> · {e.location}</>}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {e.summary}
              </p>

              {detailed && (
                <>
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    {e.companyDescription}
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Duties & responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {e.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2 text-sm leading-relaxed">
                            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {e.achievements.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Key achievements
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {e.achievements.map((a) => (
                            <li key={a} className="flex gap-2 text-sm leading-relaxed">
                              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {e.technologies.map((t) => (
                  <li key={t}>
                    <Badge variant="subtle">{t}</Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
