'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { trainers } from '@/entities/trainer'
import { CarouselControls } from '@/shared/ui/carousel'

export default function TrainersSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [slideOffset, setSlideOffset] = useState(0)
  const maxIndex = Math.max(0, trainers.length - visibleSlides)
  const pagesCount = maxIndex + 1

  useEffect(() => {
    const updateVisibleSlides = () => {
      const track = trackRef.current
      const firstCard = track?.querySelector<HTMLElement>('.trainer-card')

      if (track && firstCard) {
        const styles = window.getComputedStyle(track)
        const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')
        setSlideOffset(firstCard.offsetWidth + gap)
      }

      if (window.innerWidth <= 620) {
        setVisibleSlides(1)
        return
      }

      if (window.innerWidth <= 950) {
        setVisibleSlides(2)
        return
      }

      setVisibleSlides(3)
    }

    updateVisibleSlides()
    window.addEventListener('resize', updateVisibleSlides)

    return () => window.removeEventListener('resize', updateVisibleSlides)
  }, [])

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex))
  }, [maxIndex])

  const showPrev = () => {
    setActiveIndex((index) => (index === 0 ? maxIndex : index - 1))
  }

  const showNext = () => {
    setActiveIndex((index) => (index === maxIndex ? 0 : index + 1))
  }

  return (
    <section id="trainers" className="surface-section section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span></span> тренеры
            </div>
            <h2>
              ПРОФЕССИОНАЛЫ,
              <br />
              КОТОРЫЕ ВДОХНОВЛЯЮТ
            </h2>
          </div>
          <div className="section-actions">
            <a href="#trainers">Смотреть всех тренеров →</a>
            <CarouselControls
              activeIndex={activeIndex}
              count={pagesCount}
              label="Тренеры"
              onNext={showNext}
              onPrev={showPrev}
              onSelect={(index) => setActiveIndex(Math.min(index, maxIndex))}
            />
          </div>
        </div>

        <div className="carousel-window">
          <div
            ref={trackRef}
            className="carousel-track trainer-grid"
            style={{ transform: `translateX(-${activeIndex * slideOffset}px)` }}
          >
            {trainers.map((trainer) => (
              <article key={trainer.name} className="trainer-card">
                <Image src={trainer.img} alt={trainer.name} sizes="(max-width: 620px) 78vw, (max-width: 950px) 44vw, 28vw" />
                <div>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                  <a href="#booking">Подробнее →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <CarouselControls
          activeIndex={activeIndex}
          className="mobile-carousel-controls"
          count={pagesCount}
          label="Тренеры"
          onNext={showNext}
          onPrev={showPrev}
          onSelect={(index) => setActiveIndex(Math.min(index, maxIndex))}
        />
      </div>
    </section>
  )
}
