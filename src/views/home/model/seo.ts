export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Pilates Point',
  description:
    'Камерная студия пилатеса, йоги и растяжки в Перми с тренировками в малых группах.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pilates-point.ru',
  telephone: '+7 919 443-00-23',
  priceRange: 'от 500 RUB',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Пермь',
    streetAddress: 'ул. Докучаева, 23',
    addressCountry: 'RU',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '22:00',
    },
  ],
  sameAs: [],
}
