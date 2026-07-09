import { getAllPosts } from '@/lib/articles';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPosts({});

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${SITE_URL}${post.href}</link>
      <guid isPermaLink="true">${SITE_URL}${post.href}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.meta.summary ?? ''}]]></description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Writing</title>
    <link>${SITE_URL}/posts</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
