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
  return (
    <section
      id="reviews"
      className="reviews-section hero-reviews"
      aria-labelledby="reviews-title"
    >
      <div className="hero-reviews-heading">
        <p id="reviews-title" className="eyebrow">
          04 / Отзывы
        </p>
        <p>Истории тех, кто уже выбрал движение для себя.</p>
      </div>

      <div
        className="review-marquee"
        tabIndex={0}
        aria-label="Отзывы гостей студии"
      >
        <div className="review-marquee-track">
          {[false, true].map((isDuplicate) => (
            <div
              className="review-marquee-set"
              aria-hidden={isDuplicate || undefined}
              key={isDuplicate ? "duplicate" : "original"}
            >
              {reviews.map((review) => (
                <article
                  className="review-card"
                  key={`${isDuplicate ? "copy" : "original"}-${review.author}`}
                >
                  <blockquote>«{review.text}»</blockquote>
                  <footer>
                    <strong>{review.author}</strong>
                    <span>{review.detail}</span>
                  </footer>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
