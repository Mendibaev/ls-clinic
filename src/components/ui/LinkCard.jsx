import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function LinkCard({ to, title, summary }) {
  return (
    <Link
      to={to}
      className="group block rounded-card border border-line bg-white p-5 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:shadow-cardHover hover:border-teal/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg leading-snug text-ink">{title}</h3>
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-teal"
          aria-hidden="true"
        />
      </div>
      {summary && <p className="mt-2 text-sm text-muted">{summary}</p>}
    </Link>
  )
}
