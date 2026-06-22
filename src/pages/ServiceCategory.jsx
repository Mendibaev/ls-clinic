import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import CategorySidebar from '../components/ui/CategorySidebar.jsx'
import PriceListItem from '../components/ui/PriceListItem.jsx'
import AppointmentForm from '../components/ui/AppointmentForm.jsx'
import { serviceCategories, serviceItemsByCategory } from '../data/services.js'

export default function ServiceCategory() {
  const { slug } = useParams()
  const category = serviceCategories.find((c) => c.slug === slug)
  const items = serviceItemsByCategory[slug] || []

  if (!category) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Категория не найдена</p>
        <Link to="/uslugi" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к услугам
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Breadcrumbs
        items={[{ label: 'Главная', href: '/' }, { label: 'Услуги', href: '/uslugi' }, { label: category.name }]}
      />
      <h1 className="mb-6 font-display text-3xl text-ink">{category.name}</h1>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <CategorySidebar categories={serviceCategories} activeSlug={slug} />

        <div>
          {items.length === 0 ? (
            <p className="rounded-card border border-dashed border-line bg-white p-6 text-sm text-muted">
              Прайс-лист для этой категории уточняется. Оставьте заявку — администратор свяжется с вами и
              подскажет актуальные цены.
            </p>
          ) : (
            <div className="rounded-card border border-line bg-white px-5">
              {items.map((item) => (
                <PriceListItem
                  key={item.slug}
                  to={`/uslugi/${slug}/${item.slug}`}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          )}

          <div className="mt-10 max-w-md rounded-card border border-line bg-white p-6">
            <h2 className="mb-4 font-display text-lg text-ink">Запишитесь на прием!</h2>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  )
}
