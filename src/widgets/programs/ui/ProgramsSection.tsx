'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { programs } from '@/entities/program'

export default function ProgramsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const movingRef = useRef(false)
  const [startIndex, setStartIndex] = useState(0)
  const [moveDirection, setMoveDirection] = useState<-1 | 0 | 1>(0)
  const [slideOffset, setSlideOffset] = useState(0)
  const loopedPrograms = Array.from({ length: programs.length + 2 }, (_, index) => {
    const itemIndex = (startIndex + index - 1 + programs.length) % programs.length
    return programs[itemIndex]
  })

  const moveCarousel = useCallback((direction: -1 | 1) => {
    if (movingRef.current) {
      return
    }

    movingRef.current = true
    setMoveDirection(direction)
  }, [])

  useEffect(() => {
    const updateSlideOffset = () => {
      const track = trackRef.current
      const firstCard = track?.querySelector<HTMLElement>('.program-card')

      if (!track || !firstCard) {
        return
      }

      const styles = window.getComputedStyle(track)
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')
      setSlideOffset(firstCard.offsetWidth + gap)
    }

    updateSlideOffset()
    window.addEventListener('resize', updateSlideOffset)

    return () => window.removeEventListener('resize', updateSlideOffset)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      moveCarousel(1)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [moveCarousel])

  const normalizeLoop = () => {
    setStartIndex((index) => (index + moveDirection + programs.length) % programs.length)
    setMoveDirection(0)
    movingRef.current = false
  }

  return (
    <section id="programs" className="surface-section section-pad carousel-section">
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
          <div className="section-actions">
            <a href="#booking">Подобрать занятие →</a>
          </div>
        </div>
        <div className="edge-carousel">
          <button className="edge-carousel-button prev" type="button" aria-label="Предыдущие направления" onClick={() => moveCarousel(-1)}>
            <span className="arrow-icon arrow-icon-prev" aria-hidden="true" />
          </button>
          <div className="carousel-window">
            <div
              ref={trackRef}
              className={`carousel-track circular-track card-grid${moveDirection === 0 ? '' : ' is-moving'}`}
              style={{
                transform: `translateX(-${(moveDirection + 1) * slideOffset}px)`,
              }}
              onTransitionEnd={(event) => {
                if (event.currentTarget === event.target) {
                  normalizeLoop()
                }
              }}
            >
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
          <button className="edge-carousel-button next" type="button" aria-label="Следующие направления" onClick={() => moveCarousel(1)}>
            <span className="arrow-icon arrow-icon-next" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
