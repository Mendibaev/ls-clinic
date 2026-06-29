import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'

export default function BranchCard({ branch }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card">
      <h3 className="font-display text-xl text-ink">{branch.name}</h3>
      <p className="mt-2 flex items-start gap-1.5 text-sm text-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
        {branch.address}
      </p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
        Основные направления
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {branch.directions.map((d, i) =>
          d.slug ? (
            <li key={`${d.name}-${i}`}>
              <Link
                to={`/otdeleniya/${d.slug}`}
                className="inline-block rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink transition-colors hover:border-teal/40 hover:bg-teal-light hover:text-teal-deep"
              >
                {d.name}
              </Link>
            </li>
          ) : (
            <li key={`${d.name}-${i}`}>
              <span className="inline-block rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-muted">
                {d.name}
              </span>
            </li>
          )
        )}
      </ul>

      <div className="mt-6 pt-2">
        <Link to={`/filialy/${branch.slug}`}>
          <PrimaryButton size="sm">Подробнее о филиале</PrimaryButton>
        </Link>
      </div>
    </div>
  )
}
