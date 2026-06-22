import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'
import PrimaryButton from './PrimaryButton.jsx'

const slides = [
  {
    eyebrow: 'LS Clinic Almaty',
    title: 'Многопрофильная клиника международного уровня',
    caption: 'Более 100 врачей · приём ежедневно 08:00–20:00',
  },
  {
    eyebrow: 'Специалисты',
    title: 'Опытные врачи более 20 направлений',
    caption: 'Запись на приём онлайн и по телефону',
  },
  {
    eyebrow: 'Диагностика',
    title: 'МРТ, КТ и УЗИ на собственном оборудовании',
    caption: 'Результат в день обращения',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const { open } = useAppointmentModal()

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <section className="relative overflow-hidden bg-teal-deep text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 85% 75%, rgba(200,134,46,0.35), transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="container relative py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-light">{slide.eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">{slide.title}</h1>
        <p className="mt-4 max-w-md text-white/80">{slide.caption}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryButton onClick={() => open()}>Записаться на прием</PrimaryButton>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Слайд ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-amber' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        aria-label="Предыдущий слайд"
        onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Следующий слайд"
        onClick={() => setIndex((current) => (current + 1) % slides.length)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  )
}
