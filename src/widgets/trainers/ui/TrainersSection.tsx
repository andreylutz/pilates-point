import Image from "next/image";
import { trainers } from "@/entities/trainer";

export default function TrainersSection() {
  return (
    <section id="trainers" className="trainers-section section-spacing">
      <div className="container">
        <div className="section-intro section-intro-split">
          <div>
            <p className="eyebrow">03 / Люди</p>
            <h2>
              Те, кому можно
              <br />
              <em>доверить себя.</em>
            </h2>
          </div>
          <p>
            Сильные специалисты и бережные проводники. Они помогают найти
            точность в движении и удовольствие в процессе.
          </p>
        </div>
        <div className="trainer-grid">
          {trainers.slice(0, 3).map((trainer, index) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <div className="trainer-info">
                <span>0{index + 1} / Команда</span>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link trainer-link" href="#booking">
          Познакомиться на занятии <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
