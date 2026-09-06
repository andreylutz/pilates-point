'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { trainers } from '@/entities/trainer'

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState<(typeof trainers)[number] | null>(null)
  const loopedTrainers = [...trainers, ...trainers]

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

  return (
    <section id="trainers" className="surface-section section-pad marquee-section">
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

        <div className="marquee-window">
          <div className="marquee-track trainer-grid reverse-marquee">
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
