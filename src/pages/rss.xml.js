import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
  const reviews = await getCollection('reviews');
  const items = [...posts, ...reviews].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

	return rss({
		title: 'Tim Sawatsky',
		description: 'Pastoral and contemplative resources.',
		site: context.site || 'https://timsawatsky.ca',
		items: items.map((item) => ({
      title: item.data.title,
      pubDate: item.data.pubDate,
      description: item.data.description,
      link: `/${item.collection}/${item.id}/`,
    })),
	});
}
