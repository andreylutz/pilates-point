'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { programs } from '@/entities/program'
import { CarouselControls } from '@/shared/ui/carousel'

export default function ProgramsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [slideOffset, setSlideOffset] = useState(0)
  const maxIndex = Math.max(0, programs.length - visibleSlides)
  const pagesCount = maxIndex + 1

  useEffect(() => {
    const updateVisibleSlides = () => {
      const track = trackRef.current
      const firstCard = track?.querySelector<HTMLElement>('.program-card')

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
    <section id="programs" className="surface-section section-pad">
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
            <CarouselControls
              activeIndex={activeIndex}
              count={pagesCount}
              label="Направления"
              onNext={showNext}
              onPrev={showPrev}
              onSelect={(index) => setActiveIndex(Math.min(index, maxIndex))}
            />
        </div>
        <div className="carousel-window">
          <div
            ref={trackRef}
            className="carousel-track card-grid"
            style={{ transform: `translateX(-${activeIndex * slideOffset}px)` }}
          >
            {programs.map((program) => (
              <article key={program.title} className="program-card">
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
        <CarouselControls
          activeIndex={activeIndex}
          className="mobile-carousel-controls"
          count={pagesCount}
          label="Направления"
          onNext={showNext}
          onPrev={showPrev}
          onSelect={(index) => setActiveIndex(Math.min(index, maxIndex))}
        />
      </div>
    </section>
  )
}
