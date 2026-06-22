import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react'
import { addresses } from '../../data/clinicInfo.js'

const columns = [
  {
    title: 'Услуги',
    links: [
      ['МРТ', '/uslugi/mrt'],
      ['КТ', '/uslugi/kt'],
      ['УЗИ', '/uslugi/uzi'],
      ['Все услуги', '/uslugi'],
    ],
  },
  {
    title: 'Анализы',
    links: [
      ['Общеклинические', '/analizy'],
      ['Биохимия крови', '/analizy'],
      ['Все анализы', '/analizy'],
    ],
  },
  {
    title: 'Отделения',
    links: [
      ['Хирургия', '/otdeleniya/hirurgiya'],
      ['Кардиология', '/otdeleniya/kardiologiya'],
      ['Все отделения', '/otdeleniya'],
    ],
  },
  {
    title: 'Пациентам',
    links: [
      ['О клинике', '/o-klinike'],
      ['Специалисты', '/specialisty'],
      ['Акции', '/akcii-i-specpredlozheniya'],
      ['Новости', '/infocentr'],
      ['Карьера', '/karera'],
      ['Контакты', '/kontakty'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-sm text-white">LS</span>
              LS Clinic Almaty
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Многопрофильный частный медицинский центр международного уровня в Алматы.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-amber-light">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="text-sm text-white/75 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-3">
          <a href="tel:+77273399900" className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" aria-hidden="true" /> +7 (727) 339-99-00 · Пн–Вс 08:00–21:00
          </a>
          <a href="mailto:info@lsclinic.kz" className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" /> info@lsclinic.kz
          </a>
          <Link to="/kontakty" className="flex items-start gap-2 hover:text-white">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {addresses.map((a) => (
                <span key={a.full} className="block">{a.short}</span>
              ))}
              <span className="text-amber-light">Посмотреть на карте</span>
            </span>
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 LS Clinic Almaty</span>
          <div className="flex items-center gap-4">
            <Link to="/politika-konfidencialnosti" className="hover:text-white">Политика конфиденциальности</Link>
            <span>Разработка сайта — студия-партнёр</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
