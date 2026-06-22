import { MapPin, ChevronDown } from 'lucide-react'
import { addresses } from '../../data/clinicInfo.js'

export default function AddressDropdown({ isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 whitespace-nowrap text-xs text-white/85 transition-colors hover:text-white"
      >
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        {addresses[0].short}
        <span className="text-white/55">+{addresses.length - 1}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-40 mt-2 w-72 rounded-card border border-line bg-white p-3 text-ink shadow-cardHover">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Наши адреса</p>
          <ul className="space-y-2.5">
            {addresses.map((a) => (
              <li key={a.full}>
                <a
                  href={a.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 text-sm text-ink hover:text-teal"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>{a.full}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
