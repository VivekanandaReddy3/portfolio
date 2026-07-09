import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/articles';
import { SITE_URL } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts({});

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: new Date(post.date),
  }));

  const pages: MetadataRoute.Sitemap = ['', '/info', '/posts', '/contact'].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  return [...pages, ...postEntries];
}
