import { ImageResponse } from 'next/og';
import { loadGoogleFont, loadSaans } from '@/lib/og-fonts';
import { SITE_URL } from '@/lib/site';

export const alt = 'Vivekananda Reddy — Web & Data Science student in Germany';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const MONO_TEXT =
  'vrg. DEVOPS & CLOUD @ 1&1 MAIL MEDIA vivekananda-reddy.vercel.app · Karlsruhe, Germany';
const SERIF_TEXT = 'a web & data science student in Germany.';

export default async function Image() {
  const [saans600, mono, serif] = await Promise.all([
    loadSaans(600),
    loadGoogleFont('JetBrains+Mono:wght@500', MONO_TEXT),
    loadGoogleFont('Newsreader:ital,wght@1,500', SERIF_TEXT),
  ]);

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
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: 'JetBrains Mono',
              fontSize: 20,
              letterSpacing: 4,
              color: '#64748b',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: '#10b981',
              }}
            />
            DEVOPS &amp; CLOUD @ 1&amp;1 MAIL &amp; MEDIA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Saans',
              fontSize: 92,
              letterSpacing: -3,
              color: '#020617',
            }}
          >
            Hallo, I’m Vivek.
          </div>
          <div
            style={{
              fontFamily: 'Newsreader',
              fontStyle: 'italic',
              fontSize: 42,
              color: '#64748b',
              marginTop: 12,
            }}
          >
            {SERIF_TEXT}
          </div>
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
          <div>{SITE_URL.replace('https://', '')}</div>
          <div>Karlsruhe, Germany</div>
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
