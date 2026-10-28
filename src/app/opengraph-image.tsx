import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0a0a0b',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'monospace',
            fontSize: 22,
            letterSpacing: 6,
            color: '#00d4aa',
            marginBottom: 24,
          }}
        >
          {'{S}'} · Aspiring Cloud Solution Architect
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, color: '#fafafa', lineHeight: 1.05 }}>
          SHOUMIK
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, color: '#fafafa', lineHeight: 1.05 }}>
          AGGARWAL
        </div>
        <div style={{ fontSize: 28, color: '#a1a1aa', marginTop: 28 }}>
          AI · Cloud Computing · Web Development
        </div>
      </div>
    ),
    { ...size }
  );
}
