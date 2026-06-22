import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'
import PrimaryButton from './PrimaryButton.jsx'

function initials(fullName) {
  return fullName
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function DoctorCard({ doctor }) {
  const { open } = useAppointmentModal()
  const to = `/specialisty/${doctor.slug}`

  return (
    <div className="group flex flex-col rounded-card border border-line bg-white p-5 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:shadow-cardHover hover:border-teal/40">
      <Link to={to} className="flex flex-col">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-light font-display text-lg font-semibold text-teal-deep">
          {initials(doctor.name)}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-deep">{doctor.department}</p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink">{doctor.name}</h3>
        <p className="mt-1 text-sm text-muted">{doctor.position}</p>
      </Link>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
        <PrimaryButton size="sm" onClick={() => open(doctor.name)}>
          Записаться
        </PrimaryButton>
        <Link
          to={to}
          aria-label={`Профиль врача ${doctor.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-teal transition-colors group-hover:bg-teal-light"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
