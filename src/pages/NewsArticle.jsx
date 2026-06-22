import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import { news } from '../data/schedule.js'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = news.find((n) => n.slug === slug)

  if (!article) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Новость не найдена</p>
        <Link to="/infocentr" className="mt-4 inline-block text-teal hover:underline">
          Вернуться в Инфоцентр
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Инфоцентр', href: '/infocentr' }, { label: article.title }]} />
      <article className="max-w-2xl">
        <p className="mb-2 text-sm text-muted">{article.publishedAt}</p>
        <h1 className="mb-6 font-display text-3xl text-ink">{article.title}</h1>
        <div className="mb-6 flex h-56 items-center justify-center rounded-card bg-teal-light">
          <span className="font-display text-3xl text-teal/40">LS</span>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-ink">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
