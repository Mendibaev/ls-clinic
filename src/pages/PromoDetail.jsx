import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { promos } from '../data/schedule.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function PromoDetail() {
  const { slug } = useParams()
  const promo = promos.find((p) => p.slug === slug)
  const { open } = useAppointmentModal()

  if (!promo) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Акция не найдена</p>
        <Link to="/akcii-i-specpredlozheniya" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к акциям
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Акции и спецпредложения', href: '/akcii-i-specpredlozheniya' },
          { label: promo.title },
        ]}
      />
      <div className="max-w-2xl rounded-card bg-teal-deep p-8 text-white">
        <h1 className="font-display text-2xl">{promo.title}</h1>
        <p className="mt-2 text-sm text-amber-light">Действует до: {promo.validUntil}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/85">{promo.conditions}</p>
        <PrimaryButton className="mt-6" onClick={() => open(promo.title)}>
          Записаться по акции
        </PrimaryButton>
      </div>
    </div>
  )
}
