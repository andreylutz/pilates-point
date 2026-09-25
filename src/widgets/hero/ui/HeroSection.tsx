import { BookingButton } from "@/features/booking-session";
import type { ReactNode } from "react";

type HeroSectionProps = {
  children?: ReactNode;
};

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="hero-content container">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          Камерная студия пилатеса <span>·</span> Пермь
        </p>
        <h1>
          Движение
          <br />в ритме <em>себя.</em>
        </h1>
        <p className="hero-description">
          Пилатес, йога и забота о теле в пространстве, где вам не нужно никуда
          спешить.
        </p>
        <div className="hero-actions">
          <BookingButton
            className="button button-light"
            href="#booking"
            label="На первое занятие"
          />
          <a className="text-link text-link-light" href="#programs">
            Посмотреть направления <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {children ? <div className="hero-review-slot">{children}</div> : null}

      <div className="hero-bottom">
        <span>Сила в каждом движении</span>
        <a href="#about">
          Листайте вниз <span aria-hidden="true">↓</span>
        </a>
        <span>Пилатес · Йога · Восстановление</span>
      </div>
    </div>
  );
}
