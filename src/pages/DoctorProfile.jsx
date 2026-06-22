import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import ProfileTabs from '../components/ui/ProfileTabs.jsx'
import SectionCarousel from '../components/ui/SectionCarousel.jsx'
import LinkCard from '../components/ui/LinkCard.jsx'
import { doctors } from '../data/doctors.js'
import { serviceCategories } from '../data/services.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

function initials(fullName) {
  return fullName.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

export default function DoctorProfile() {
  const { slug } = useParams()
  const doctor = doctors.find((d) => d.slug === slug)
  const { open } = useAppointmentModal()

  if (!doctor) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Врач не найден</p>
        <Link to="/specialisty" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к специалистам
        </Link>
      </div>
    )
  }

  const recommended = serviceCategories.slice(0, 4)

  return (
    <div>
      <div className="container py-10">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Специалисты', href: '/specialisty' },
            { label: doctor.name },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="rounded-card border border-line bg-white p-6 text-center lg:text-left">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-teal-light font-display text-3xl font-semibold text-teal-deep lg:mx-0">
              {initials(doctor.name)}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-amber-deep">{doctor.department}</p>
            <h1 className="mt-1 font-display text-2xl leading-snug text-ink">{doctor.name}</h1>
            <p className="mt-1 text-sm text-muted">{doctor.position}</p>
            <p className="mt-3 text-sm text-ink">Стаж работы: {doctor.experienceYears} лет</p>
            <PrimaryButton className="mt-5 w-full" onClick={() => open(doctor.name)}>
              Записаться
            </PrimaryButton>
          </div>

          <div>
            <div className="rounded-card border border-line bg-white p-6">
              <h2 className="mb-4 font-display text-lg text-ink">Компетенции</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {doctor.competencies.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-card border border-line bg-white p-6">
              <ProfileTabs doctor={doctor} />
            </div>
          </div>
        </div>
      </div>

      <SectionCarousel title="Рекомендуем пройти" viewAllHref="/uslugi">
        {recommended.map((category) => (
          <div key={category.slug} className="snap-item w-64 shrink-0">
            <LinkCard to={`/uslugi/${category.slug}`} title={category.name} summary={category.summary} />
          </div>
        ))}
      </SectionCarousel>
    </div>
  )
}
