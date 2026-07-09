import { ImageResponse } from 'next/og';
import { loadSaans } from '@/lib/og-fonts';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const saans = await loadSaans(600);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: '#fbfcff',
          fontFamily: 'Saans',
          fontSize: 108,
          paddingBottom: 10,
        }}
      >
        v
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Saans', data: saans, weight: 600, style: 'normal' }],
    }
  );
}
