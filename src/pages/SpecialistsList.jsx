import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import DoctorCard from '../components/ui/DoctorCard.jsx'
import PromoCard from '../components/ui/PromoCard.jsx'
import { doctors } from '../data/doctors.js'
import { departments } from '../data/departments.js'
import { promos } from '../data/schedule.js'

const audienceTabs = [
  { id: 'all', label: 'Все' },
  { id: 'adult', label: 'Взрослые' },
  { id: 'child', label: 'Детские' },
]

export default function SpecialistsList() {
  const [query, setQuery] = useState('')
  const [audience, setAudience] = useState('all')
  const [departmentSlug, setDepartmentSlug] = useState('all')

  const doctorDepartmentSlugs = useMemo(
    () => Array.from(new Set(doctors.map((d) => d.departmentSlug))),
    [],
  )

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesQuery = d.name.toLowerCase().includes(query.trim().toLowerCase())
      const matchesAudience = audience === 'all' || d.audience === audience
      const matchesDepartment = departmentSlug === 'all' || d.departmentSlug === departmentSlug
      return matchesQuery && matchesAudience && matchesDepartment
    })
  }, [query, audience, departmentSlug])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((doctor) => {
      if (!map.has(doctor.department)) map.set(doctor.department, [])
      map.get(doctor.department).push(doctor)
    })
    return Array.from(map.entries())
  }, [filtered])

  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Специалисты' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Специалисты</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск врача по имени"
            className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-4 text-sm focus:border-teal focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-full border border-line bg-white p-1">
            {audienceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setAudience(tab.id)}
                className={[
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  audience === tab.id ? 'bg-teal text-white' : 'text-ink hover:bg-paper',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <select
            value={departmentSlug}
            onChange={(e) => setDepartmentSlug(e.target.value)}
            aria-label="Фильтр по отделению"
            className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink focus:border-teal focus:outline-none"
          >
            <option value="all">Все отделения</option>
            {departments
              .filter((d) => doctorDepartmentSlugs.includes(d.slug))
              .map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      {grouped.length === 0 ? (
        <p className="rounded-card border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
          По вашему запросу врачи не найдены. Попробуйте изменить фильтры.
        </p>
      ) : (
        grouped.map(([departmentName, group]) => (
          <div key={departmentName} className="mb-10">
            <h2 className="mb-4 font-display text-xl text-ink">{departmentName}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        ))
      )}

      <div className="mt-12">
        <h2 className="mb-4 font-display text-xl text-ink">Акции</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {promos.map((promo) => (
            <PromoCard key={promo.slug} to={`/akcii-i-specpredlozheniya/${promo.slug}`} title={promo.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
