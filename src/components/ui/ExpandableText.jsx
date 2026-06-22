import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ExpandableText({ title, text }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-card border border-line bg-white p-6">
      {title && <h2 className="mb-3 font-display text-lg text-ink">{title}</h2>}
      <p className={['text-sm leading-relaxed text-muted', !expanded && 'line-clamp-3'].filter(Boolean).join(' ')}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-deep"
      >
        {expanded ? 'Свернуть' : 'Показать ещё'}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
    </div>
  )
}
