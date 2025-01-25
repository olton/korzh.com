import rss from '@astrojs/rss';
import { g as getCollection } from './blog_DyoK8xwG.mjs';

async function GET(context) {
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

export { GET };
