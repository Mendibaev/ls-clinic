import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, MapPin, Phone, X } from 'lucide-react'
import { serviceCategories } from '../../data/services.js'
import { schedule } from '../../data/schedule.js'
import { departments } from '../../data/departments.js'
import { addresses } from '../../data/clinicInfo.js'
import LanguageSwitcher from './LanguageSwitcher.jsx'

function AccordionSection({ title, items, basePath, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-ink"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="pb-3 pl-2">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                to={`${basePath}/${item.slug}`}
                onClick={onNavigate}
                className="block rounded-lg px-2 py-2 text-sm text-muted hover:bg-paper hover:text-ink"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/50 lg:hidden" onClick={onClose}>
      <div
        className="flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-lg text-teal-deep">LS Clinic</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="rounded-full p-1.5 text-muted hover:bg-paper hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mb-2 space-y-1">
          {addresses.map((a) => (
            <p key={a.full} className="flex items-start gap-1.5 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {a.full}
            </p>
          ))}
        </div>
        <p className="mb-4 flex items-center gap-1.5 text-sm text-muted">
          <Phone className="h-4 w-4" aria-hidden="true" /> +7 (727) 339-99-00
        </p>

        <AccordionSection title="Услуги" items={serviceCategories} basePath="/uslugi" onNavigate={onClose} />
        <AccordionSection title="Отделения" items={departments} basePath="/otdeleniya" onNavigate={onClose} />

        <div className="flex flex-col">
          {[
            ['Анализы', '/analizy'],
            ['Специалисты', '/specialisty'],
            ['О клинике', '/o-klinike'],
            ['Контакты', '/kontakty'],
          ].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={onClose}
              className="border-b border-line py-3 text-sm font-semibold text-ink"
            >
              {label}
            </Link>
          ))}
        </div>

        <details className="mt-3">
          <summary className="cursor-pointer py-2 text-sm font-semibold text-ink">График работы</summary>
          <ul className="space-y-2 py-2 text-sm text-muted">
            {schedule.map((row) => (
              <li key={row.service} className="flex items-center justify-between">
                <span>{row.service}</span>
                <span className="text-ink">{row.hours}</span>
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
