import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            {isLast || !item.href ? (
              <span className="text-ink" aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-teal hover:underline">
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
