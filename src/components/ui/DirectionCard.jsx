import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function DirectionCard({ to, title, summary }) {
  return (
    <Link
      to={to}
      className="group block rounded-card border border-line bg-white p-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-cardHover"
    >
      <h3 className="font-display text-base font-semibold text-ink group-hover:text-teal">{title}</h3>
      {summary && <p className="mt-2 text-sm text-muted">{summary}</p>}
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal">
        Подробнее
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
