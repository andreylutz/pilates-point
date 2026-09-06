import Image from 'next/image'
import { BookingButton } from '@/features/booking-session'
import { images } from '@/shared/assets/images'

export default function HeroSection() {
  return (
    <>
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/media/hero-video.mp4" type="video/mp4" />
        <source src="/media/hero-video.mov" type="video/quicktime" />
      </video>

      <div className="container hero-grid">
        <a className="scroll-cue" href="#about" aria-label="Листайте вниз">
          <span>листайте вниз</span>
          <i></i>
        </a>
        <div className="hero-copy">
          <div className="eyebrow">
            <span></span> камерная студия пилатеса
          </div>
          <h1>
            PILATES
            <br />
            POINT
          </h1>
          <p>Точное движение, спокойный темп и внимательные тренеры для силы, осанки и лёгкости в теле.</p>
          <div className="hero-actions">
            <BookingButton className="pill hero-button" href="#booking" label="Записаться" />
            <a className="ghost-link" href="#programs">Смотреть направления</a>
          </div>
          <div className="hero-stats" aria-label="Преимущества студии">
            <div>
              <strong>5</strong>
              <span>человек в группе</span>
            </div>
            <div>
              <strong>4</strong>
              <span>формата занятий</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>клиентов студии</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Image src={images.hero} alt="Тренировка Pilates Point" priority sizes="(max-width: 950px) 92vw, 520px" />
          <div className="hero-note">
            <span>01</span>
            <p>Персональное внимание к технике на каждом занятии</p>
          </div>
        </div>
      </div>
    </>
  )
}
