import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import PriceListItem from '../components/ui/PriceListItem.jsx'
import AppointmentForm from '../components/ui/AppointmentForm.jsx'
import { analizyCategories } from '../data/analizy.js'

export default function Analizy() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Анализы' }]} />
      <h1 className="mb-2 font-display text-3xl text-ink">Анализы</h1>
      <p className="mb-6 max-w-xl text-sm text-muted">
        Прайс-лист лабораторной диагностики по категориям. Используйте быстрые ссылки, чтобы перейти к нужному разделу.
      </p>

      <nav aria-label="Категории анализов" className="mb-8 flex flex-wrap gap-2">
        {analizyCategories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-ink hover:border-teal hover:text-teal"
          >
            {cat.name}
          </a>
        ))}
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {analizyCategories.map((cat) => (
            <section key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <h2 className="mb-3 font-display text-xl text-ink">{cat.name}</h2>
              <div className="rounded-card border border-line bg-white px-5">
                {cat.items.map((item) => (
                  <PriceListItem key={item.slug} name={item.name} price={item.price} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="h-fit rounded-card border border-line bg-white p-6">
          <h2 className="mb-4 font-display text-lg text-ink">Запишитесь на прием!</h2>
          <AppointmentForm />
        </div>
      </div>
    </div>
  )
}
