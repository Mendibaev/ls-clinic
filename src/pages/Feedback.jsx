import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import FeedbackForm from '../components/ui/FeedbackForm.jsx'

export default function Feedback() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Обращения' }]} />
      <h1 className="mb-4 font-display text-3xl text-ink">Жалобы и предложения</h1>
      <p className="mb-8 max-w-xl text-sm text-muted">
        Все обращения рассматриваются руководством клиники лично. Опишите ситуацию максимально подробно — это
        поможет нам быстрее разобраться и стать лучше.
      </p>
      <div className="max-w-xl rounded-card border border-line bg-white p-6">
        <FeedbackForm />
      </div>
    </div>
  )
}
