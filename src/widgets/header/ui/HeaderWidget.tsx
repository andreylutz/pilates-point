'use client'

import { useState } from 'react'
import { BookingButton } from '@/features/booking-session'

const navigation = [
  { href: '#about', label: 'О студии' },
  { href: '#programs', label: 'Направления' },
  { href: '#trainers', label: 'Тренеры' },
  { href: '#programs', label: 'Цены' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

export default function HeaderWidget() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header container">
      <a className="brand" href="#" aria-label="Pilates Point — место, где начинается пилатес">
        <img src="/brand/pilates-point-mark-dark.svg" alt="" />
      </a>

      <nav className={menuOpen ? 'open' : undefined}>
        {navigation.map((item) => (
          <a key={`${item.href}-${item.label}`} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <BookingButton className="pill desktop-book" href="#booking" label="Записаться" />
      <button
        className="menu-btn"
        aria-label="Открыть меню"
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}
