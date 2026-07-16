import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export async function GET(context) {
  const news = (await getCollection('news')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: `${SITE.title} — News`,
    description: SITE.description,
    site: context.site,
    items: news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.body ?? '',
      link: item.data.link ?? '/news/',
      categories: [item.data.category],
    })),
  });
}
