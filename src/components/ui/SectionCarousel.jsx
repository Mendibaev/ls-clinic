import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SectionCarousel({ title, viewAllHref, children }) {
  const trackRef = useRef(null)

  function scrollByAmount(direction) {
    const node = trackRef.current
    if (!node) return
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 600), behavior: 'smooth' })
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">{title}</h2>
          <div className="flex items-center gap-3">
            {viewAllHref && (
              <Link to={viewAllHref} className="hidden text-sm font-semibold text-teal hover:text-teal-deep sm:inline">
                Все →
              </Link>
            )}
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                aria-label="Прокрутить назад"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-teal hover:border-teal hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(1)}
                aria-label="Прокрутить вперёд"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-teal hover:border-teal hover:text-white"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={trackRef}
          className="snap-row scrollbar-none flex gap-4 overflow-x-auto pb-2"
        >
          {children}
        </div>
        {viewAllHref && (
          <Link to={viewAllHref} className="mt-5 inline-block text-sm font-semibold text-teal hover:text-teal-deep sm:hidden">
            Все →
          </Link>
        )}
      </div>
    </section>
  )
}
