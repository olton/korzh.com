import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const news = await getCollection('news');
    return rss({
        title: 'Korzh’s News',
        description: 'Korzh.com - Tools from Developers for Developers',
        site: context.site,
        items: news.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/news/`,
        })),
    });
}