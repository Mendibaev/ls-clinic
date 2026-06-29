import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import BranchCard from '../components/ui/BranchCard.jsx'
import { branches } from '../data/branches.js'

export default function BranchesList() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Филиалы' }]} />
      <h1 className="mb-2 font-display text-3xl text-ink">Наши филиалы</h1>
      <p className="mb-8 max-w-2xl text-muted">
        2 филиала в удобных районах Алматы. Диагностика, лечение, операции, реабилитация и
        прикрепление по ОСМС.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {branches.map((branch) => (
          <BranchCard key={branch.slug} branch={branch} />
        ))}
      </div>
    </div>
  )
}
