import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { departments } from '../data/departments.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function DepartmentSub() {
  const { slug, sub } = useParams()
  const department = departments.find((d) => d.slug === slug)
  const subdirection = department?.subdirections?.find((s) => s.slug === sub)
  const { open } = useAppointmentModal()

  if (!department || !subdirection) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Направление не найдено</p>
        <Link to="/otdeleniya" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к отделениям
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Отделения', href: '/otdeleniya' },
          { label: department.name, href: `/otdeleniya/${slug}` },
          { label: subdirection.name },
        ]}
      />
      <div className="max-w-2xl rounded-card border border-line bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-deep">{department.name}</p>
        <h1 className="mt-1 font-display text-2xl text-ink">{subdirection.name}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{subdirection.summary}.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Подробную программу диагностики и лечения по этому направлению уточняйте у врача отделения «{department.name}»
          на первичной консультации.
        </p>
        <PrimaryButton className="mt-6" onClick={() => open(subdirection.name)}>
          Записаться
        </PrimaryButton>
      </div>
    </div>
  )
}
