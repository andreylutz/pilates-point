'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { trainers } from '@/entities/trainer'

export default function TrainersSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const movingRef = useRef(false)
  const [selectedTrainer, setSelectedTrainer] = useState<(typeof trainers)[number] | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const [moveDirection, setMoveDirection] = useState<-1 | 0 | 1>(0)
  const [slideOffset, setSlideOffset] = useState(0)
  const loopedTrainers = Array.from({ length: trainers.length + 2 }, (_, index) => {
    const itemIndex = (startIndex + index - 1 + trainers.length) % trainers.length
    return trainers[itemIndex]
  })

  const moveCarousel = useCallback((direction: -1 | 1) => {
    if (movingRef.current) {
      return
    }

    movingRef.current = true
    setMoveDirection(direction)
  }, [])

  useEffect(() => {
    if (!selectedTrainer) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTrainer(null)
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedTrainer])

  useEffect(() => {
    const updateSlideOffset = () => {
      const track = trackRef.current
      const firstCard = track?.querySelector<HTMLElement>('.trainer-card')

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
    }, 5600)

    return () => window.clearInterval(timer)
  }, [moveCarousel])

  const normalizeLoop = () => {
    setStartIndex((index) => (index + moveDirection + trainers.length) % trainers.length)
    setMoveDirection(0)
    movingRef.current = false
  }

  return (
    <section id="trainers" className="surface-section section-pad carousel-section">
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
            <a href="#booking">Записаться к тренеру →</a>
          </div>
        </div>

        <div className="edge-carousel">
          <button className="edge-carousel-button prev" type="button" aria-label="Предыдущие тренеры" onClick={() => moveCarousel(-1)}>
            ‹
          </button>
          <div className="carousel-window">
            <div
              ref={trackRef}
              className={`carousel-track circular-track trainer-grid${moveDirection === 0 ? '' : ' is-moving'}`}
              style={{
                transform: `translateX(-${(moveDirection + 1) * slideOffset}px)`,
              }}
              onTransitionEnd={(event) => {
                if (event.currentTarget === event.target) {
                  normalizeLoop()
                }
              }}
            >
              {loopedTrainers.map((trainer, index) => (
                <article key={`${trainer.name}-${index}`} className="trainer-card">
                  <Image src={trainer.img} alt={trainer.name} sizes="(max-width: 620px) 78vw, (max-width: 950px) 44vw, 28vw" />
                  <div>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.role}</p>
                    <button type="button" onClick={() => setSelectedTrainer(trainer)}>
                      Подробнее
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button className="edge-carousel-button next" type="button" aria-label="Следующие тренеры" onClick={() => moveCarousel(1)}>
            ›
          </button>
        </div>
      </div>

      {selectedTrainer && (
        <div className="trainer-modal" role="dialog" aria-modal="true" aria-label={selectedTrainer.name}>
          <button
            className="modal-backdrop"
            type="button"
            aria-label="Закрыть превью"
            onClick={() => setSelectedTrainer(null)}
          />
          <div className="trainer-preview">
            <button
              className="modal-close"
              type="button"
              aria-label="Закрыть"
              onClick={() => setSelectedTrainer(null)}
            >
              ×
            </button>
            <Image src={selectedTrainer.img} alt={selectedTrainer.name} sizes="(max-width: 760px) 100vw, 420px" />
            <div className="trainer-preview-copy">
              <div className="eyebrow">
                <span></span> тренер
              </div>
              <h3>{selectedTrainer.name}</h3>
              <strong>{selectedTrainer.role}</strong>
              <p>{selectedTrainer.description}</p>
              <div className="trainer-tags">
                {selectedTrainer.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="pill" href="#booking" onClick={() => setSelectedTrainer(null)}>
                Записаться
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
