import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import { ContactCard, MapBlock } from '../components/ui/ContactCard.jsx'
import { schedule } from '../data/schedule.js'
import { contacts } from '../data/clinicInfo.js'

export default function Contacts() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Контакты' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Контакты</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <ContactCard contacts={contacts} />
          <div className="rounded-card border border-line bg-white p-6">
            <h2 className="mb-4 font-display text-lg text-ink">График работы по службам</h2>
            <ul className="space-y-2 text-sm">
              {schedule.map((row) => (
                <li key={row.service} className="flex items-center justify-between border-b border-line py-2 last:border-0">
                  <span className="text-muted">{row.service}</span>
                  <span className="font-medium text-ink">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MapBlock addresses={contacts.addresses} />
      </div>
    </div>
  )
}
