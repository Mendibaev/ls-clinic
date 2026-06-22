import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { serviceCategories, serviceItemsByCategory } from '../data/services.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function ServiceItem() {
  const { slug, itemSlug } = useParams()
  const category = serviceCategories.find((c) => c.slug === slug)
  const item = (serviceItemsByCategory[slug] || []).find((i) => i.slug === itemSlug)
  const { open } = useAppointmentModal()

  if (!category || !item) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Услуга не найдена</p>
        <Link to="/uslugi" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к услугам
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Услуги', href: '/uslugi' },
          { label: category.name, href: `/uslugi/${slug}` },
          { label: item.name },
        ]}
      />
      <div className="max-w-2xl rounded-card border border-line bg-white p-8">
        <h1 className="font-display text-2xl text-ink">{item.name}</h1>
        <p className="mt-1 text-sm text-muted">Раздел: {category.name}</p>
        <p className="mt-6 font-display text-3xl text-teal-deep tabular-nums">
          {item.price > 0 ? `${item.price.toLocaleString('ru-RU')} ₸` : 'Цена уточняется на приёме'}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Подробное описание этой услуги уточняется. Запишитесь на приём — администратор расскажет
          о подготовке и сроках получения результата.
        </p>
        <PrimaryButton className="mt-6" onClick={() => open(item.name)}>
          Записаться
        </PrimaryButton>
      </div>
    </div>
  )
}
