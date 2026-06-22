import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import BenefitsList from '../components/ui/BenefitsList.jsx'
import AppointmentForm from '../components/ui/AppointmentForm.jsx'
import { corporateText } from '../data/clinicInfo.js'

const corporateBenefits = [
  'Программы ДМС для сотрудников',
  'Выездная диагностика на территории компании',
  'Персональный менеджер',
  'Гибкая отчётность для бухгалтерии',
]

export default function Corporate() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Корпоративный отдел' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Корпоративный отдел</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="space-y-4 text-sm leading-relaxed text-ink">
            {corporateText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <BenefitsList items={corporateBenefits} />
        </div>
        <div className="h-fit rounded-card border border-line bg-white p-6">
          <h2 className="mb-4 font-display text-lg text-ink">Оставить заявку для компании</h2>
          <AppointmentForm subject="Корпоративное обслуживание" />
        </div>
      </div>
    </div>
  )
}
