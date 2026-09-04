import Image from 'next/image'
import { BookingButton } from '@/features/booking-session'
import { images } from '@/shared/assets/images'

export default function HeroSection() {
  return (
    <div className="container hero-grid">
      <a className="scroll-cue" href="#about" aria-label="Листайте вниз">
        <span>листайте вниз</span>
        <i></i>
      </a>
      <div className="hero-copy">
        <div className="eyebrow">
          <span></span> место, где начинается пилатес
        </div>
        <h1>
          PILATES
          <br />
          POINT
        </h1>
        <p>Движение, которое возвращает телу силу, а вам — лёгкость и баланс.</p>
        <BookingButton className="pill hero-button" href="#booking" label="Записаться на занятие" />
        <div className="trust">
          <div className="avatars">
            <span>👩🏻</span>
            <span>👩🏼</span>
            <span>👩🏽</span>
          </div>
          <small>
            Более 200 клиентов
            <br />
            нам доверяют
          </small>
        </div>
      </div>

      <div className="hero-visual">
        <div className="arch"></div>
        <Image src={images.hero} alt="Pilates" priority sizes="(max-width: 950px) 100vw, 690px" />
      </div>
    </div>
  )
}
