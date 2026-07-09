import { ImageResponse } from 'next/og';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';
import { loadGoogleFont, loadSaans } from '@/lib/og-fonts';
import { SITE_URL } from '@/lib/site';

export const alt = 'Blog post by Vivekananda Reddy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllPostPaths();
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.meta.title ?? 'Writing';
  const summary = post?.meta.summary ?? '';
  const date = post ? formatDate(post.date) : '';

  const monoText = `vrg. WRITING Vivekananda Reddy ${date} ${SITE_URL.replace('https://', '')}`;

  const [saans600, mono, serif] = await Promise.all([
    loadSaans(600),
    loadGoogleFont('JetBrains+Mono:wght@500', monoText),
    loadGoogleFont('Newsreader:ital,wght@1,500', summary || ' '),
  ]);

  const titleSize = title.length > 42 ? 58 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#fbfcff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 30,
              color: '#0f172a',
            }}
          >
            vrg.
          </div>
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 20,
              letterSpacing: 4,
              color: '#94a3b8',
            }}
          >
            WRITING
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 22,
              color: '#94a3b8',
              marginBottom: 20,
            }}
          >
            {date}
          </div>
          <div
            style={{
              fontFamily: 'Saans',
              fontSize: titleSize,
              letterSpacing: -2,
              color: '#020617',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          {summary && (
            <div
              style={{
                fontFamily: 'Newsreader',
                fontStyle: 'italic',
                fontSize: 30,
                color: '#64748b',
                marginTop: 22,
                lineHeight: 1.4,
                maxWidth: 1000,
              }}
            >
              {summary.length > 160 ? `${summary.slice(0, 157)}…` : summary}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            color: '#94a3b8',
          }}
        >
          <div>Vivekananda Reddy</div>
          <div>{SITE_URL.replace('https://', '')}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Saans', data: saans600, weight: 600, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
        { name: 'Newsreader', data: serif, weight: 500, style: 'italic' },
      ],
    }
  );
}
