import profileData from '@/content/profile.json';
import heroData from '@/content/hero.json';
import aboutData from '@/content/about.json';
import experienceData from '@/content/experience.json';
import educationData from '@/content/education.json';
import projectsData from '@/content/projects.json';
import skillsData from '@/content/skills.json';
import certificationsData from '@/content/certifications.json';
import achievementsData from '@/content/achievements.json';
import testimonialsData from '@/content/testimonials.json';
import publicationsData from '@/content/publications.json';
import referencesData from '@/content/references.json';
import socialData from '@/content/social.json';
import contactData from '@/content/contact.json';
import navigationData from '@/content/navigation.json';
import seoData from '@/content/seo.json';
import githubStatsData from '@/content/github-stats.json';
import type {
  Profile,
  Hero,
  About,
  ExperienceEntry,
  EducationEntry,
  ProjectEntry,
  SkillGroup,
  Certification,
  Achievement,
  Testimonial,
  Publication,
  Reference,
  SocialLink,
  ContactContent,
  Navigation,
  SeoConfig,
  GithubStatsPlaceholder,
} from '@/types/content';

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getHero(): Hero {
  return heroData as Hero;
}

export function getAbout(): About {
  return aboutData as About;
}

export function getExperience(): ExperienceEntry[] {
  return experienceData as ExperienceEntry[];
}

export function getEducation(): EducationEntry[] {
  return educationData as EducationEntry[];
}

export function getProjects(): ProjectEntry[] {
  return projectsData as ProjectEntry[];
}

export function getFeaturedProjects(): ProjectEntry[] {
  return getProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getSkills(): SkillGroup[] {
  return skillsData as SkillGroup[];
}

export function getCertifications(): Certification[] {
  return certificationsData as Certification[];
}

export function getAchievements(): Achievement[] {
  return achievementsData as Achievement[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}

export function getPublications(): Publication[] {
  return publicationsData as Publication[];
}

export function getReferences(): Reference[] {
  return referencesData as Reference[];
}

export function getSocialLinks(): SocialLink[] {
  return socialData as SocialLink[];
}

export function getContact(): ContactContent {
  return contactData as ContactContent;
}

export function getNavigation(): Navigation {
  return navigationData as Navigation;
}

export function getSeo(): SeoConfig {
  return seoData as SeoConfig;
}

export function getGithubStatsPlaceholder(): GithubStatsPlaceholder {
  return githubStatsData as GithubStatsPlaceholder;
}
