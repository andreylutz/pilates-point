import { ImageResponse } from 'next/og'

export const alt = 'Pilates Point - студия пилатеса в Перми'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fbf8f3',
          color: '#183c2b',
          padding: '72px',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 38, color: '#657f57' }}>Pilates Point</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 104,
              lineHeight: 0.95,
              letterSpacing: 0,
            }}
          >
            <span>Студия пилатеса</span>
            <span>в Перми</span>
          </div>
          <div style={{ marginTop: 32, fontSize: 34, color: '#526d49' }}>
            Pilates Reformer, Mat, МФР, Stretch и йога для спины
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 28, color: '#2e3a33' }}>
          <span>ул. Петропавловская, 17</span>
          <span>+7 (999) 128-45-67</span>
        </div>
      </div>
    ),
    size,
  )
}
