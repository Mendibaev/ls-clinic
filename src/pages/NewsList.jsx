import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import NewsCard from '../components/ui/NewsCard.jsx'
import { news } from '../data/schedule.js'

export default function NewsList() {
  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Инфоцентр' }]} />
      <h1 className="mb-6 font-display text-3xl text-ink">Инфоцентр</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.slug} to={`/infocentr/${item.slug}`} title={item.title} excerpt={item.excerpt} />
        ))}
      </div>
    </div>
  )
}
