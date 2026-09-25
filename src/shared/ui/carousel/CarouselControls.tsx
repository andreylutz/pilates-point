'use client'

type CarouselControlsProps = {
  activeIndex: number
  className?: string
  count: number
  label: string
  onNext: () => void
  onPrev: () => void
  onSelect?: (index: number) => void
}

export default function CarouselControls({
  activeIndex,
  className,
  count,
  label,
  onNext,
  onPrev,
  onSelect,
}: CarouselControlsProps) {
  return (
    <div className={className ? `carousel-controls ${className}` : 'carousel-controls'}>
      <button className="carousel-arrow" type="button" aria-label={`${label}: назад`} onClick={onPrev}>
        <span className="arrow-icon arrow-icon-prev" aria-hidden="true" />
      </button>
      <div className="carousel-dots" aria-label={label}>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : undefined}
            type="button"
            aria-label={`${label}: слайд ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => onSelect?.(index)}
          />
        ))}
      </div>
      <button className="carousel-arrow" type="button" aria-label={`${label}: вперёд`} onClick={onNext}>
        <span className="arrow-icon arrow-icon-next" aria-hidden="true" />
      </button>
    </div>
  )
}
