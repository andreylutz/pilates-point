import Image from "next/image";
import { BookingButton } from "@/features/booking-session";
import { images } from "@/shared/assets/images";

export default function BookingSection() {
  return (
    <section id="booking" className="booking-section">
      <div className="container booking-layout">
        <div className="booking-copy">
          <p className="eyebrow">Ваш первый шаг</p>
          <h2>
            Начните
            <br />с одного <em>движения.</em>
          </h2>
          <p>
            Расскажите, что вам хочется изменить. Мы поможем выбрать подходящее
            занятие и комфортное время.
          </p>
          <BookingButton
            className="button button-light"
            href="#contacts"
            label="Связаться со студией"
          />
          <span className="booking-price">Первое занятие — от 500 ₽</span>
        </div>
        <div className="booking-image">
          <Image
            src={images.booking}
            alt="Занятие пилатесом в студии"
            sizes="(max-width: 700px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
