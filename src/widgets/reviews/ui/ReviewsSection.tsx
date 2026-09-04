'use client'

import { useEffect, useState } from 'react'
import { CarouselControls } from '@/shared/ui/carousel'

const reviews = [
  {
    text: 'Наталья, я выбираю вас как тренера из-за вашей позитивной энергии и любви к спорту! Благодаря вам, я научилась получать радость от спорта и чувствую положительные изменения в своём теле.',
    author: 'Дарья К.',
    caption: 'Клиент студии',
  },
  {
    text: 'После занятий спина стала меньше уставать, а тренировки проходят спокойно и очень внимательно. Нравится камерный формат и то, что нагрузку подбирают под состояние.',
    author: 'Алина М.',
    caption: 'Pilates Mat',
  },
  {
    text: 'Reformer оказался понятным уже на первом занятии. Тренер всё объясняет, следит за техникой и помогает почувствовать мышцы, о которых я раньше не думала.',
    author: 'Екатерина С.',
    caption: 'Pilates Reformer',
  },
]

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const showPrev = () => {
    setActiveIndex((index) => (index === 0 ? reviews.length - 1 : index - 1))
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="reviews section-pad">
      <div className="container">
        <div className="eyebrow">
          <span></span> отзывы клиентов
        </div>
        <div className="review-shell">
          <CarouselControls
            activeIndex={activeIndex}
            className="review-side-controls"
            count={reviews.length}
            label="Отзывы"
            onNext={showNext}
            onPrev={showPrev}
            onSelect={setActiveIndex}
          />
          <div className="review-window">
            <div
              className="review-track"
              style={{ transform: `translateX(${activeIndex * -100}%)` }}
            >
              {reviews.map((review) => (
                <article key={review.author} className="review-card">
                  <div className="quote">“</div>
                  <p>{review.text}</p>
                  <div className="review-author">
                    <strong>{review.author}</strong>
                    <small>{review.caption}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="review-decor" aria-hidden="true">
            <span>✶</span>
            <span>✶</span>
            <span>✶</span>
          </div>
        </div>
      </div>
    </section>
  )
}
