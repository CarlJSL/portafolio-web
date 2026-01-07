import { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Skill {
  category: string;
  icon: ReactNode;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  color: string;
  icon: ReactNode;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isMobile?: boolean; // Nueva propiedad para proyectos móviles
}

export interface NavItem {
  label: string;
  href: string;
}

// Re-export Flutter types for convenience
export type { FlutterSkillCategory, FeaturedProject } from './flutter';
