export interface Profile {
  fullName: string;
  displayName: string;
  title: string;
  tagline: string;
  location: string;
  yearsOfExperience: number;
  availability: string;
  avatar: string;
  resumeUrl: string;
}

export interface Hero {
  greeting: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Array<{ label: string; value: string }>;
  highlights: string[];
}

export interface About {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  strengths: Array<{ title: string; description: string; icon: string }>;
  personality: string[];
  interests: string[];
  languages: Array<{ name: string; proficiency: string }>;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  companyDescription: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startYear: string;
  endYear: string;
  score: string;
  scoreScale: string;
  distinction?: string;
  department?: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  status: 'live' | 'archived' | 'in-development';
  featured: boolean;
  thumbnail: string;
  url?: string;
  repoUrl?: string;
  demoUrl?: string;
  technologies: string[];
  tags: string[];
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  icon: string;
  skills: Array<{ name: string; level?: 'expert' | 'advanced' | 'proficient' | 'familiar' }>;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  relationship: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  url?: string;
  summary: string;
}

export interface Reference {
  id: string;
  name: string;
  title: string;
  organization: string;
  email: string;
  phone?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
}

export interface ContactChannel {
  id: string;
  type: 'email' | 'phone' | 'location' | 'link';
  label: string;
  value: string;
  href?: string;
  icon: string;
  primary?: boolean;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  channels: ContactChannel[];
  availability: string;
  responseTime: string;
  preferredContact: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface Navigation {
  primary: NavigationItem[];
  footer: NavigationItem[];
}

export interface SeoConfig {
  siteName: string;
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  locale: string;
  ogImage: string;
  twitterHandle?: string;
  themeColor: {
    light: string;
    dark: string;
  };
}

export interface GithubStatsPlaceholder {
  enabled: boolean;
  username: string;
  showContributions: boolean;
  showTopLanguages: boolean;
  showStreak: boolean;
  note: string;
}
