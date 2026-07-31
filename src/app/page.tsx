import {
  getHero,
  getProfile,
  getAbout,
  getFeaturedProjects,
  getExperience,
  getSkills,
  getAchievements,
  getTestimonials,
  getGithubStatsPlaceholder,
} from '@/lib/content';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { SkillsSection } from '@/components/sections/skills-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { GithubStatsSection } from '@/components/sections/github-stats-section';
import { ContactCta } from '@/components/sections/contact-cta';

export default function HomePage() {
  const hero = getHero();
  const profile = getProfile();
  const about = getAbout();
  const featured = getFeaturedProjects();
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();
  const testimonials = getTestimonials();
  const githubStats = getGithubStatsPlaceholder();

  return (
    <>
      <HeroSection hero={hero} profile={profile} />
      <AboutSection about={about} />
      <FeaturedProjects projects={featured} />
      <ExperienceTimeline entries={experience} />
      <SkillsSection groups={skills} />
      <AchievementsSection items={achievements} />
      <TestimonialsSection items={testimonials} />
      <GithubStatsSection stats={githubStats} />
      <ContactCta />
    </>
  );
}
