import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './styles/global.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pilates-point.ru'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pilates Point - студия пилатеса в Перми',
    template: '%s | Pilates Point',
  },
  description:
    'Pilates Point - камерная студия пилатеса, йоги и растяжки в Перми. Тренировки в малых группах, Reformer, Pilates Mat, МФР и занятия для здоровья спины.',
  icons: {
    icon: '/brand/pilates-point-mark-dark.svg',
  },
  keywords: [
    'пилатес Пермь',
    'студия пилатеса',
    'Pilates Point',
    'Pilates Reformer',
    'йога для спины',
    'растяжка Пермь',
    'МФР',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Pilates Point',
    title: 'Pilates Point - студия пилатеса в Перми',
    description:
      'Камерные тренировки по пилатесу, йоге и растяжке в Перми для силы, осанки и баланса.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pilates Point',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilates Point - студия пилатеса в Перми',
    description:
      'Камерные тренировки по пилатесу, йоге и растяжке в Перми для силы, осанки и баланса.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
