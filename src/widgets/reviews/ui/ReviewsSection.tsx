"use client";

import { useState } from "react";

const reviews = [
  {
    text: "Наталья, я выбираю вас как тренера из-за вашей позитивной энергии и любви к спорту! Благодаря вам я научилась получать радость от спорта и чувствую положительные изменения в своём теле.",
    author: "Дарья К.",
    detail: "Клиент студии",
  },
  {
    text: "После занятий спина стала меньше уставать, а тренировки проходят спокойно и очень внимательно. Нравится камерный формат и то, что нагрузку подбирают под состояние.",
    author: "Алина М.",
    detail: "Pilates Mat",
  },
  {
    text: "Reformer оказался понятным уже на первом занятии. Тренер всё объясняет, следит за техникой и помогает почувствовать мышцы, о которых я раньше не думала.",
    author: "Екатерина С.",
    detail: "Pilates Reformer",
  },
];

export default function ReviewsSection() {
  const [active, setActive] = useState(0);
  const move = (step: number) =>
    setActive((index) => (index + step + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="reviews-section section-spacing">
      <div className="container review-layout">
        <div className="review-heading" data-reveal>
          <p className="eyebrow">04 / Отзывы</p>
          <h2>
            Слова, которые
            <br />
            <em>согревают.</em>
          </h2>
          <p>Самое ценное — видеть, как движение меняет жизнь к лучшему.</p>
        </div>
        <div className="review-card" aria-live="polite" data-reveal>
          <span className="review-quote" aria-hidden="true">
            “
          </span>
          <blockquote key={active}>{reviews[active].text}</blockquote>
          <div className="review-card-bottom">
            <div>
              <strong>{reviews[active].author}</strong>
              <span>{reviews[active].detail}</span>
            </div>
            <div className="review-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Предыдущий отзыв"
              >
                ←
              </button>
              <span>
                {String(active + 1).padStart(2, "0")} / 0{reviews.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Следующий отзыв"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
