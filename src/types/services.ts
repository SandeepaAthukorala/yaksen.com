import { LucideIcon } from "lucide-react";

export interface ServiceTool {
  name: string;
  description: string;
  icon: LucideIcon;
  techStack?: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  url: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  image: string;
  comingSoon?: boolean;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: ProcessStep[];
  tools: ServiceTool[];
  projects: Project[] | null;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
}
