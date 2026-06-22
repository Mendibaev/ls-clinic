import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PromoCard from '../components/ui/PromoCard.jsx'
import { promos } from '../data/schedule.js'

export default function PromosList() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Акции и спецпредложения' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Акции и спецпредложения</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((promo) => (
          <PromoCard key={promo.slug} to={`/akcii-i-specpredlozheniya/${promo.slug}`} title={promo.title} />
        ))}
      </div>
    </div>
  )
}
