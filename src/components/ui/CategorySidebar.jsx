import { Link } from 'react-router-dom'

export default function CategorySidebar({ categories, activeSlug }) {
  return (
    <nav aria-label="Категории услуг" className="rounded-card border border-line bg-white p-2">
      <Link
        to="/uslugi"
        className={[
          'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
          !activeSlug ? 'bg-teal-light text-teal-deep' : 'text-ink hover:bg-paper',
        ].join(' ')}
      >
        Все услуги
      </Link>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              to={`/uslugi/${category.slug}`}
              className={[
                'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                activeSlug === category.slug ? 'bg-teal-light text-teal-deep' : 'text-ink hover:bg-paper',
              ].join(' ')}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
