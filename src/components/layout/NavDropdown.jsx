import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function NavDropdown({ label, to, items }) {
  const [expanded, setExpanded] = useState(false)
  const closeTimer = useRef(null)

  function openNow() {
    window.clearTimeout(closeTimer.current)
    setExpanded(true)
  }

  function closeSoon() {
    closeTimer.current = window.setTimeout(() => setExpanded(false), 150)
  }

  if (!items || items.length === 0) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          [
            'px-3 py-2 text-sm font-medium transition-colors',
            isActive ? 'text-teal' : 'text-ink hover:text-teal',
          ].join(' ')
        }
      >
        {label}
      </NavLink>
    )
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-teal"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {expanded && (
        <div className="absolute left-0 top-full z-40 w-72 rounded-card border border-line bg-white p-2 shadow-cardHover">
          <NavLink
            to={to}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-teal-deep hover:bg-paper"
          >
            Все — {label.toLowerCase()}
          </NavLink>
          <div className="my-1 h-px bg-line" />
          <ul className="grid max-h-80 grid-cols-1 gap-0.5 overflow-y-auto">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 text-sm transition-colors',
                      isActive ? 'bg-teal-light text-teal-deep' : 'text-ink hover:bg-paper',
                    ].join(' ')
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
