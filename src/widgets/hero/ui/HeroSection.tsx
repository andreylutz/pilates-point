import { BookingButton } from '@/features/booking-session'

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

        <aside className="hero-panel" aria-label="Форматы занятий">
          <div className="hero-panel-top">
            <span>01</span>
            <p>Персональное внимание к технике на каждом занятии</p>
          </div>
          <div className="hero-panel-list">
            <div>
              <strong>Pilates Mat</strong>
              <span>мягкий старт и контроль корпуса</span>
            </div>
            <div>
              <strong>Reformer</strong>
              <span>оборудование для точной нагрузки</span>
            </div>
            <div>
              <strong>Stretch & МФР</strong>
              <span>мобильность, восстановление, лёгкость</span>
            </div>
          </div>
          <a className="hero-panel-link" href="#booking">Первое занятие от 500 руб.</a>
        </aside>
      </div>
    </>
  )
}
