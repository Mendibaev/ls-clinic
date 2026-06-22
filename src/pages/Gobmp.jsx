import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import { gobmpArticles } from '../data/clinicInfo.js'

export default function Gobmp() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Лечение ГОБМП и ОСМС' }]} />
      <h1 className="mb-4 font-display text-3xl text-ink">Лечение по ГОБМП и ОСМС</h1>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
        LS Clinic оказывает часть медицинских услуг бесплатно в рамках гарантированного объёма бесплатной
        медицинской помощи (ГОБМП) и обязательного социального медицинского страхования (ОСМС). Ознакомьтесь
        со статьями ниже, чтобы узнать порядок получения помощи.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {gobmpArticles.map((article) => (
          <Link
            key={article.slug}
            to="#"
            onClick={(e) => e.preventDefault()}
            className="group rounded-card border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg text-ink">{article.title}</h2>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted group-hover:text-teal" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
