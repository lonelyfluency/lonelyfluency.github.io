/**
 * Central site configuration.
 * Edit this file to update your identity, links, and homepage copy —
 * everything here flows into the header, hero, footer, SEO tags, and CV.
 */
export const SITE = {
  url: 'https://lonelyfluency.github.io',
  title: 'Changda Tian',
  description:
    'Changda Tian is a robotics researcher working on modular legged robot design and control — reconfigurable leg modules and learned locomotion. PhD fellow (Marie Skłodowska-Curie Actions, RAICAM) at FORTH, Greece.',

  author: {
    name: 'Changda Tian',
    /** Used to bold your name in publication author lists. */
    nameVariants: ['Changda Tian', 'C. Tian', 'Tian, Changda'],
    position: 'PhD Fellow · Marie Skłodowska-Curie Actions (RAICAM)',
    affiliation: 'FORTH & University of Crete',
    affiliationUrl: 'https://www.ics.forth.gr/cvrl/',
    location: 'Heraklion, Greece',
    email: 'dada@ics.forth.gr',
    photo: '/images/profile.png',
  },

  /** One-sentence research statement shown in the hero. */
  statement:
    'I design and control modular legged robots — reconfigurable leg modules with learned controllers that adapt to every body they can become.',

  /** Short topic line under the statement. */
  topics: ['Modular Legged Robots', 'Robot Design & Control', 'Reinforcement Learning', 'Sim-to-Real'],

  social: {
    github: 'https://github.com/lonelyfluency',
    scholar: '', // add your Google Scholar profile URL
    linkedin: '', // add your LinkedIn URL
    orcid: '',
  },

  nav: [
    { label: 'Research', href: '/research/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Software', href: '/software/' },
    { label: 'News', href: '/news/' },
    { label: 'About', href: '/about/' },
  ],
} as const;
