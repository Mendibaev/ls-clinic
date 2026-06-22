import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import { privacyPolicySections } from '../data/clinicInfo.js'

export default function PrivacyPolicy() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Политика конфиденциальности' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Политика конфиденциальности</h1>
      <div className="max-w-2xl space-y-6">
        {privacyPolicySections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-2 font-display text-lg text-ink">{section.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
