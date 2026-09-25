import Image from "next/image";
import { programs } from "@/entities/program";

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs-section section-spacing">
      <div className="container">
        <div className="section-intro section-intro-split">
          <div>
            <p className="eyebrow">02 / Практики</p>
            <h2>
              Найдите своё
              <br />
              <em>движение.</em>
            </h2>
          </div>
          <p>
            От мягкого знакомства с телом до глубокой работы с силой и балансом.
            Выберите то, что откликается сейчас.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => (
            <a className="program-card" href="#booking" key={program.title}>
              <div className="program-image">
                <Image
                  src={program.img}
                  alt=""
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className="program-info">
                <span className="program-number">0{index + 1}</span>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
                <span className="program-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="program-note">
          <span>Не знаете, с чего начать?</span>
          <a className="text-link" href="#booking">
            Поможем выбрать практику <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
