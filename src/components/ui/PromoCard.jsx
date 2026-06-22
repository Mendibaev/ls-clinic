import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PromoCard({ to, title }) {
  return (
    <Link
      to={to}
      className="group flex min-w-[260px] flex-col justify-between rounded-card bg-teal-deep p-5 text-white shadow-card transition-transform duration-150 hover:-translate-y-0.5"
    >
      <p className="font-display text-lg leading-snug">{title}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-light">
        Подробнее
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
