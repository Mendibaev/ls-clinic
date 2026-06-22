import { Link } from 'react-router-dom'

export default function NewsCard({ to, title, excerpt }) {
  return (
    <Link
      to={to}
      className="group block min-w-[260px] max-w-sm rounded-card border border-line bg-white p-5 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:shadow-cardHover"
    >
      <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-teal-light">
        <span className="font-display text-3xl text-teal/40" aria-hidden="true">+</span>
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-teal">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{excerpt}</p>
    </Link>
  )
}
