import { parse as parseYAML } from 'yaml';
import softwareRaw from '../data/software.yaml?raw';
import timelineRaw from '../data/timeline.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';

export interface SoftwareItem {
  name: string;
  problem: string;
  description: string;
  repo?: string;
  docs?: string;
  paper?: string;
  category: string;
  platforms: string[];
  status: 'stable' | 'active' | 'research' | 'archived' | 'planned';
  install?: string;
  featured?: boolean;
}

export interface TimelineItem {
  date: string; // human-readable, e.g. "Sep 2023"
  sortDate: string; // ISO date for ordering
  category:
    | 'Position'
    | 'Publication'
    | 'Award'
    | 'Project'
    | 'Release'
    | 'Education'
    | 'Deployment';
  title: string;
  description: string;
  link?: string;
}

export interface CVData {
  interests: string[];
  education: {
    degree: string;
    institution: string;
    detail?: string;
    period: string;
  }[];
  positions: {
    role: string;
    org: string;
    period: string;
    detail?: string;
  }[];
  awards: { title: string; date: string; note?: string }[];
  skills: { group: string; items: string[] }[];
}

export function getSoftware(): SoftwareItem[] {
  return (parseYAML(softwareRaw) ?? []) as SoftwareItem[];
}

export function getTimeline(): TimelineItem[] {
  const items = (parseYAML(timelineRaw) ?? []) as TimelineItem[];
  return items.sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));
}

export function getCV(): CVData {
  return parseYAML(cvRaw) as CVData;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
