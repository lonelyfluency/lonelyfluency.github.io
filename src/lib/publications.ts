import { parse as parseYAML } from 'yaml';
import { parseBibTeX, type BibEntry } from './bibtex';
import bibRaw from '../content/publications/publications.bib?raw';
import metaRaw from '../content/publications/metadata.yaml?raw';

/** Presentation metadata layered on top of BibTeX (design.md §11.1). */
export interface PubMeta {
  selected?: boolean;
  order?: number;
  thumbnail?: string;
  thumbnailAlt?: string;
  summary?: string;
  project?: string;
  pdf?: string;
  code?: string;
  video?: string;
  dataset?: string;
  tags?: string[];
}

export type Publication = BibEntry & { meta: PubMeta };

const metadata: Record<string, PubMeta> = parseYAML(metaRaw) ?? {};

/** All publications, newest first, with metadata merged in. */
export function getPublications(): Publication[] {
  return parseBibTeX(bibRaw).map((entry) => ({
    ...entry,
    meta: metadata[entry.id] ?? {},
  }));
}

/** Selected publications for the homepage, by explicit order then year. */
export function getSelectedPublications(limit = 4): Publication[] {
  return getPublications()
    .filter((p) => p.meta.selected)
    .sort((a, b) => (a.meta.order ?? 99) - (b.meta.order ?? 99) || b.year - a.year)
    .slice(0, limit);
}

export function getPublicationsByYear(pubs: Publication[]): [number, Publication[]][] {
  const byYear = new Map<number, Publication[]>();
  for (const pub of pubs) {
    if (!byYear.has(pub.year)) byYear.set(pub.year, []);
    byYear.get(pub.year)!.push(pub);
  }
  return [...byYear.entries()].sort(([a], [b]) => b - a);
}
