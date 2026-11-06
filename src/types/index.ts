export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend';
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    isPrimary?: boolean;
  }[];
}

export interface TimelineItem {
  period: string;
  role: string;
  companyOrContext: string;
  description: string;
  tags: string[];
}

