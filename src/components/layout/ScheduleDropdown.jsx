import { ChevronDown } from 'lucide-react'
import { schedule } from '../../data/schedule.js'

export default function ScheduleDropdown({ isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center gap-1 whitespace-nowrap text-xs text-white/85 transition-colors hover:text-white"
      >
        График работы
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-40 mt-2 w-72 rounded-card border border-line bg-white p-4 text-ink shadow-cardHover">
          <ul className="space-y-2 text-sm">
            {schedule.map((row) => (
              <li key={row.service} className="flex items-center justify-between gap-3">
                <span className="text-muted">{row.service}</span>
                <span className="font-medium text-ink">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
