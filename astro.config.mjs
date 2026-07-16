// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lonelyfluency.github.io',
  // Deployed as a GitHub Pages *user* page (repo: lonelyfluency.github.io),
  // so the site lives at the domain root. If you ever deploy to a project
  // repo instead, set `base: '/<repo-name>'`.
  integrations: [mdx(), sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
