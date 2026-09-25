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
          background: '#F1EEE0',
          color: '#1F4229',
          padding: '72px',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 38, color: '#1F4229' }}>Pilates Point</div>
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
          <div style={{ marginTop: 32, fontSize: 34, color: '#1F4229' }}>
            Pilates Reformer, Mat, МФР, Stretch и йога для спины
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 28, color: '#1F4229' }}>
          <span>ул. Докучаева, 23</span>
          <span>+7 (919) 443-00-23</span>
        </div>
      </div>
    ),
    size,
  )
}
