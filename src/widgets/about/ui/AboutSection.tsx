export default function AboutSection() {
  return (
    <section id="about" className="soft-section">
      <div className="container">
        <div className="eyebrow">
          <span></span> почему мы?
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <h2>
              БОЛЬШЕ,
              <br />
              ЧЕМ ПИЛАТЕС
            </h2>
            <p>
              PilatesPoint — это не просто студия пилатеса, а пространство для встречи с собой.
              Здесь движение и дыхание помогают найти баланс между телом и разумом.
            </p>
            <p>
              Студия расположена в спокойном районе, рядом с лесом, что усиливает ощущение уюта,
              уединения и единения с природой.
            </p>
          </div>
          <div className="feature-list">
            <article>
              <div className="feature-icon">01</div>
              <strong>Тренировки для любого уровня подготовки</strong>
            </article>
            <article>
              <div className="feature-icon">02</div>
              <strong>Индивидуальный план тренировок по результатам тестирования</strong>
            </article>
            <article>
              <div className="feature-icon">03</div>
              <strong>Дыхательные практики и медитации для внутреннего баланса</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
