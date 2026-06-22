import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import LogoCard from '../components/ui/LogoCard.jsx'
import { partners } from '../data/schedule.js'

export default function Partners() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Партнёры' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Партнёры</h1>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {partners.map((name) => (
          <LogoCard key={name} name={name} />
        ))}
      </div>
    </div>
  )
}
