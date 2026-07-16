# Changda Tian — Personal Academic Website

A modern, maintainable academic site built with [Astro](https://astro.build) +
Tailwind CSS 4, following `design.md`: BibTeX-driven publications, Markdown
projects and research themes, first-class dark mode, and a robotics-inspired
visual identity.

## Quick start

```bash
npm install        # once
npm run dev        # live-reload dev server at http://localhost:4321
npm run build      # static production build into dist/
```

Preview the production build with uv (no Node server needed):

```bash
npm run build
uv run --no-project python -m http.server 4173 --directory dist
# open http://localhost:4173
```

## Everyday content updates

All routine updates are file edits — no HTML required.

### Add a publication

1. Append the BibTeX entry to
   [`src/content/publications/publications.bib`](src/content/publications/publications.bib).
2. (Optional) Add presentation extras under the same citation key in
   [`src/content/publications/metadata.yaml`](src/content/publications/metadata.yaml):
   `selected`, `thumbnail`, `summary`, `pdf`, `code`, `video`, `project`, `tags`.
3. Put the thumbnail in `public/images/publications/` (WebP, < 150 KB).

Venue type (journal / conference / preprint) is inferred from the entry; an
`award = {...}` field renders as an award badge. Your name is bolded
automatically (variants listed in `src/site.config.ts`).

### Add a project

Create `src/content/projects/<slug>.md` with frontmatter (see an existing file
for the full shape):

```yaml
title: ...
summary: ...           # one sentence, used on cards
date: 2026-01-01       # used for sorting
featured: true         # show on the homepage (top 3 by `order`)
variant: split         # card layout: landscape | split | compact
themes: [...]          # must match research-theme titles to cross-link
media: { hero: /images/projects/xxx.webp, heroAlt: "..." }
links: { paper: "", code: "", video: "" }
```

Body is plain Markdown (or MDX). Put images in `public/images/projects/`.

### Add news

Create `src/content/news/YYYY-MM-slug.md`:

```yaml
title: ...
date: 2026-07-01
category: Publication   # Publication | Award | Project | Talk | Release | Travel | Teaching | Position
link: /projects/xxx/    # optional
```

One or two sentences of body text. The homepage shows the 4 newest; the
archive and RSS feed include everything.

### Everything else

| What                    | Where                                          |
| ----------------------- | ---------------------------------------------- |
| Name, email, links, nav | `src/site.config.ts`                           |
| Hero statement & topics | `src/site.config.ts`                           |
| Research themes         | `src/content/research/*.md`                    |
| Software catalog        | `src/data/software.yaml`                       |
| Timeline milestones     | `src/data/timeline.yaml`                       |
| CV (education, awards…) | `src/data/cv.yaml`                             |
| About narrative         | `src/pages/about.astro`                        |
| Colors, fonts, tokens   | `src/styles/global.css`                        |
| CV PDF                  | built from `../cv/Tian_CV.tex` (`pdflatex Tian_CV.tex` ×2), then copy `Tian_CV.pdf` to `public/files/` |

## Deployment

Push this project to the `lonelyfluency.github.io` repository (as repo root).
The included GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds and
deploys on every push to `main`.

One-time setup: repo **Settings → Pages → Source → "GitHub Actions"**.

## Before going live — TODO

- [ ] Add the DOI and pages for the AIM 2026 ball-balancing paper once IEEE
      Xplore indexes the proceedings (`tian2026ballbalance` in publications.bib).
- [ ] Point the `repo:` links in `src/data/software.yaml` at real repositories.
- [ ] Add Google Scholar / LinkedIn URLs in `src/site.config.ts` (`social`).
- [ ] Replace `public/images/profile.png` if you have a newer photo.
- [ ] Optional: add thumbnails for the 2024–2026 publications
      (`public/images/publications/`, then reference them in `metadata.yaml`).
- [ ] Optional: add `public/images/og-default.png` (1200×630) for richer
      social-share previews.

## Project structure

```
src/
  site.config.ts        ← identity, links, navigation
  content.config.ts     ← content-collection schemas
  content/
    publications/       ← publications.bib + metadata.yaml
    projects/           ← one .md per project
    research/           ← one .md per research theme
    news/               ← one .md per news item
  data/                 ← software.yaml, timeline.yaml, cv.yaml
  components/           ← reusable Astro components
  layouts/BaseLayout.astro
  pages/                ← routes
public/
  images/, files/       ← static media (papers, videos, thumbnails)
```

Notes for future phases (search, notes/blog section, interactive research
map) are in `design.md` §36–37; the content model already accommodates them.
