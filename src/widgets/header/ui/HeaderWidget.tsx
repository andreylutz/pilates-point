"use client";

import { useEffect, useState } from "react";
import { BookingButton } from "@/features/booking-session";

const navigation = [
  { href: "#about", label: "Студия" },
  { href: "#programs", label: "Практики" },
  { href: "#trainers", label: "Команда" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function HeaderWidget() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header container">
      <a
        className="site-brand"
        href="#top"
        aria-label="Pilates Point — на главную"
        onClick={() => setMenuOpen(false)}
      >
        <img src="/brand/pilates-point-mark-dark.svg" alt="" />
        <span>
          PILATES
          <br />
          POINT
        </span>
      </a>
      <nav
        className={menuOpen ? "site-nav is-open" : "site-nav"}
        id="main-navigation"
        aria-label="Основная навигация"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <BookingButton
          className="button button-mobile-nav"
          href="#booking"
          label="Записаться"
        />
      </nav>
      <BookingButton
        className="button button-header"
        href="#booking"
        label="Записаться"
      />
      <button
        className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
