import Image from 'next/image'
import { images } from '@/shared/assets/images'

export default function BookingSection() {
  return (
    <section id="booking" className="booking-wrap">
      <div className="container booking-card">
        <div>
          <h2>
            Сделайте шаг
            <br />
            к своему балансу
            <br />
            уже сегодня
          </h2>
          <p>Мы подберём направление и время, которые подойдут именно вам.</p>
        </div>
        <button className="pill booking-button" type="button">
          Записаться на занятие <span>›</span>
        </button>
        <Image src={images.footerDecor} alt="" sizes="260px" />
      </div>
    </section>
  )
}
