import React from 'react';

export interface FlutterSkillCategory {
  category: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

export interface FeaturedProject {
  title: string;
  tech: string[];
  description: string;
  color: string;
  icon: React.ReactNode;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  screenshots?: string[];
  architecture?: string[];
  keyFeatures?: string[];
}
