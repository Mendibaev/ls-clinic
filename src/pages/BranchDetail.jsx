import { Link, useParams } from 'react-router-dom'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import DirectionCard from '../components/ui/DirectionCard.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { branches } from '../data/branches.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function BranchDetail() {
  const { slug } = useParams()
  const branch = branches.find((b) => b.slug === slug)
  const { open } = useAppointmentModal()

  if (!branch) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Филиал не найден</p>
        <Link to="/filialy" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к филиалам
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-teal-deep py-12 text-white">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Филиалы', href: '/filialy' },
              { label: branch.name },
            ]}
          />
          <h1 className="font-display text-3xl sm:text-4xl">{branch.name}</h1>
          <p className="mt-3 max-w-xl text-white/80">{branch.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton onClick={() => open()}>Записаться на прием</PrimaryButton>
            <Link to="/lechenie-gombp-i-osms">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Прикрепиться по ОСМС
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 font-display text-xl text-ink">Основные направления</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {branch.directions.map((d, i) =>
              d.slug ? (
                <DirectionCard
                  key={`${d.name}-${i}`}
                  to={`/otdeleniya/${d.slug}`}
                  title={d.name}
                />
              ) : (
                <div
                  key={`${d.name}-${i}`}
                  className="rounded-card border border-line bg-white p-5"
                >
                  <h3 className="font-display text-base font-semibold text-ink">{d.name}</h3>
                </div>
              )
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-card border border-line bg-white p-6">
            <h2 className="mb-4 font-display text-lg text-ink">Контакты филиала</h2>
            <p className="flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {branch.address}
            </p>
            <a
              href={`tel:${branch.phone.replace(/[^\d+]/g, '')}`}
              className="mt-3 flex items-center gap-2 text-sm text-ink hover:text-teal"
            >
              <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
              {branch.phone}
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Clock className="h-4 w-4 text-teal" aria-hidden="true" />
              {branch.workingHours}
            </p>
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep"
            >
              Посмотреть на карте
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-card bg-amber-light p-6">
            <h2 className="font-display text-lg text-ink">Прикрепление по ОСМС</h2>
            <p className="mt-2 text-sm text-muted">
              Прикрепитесь к филиалу и получайте медицинскую помощь по обязательному
              социальному медицинскому страхованию.
            </p>
            <Link to="/lechenie-gombp-i-osms" className="mt-4 inline-block">
              <PrimaryButton size="sm">Прикрепиться</PrimaryButton>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
