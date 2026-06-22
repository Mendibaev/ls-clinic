import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import LinkCard from '../components/ui/LinkCard.jsx'
import AppointmentForm from '../components/ui/AppointmentForm.jsx'
import { departments } from '../data/departments.js'

export default function DepartmentsList() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Отделения' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Отделения</h1>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {departments.map((d) => (
          <LinkCard key={d.slug} to={`/otdeleniya/${d.slug}`} title={d.name} summary={d.summary} />
        ))}
      </div>

      <div className="mt-10 max-w-md rounded-card border border-line bg-white p-6">
        <h2 className="mb-4 font-display text-lg text-ink">Запишитесь на прием!</h2>
        <AppointmentForm />
      </div>
    </div>
  )
}
