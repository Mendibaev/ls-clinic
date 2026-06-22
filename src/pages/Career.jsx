import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { careerVacancies } from '../data/clinicInfo.js'

export default function Career() {
  const { open } = useAppointmentModal()

  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Карьера' }]} />
      <h1 className="mb-2 font-display text-3xl text-ink">Карьера</h1>
      <p className="mb-8 max-w-xl text-sm text-muted">
        LS Clinic растёт и приглашает в команду врачей, медицинский и административный персонал.
      </p>

      <div className="space-y-3">
        {careerVacancies.map((vacancy) => (
          <div
            key={vacancy.slug}
            className="flex flex-col gap-3 rounded-card border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="font-display text-base font-semibold text-ink">{vacancy.title}</h2>
              <p className="mt-1 text-sm text-muted">{vacancy.department} · {vacancy.type}</p>
            </div>
            <PrimaryButton size="sm" onClick={() => open(`Вакансия: ${vacancy.title}`)}>
              Откликнуться
            </PrimaryButton>
          </div>
        ))}
      </div>
    </div>
  )
}
