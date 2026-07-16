/**
 * Minimal BibTeX parser — runs at build time only.
 * BibTeX is the source of truth for bibliographic data (design.md §11.1);
 * presentation extras (thumbnail, links, tags…) live in metadata.yaml.
 */

export interface BibEntry {
  /** citation key, e.g. tian2022capplanner */
  id: string;
  /** @type, e.g. inproceedings / article / misc */
  bibtexType: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  note?: string;
  doi?: string;
  url?: string;
  arxiv?: string;
  award?: string;
  abstract?: string;
  venueType: 'journal' | 'conference' | 'workshop' | 'preprint' | 'thesis' | 'other';
  /** raw entry text, for the "Copy BibTeX" button */
  raw: string;
}

const CONF_KEYWORDS =
  /\b(conference|proceedings|IROS|ICRA|CVPR|ICCV|ECCV|NeurIPS|ICML|ICLR|AAAI|IJCAI|ACL|EMNLP|RSS|CoRL|ROBIO|CASE|Humanoids)\b/i;

export function parseBibTeX(bibtex: string): BibEntry[] {
  const entries: BibEntry[] = [];
  const entryRegex = /@(\w+)\s*\{\s*([^,]*?)\s*,([\s\S]*?)(?=\n\s*@|\s*$)/g;
  let match: RegExpExecArray | null;

  while ((match = entryRegex.exec(bibtex)) !== null) {
    const bibtexType = match[1]!.toLowerCase();
    if (['comment', 'preamble', 'string'].includes(bibtexType)) continue;
    const id = match[2]!.trim();
    const body = match[3]!;

    const fields = parseFields(body);
    const venue =
      fields.journal || fields.booktitle || fields.school || fields.howpublished || '';

    entries.push({
      id,
      bibtexType,
      title: cleanTeX(fields.title || ''),
      authors: parseAuthors(fields.author || ''),
      venue: cleanTeX(venue),
      year: parseInt(fields.year || '0', 10),
      month: fields.month,
      note: fields.note ? cleanTeX(fields.note) : undefined,
      doi: fields.doi,
      url: fields.url,
      arxiv: fields.arxiv || fields.eprint,
      award: fields.award ? cleanTeX(fields.award) : undefined,
      abstract: fields.abstract ? cleanTeX(fields.abstract) : undefined,
      venueType: classify(bibtexType, venue, fields.note ?? ''),
      raw: match[0].trim(),
    });
  }
  return entries.sort((a, b) => b.year - a.year);
}

function classify(type: string, venue: string, note: string): BibEntry['venueType'] {
  const v = `${venue} ${note}`.toLowerCase();
  if (v.includes('workshop')) return 'workshop';
  if (v.includes('arxiv') || v.includes('preprint') || v.includes('under review'))
    return 'preprint';
  if (type === 'inproceedings' || type === 'conference') return 'conference';
  if (type === 'article') return CONF_KEYWORDS.test(venue) ? 'conference' : 'journal';
  if (type === 'misc' || type === 'unpublished') return 'preprint';
  if (type === 'phdthesis' || type === 'mastersthesis') return 'thesis';
  return 'other';
}

/** Parse `key = {value}` / `key = "value"` / `key = 1234` pairs, brace-aware. */
function parseFields(body: string): Record<string, string> {
  const fields: Record<string, string> = {};
  const re = /(\w+)\s*=\s*/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(body)) !== null) {
    const key = m[1]!.toLowerCase();
    let i = re.lastIndex;
    while (i < body.length && /\s/.test(body[i]!)) i++;
    if (i >= body.length) break;

    let value = '';
    const ch = body[i]!;
    if (ch === '{') {
      let depth = 0;
      const start = i;
      for (; i < body.length; i++) {
        if (body[i] === '{') depth++;
        else if (body[i] === '}') {
          depth--;
          if (depth === 0) {
            i++;
            break;
          }
        }
      }
      value = body.slice(start + 1, i - 1);
    } else if (ch === '"') {
      i++;
      const start = i;
      while (i < body.length && body[i] !== '"') i++;
      value = body.slice(start, i);
      i++;
    } else {
      const start = i;
      while (i < body.length && /[\w.\-/]/.test(body[i]!)) i++;
      value = body.slice(start, i);
    }
    fields[key] = value.replace(/\s+/g, ' ').trim();
    re.lastIndex = i;
  }
  return fields;
}

function parseAuthors(authorStr: string): string[] {
  if (!authorStr) return [];
  return authorStr
    .split(/\s+and\s+/i)
    .map((a) => {
      const parts = a.trim().split(/\s*,\s*/);
      return cleanTeX(parts.length === 2 ? `${parts[1]} ${parts[0]}` : a.trim());
    })
    .filter((a) => a.length > 0);
}

function cleanTeX(str: string): string {
  return str
    .replace(/\\[`'^"~H.cv]\{([a-zA-Z])\}/g, '$1')
    .replace(/\\[`'^"~H.cv]([a-zA-Z])/g, '$1')
    .replace(/\{\\([a-zA-Z])\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\\textbf|\\textit|\\emph/g, '')
    .replace(/~/g, ' ')
    .replace(/\\&/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}
