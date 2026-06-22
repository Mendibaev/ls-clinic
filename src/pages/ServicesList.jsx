import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import CategorySidebar from '../components/ui/CategorySidebar.jsx'
import LinkCard from '../components/ui/LinkCard.jsx'
import AppointmentForm from '../components/ui/AppointmentForm.jsx'
import { serviceCategories } from '../data/services.js'

export default function ServicesList() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Услуги' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Услуги</h1>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <CategorySidebar categories={serviceCategories} activeSlug={null} />

        <div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => (
              <LinkCard
                key={category.slug}
                to={`/uslugi/${category.slug}`}
                title={category.name}
                summary={category.summary}
              />
            ))}
          </div>

          <div className="mt-10 max-w-md rounded-card border border-line bg-white p-6">
            <h2 className="mb-4 font-display text-lg text-ink">Запишитесь на прием!</h2>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  )
}
