import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import { charityText } from '../data/clinicInfo.js'

export default function Charity() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Благотворительность' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Благотворительность</h1>
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-ink">
        {charityText.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
