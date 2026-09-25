import Image from "next/image";
import { images } from "@/shared/assets/images";

const advantages = [
  {
    number: "01",
    title: "Внимание к вам",
    text: "В группе до пяти человек тренер успевает заметить нюансы движения и подсказать именно вам.",
  },
  {
    number: "02",
    title: "Комфортный старт",
    text: "Можно прийти без подготовки. Мы поможем выбрать нагрузку под ваш опыт и самочувствие.",
  },
  {
    number: "03",
    title: "Место для себя",
    text: "Здесь можно замедлиться, услышать тело и выйти с занятия с приятным ощущением опоры.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">01 / Пространство</p>
          <h2>
            Не просто тренировка.
            <br />
            <em>Время для себя.</em>
          </h2>
        </div>
        <div className="about-layout">
          <div className="about-photo" data-reveal="image">
            <Image
              src={images.class4}
              alt="Светлый зал студии Pilates Point"
              sizes="(max-width: 800px) 100vw, 48vw"
            />
            <span>Вдохните. Вы уже на месте.</span>
          </div>
          <div className="about-content" data-reveal>
            <p className="about-lead">
              Pilates Point — камерная студия, в которой движение становится
              способом почувствовать себя лучше.
            </p>
            <p className="about-body">
              Мы соединяем точную технику, внимательное сопровождение и
              спокойную атмосферу. Каждый приходит со своей целью — и находит
              подходящий ритм.
            </p>
            <div className="advantage-list">
              {advantages.map((item) => (
                <div className="advantage" key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
