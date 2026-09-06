import Image from 'next/image'
import { programs } from '@/entities/program'

export default function ProgramsSection() {
  const loopedPrograms = [...programs, ...programs]

  return (
    <section id="programs" className="surface-section section-pad marquee-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span></span> наши направления
            </div>
            <h2>
              ПИЛАТЕС И ЙОГА
              <br />
              ДЛЯ КАЖДОГО
            </h2>
          </div>
          <a href="#booking">Подобрать занятие →</a>
        </div>
        <div className="marquee-window">
          <div className="marquee-track card-grid">
            {loopedPrograms.map((program, index) => (
              <article key={`${program.title}-${index}`} className="program-card">
                <Image src={program.img} alt={program.title} sizes="(max-width: 620px) 86vw, (max-width: 950px) 48vw, 30vw" />
                <div className="card-body">
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <a className="mini-pill" href="#booking">
                    Записаться
                  </a>
                  <small>
                    Группа до 5 человек
                    <br />
                    Стоимость от 500 руб.
                  </small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
